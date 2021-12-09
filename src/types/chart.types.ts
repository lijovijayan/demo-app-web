export interface IDoughnutChartData {
    labels: string[]
    datasets: {
        ids?: number[]
        label: string
        data: number[]
        backgroundColor: string[]
        borderColor: string[]
        borderWidth: 1
    }[]
}

export interface ILineChartData {
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
export interface IRadarChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor: string
        borderColor: string
        borderWidth: 1
    }[]
}
export interface IBarChartData {
    labels: string[]
    datasets: {
        label: string
        data: number[]
        backgroundColor: string
    }[]
}
