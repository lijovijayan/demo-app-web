import React from 'react'
import { Line } from 'react-chartjs-2'
interface Props {
    data?: any
}
export function LineChart({ data }: Props) {
    return (
        <div>
            <Line
                data={{
                    labels: [
                        'January',
                        'February',
                        'March',
                        'April',
                        'May',
                        'June',
                        'July'
                    ],
                    datasets: [
                        {
                            label: 'Dataset 1',
                            data: [867, 474, 94, 836, -895, 503, 236],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.5)'
                        },
                        {
                            label: 'Dataset 2',
                            data: [214, -402, 723, 484, 237, -216, -219],
                            borderColor: 'rgb(53, 162, 235)',
                            backgroundColor: 'rgba(53, 162, 235, 0.5)'
                        }
                    ]
                }}
            ></Line>
        </div>
    )
}
