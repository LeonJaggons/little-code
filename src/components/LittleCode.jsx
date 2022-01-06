import React from 'react'
import { Typography, Row } from 'antd'
import { AiOutlineCode } from 'react-icons/ai'

const { Title } = Typography

const LittleCode = (props) => (
    <Row align="middle">
        <AiOutlineCode
            style={{ color: 'white', marginTop: 3, marginRight: 4 }}
            size={props.big === true ? 28 : 36}
        />
        <Title level={props.big === true ? 1 : 2} style={{ margin: 0, color: 'white' }}>
            LittleCode
        </Title>
    </Row>
)

export default LittleCode
