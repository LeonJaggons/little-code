import React, { useEffect, useState } from 'react'
import { Row, Col, Typography, Card, Divider, Input, Button, Tag, Select } from 'antd'
import { UnControlled as CodeMirror, Controlled as CodeDisplay } from 'react-codemirror2'
import {
    AiFillBug,
    AiFillPlaySquare,
    AiOutlineArrowLeft,
    AiOutlineArrowRight,
    AiOutlineUndo,
    AiOutlineUnorderedList,
} from 'react-icons/ai'
import javascript from 'codemirror/mode/javascript/javascript'
const { Title, Text } = Typography
import PerfectScrollbar from 'react-perfect-scrollbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllQuestions, getRandomQuestion } from '@/redux/actions'
import { motion } from 'framer-motion'
const Challenges = () => {
    const dispatch = useDispatch()
    const allQuestions = useSelector((state) => state.allQuestions)
    useEffect(() => {
        dispatch(getAllQuestions())
    }, [])
    useEffect(() => {
        console.log(allQuestions)
    }, [allQuestions])
    return (
        <div style={{ display: 'flex', flexFlow: 'row nowrap', flex: '1 0 0' }}>
            <Col
                xs={9}
                style={{
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    backgroundColor: 'white',
                    padding: 30,
                }}
            >
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{ duration: 1 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                    style={{ flex: '1 0 0', display: 'flex', flexFlow: 'column nowrap' }}
                >
                    <QuestionPane />
                </motion.div>
            </Col>
            <Col
                xs={15}
                style={{
                    minHeight: '100%',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    backgroundColor: 'white',
                    padding: 30,
                    marginLeft: 16,
                }}
            >
                <motion.div
                    initial={'hidden'}
                    animate={'visible'}
                    transition={{ duration: 2 }}
                    variants={{
                        visible: { opacity: 1 },
                        hidden: { opacity: 0 },
                    }}
                    style={{ flex: '1 0 0', display: 'flex', flexFlow: 'column nowrap' }}
                >
                    <CodePane />
                </motion.div>
            </Col>
        </div>
    )
}

const QuestionPane = () => {
    const codeExample =
        "export const toggleSignInVisible = () => { \n\treturn (dispatch, getState) => { \n\tconst isVis = getState().signInVisible \n\t\tdispatch({ \n\t\t\ttype: 'SET_ATTR', \n\t\t\tattrName: 'signInVisible', \n\t\t\tpayload: !isVis, \n\t\t}) \n\t} \n} "
    return (
        <>
            <QuestionTitle />
            <Divider />
            <Row>
                <Title level={4}>Overview</Title>
            </Row>
            <Row>
                <Text>
                    Exercitation elit dolor incididunt commodo consectetur eiusmod laborum minim
                    excepteur cillum ullamco. Commodo in in amet cillum consectetur eiusmod commodo.
                    Quis cupidatat occaecat minim ullamco do pariatur laborum eu. Voluptate sunt in
                    est aute velit labore.
                </Text>
            </Row>
            <Row style={{ width: '100%', margin: '18px 0' }}>
                <Card style={{ width: '100%' }} hoverable>
                    <Row style={{ width: '100%', height: 210 }} align={'middle'} justify={'center'}>
                        <CodeDisplay mode={javascript} value={codeExample} />
                    </Row>
                </Card>
            </Row>
            <Row style={{ marginBottom: 18 }}>
                <Text>
                    Sit eu est quis aliqua exercitation culpa minim. Cillum eu culpa Lorem ullamco
                    excepteur magna nisi aliquip consequat. Excepteur in in labore cillum non id.
                    Nostrud ullamco commodo ipsum magna eu.
                </Text>
            </Row>
            <Row style={{ flex: '1 0 0' }}></Row>
            <Row gutter={8} justify={'space-between'}>
                <Col>
                    <Button>
                        <Row gutter={4} align={'middle'}>
                            <AiOutlineUnorderedList style={{ marginRight: 4 }} />
                            <Text>Problems</Text>
                        </Row>
                    </Button>
                </Col>
                <Row gutter={8}>
                    <Col>
                        <Button>
                            <Row gutter={4} align={'middle'}>
                                <AiOutlineArrowLeft style={{ marginRight: 4 }} />
                                <Text>Previous</Text>
                            </Row>
                        </Button>
                    </Col>
                    <Col>
                        <Button>
                            <Row gutter={4} align={'middle'}>
                                <AiOutlineUndo style={{ marginRight: 4 }} />
                                <Text>Random</Text>
                            </Row>
                        </Button>
                    </Col>
                    <Button>
                        <Row gutter={4} align={'middle'}>
                            <Text>Next</Text>
                            <AiOutlineArrowRight style={{ marginLeft: 4 }} />
                        </Row>
                    </Button>
                    <Col></Col>
                </Row>
            </Row>
        </>
    )
}

const QuestionTitle = () => {
    return (
        <Row style={{ width: '100%' }} align={'middle'} justify="space-between">
            <Row align={'middle'} gutter={8}>
                <Title level={2} style={{ margin: 0 }}>
                    Sort the Array
                </Title>
            </Row>
            <Row>
                <Col>
                    <Tag>Linked List</Tag>
                </Col>
                <Col>
                    <Tag color={'yellow'}>Medium</Tag>
                </Col>
            </Row>
        </Row>
    )
}

const CodePane = () => {
    const [codeText, setCodeText] = useState(
        ' // Question auto-generated comments\n// Other stuff\n\nconst starterFunction = () => {\n\t\n}'
    )
    const [output, setOutput] = useState()
    return (
        <>
            <Row
                style={{ width: '100%', marginBottom: 16, flex: '0 1 0' }}
                justify="end"
                align="middle"
                gutter={12}
            >
                <Row align="middle" gutter={8} style={{ marginRight: 24 }}>
                    <Text>
                        <strong>Language:</strong>
                    </Text>
                    <Col>
                        <Select style={{ width: 100 }}>
                            <Select.Option>Java</Select.Option>
                            <Select.Option>Javascript</Select.Option>
                            <Select.Option>C++</Select.Option>
                        </Select>
                    </Col>
                </Row>
                <Row align="middle" gutter={8}>
                    <Text>
                        <strong>Theme:</strong>
                    </Text>
                    <Col>
                        <Select style={{ width: 100 }}>
                            <Select.Option>Java</Select.Option>
                            <Select.Option>Javascript</Select.Option>
                            <Select.Option>C++</Select.Option>
                        </Select>
                    </Col>
                </Row>
            </Row>
            <PerfectScrollbar
                style={{
                    flex: '1 0 0',
                    display: 'flex',
                    flexFlow: 'column nowrap',
                    paddingRight: 16,
                }}
            >
                <CodeMirror
                    style={{ height: '100%' }}
                    options={{
                        lineNumbers: true,
                    }}
                    onChange={(editor, data, value) => setCodeText(value)}
                />
            </PerfectScrollbar>
            <Row
                style={{ width: '100%', paddingRight: 16, margin: '12px 0px' }}
                align={'middle'}
                justify={'end'}
            >
                <Button style={{ marginRight: 8 }}>
                    <Row align={'middle'}>
                        <AiFillBug style={{ marginRight: 6 }} />
                        <Text>Test</Text>
                    </Row>
                </Button>
                <Button onClick={() => setOutput(eval(codeText))}>
                    <Row align={'middle'}>
                        <AiFillPlaySquare style={{ marginRight: 6 }} />
                        <Text>Run Code</Text>
                    </Row>
                </Button>
            </Row>
            <Row>
                <Title level={4}>Code Result</Title>
            </Row>
            <Row style={{ height: 220, paddingRight: 16 }}>
                <Card style={{ width: '100%' }} hoverable>
                    <CodeDisplay value={output} />
                </Card>
            </Row>
        </>
    )
}

export default Challenges
