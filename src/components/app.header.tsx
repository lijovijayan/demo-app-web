import '../styles/component.styles/app.header.scss'
import { Breadcrumb, Button, PageHeader } from 'antd'

export function AppHeader() {
    return (
        <div className="app-header">
            <PageHeader
                className="site-page-header"
                title={
                    <Breadcrumb className="app-breadcrumb">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application Center</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>
                            <a href="">Application List</a>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item>An Application</Breadcrumb.Item>
                    </Breadcrumb>
                }
                extra={[
                    <Button key="3">PRINT</Button>,
                    <Button key="2">EXPORT</Button>,
                ]}
            ></PageHeader>
        </div>
    )
}
