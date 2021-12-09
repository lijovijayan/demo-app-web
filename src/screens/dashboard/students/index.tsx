import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { STUDENT_FILTER_FORM_CONTROL } from '../../../constants'
import { StudentService } from '../../../services'
import {
    IFStudent,
    IPaginatedResponse,
    IPagination,
    IStudentObject,
    IStudentFilterForm,
    IStudent
} from '../../../types'
import Filters from './filters'
import renderColumns from './table-columns'

export function Students() {
    const [loading, setLoader] = useState(false)
    const [filter, setFilter] = useState<Partial<IStudent>>({})
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

    function onFilterChange(_filter: IStudentFilterForm) {
        const formattedFilter = getFormattedFilter(_filter)
        const searchFilter: IFStudent = {
            pagination: {
                ...pagination,
                page: 1
            },
            ...formattedFilter
        }
        fetchStudents(searchFilter)
        setFilter(formattedFilter)
    }

    function getFormattedFilter(
        _filter: IStudentFilterForm
    ): Partial<IStudent> {
        return {
            name: _filter[STUDENT_FILTER_FORM_CONTROL.SEARCH_KEY],
            year_of_batch: _filter[STUDENT_FILTER_FORM_CONTROL.BATCH],
            college_id: _filter[STUDENT_FILTER_FORM_CONTROL.COLLEGE],
            skills: _filter[STUDENT_FILTER_FORM_CONTROL.SKILL]
                ? [_filter[STUDENT_FILTER_FORM_CONTROL.SKILL]]
                : undefined
        }
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
        const _pagination = {
            ...pagination,
            page: pageNumber,
            pageSize: pageSize
        }
        fetchStudents({ pagination: _pagination, ...filter })
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
