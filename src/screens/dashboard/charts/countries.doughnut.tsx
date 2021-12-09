import { useEffect, useState } from 'react'
import { Doughnut } from 'react-chartjs-2'
import randomColor from 'randomcolor'
import { ICollegeObject } from '../../../types'
import { subString } from '../../../utils'
import { Tooltip } from 'antd'
import { AiOutlineExclamationCircle } from 'react-icons/ai'
import Cookies from 'universal-cookie'
import { useChartUpdate } from '../../../hooks'

interface Props {
    country: number
    onCountryChange: (country: number) => void
    colleges: ICollegeObject[]
}

interface IDoughnutChartData {
    labels: string[]
    datasets: {
        ids: number[]
        label: string
        data: number[]
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: 1
    }[]
}

function formatData(data: ICollegeObject[]): IDoughnutChartData {
    const records: IDoughnutChartData = {
        labels: [],
        datasets: [
            {
                label: 'Countries',
                ids: [],
                data: [],
                backgroundColor: [],
                borderColor: [],
                borderWidth: 1
            }
        ]
    }
    data.forEach((_college) => {
        const color = randomColor({
            format: 'rgb'
        })
        const colorWithOpacity = `rgba(${subString(color, '(', ')')}, 0.2)`
        const index = records.labels.findIndex(
            (_label) => _college.country.name === _label
        )
        if (index >= 0) {
            records.datasets[0].data[index] += 1
        } else {
            records.labels.push(_college.country.name)
            records.datasets[0].ids.push(_college.country.id)
            records.datasets[0].data.push(1)
            records.datasets[0].backgroundColor.push(colorWithOpacity)
            records.datasets[0].borderColor.push(color)
        }
    })
    return records
}
export function CountriesDaughnutChart({
    onCountryChange,
    colleges,
    country
}: Props) {
    const chartRef = useChartUpdate()
    const [indicator, setIndicator] = useState<boolean>(false)
    const [data, setData] = useState<IDoughnutChartData>({
        labels: [],
        datasets: []
    })
    useEffect(() => {
        const cookies = new Cookies()
        const showIndicator = 0 !== +cookies.get('hideIndicator')
        console.log(showIndicator, {
            hideIndicator: cookies.get('hideIndicator')
        })
        setIndicator(showIndicator)
    }, [])

    function removeIndicator() {
        const cookies = new Cookies()
        cookies.set('hideIndicator', 0, { path: '/' })
        setIndicator(false)
    }

    useEffect(() => {
        const _data = formatData(colleges)
        setData(_data)
        if (country <= 0 && _data.datasets[0].data.length > 0) {
            onCountryChange(_data.datasets[0].ids[0])
        }
    }, [colleges])

    const options = {
        responsive: true,
        onClick: (e: any, item: any) => {
            const datasetIndex = item?.[0]?.datasetIndex
            const index = item?.[0]?.index
            if (index >= 0 && datasetIndex >= 0) {
                const countryId: number = data.datasets[datasetIndex].ids[index]
                countryId !== country && onCountryChange(countryId)
                indicator && removeIndicator()
            }
        },
        maintainAspectRatio: false,
        plugins: {
            title: {
                text: 'Countries',
                display: true,
                padding: 3,
                font: {
                    weight: "normal"
                }
            }
        }
    }

    return (
        <>
            <Doughnut
                ref={(_ref) => (chartRef.current = _ref)}
                data={data}
                options={options}
            >
            </Doughnut>

            {indicator && (
                <Tooltip
                placement="left"
                    title="click on each sections to filter states and cities"
                    color={'#34dba1'}
                >
                    <div className="feature-indicator-wrapper blink">
                        <AiOutlineExclamationCircle />
                    </div>
                </Tooltip>
            )}
        </>
    )
}
