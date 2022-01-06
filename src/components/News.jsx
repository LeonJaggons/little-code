import React, { useState, useEffect } from 'react'
import { Typography, Avatar, Card, Row, Col, Input, Divider, Button } from 'antd'
import {
    AiOutlineComment,
    AiOutlineFlag,
    AiOutlineLike,
    AiOutlineMore,
    AiOutlineUnderline,
    AiOutlineUser,
} from 'react-icons/ai'
import { getStorage, ref } from 'firebase/storage'
const { Title } = Typography

const News = () => {
    return (
        <div style={{ padding: '0 60px' }}>
            <Row gutter={[16, 16]}>
                {[1, 2].map(() => (
                    <Col span={12}>
                        <NewsArticle />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

const NewsArticle = () => {
    return (
        <Card
            cover={
                <img src="https://firebasestorage.googleapis.com/v0/b/little-code.appspot.com/o/img%2Fbubble_darker.jpg?alt=media&token=08c16685-d93b-48b7-8002-940ea2453cd2" />
            }
            title={<NewsArticleHeader />}
            extra={<AiOutlineMore />}
            actions={[
                <AiOutlineLike size={18} />,
                <AiOutlineComment size={18} />,
                <AiOutlineFlag size={18} />,
            ]}
        >
            <NewsArticlePeek />
            <NewsArticleComment />
        </Card>
    )
}

const NewsArticleHeader = () => {
    return (
        <Row align={'middle'}>
            <Avatar
                size={20}
                shape={'square'}
                icon={<AiOutlineFlag />}
                style={{ marginRight: 12 }}
            />
            <Title level={5} style={{ margin: 0 }}>
                News Organization
            </Title>
        </Row>
    )
}

const NewsArticlePeek = () => {
    return (
        <Card.Meta
            title={
                <Title level={4} style={{ margin: 0 }}>
                    Article Title
                </Title>
            }
            description={
                'Veniam amet occaecat do sint ea. Quis proident irure adipisicing magna pariatur laborum tempor qui. Anim elit id elit labore aliquip dolor velit exercitation aliqua dolor voluptate duis esse.'
            }
        />
    )
}

const NewsArticleComment = () => {
    return (
        <Row style={{ marginTop: 24 }} gutter={8}>
            <Col flex={'0 1 0'}>
                <Avatar shape={'square'} icon={<AiOutlineUser />} />
            </Col>
            <Col flex={'1 0 0'}>
                <Card>
                    <Input.TextArea placeholder="Leave a comment..." rows={4} />
                    <Divider />
                    <Row style={{ width: '100%' }} justify="end">
                        <Button type={'primary'}>Comment</Button>
                    </Row>
                </Card>
            </Col>
        </Row>
    )
}
export default News
