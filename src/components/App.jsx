import React from 'react'
import { Typography, Layout, Row, Col, Menu, Avatar, Progress, Steps } from 'antd'
import {
    AiOutlineBook,
    AiOutlineCode,
    AiOutlineCodepen,
    AiOutlineHome,
    AiOutlineRadarChart,
    AiOutlineCompass,
    AiOutlineFlag,
    AiOutlineBell,
    AiOutlineInbox,
} from 'react-icons/ai'
import PerfectScrollbar from 'react-perfect-scrollbar'
import LCSider from './LCSider'
import Home from './Home.jsx'
import LittleCode from './LittleCode'
import News from './News'
import Challenges from './Challenges'

const { Header, Content, Sider } = Layout
const { Title } = Typography

const App = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <AppHeader />
            <Layout style={{ height: '100%' }}>
                <AppContent />
            </Layout>
        </Layout>
    )
}

const AppHeader = () => (
    <Header style={{ padding: '0 15px', height: '68px' }}>
        <Row style={{ height: '100%' }} align="middle" justify={'space-between'}>
            <LittleCode />
            <Row style={{ flex: '1 0 0', height: '100%' }} justify="center">
                <AppMenu />
            </Row>
            <AppNotifications />
        </Row>
    </Header>
)

const AppNotifications = () => (
    <Menu mode={'horizontal'} theme="dark">
        <Menu.Item icon={<AiOutlineBell />}>Alerts</Menu.Item>
        <Menu.Item icon={<AiOutlineInbox />}>Messages</Menu.Item>
        <Menu.Item icon={<AiOutlineFlag />}>Help</Menu.Item>
    </Menu>
)

const AppContent = () => (
    <Content
        style={{
            minHeight: '100%',
            padding: 20,
            backgroundColor: '#f5f5f5',
            display: 'flex',
            flexFlow: 'column nowrap',
        }}
    >
        <Challenges />
    </Content>
)

const AppMenu = () => {
    const toMenuItem = (miTitle, miKey, miIcon) => {
        return { title: miTitle, key: miKey, icon: miIcon }
    }

    const menuItems = [
        toMenuItem('Home', 'HOME', <AiOutlineHome />),
        toMenuItem('News', 'NEWS', <AiOutlineFlag />),
        toMenuItem('Quests', 'QUESTS', <AiOutlineCompass />),
        toMenuItem('Challenges', 'Challenges', <AiOutlineCodepen />),
        toMenuItem('Learning', 'LEARNING', <AiOutlineBook />),
        toMenuItem('Leaderboard', 'LEADERBOARDS', <AiOutlineRadarChart />),
    ]
    return (
        <Menu mode={'horizontal'} theme={'dark'} style={{ height: '100%' }} inlineCollapsed={false}>
            {menuItems.map((item) => (
                <Menu.Item icon={item.icon} key={item.key}>
                    {item.title}
                </Menu.Item>
            ))}
        </Menu>
    )
}

const QuestInfo = () => {
    return (
        <div>
            <Row>
                <Title level={5}>Description</Title>
            </Row>
            <Row style={{ marginBottom: '18px' }}>
                Non laboris elit anim incididunt ea laborum aliquip proident eiusmod tempor
                consectetur reprehenderit deserunt tempor. Incididunt consectetur eiusmod commodo
                consequat excepteur irure culpa duis ullamco.
            </Row>
            <Row>
                <Title level={5}>Tasks</Title>
            </Row>
            <Row
                style={{ marginBottom: '18px', width: '100%' }}
                align={'middle'}
                justify={'center'}
            >
                <Steps current={1} size={'small'} direction={'vertical'}>
                    <Steps.Step title={'Task 1'} description={'Description'} />
                    <Steps.Step title={'Task 2'} description={'Description'} />
                    <Steps.Step title={'Task 3'} description={'Description'} />
                </Steps>
            </Row>
            <Row>
                <Title level={5}>Progress</Title>
            </Row>
            <Row>
                <Progress percent={65} status={'active'}></Progress>
            </Row>
        </div>
    )
}

export default App
