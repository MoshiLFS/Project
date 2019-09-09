import * as React from 'react';
import { Button, Form, Icon, Input, Layout, Select, Cascader, Tag, Avatar, Breadcrumb, List, Typography } from 'antd'
import { FormComponentProps } from 'antd/lib/form';
import { inject, observer } from 'mobx-react';
import "./index.css"
const { Option } = Select;
const { Content } = Layout;

const options = [
    {
        value: '周考一',
        label: '周考一',
    },
    {
        value: '周考二',
        label: '周考二',
    },
    {
        value: '周考三',
        label: '周考三',
    },
    {
        value: '月考',
        label: '月考',
    },
];
function onChange(value: any) {
    console.log(value);
}

const options1 = [
    {
        value: 'javaScript上',
        label: 'javaScript上',
    },
    {
        value: 'javaScript下',
        label: 'javaScript下',
    },
    {
        value: '移动端开发',
        label: '移动端开发',
    },
    {
        value: 'node基础',
        label: 'node基础',
    }, {
        value: '渐进式开发',
        label: '渐进式开发',
    },
    {
        value: '项目实战',
        label: '项目实战',
    },
    {
        value: '组件化开发',
        label: '组件化开发',
    },
    {
        value: 'javascript高级',
        label: 'javascript高级',
    },


];
function onChange1(value: any) {
    console.log(value);
}

interface UserFormProps extends FormComponentProps {
    question: any,
    age: number;
    history: any,
    name: string;
}
function handleChange(value: any) {
    console.log(`selected ${value}`);
}
// @inject('question')
// @observer
class Examlist extends React.Component<UserFormProps, any> {
    state = {
        data: [],
        value: '',
    }
    handleChanges(value: any) {
        this.setState({
            value
        })
    }
    public async componentDidMount() {
        // const result = await this.props.question.getCheckfile();
        // this.setState({ data: result.data })
    }
    public render() {
        let { data, value } = this.state;
        return (
            <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0', fontSize: 20 }}>
                    <Breadcrumb.Item>试卷列表</Breadcrumb.Item>
                </Breadcrumb>
                <div style={{ padding: 24, minHeight: 530 }}>
                    <div className="m-header-list">
                        考试类型:<Cascader options={options} onChange={onChange} changeOnSelect />
                        课程:<Cascader options={options1} onChange={onChange1} changeOnSelect />
                        <Button type="primary">查询</Button>
                    </div>
                    <div className="m-main-con">
                        <div className="m-main-content">
                            <div style={{ marginBottom: 16, background: "#fff" }}>

                                <div className="Tag">
                                    <span className="m-tag-title">试卷列表</span>
                                    <span className="m-tag-item">
                                        <Button>全部</Button>
                                        <Button>进行中</Button>
                                        <Button>已结束</Button>
                                    </span>
                                </div>
                                <List
                                    itemLayout="horizontal"
                                    dataSource={data}
                                    renderItem={(item: any) => (
                                        <List.Item>
                                            <span>1</span>
                                            <span>2</span>
                                            <span>3</span>
                                            <span>4</span>
                                        </List.Item>
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                </div>

            </Content>
        )
    }
}


export default Form.create()(Examlist);