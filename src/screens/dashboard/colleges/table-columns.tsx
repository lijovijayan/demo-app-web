import React from 'react'
import { Table, Tag } from 'antd'

const { Column } = Table

export default renderColumns
function renderColumns() {
    return (
        <>
            <Column
                title="Full Name"
                dataIndex="name"
                key="name"
                fixed={'left'}
            />
            <Column
                title="Year Founded"
                dataIndex="year_founded"
                key="year_founded"
            />
            <Column title="City" dataIndex="city" key="city" />
            <Column title="State" dataIndex="state" key="state" />
            <Column title="Country" dataIndex="country" key="country" />
            <Column
                title="cources"
                dataIndex="cources"
                key="cources"
                render={(cources) => (
                    <>
                        {cources.map((cource: any) => (
                            <Tag color="blue" key={cource}>
                                {cource}
                            </Tag>
                        ))}
                    </>
                )}
            />
            <Column
                title="Number of Students"
                dataIndex="students"
                key="students"
                render={(students) => <>{students.length}</>}
            />
        </>
    )
}
