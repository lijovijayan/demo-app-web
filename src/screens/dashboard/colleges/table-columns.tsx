import React from 'react'
import { Table, Tag } from 'antd'

const { Column } = Table

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
            <Column
                title="Country"
                dataIndex="country"
                key="country"
                render={(country) => <>{country?.name}</>}
            />
            <Column
                title="State"
                dataIndex="state"
                key="state"
                render={(state) => <>{state?.name}</>}
            />
            <Column
                title="City"
                dataIndex="city"
                key="city"
                render={(city) => <>{city?.name}</>}
            />
            <Column
                title="cources"
                dataIndex="cources"
                key="cources"
                render={(cources) => (
                    <>
                        {cources.map((cource: any) => (
                            <Tag color="blue" key={cource.id}>
                                {cource.name}
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

export default renderColumns