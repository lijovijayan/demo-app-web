import React, { useEffect, useRef, useState } from 'react'
import { Input, Form } from 'antd'
import {
    BatchSelect,
    CollegeSelect,
    CourceSelect,
    SearchBox,
    SkillSelect
} from '../../../components'
import {} from 'antd/lib/form/Form'
import { IStudentFilterForm } from '../../../types'
import { STUDENT_FILTER_FORM_CONTROL } from '../../../constants'

const { Search } = Input

interface Props {
    onChange: (filter: IStudentFilterForm) => void
}

const { useForm, Item } = Form

function Filters({ onChange }: Props) {
    const [form] = useForm<IStudentFilterForm>()

    function onValuesChange(
        _: Partial<IStudentFilterForm>,
        values: IStudentFilterForm
    ) {
        onChange(values)
    }

    return (
        <Form
            form={form}
            className="filter-container"
            onValuesChange={onValuesChange}
        >
            <Item name={[STUDENT_FILTER_FORM_CONTROL.SEARCH_KEY]}>
                <SearchBox placeholder="student name" allowClear />
            </Item>
            <Item name={[STUDENT_FILTER_FORM_CONTROL.BATCH]}>
                <BatchSelect />
            </Item>
            <Item name={[STUDENT_FILTER_FORM_CONTROL.COLLEGE]}>
                <CollegeSelect />
            </Item>
            <Item name={[STUDENT_FILTER_FORM_CONTROL.COURCE]}>
                <CourceSelect />
            </Item>
            <Item name={[STUDENT_FILTER_FORM_CONTROL.SKILL]}>
                <SkillSelect />
            </Item>
        </Form>
    )
}

export default Filters

