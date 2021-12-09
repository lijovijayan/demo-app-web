import { useEffect, useState } from 'react'
import { Radar } from 'react-chartjs-2'
import { CourceService } from '../../../services'
import { ICource } from '../../../types'
import randomColor from 'randomcolor'
import { subString } from '../../../utils'
import { useChartUpdate } from '../../../hooks'
import { IRadarChartData } from '../../../types/chart.types'

function formatData(data: ICource[]): IRadarChartData {
    const color = randomColor({
        format: 'rgb'
    })
    const colorWithOpacity = `rgba(${subString(color, '(', ')')}, 0.2)`
    const records: IRadarChartData = {
        labels: [],
        datasets: [
            {
                label: 'Countries',
                data: [],
                backgroundColor: colorWithOpacity,
                borderColor: color,
                borderWidth: 1
            }
        ]
    }

    data.forEach((_cource) => {
        records.labels.push(_cource.name)
        records.datasets[0].data.push(_cource.colleges.length)
    })

    return records
}

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            display: false
        },
        title: {
            text: 'Number of colleges offering specific cources',
            display: true,
            padding: 3,
            font: {
                weight: "normal"
            }
        }
    }
}

export function CourcesRadarChart() {
    const chartRef = useChartUpdate()
    const [data, setData] = useState<IRadarChartData>({
        labels: [],
        datasets: []
    })

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const courceService = new CourceService()
        const _cources: ICource[] = await courceService.getCources()
        setData(formatData(_cources))
    }

    return (
        <Radar
            ref={(_ref) => (chartRef.current = _ref)}
            data={data}
            options={options}
            style={{ width: '100%', height: '100%' }}
        ></Radar>
    )
}
