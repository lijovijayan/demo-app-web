import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { StudentService } from '../../../services'
import {
    IFStudent,
    IPaginatedResponse,
    IPagination,
    IStudent
} from '../../../types'
import Filters from './filters'
import columns from './table-columns'

export function Students() {
    const [loading, setLoader] = useState(false)
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
        setLoader(true)
        const studentService = new StudentService()
        const {
            data,
            pagination: _pagination
        }: IPaginatedResponse<IStudent[]> =
            await studentService.getStudentsWithFilter(filter)
        setPagination({
            ...pagination,
            ..._pagination
        })
        setStudents(data)
        setLoader(false)
    }
    function onPageChange(pageNumber: number, pageSize: number) {
        console.log({ pageNumber, pageSize })
        const _pagination = {
            ...pagination,
            page: pageNumber,
            pageSize: pageSize
        }
        fetchStudents({ pagination: _pagination })
    }

    return (
        <div className="overview">
            <Filters />
            <Table
                columns={columns}
                pagination={{
                    onChange: onPageChange,
                    total: pagination.totalRecords,
                    pageSize: pagination.pageSize,
                    current: pagination.page,
                    showQuickJumper: true,
                    pageSizeOptions: ['10', '20', '50']
                }}
                loading={loading}
                scroll={{
                    y: 0,
                    x: 0,
                }}
                dataSource={students}
            />
        </div>
    )
}
