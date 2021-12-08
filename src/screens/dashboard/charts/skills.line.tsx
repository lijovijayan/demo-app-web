import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { StudentService } from '../../../services'
import { IStudentObject } from '../../../types'
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

function formatData(data: IStudentObject[]): ILineChartData {
    const records: ILineChartData = {
        labels: [],
        datasets: []
    }
    // data.forEach((_student) => {
    //     const index = records.labels.findIndex(_label => _student.skills.some(_skill => _skill.name === _label))
    //     if(index >= 0) {
    //         records.datasets[index].data.push(_student.)
    //     } else {

    //     }
    //     records.labels.push(_student.name)
    //     records.datasets.push({
    //         backgroundColor: 'red',
    //         borderColor: 'red',
    //         data: _student.colleges,
    //         label: _student.name
    //     })
    // })
    return records
}

export function LineChart() {
    const [data, setData] = useState<ILineChartData>({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const studentService = new StudentService()
        const students: IStudentObject[] = await studentService.getStudents()
        console.log(formatData(students));
        setData(formatData(students))
    }
    return (
        <div>
            <Line data={data}></Line>
        </div>
    )
}
