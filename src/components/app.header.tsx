import '../styles/component.styles/app.header.scss'
import { Breadcrumb, Button, PageHeader } from 'antd'

export function AppHeader() {
    return (
        <div className="app-header">
            <PageHeader
                className="site-page-header"
                title={
                    <Breadcrumb className="app-breadcrumb">
                        <Breadcrumb.Item>Oneshot</Breadcrumb.Item>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
                    </Breadcrumb>
                }
                extra={[
                    <Button disabled key="3">PRINT</Button>,
                    <Button disabled key="2">EXPORT</Button>
                ]}
            ></PageHeader>
        </div>
    )
}
