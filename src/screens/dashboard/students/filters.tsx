import React from 'react'
import { Input, Form } from 'antd'
import { BatchSelect, CollegeSelect } from '../../../components'
import {} from 'antd/lib/form/Form'

const { Search } = Input
const { useForm, Item } = Form
function Filters() {
    const [form] = useForm()
    function onSearch(searchKey: string) {
        console.log(searchKey)
    }
    function onValuesChange(value: any, values: any) {
        console.log({ values })
    }
    return (
        <Form className="filter-container" onValuesChange={onValuesChange}>
            <Item name="searchKey">
                <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    style={{ width: 200 }}
                />
            </Item>
            <Item name="batch">
                <BatchSelect />
            </Item>
            <Item name="batch">
                <CollegeSelect />
            </Item>
        </Form>
    )
}

export default Filters
