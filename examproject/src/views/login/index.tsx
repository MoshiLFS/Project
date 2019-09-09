import * as React from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { WrappedFormUtils } from "antd/lib/form/Form";
import { History } from "history/index";
<<<<<<< HEAD
import { setToken } from "../../utils/index";
import "./index.css";
import { inject, observer } from 'mobx-react';

interface Props {
    form: WrappedFormUtils,
    user: any,
=======
import "./index.css";
import { inject, observer } from 'mobx-react';
import "./index.css";

interface Props {
    form: WrappedFormUtils,
    user: any, 
>>>>>>> lfs
    history: History,
}

@inject('user')
@observer
class Login extends React.Component<Props> {

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { code, msg } = await this.props.user.login(values);
                // console.log(code, msg)//Chenmanjie123!
                //跳转路由
                if (code === 1) {
                    console.log('111')
                    this.props.history.push('/home');
                } else {
                    message.error(msg || '用户名或密码错误');
                }
            }
        });
    };

    render() {
        const { getFieldDecorator } = this.props.form;
        const { user_name, user_pwd } = this.props.user.account;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                {/* <span>{this.props.user.isLogin ? 'true' : 'false'}</span> */}
                <p> 平台管理系统</p>
                <Form.Item>
                    {getFieldDecorator('user_name', {
                        validateTrigger: 'onBlur',
                        initialValue: user_name,
                        rules: [
                            // { required: true, message: 'Please input your username!' }
                            {
                                validator: (ruler, value, callback) => {
                                    console.log('value...', value);
                                    if (/[a-z]{5,20}/.test(value)) {
                                        callback();
                                    } else {
                                        callback('Please input valid username!')
                                    }
                                }
                            }
                        ],
                    })(
                        <Input
                            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                            placeholder="Username"
                        />,
                    )}
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('user_pwd', {
                        validateTrigger: 'onBlur',
                        initialValue: user_pwd,
                        rules: [
                            // { required: true, message: 'Please input your Password!' }
                            {
                                validator: (ruler, value, callback) => {
                                    console.log('value...', value);
                                    if (/^(?![a-z]+$)(?![A-Z]+$)(?!([^(a-zA-Z\!\*\.\#)])+$)^.{8,16}$/.test(value)) {
                                        callback();
                                    } else {
                                        callback('Please input valid password!')
                                    }
                                }
                            }
                        ],
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
<<<<<<< HEAD
                   
=======
>>>>>>> lfs
                </Form.Item>
                <Form.Item>
                    {getFieldDecorator('autoLogin', {
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

<<<<<<< HEAD
=======
    
>>>>>>> lfs
}

export default Form.create()(Login);