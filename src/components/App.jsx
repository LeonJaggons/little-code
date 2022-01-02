import React from 'react';
import { Layout, Typography } from 'antd'
const { Title, Text } = Typography;
const { Header, Sider, Content} = Layout;

const App = () =>  (
        <Layout>
            <Content>
                <Title level={4}>LittleCode</Title>
            </Content>
        </Layout>
    );


export default App;
