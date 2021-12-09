import { Table } from 'antd'
import { useEffect, useState } from 'react'
import { COLLEGE_FILTER_FORM_CONTROL } from '../../../constants'
import { CollegeService } from '../../../services'
import {
    IPaginatedResponse,
    IPagination,
    ICollegeObject,
    IFCollege,
    ICollegeFilterForm,
    ICollege
} from '../../../types'
import Filters from './filters'
import renderColumns from './table-columns'

export function Colleges() {
    const [loading, setLoader] = useState(false)
    const [filter, setFilter] = useState<Partial<ICollege>>({})
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

    function getFormattedFilter(
        _filter: ICollegeFilterForm
    ): Partial<ICollege> {
        return {
            name: _filter[COLLEGE_FILTER_FORM_CONTROL.SEARCH_KEY],
            country: _filter[COLLEGE_FILTER_FORM_CONTROL.COUNTRY],
            state: _filter[COLLEGE_FILTER_FORM_CONTROL.STATE],
            city: _filter[COLLEGE_FILTER_FORM_CONTROL.CITY],
            cources: _filter[COLLEGE_FILTER_FORM_CONTROL.COURCE]
                ? ([_filter[COLLEGE_FILTER_FORM_CONTROL.COURCE]] as any)
                : undefined
        }
    }

    function onFilterChange(_filter: ICollegeFilterForm) {
        const _formattedFilter = getFormattedFilter(_filter)
        const searchFilter: IFCollege = {
            pagination: {
                ...pagination,
                page: 1
            },
            ..._formattedFilter
        }
        fetchColleges(searchFilter)
        setFilter(_formattedFilter)
    }

    function onPageChange(pageNumber: number, pageSize: number) {
        const _pagination = {
            ...pagination,
            page: pageNumber,
            pageSize: pageSize
        }
        fetchColleges({
            pagination: _pagination,
            ...filter
        })
    }

    return (
        <div className="colleges">
            <Filters onChange={onFilterChange} />
            <Table
                loading={
                    loading && {
                        indicator: <div className="loading-animation"></div>
                    }
                }
                pagination={{
                    onChange: onPageChange,
                    total: pagination.totalRecords,
                    pageSize: pagination.pageSize,
                    current: pagination.page,
                    showQuickJumper: true,
                    pageSizeOptions: ['10', '20', '50']
                }}
                scroll={{
                    y: 'calc(100vh - 285px)',
                    x: 'fit-content'
                }}
                dataSource={colleges}
            >
                {renderColumns()}
            </Table>
        </div>
    )
}
