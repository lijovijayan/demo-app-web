import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { SkillService } from '../../../services'
import { ISkill } from '../../../types'
import randomColor from 'randomcolor'
import { subString } from '../../../utils'

interface Props {
    data?: any
}
interface IBarChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor: string
    }[]
}

function formatData(data: ISkill[]): IBarChartData {
    const records: IBarChartData = {
        labels: [],
        datasets: [
            {
                label: 'Skills',
                data: [],
                backgroundColor: randomColor({
                    format: 'rgb'
                })
            }
        ]
    }
    data.forEach((_cource) => {
        records.labels.push(_cource.name)
        records.datasets[0].data.push(_cource.students.length)
    })
    return records
}

const options = {
    plugins: {
        legend: {
            display: false
        }
    }
}
export function SkillsBarChart() {
    const [data, setData] = useState<IBarChartData>({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const skillService = new SkillService()
        const skills: ISkill[] = await skillService.getSkills()
        console.log(formatData(skills))
        setData(formatData(skills))
    }
    return (
        <div>
            <Bar data={data} options={options}></Bar>
        </div>
    )
}
