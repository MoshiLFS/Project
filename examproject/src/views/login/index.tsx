import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import { WrappedFormUtils } from "antd/lib/form/Form";
import "./index.css";

interface Props {
    form: WrappedFormUtils,
}

class Login extends React.Component<Props> {

    handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item>
                    {getFieldDecorator('username', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            type="password"
                            placeholder="Password"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(<Checkbox>记住密码</Checkbox>)}
                    <a className="login-form-forgot" href="">
                        忘记密码
          </a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        登录
          </Button>
                     <a href="">去注册!</a>
                </Form.Item>
            </Form>
        );
    }
    
}

export default Form.create()(Login);