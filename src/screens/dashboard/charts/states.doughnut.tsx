import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import randomColor from 'randomcolor'
import { ICollegeObject } from '../../../types'
import { subString } from '../../../utils'

interface Props {
    country: number
    state: number
    colleges: ICollegeObject[]
    onStateChange: (state: number) => void
}

interface IDoughnutChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        ids: number[]
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: 1
    }[]
}

function formatData(
    data: ICollegeObject[],
    country: number
): IDoughnutChartData {
    const records: IDoughnutChartData = {
        labels: [],
        datasets: [
            {
                label: 'Countries',
                data: [],
                ids: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            }
        ]
    }
    data.forEach((_college) => {
        if (_college.country.id !== country) return true
        const color = randomColor({
            format: 'rgb'
        })
        const colorWithOpacity = `rgba(${subString(color, '(', ')')}, 0.2)`
        const index = records.labels.findIndex(
            (_label) => _college.state.name === _label
        )
        if (index >= 0) {
            records.datasets[0].data[index] += 1
        } else {
            records.labels.push(_college.state.name)
            records.datasets[0].ids.push(_college.state.id)
            records.datasets[0].data.push(1)
            records.datasets[0].backgroundColor.push(colorWithOpacity)
            records.datasets[0].borderColor.push(color)
        }
    })
    return records
}
export function StatesDaughnutChart({
    country,
    onStateChange,
    colleges,
    state
}: Props) {
    const [data, setData] = useState<IDoughnutChartData>({
        labels: [],
        datasets: []
    })

    const options = {
        
        maintainAspectRatio: false,
        onClick: (e: any, item: any) => {
            const datasetIndex = item?.[0]?.datasetIndex
            const index = item?.[0]?.index
            if (index >= 0 && datasetIndex >= 0) {
                const countryId: number = data.datasets[datasetIndex].ids[index]
                onStateChange(countryId)
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }

    useEffect(() => {
        const _data = formatData(colleges, country)
        setData(_data)
        if (state <= 0 && _data.datasets[0].data.length > 0) {
            onStateChange(_data.datasets[0].ids[0])
        }
    }, [colleges, country])

    return <Doughnut data={data} options={options}></Doughnut>
}
