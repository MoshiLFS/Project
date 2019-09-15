import * as React from 'react';
import { Icon, Layout, Menu, Select, Button, Tag } from 'antd';
const { Option } = Select;
const { Content, Sider } = Layout;
import BW from '../../img/BW.png';
import person from '../../img/person.svg';
const { SubMenu } = Menu;
import { observer, inject } from 'mobx-react';
import 'antd/dist/antd.css';
import './index.css'

interface Props {
    option: any
}
function handleChange(value: string) {
    console.log(value); 
}


interface Props {
    history: any,
    exam: any,
    option: any,
    subject: any,
    routes: any
}

@inject('exam', 'subject')
@observer

class locktest extends React.Component<Props> {
    state = {
        list: [],
        subject: []
    }
    render() {
        const { list, subject } = this.state
        return (
            <div className='main'>
                <h2>查看试题</h2>
                <ul className='nav'>
                    <li>
                        <b>课程类型:</b>
                        <p>
                            {
                                subject ?
                                    subject.map((item: any) =>
                                        <a href="" key={item.subject_id}>{item.subject_text}</a>
                                    )
                                    : null
                            }
                        </p>
                    </li>
                    <li>
                        <b>考试类型：</b>
                        <div style={{ marginTop: "20px" }}>
                            <Select
                                labelInValue
                                style={{ width: 120 }}
                                onChange={handleChange}>
                                <Option value="周考一">周考一</Option>
                                <Option value="周考二">周考二</Option>
                                <Option value="周考三">周考三</Option>
                                <Option value="月考">月考</Option>
                            </Select>
                            <Button type="primary" icon="search">
                                查询
    </Button>
                        </div>
                    </li>
                </ul>
                <div className='context'>
                    {
                        list ?
                            list.map((item: any) =>
                                (
                                    <div className='question' key={item.questions_id}>
                                        <ul className='le'>
                                            <h2>{item.title}</h2>
                                            <li>
                                                <Tag color="geekblue">{item.questions_type_text}</Tag>
                                                <Tag color="purple">{item.subject_text}</Tag>
                                                <Tag color="orange">{item.exam_name}</Tag>
                                            </li>
                                            <li>{item.user_name}发布</li>
                                        </ul>
                                        <div className="rig">
                                            <a>编辑</a>
                                        </div>
                                    </div>
                                )
                            )
                            : null
                    }
                </div>
            </div>
    )}
    componentDidMount() {
        this.getList()
        this.getSubject()
    }
    getList = async () => {
        const { data } = await this.props.exam.getExam()
        console.log(this.props.exam.getExam(),"exam")
        this.setState({
            list: data
        })
    }
    getSubject=async () => {
        const { data } = await this.props.subject.getSubject()
        //console.log(data,"result")
        this.setState({
            subject: data
        })
    }
}
export default locktest;