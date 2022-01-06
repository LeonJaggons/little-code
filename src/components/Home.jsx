import React from 'react'
import { Typography, Row } from 'antd'
import LittleCode from './LittleCode'

const { Title } = Typography

const Home = () => {
    return (
        <div
            style={{
                height: '100%',
                minHeight: '100%',
                width: '100%',
                flex: '1 0 0',
                display: 'flex',
                flexFlow: 'row nowrap',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Row>
                <Title level={1}>Welcome to </Title>
                <LittleCode big />
            </Row>
        </div>
    )
}

const DailyChallenge = () => {}

export default Home
