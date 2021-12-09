import { SkillsBarChart } from '../charts/skills.bar'
import { NumberOfStudentsAndCollegesLineChart } from '../charts/college-skills.line'
import { CourcesRadarChart } from '../charts/cources.radar'
import { CountriesDaughnutChart } from '../charts/countries.doughnut'
import { useEffect, useState } from 'react'
import { StatesDaughnutChart } from '../charts/states.doughnut'
import { CitiesDaughnutChart } from '../charts/cities.doughnut'
import { CollegeService } from '../../../services'
import { ICollegeObject } from '../../../types'

export interface IDashboardLocation {
    country: number
    state: number
}

export function Overview() {
    const [colleges, setColleges] = useState<ICollegeObject[]>([])
    const [loading, setLoader] = useState<boolean>(true)
    const [location, setLocation] = useState<IDashboardLocation>({
        country: 0,
        state: 0
    })

    useEffect(() => {
        fetchData()
    }, [])

    async function fetchData() {
        const collegeService = new CollegeService()
        const colleges: ICollegeObject[] = await collegeService.getColleges()
        setColleges(colleges)
    }

    function onLocationChange(_location: Partial<IDashboardLocation>) {
        setLocation({
            ...location,
            ..._location
        })
    }

    const { country, state } = location

    function renderCountries() {
        return (
            <div>
                    <CountriesDaughnutChart
                        country={country}
                        colleges={colleges}
                        onCountryChange={(id) =>
                            onLocationChange({ country: id, state: 0 })
                        }
                    />
            </div>
        )
    }

    function renderStates() {
        return (
            <div>
                <StatesDaughnutChart
                    state={state}
                    country={country}
                    colleges={colleges}
                    onStateChange={(id) => onLocationChange({ state: id })}
                />
            </div>
        )
    }

    function renderCities() {
        return (
            <div>
                <CitiesDaughnutChart colleges={colleges} state={state} />
            </div>
        )
    }

    function renderCources() {
        return (
            <div>
                <CourcesRadarChart />
            </div>
        )
    }

    function renderSkills() {
        return (
            <div>
                <SkillsBarChart />
            </div>
        )
    }
    
    function renderColleges() {
        return (
            <div>
                <NumberOfStudentsAndCollegesLineChart
                    setLoader={setLoader}
                    colleges={colleges}
                />
            </div>
        )
    }
    
    return (
        <div
            className={`overview ${
                loading ? 'charts-loading' : 'charts-loaded'
            }`}
        >
            {renderCountries()}
            {renderStates()}
            {renderCities()}
            {renderCources()}
            {renderSkills()}
            {renderColleges()}
            <div className="loading-layer">
                <div className="loading-animation"></div>
            </div>
        </div>
    )
}
