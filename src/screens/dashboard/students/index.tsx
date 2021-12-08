import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { STUDENT_FILTER_FORM_CONTROL } from '../../../constants'
import { StudentService } from '../../../services'
import {
    IFStudent,
    IPaginatedResponse,
    IPagination,
    IStudentObject,
    IStudentFilterForm
} from '../../../types'
import Filters from './filters'
import renderColumns from './table-columns'

export function Students() {
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

    function onFilterChange(filter: IStudentFilterForm) {
        const searchFilter: IFStudent = {
            pagination: {
                ...pagination,
                page: 1,
                searchKey: filter[STUDENT_FILTER_FORM_CONTROL.SEARCH_KEY]
            },
            college_id: filter[STUDENT_FILTER_FORM_CONTROL.COLLEGE],
            skills: filter[STUDENT_FILTER_FORM_CONTROL.SKILL]
                ? [filter[STUDENT_FILTER_FORM_CONTROL.SKILL]]
                : undefined,
            year_of_batch: filter[STUDENT_FILTER_FORM_CONTROL.BATCH]
        }
        fetchStudents(searchFilter)
    }

    async function fetchStudents(filter: IFStudent) {
        filter.pagination.totalRecords = undefined
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

    return (
        <div className="students">
            <Filters onChange={onFilterChange} />
            <Table
                pagination={{
                    onChange: onPageChange,
                    total: pagination.totalRecords,
                    pageSize: pagination.pageSize,
                    current: pagination.page,
                    showQuickJumper: true,
                    pageSizeOptions: ['10', '20', '50']
                }}
                loading={
                    loading && {
                        indicator: <div className="loading-animation"></div>
                    }
                }
                scroll={{
                    y: 'calc(100vh - 285px)',
                    x: 'fit-content'
                }}
                dataSource={students}
            >
                {renderColumns()}
            </Table>
        </div>
    )
}
