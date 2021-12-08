import { LineChart } from '../charts/line.chart'
import { CourcesChart } from '../charts/cources'
import { SkillsDoughnutChart } from '../charts/skills.doughnut'
import { SkillsBarChart } from '../charts/skills.bar'
import { NumberOfStudentsAndCollegesLineChart } from '../charts/college-students-country.line'

export function Overview() {
    return (
        <div className="overview">
            <div className="flex flex-row">
                <LineChart />
                <CourcesChart />
                <SkillsDoughnutChart />
            </div>
            <div className="flex flex-row">
                <SkillsBarChart />
                <NumberOfStudentsAndCollegesLineChart />
            </div>
        </div>
    )
}
