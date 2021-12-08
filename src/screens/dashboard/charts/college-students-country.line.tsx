import randomColor from 'randomcolor'
import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { CollegeService } from '../../../services'
import { ICollegeObject } from '../../../types'
import { getColorWithOpacity, subString } from '../../../utils'
interface Props {
    data?: any
}
interface ILineChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        borderColor: string
        backgroundColor: string
    }[]
}

const colors = []

function formatData(data: ICollegeObject[]): ILineChartData {
    const color1 = getColorWithOpacity()
    const color2 = getColorWithOpacity()
    const records: ILineChartData = {
        labels: [],
        datasets: [
            {
                backgroundColor: color1.colorWithOpacity,
                borderColor: color1.color,
                data: [],
                label: 'colleges'
            },
            {
                backgroundColor: color2.colorWithOpacity,
                borderColor: color2.color,
                data: [],
                label: 'students'
            }
        ]
    }
    data.forEach((_college) => {
        const index = records.labels.findIndex(
            (_label) => _college.state.name === _label
        )
        if (index >= 0) {
            records.datasets[0].data[index] += 1
            records.datasets[1].data[index] += _college.students.length
        } else {
            records.labels.push(_college.state.name)
            records.datasets[0].data.push(1)
            records.datasets[1].data.push(_college.students.length)
        }
    })
    return records
}

export function NumberOfStudentsAndCollegesLineChart() {
    const [data, setData] = useState<ILineChartData>({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const collegeService = new CollegeService()
        const students: ICollegeObject[] = await collegeService.getColleges()
        console.log(formatData(students))
        setData(formatData(students))
    }
    return (
        <div>
            <Line data={data}></Line>
        </div>
    )
}
