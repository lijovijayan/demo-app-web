import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import { SkillService } from '../../../services'
import { ISkill } from '../../../types'
import randomColor from 'randomcolor'
import { subString } from '../../../utils'
import { useChartUpdate } from '../../../hooks'

interface Props {
    data?: any
}
interface IDoughnutChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: 1
    }[]
}

function formatData(data: ISkill[]): IDoughnutChartData {
    const records: IDoughnutChartData = {
        labels: [],
        datasets: [
            {
                label: 'Countries',
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            }
        ]
    }
    data.forEach((_cource) => {
        const color = randomColor({
            format: 'rgb'
        })
        const colorWithOpacity = `rgba(${subString(color, '(', ')')}, 0.2)`
        records.labels.push(_cource.name)
        records.datasets[0].data.push(_cource.students.length)
        records.datasets[0].backgroundColor.push(colorWithOpacity)
        records.datasets[0].borderColor.push(color)
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
            text: 'Skills',
            // color: 'red',
            display: true,
            padding: 3,
            font: {
                weight: "normal"
            }
        }
    }
}
export function SkillsDoughnutChart() {
    const chartRef = useChartUpdate()
    const [data, setData] = useState<IDoughnutChartData>({
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
        <Doughnut
            ref={(_ref) => (chartRef.current = _ref)}
            data={data}
            options={options}
        ></Doughnut>
    )
}
