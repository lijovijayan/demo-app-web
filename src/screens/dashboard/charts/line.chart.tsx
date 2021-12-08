import { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2'
import { CourceService } from '../../../services'
import { ICource } from '../../../types'
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

function formatData(data: ICource[]): ILineChartData {
    const records: ILineChartData = {
        labels: [],
        datasets: []
    }
    data.forEach((_cource) => {
        records.labels.push(_cource.name)
        records.datasets.push({
            backgroundColor: 'red',
            borderColor: 'red',
            data: _cource.colleges,
            label: _cource.name
        })
    })
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
        const courceService = new CourceService()
        const _cources: ICource[] = await courceService.getCources()
        console.log(formatData(_cources));
        setData(formatData(_cources))
    }
    return (
        <div>
            <Line data={data}></Line>
        </div>
    )
}
