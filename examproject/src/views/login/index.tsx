import * as React from 'react'
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';
import { WrappedFormUtils } from 'antd/lib/form/Form';
import { History } from 'history/index'
import { inject, observer } from 'mobx-react'
import './index.css'
interface Props {
    form: WrappedFormUtils,
    user: any,
    history: History,
    abc?: string
}
@inject('user')
@observer
class Login extends React.Component<Props>{

    handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                const { code, msg } = await this.props.user.login(values)
                // console.log(code, 'login---code')
                if (code === 1) {
                    // 跳转路由
                    this.props.history.replace('/main');
                } else {
                    // 提示错误
                    message.error(msg || '用户名或密码错误');
                }
            }
        });
    };

    render() {
        console.log('props...', this.props, this.props.user.login);
        const { getFieldDecorator } = this.props.form;
        const { user_name, user_pwd } = this.props.user.account;
        return (
            <div className="login">
                <Form onSubmit={this.handleSubmit} className="login-form">
                    <span>{this.props.user.isLogin ? 'true' : 'false'}</span>
                    <h3>
                        考试登录平台
                    </h3>
                    <Form.Item>
                        {getFieldDecorator('user_name', {
                            validateTrigger: 'onBlur',
                            initialValue: user_name,
                            rules: [
                                {
                                    validator: (ruler, value, callback) => {
                                        // console.log('value...', value);
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
                                {
                                    validator: (ruler, value, callback) => {
                                        // console.log('value...', value);
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
                        })(<Checkbox>Remember me</Checkbox>)}
                    </Form.Item>
                    <Form.Item>
                        {getFieldDecorator('autoLogin', {
                            valuePropName: 'checked',
                            initialValue: true,
                        })(<Checkbox>Auto login in 7 days</Checkbox>)}
                        <a className="login-form-forgot" href="">
                            Forgot password
                        </a>
                        <Button type="primary" htmlType="submit" className="login-form-button">
                            登录
                        </Button>
                        Or <a href="">register now!</a>
                    </Form.Item>
                </Form>

            </div>
        );
    }
}
export default Form.create()(Login);