import React from 'react'
import { Input, Form } from 'antd'
import {
    CountrySelect,
    StateSelect,
    CitySelect,
    CourceSelect
} from '../../../components'
import {} from 'antd/lib/form/Form'
import { ICollegeFilterForm } from '../../../types'
import { COLLEGE_FILTER_FORM_CONTROL } from '../../../constants'

const { Search } = Input

interface Props {
    onChange: (filter: ICollegeFilterForm) => void
}

const { useForm, Item } = Form
function Filters({ onChange }: Props) {
    const [form] = useForm<ICollegeFilterForm>()
    function onSearch(searchKey: string) {
        console.log(searchKey)
    }
    function onValuesChange(
        _: Partial<ICollegeFilterForm>,
        values: ICollegeFilterForm
    ) {
        onChange(values)
    }
    return (
        <Form
            form={form}
            className="filter-container"
            onValuesChange={onValuesChange}
        >
            <Item name={[COLLEGE_FILTER_FORM_CONTROL.SEARCH_KEY]}>
                <Search
                    placeholder="student name"
                    onSearch={onSearch}
                    allowClear
                />
            </Item>
            <Item name={[COLLEGE_FILTER_FORM_CONTROL.COUNTRY]}>
                <CountrySelect />
            </Item>
            <Item name={[COLLEGE_FILTER_FORM_CONTROL.STATE]}>
                <StateSelect />
            </Item>
            <Item name={[COLLEGE_FILTER_FORM_CONTROL.CITY]}>
                <CitySelect />
            </Item>
            <Item name={[COLLEGE_FILTER_FORM_CONTROL.COURCE]}>
                <CourceSelect />
            </Item>
        </Form>
    )
}

export default Filters
