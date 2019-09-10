import * as React from 'react';
import { Form, Icon, Input, Button, Layout } from 'antd';
import Edit from '../../../../component/component/editComponent'
import './index.css';

const { Header, Footer, Sider, Content } = Layout;

import { addQuestion } from '../../../../service/question'

interface Props {
    form: any,

}

function hasErrors(fieldsError: { [x: string]: unknown; }) {
    return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Add extends React.Component<Props> {
    constructor(props: any) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        this.props.form.validateFields((err: any, values: any) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const usernameError = isFieldTouched('username') && getFieldError('username');
        const passwordError = isFieldTouched('password') && getFieldError('password');
        return (

            <div className='main'>
                <h2>添加试题</h2>
                <Content className='mainBox'>
                    <div className='center'>
                        <h3>题目信息</h3>
                        <h3>题干</h3>
                        <Form layout="inline" onSubmit={this.handleSubmit}>
                            <Form.Item validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
                                {getFieldDecorator('username', {
                                    rules: [{ required: true, message: 'Please input your username!' }],
                                })(
                                    <Input
                                        // prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                        placeholder="请输入题目标题，不超过20个字"
                                    />,
                                )}
                            </Form.Item>
                        </Form>
                        <h3>题目信息</h3>
                        <Edit />
                        <h3>请选择考试类型:</h3>
                        <select name="" id="">
                            <option>请选择</option>
                        </select>
                        <h3>请选择课程类型:</h3>
                        <select name="" id="">
                            <option>请选择</option>
                        </select>
                        <h3>请选择题目类型:</h3>
                        <select name="" id="">
                            <option>请选择</option>
                        </select>
                        <h3>答案信息</h3>
                        <Edit />
                        <div className='ant_button'>
                            <Button type="primary">提交</Button>
                        </div>
                    </div>
                </Content>
            </div>

        );
    }
    componentDidMount() {
        this.props.form.validateFields();
        // addQuestion('/exam/questions').then((res: any) => {
        //     console.log(res);
        // })
    }
}

export default Form.create()(Add);