import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { CollegeService } from '../../../services'
import {
    IPaginatedResponse,
    IPagination,
    ICollege,
    IFCollege
} from '../../../types'
import renderColumns from './table-columns'

export function Colleges() {
    const [loading, setLoader] = useState(false)
    const [students, setStudents] = useState<ICollege[]>([])
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

    async function fetchStudents(filter: IFCollege) {
        setLoader(true)
        const collegeService = new CollegeService()
        const {
            data,
            pagination: _pagination
        }: IPaginatedResponse<ICollege[]> =
            await collegeService.getCollegesWithFilter(filter)
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
            <Table
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
                    y: 0
                }}
                dataSource={students}
            >
                {renderColumns()}
            </Table>
        </div>
    )
}
