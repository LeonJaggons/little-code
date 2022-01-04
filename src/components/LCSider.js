import React from 'react'
import { Avatar, Typography, Layout, Card, Row, Col, Progress, Badge, Statistic } from 'antd'
import { AiOutlineUser } from 'react-icons/ai'
import * as Icons from 'react-icons/bi'
const { Sider } = Layout
const { Title, Text } = Typography

const LCSider = () => {
    return (
        <Sider
            theme={'light'}
            width={400}
            style={{
                padding: 25,
                boxShadow: 'inset -15px 0 15px -15px #f0f0f0',
            }}
        >
            <UserDisplay />
        </Sider>
    )
}

const UserDisplay = () => {
    return (
        <>
            <Row gutter={16} align={'middle'} style={{ marginBottom: 16 }}>
                <Col flex={'0 1 0'}>
                    <Badge dot showZero status={'success'}>
                        <Avatar shape={'square'} size={64} icon={<AiOutlineUser />} />
                    </Badge>
                </Col>
                <Col flex={'1 0 0'}>
                    <Row>
                        <Title level={3} style={{ margin: 0 }}>
                            User Name
                        </Title>
                    </Row>
                    <Row>
                        <Text type={'secondary'}>
                            Aute do enim ut in elit excepteur ea consequat culpa.
                        </Text>
                    </Row>
                </Col>
            </Row>
            <Row gutter={[6, 6]}>
                <Col span={12}>
                    <Card hoverable>
                        <Statistic
                            prefix={<Icons.BiHealth size={20} />}
                            title={'Health'}
                            value={100}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card hoverable>
                        <Statistic
                            prefix={<Icons.BiCoinStack size={20} />}
                            title={'LittleCoins'}
                            value={1900}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card hoverable>
                        <Statistic
                            prefix={<Icons.BiFlag size={20} />}
                            title={'Daily Challenges'}
                            value={0}
                        />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card hoverable>
                        <Statistic
                            prefix={<Icons.BiArchive size={20} />}
                            title={'My Chest'}
                            value={5}
                        />
                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default LCSider
