import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, Tooltip } from 'recharts'
import { StudentService } from '../../../services'
import {
    IFStudent,
    IPaginatedResponse,
    IPagination,
    IStudent
} from '../../../types'

const columns: any[] = [
    {
        title: 'Full Name',
        dataIndex: 'name',
        key: 'name',
        fixed: 'left'
    },
    {
        title: 'year of batch',
        dataIndex: 'year_of_batch',
        key: 'year_of_batch',
        fixed: 'left'
    },
    {
        title: 'college id',
        dataIndex: 'college_id',
        key: 'college_id'
    },
    {
        title: 'skills',
        dataIndex: 'skills',
        key: 'skills'
    }
]

export function Overview() {
    const [students, setStudents] = useState<IStudent[]>([])
    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 10,
        orderBy: [],
        searchKey: '',
        totalRecords: 0
    })
    useEffect(() => {
        fetchStudents({ pagination })
    }, [])

    async function fetchStudents(filter: IFStudent) {
        const studentService = new StudentService()
        const {data, pagination: _pagination}: IPaginatedResponse<IStudent[]> =
            await studentService.getStudentsWithFilter(filter)
        setPagination({
            ...pagination,
            ..._pagination
        })
        setStudents(data)
    }
    function onPageChange(pageNumber: number, pageSize: number) {
        console.log({pageNumber, pageSize});
        const _pagination = {
            ...pagination,
            page: pageNumber,
            pageSize: pageSize
        }
        fetchStudents({ pagination: _pagination })
    }
    console.log(pagination);
    
    return (
        <div className="dashboard">
            {/* <LineChart
                width={400}
                height={400}
                data={students}
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
            </LineChart> */}
            <Table
                columns={columns}
                pagination={{
                    onChange: onPageChange,
                    total: pagination.totalRecords,
                    pageSize: pagination.pageSize,
                    current: pagination.page
                }}
                dataSource={students}
            />
        </div>
    )
}
