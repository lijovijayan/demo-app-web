import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import randomColor from 'randomcolor'
import { ICollegeObject } from '../../../types'
import { subString } from '../../../utils'
import { useChartUpdate } from '../../../hooks'

interface Props {
    state: number
    colleges: ICollegeObject[]
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

function formatData(data: ICollegeObject[], state: number): IDoughnutChartData {
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
        if (_college.state.id !== state) return true
        const color = randomColor({
            format: 'rgb'
        })
        const colorWithOpacity = `rgba(${subString(color, '(', ')')}, 0.2)`
        const index = records.labels.findIndex(
            (_label) => _college.city.name === _label
        )
        if (index >= 0) {
            records.datasets[0].data[index] += 1
        } else {
            records.labels.push(_college.city.name)
            records.datasets[0].ids.push(_college.city.id)
            records.datasets[0].data.push(1)
            records.datasets[0].backgroundColor.push(colorWithOpacity)
            records.datasets[0].borderColor.push(color)
        }
    })
    return records
}

const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
        title: {
            text: 'Cities',
            // color: 'red',
            display: true,
            padding: 3,
            font: {
                weight: 'normal'
            }
        }
        // legend: {
        //     display: false
        // }
    }
}
export function CitiesDaughnutChart({ state, colleges }: Props) {
    const chartRef = useChartUpdate()
    const [data, setData] = useState<IDoughnutChartData>({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        setData(formatData(colleges, state))
    }, [colleges, state])
    return (
        <Doughnut
            ref={(_ref) => chartRef.current}
            data={data}
            options={options}
        ></Doughnut>
    )
}
