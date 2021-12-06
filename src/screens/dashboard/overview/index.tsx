import { Table } from 'antd'
import { CartesianGrid, Line, LineChart, XAxis, Tooltip } from 'recharts'

const columns: any[] = [
    {
        title: 'Full Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        fixed: 'left'
    },
    {
        title: 'Column 1',
        dataIndex: 'address',
        key: '1'
    },
    {
        title: 'Column 2',
        dataIndex: 'address',
        key: '2'
    }
]

const data: any[] = []
for (let i = 0; i < 100; i++) {
    data.push({
        key: i,
        name: `Edrward ${i}`,
        age: 32,
        address: `London Park no. ${i}`
    })
}

export function Overview() {
    return (
        <div className="dashboard">
            <LineChart
                width={400}
                height={400}
                data={data}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                <XAxis dataKey="name" />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line
                    type="monotone"
                    dataKey="uv"
                    stroke="#ff7300"
                    yAxisId={0}
                />
                <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#387908"
                    yAxisId={1}
                />
            </LineChart>
            <Table columns={columns} dataSource={data} />
        </div>
    )
}
