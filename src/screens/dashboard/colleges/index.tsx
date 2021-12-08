import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { COLLEGE_FILTER_FORM_CONTROL } from '../../../constants'
import { CollegeService } from '../../../services'
import {
    IPaginatedResponse,
    IPagination,
    ICollegeObject,
    IFCollege,
    ICollegeFilterForm
} from '../../../types'
import Filters from './filters'
import renderColumns from './table-columns'

export function Colleges() {
    const [loading, setLoader] = useState(false)
    const [colleges, setColleges] = useState<ICollegeObject[]>([])
    const [pagination, setPagination] = useState<IPagination>({
        page: 1,
        pageSize: 10,
        orderBy: [],
        searchKey: '',
        totalRecords: 0
    })
    useEffect(() => {
        fetchColleges({ pagination })
    }, [])

    async function fetchColleges(filter: IFCollege) {
        filter.pagination.totalRecords = undefined
        setLoader(true)

        const collegeService = new CollegeService()
        const {
            data,
            pagination: _pagination
        }: IPaginatedResponse<ICollegeObject[]> =
            await collegeService.getCollegesWithFilter(filter)

        setPagination({
            ...pagination,
            ..._pagination
        })

        setColleges(data)
        setLoader(false)
    }

    function onFilterChange(filter: ICollegeFilterForm) {
        const searchFilter: IFCollege = {
            pagination: {
                ...pagination,
                page: 1,
                searchKey: filter[COLLEGE_FILTER_FORM_CONTROL.SEARCH_KEY]
            },
            country: filter[COLLEGE_FILTER_FORM_CONTROL.COUNTRY],
            state: filter[COLLEGE_FILTER_FORM_CONTROL.STATE],
            city: filter[COLLEGE_FILTER_FORM_CONTROL.CITY],
            cources: filter[COLLEGE_FILTER_FORM_CONTROL.COURCE]
                ? [filter[COLLEGE_FILTER_FORM_CONTROL.COURCE]]
                : undefined
        }
        fetchColleges(searchFilter)
    }

    function onPageChange(pageNumber: number, pageSize: number) {
        console.log({ pageNumber, pageSize })
        const _pagination = {
            ...pagination,
            page: pageNumber,
            pageSize: pageSize
        }
        fetchColleges({ pagination: _pagination })
    }
    console.log(pagination)

    return (
        <div className="colleges">
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
                loading={loading}
                scroll={{
                    y: 0
                }}
                dataSource={colleges}
            >
                {renderColumns()}
            </Table>
        </div>
    )
}
