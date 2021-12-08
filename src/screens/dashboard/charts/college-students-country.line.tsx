import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { SkillService } from '../../../services'
import { ICollegeObject, ISkill } from '../../../types'
import { getColorWithOpacity } from '../../../utils'
interface Props {
    colleges: ICollegeObject[]
    setLoader: (loading: boolean) => void
}
interface ILineChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        id: number
        borderColor: string
        backgroundColor: string
        lineTension: number
    }[]
}

function formatData(
    colleges: ICollegeObject[],
    skills: ISkill[]
): ILineChartData {
    const labels = colleges.map((_college) => _college.name)
    const datasets = skills.map((skill, i) => {
        const colors = getColorWithOpacity()
        return {
            backgroundColor: colors.colorWithOpacity,
            borderColor: colors.color,
            data: labels.map((_) => 0),
            id: skill.id,
            label: skill.name,
            lineTension: 0.5
        }
    })
    const records: ILineChartData = {
        labels: labels,
        datasets: datasets
    }
    colleges.forEach((_college, collegeIndex) => {
        _college.students.forEach((_student) => {
            skills.forEach((_skill, skillIndex) => {
                if (_skill.students.includes(_student)) {
                    records.datasets[skillIndex].data[collegeIndex] += 1
                }
            })
        })
    })
    return records
}

export function NumberOfStudentsAndCollegesLineChart({
    colleges,
    setLoader
}: Props) {
    const [skills, setSkills] = useState<ISkill[]>([])
    const [data, setData] = useState<ILineChartData>({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        if (colleges.length > 0 && skills.length > 0) {
            setData(formatData(colleges, skills))
        }
    }, [colleges, skills])

    async function fetchData() {
        setLoader(true)
        const skillService = new SkillService()
        const _skills: ISkill[] = await skillService.getSkills()
        setSkills(_skills)
        setLoader(false)
    }
    return (
        <Line
            options={{
                maintainAspectRatio: false,
                scales: {
                    x: {
                        ticks: {
                            callback: function (value, index, values) {
                                return index + 1
                            }
                        }
                    }
                }
            }}
            data={data}
        ></Line>
    )
}
