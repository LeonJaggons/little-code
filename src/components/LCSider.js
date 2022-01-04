import React from 'react'
import {
    Avatar,
    Typography,
    Layout,
    Card,
    Row,
    Col,
    Button,
    Badge,
    Statistic,
    Modal,
    Input,
} from 'antd'
import { AiOutlineUser } from 'react-icons/ai'
import * as Icons from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { setUserLoggedIn, toggleSignInVisible } from '@/redux/actions'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
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
    const dispatch = useDispatch()
    const signInVisible = useSelector((state) => state.signInVisible)
    const signedIn = useSelector((state) => state.signedIn)
    const [currUser, setCurrUser] = React.useState('')
    const [currPW, setCurrPW] = React.useState('')
    const handleToggleSignIn = () => {
        dispatch(toggleSignInVisible())
    }

    const handleSignIn = () => {
        const auth = getAuth()
        signInWithEmailAndPassword(auth, currUser, currPW)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user
                // ...
                console.log(user)
                dispatch(setUserLoggedIn(true))
            })
            .catch((error) => {
                const errorCode = error.code
                const errorMessage = error.message
                console.log(errorCode, errorMessage)
                dispatch(setUserLoggedIn(false))
            })
    }

    return (
        <>
            <Row style={{ marginBottom: 16 }}>
                <Button onClick={() => handleToggleSignIn()}>Sign In</Button>
                <Modal
                    title={'Login'}
                    visible={signInVisible}
                    onCancel={() => handleToggleSignIn()}
                    onOk={() => {
                        handleSignIn()
                        handleToggleSignIn()
                    }}
                >
                    <Row align="middle" style={{ marginBottom: '12px' }}>
                        <Col span={4}>Email</Col>
                        <Col flex={'1 0 0'}>
                            <Input value={currUser} onChange={(e) => setCurrUser(e.target.value)} />
                        </Col>
                    </Row>
                    <Row align={'middle'}>
                        <Col span={4}>Password</Col>
                        <Col flex={'1 0 0'}>
                            <Input.Password
                                value={currPW}
                                onChange={(e) => setCurrPW(e.target.value)}
                            />
                        </Col>
                    </Row>
                </Modal>
            </Row>
            <Row>
                <Text type={signedIn ? 'success' : 'danger'}>
                    {signedIn ? 'Logged in!' : 'Incorrect somthing?'}
                </Text>
            </Row>
        </>
    )
}
export default LCSider
