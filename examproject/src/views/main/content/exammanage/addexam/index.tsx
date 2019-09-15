import * as React from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete, DatePicker, InputNumber } from 'antd';
const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { observer, inject } from "mobx-react";
import { History } from 'history/index';
import './index.css';

interface Props {
    form: WrappedFormUtils,
    addExam: any,
    subject: any,
    testType: any,
    exam: any,
    history:History
}

@inject('subject', 'addExam', 'testType')
@observer

class Addexam extends React.Component<Props>{
    constructor(props: any) {
        super(props)
        this.getData()
        this.getType()
    }
    state = {
        confirmDirty: false,
        list: [],
        type: [],
        subject_id: '',
        exam_id: '',
        autoCompleteResult: [],
    };
    componentDidMount() {
        this.getData();
        this.getType();
    }
    getData = async () => {
        const { data } = await this.props.subject.getSubject()
        this.setState({
            list: data
        })
    }
    getType = async () => {
        const { data } = await this.props.testType.getType()
        //console.log(data,"subject")
        this.setState({
            type: data
        })
    }
    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const start_time = values.start_time._d.getTime()
                const end_time = values.end_time._d.getTime()
                const exam_id = values.exam_id.label[1]
                const subject_id = values.subject_id.label[1]
                const number = values.number
                const title = values.title
                //console.log(subject_id, exam_id, title, number, start_time, end_time, "参数")
                const { code, data} = await this.props.addExam.addExam({ subject_id, exam_id, title, number, start_time, end_time })
                //console.log(data,'data')
                if(code===1){
                    this.props.history.push({pathname:"/main/testpaper",state:{data}})
                }
            }
        });
    }

    handleChange = (value: any) => {
    }
    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <div className="addexam">
                <h1 className='title'>添加考试</h1>
                <div className="con">
                    <Form onSubmit={this.handleSubmit} className='form'>
                        <Form.Item label="试卷名称" style={{ width: 260 }} >
                            {getFieldDecorator('title', {
                                initialValue:'',
                                rules: [{
                                    type: 'string',
                                    message: 'The input is not valid 试卷名称!',
                                },
                                {
                                    required: true,
                                    message: 'Please input your 试卷名称!',
                                }],

                            })(<Input />)}
                        </Form.Item>
                        <Form.Item label="请选择考试类型">
                            {getFieldDecorator('exam_id', {
                                rules: [{ required: true, message: 'Please input 选择考试类型!' }],
                            })(
                                <Select
                                    labelInValue
                                    style={{ width: 120 }}
                                    onChange={this.handleChange}
                                >
                                    {
                                        this.state.type && this.state.type.length ?
                                            this.state.type.map((item: any) =>
                                                <Option key={item.exam_id} value={item.exam_name}>{item.exam_name}{item.exam_id}</Option>
                                            )
                                            : null
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="选择课程">
                            {getFieldDecorator('subject_id', {
                                rules: [{ required: true, message: 'Please input 选择课程!' }],
                            })(
                                <Select
                                    labelInValue
                                    style={{ width: 120 }}
                                    onChange={this.handleChange}
                                >
                                    {
                                        this.state.list && this.state.list.length ?
                                            this.state.list.map((item: any) =>
                                                <Option key={item.subject_id} value={item.subject_text}>{item.subject_text}{item.subject_id}</Option>
                                            )
                                            : null
                                    }
                                </Select>,
                            )}
                        </Form.Item>
                        <Form.Item label="设置题量">
                            {getFieldDecorator('number', {
                                rules: [{ required: true, message: 'Please input 选择数量!' }],
                            })(<InputNumber min={1} max={10} defaultValue={4} />)}
                        </Form.Item>
                        <Form.Item label="考试时间">
                            <span>
                                {getFieldDecorator('start_time', {
                                    //initialValue: start_time,
                                })(<DatePicker showTime placeholder="开始时间" />)}
                            </span>
                            &nbsp;&nbsp;-&nbsp;
                            <span>
                                {getFieldDecorator('end_time', {
                                    //initialValue: end_time,
                                })(<DatePicker showTime placeholder="结束时间" />)}
                            </span>
                        </Form.Item>
                            <Button type="primary" htmlType="submit">
                                创建试卷
                            </Button>
                    </Form>
                </div>
            </div>
        );
    }
}

export default Form.create({ name: 'register' })(Addexam);