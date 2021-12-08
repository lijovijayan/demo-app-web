import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { StudentService } from '../../../services'
import {
    IFStudent,
    IPaginatedResponse,
    IPagination,
    IStudentObject
} from '../../../types'
import { LineChart } from '../charts/line.chart'
import columns from './table-columns'

export function Overview() {
    const [loading, setLoader] = useState(false)
    const [students, setStudents] = useState<IStudentObject[]>([])
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
        }: IPaginatedResponse<IStudentObject[]> =
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
    console.log(pagination)

    return (
        <div className="overview">
            <LineChart />
        </div>
    )
}
