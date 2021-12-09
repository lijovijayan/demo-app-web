import { Tabs } from 'antd'
import { IoAnalyticsOutline } from 'react-icons/io5'
import { FaUserGraduate } from 'react-icons/fa'
import { GiOrganigram } from 'react-icons/gi'
import '../../styles/screen.styles/dashboard.scss'
import { Overview } from './overview'
import { Colleges } from './colleges'
import { Students } from './students'

const { TabPane } = Tabs

export function Dashboard() {
    return (
        <div className="dashboard">
            <Tabs defaultActiveKey="1">
                <TabPane
                    tab={
                        <div className="tab-title">
                            <IoAnalyticsOutline />
                            Overview
                        </div>
                    }
                    key="1"
                >
                    <Overview />
                </TabPane>
                <TabPane
                    tab={
                        <div className="tab-title">
                            <GiOrganigram />
                            Colleges
                        </div>
                    }
                    key="2"
                >
                    <Colleges />
                </TabPane>
                <TabPane
                    tab={
                        <div className="tab-title">
                            <FaUserGraduate />
                            Students
                        </div>
                    }
                    key="3"
                >
                    <Students />
                </TabPane>
            </Tabs>
        </div>
    )
}
