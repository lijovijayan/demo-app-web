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
                title="Year of Batch"
                dataIndex="year_of_batch"
                key="year_of_batch"
            />
            <Column
                title="College"
                dataIndex="college"
                key="college"
                render={(college) => <>{college?.name}</>}
            />
            <Column
                title="skills"
                dataIndex="skills"
                key="skills"
                render={(skills) => (
                    <>
                        {skills.map((skill: any) => (
                            <Tag color="blue" key={skill}>
                                {skill.name}
                            </Tag>
                        ))}
                    </>
                )}
            />
        </>
    )
}
