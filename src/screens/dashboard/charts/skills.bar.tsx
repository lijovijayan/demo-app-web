import { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { SkillService } from '../../../services'
import { ISkill } from '../../../types'
import randomColor from 'randomcolor'
import { useChartUpdate } from '../../../hooks'
import { IBarChartData } from '../../../types/chart.types'

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

const options: any = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: {
            position: 'right'
        },
        title: {
            text: 'Number of students with specific skills',
            // color: 'red',
            display: true,
            padding: 3,
            font: {
                weight: "normal"
            }
        }
    }
}
export function SkillsBarChart() {
    const chartRef = useChartUpdate()
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
        setData(formatData(skills))
    }
    return (
        <Bar
            ref={(_ref) => (chartRef.current = _ref)}
            data={data}
            options={options}
        ></Bar>
    )
}
