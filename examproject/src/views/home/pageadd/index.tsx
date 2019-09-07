import * as React from 'react';
import "./index.css";
import { Button, Input, Select } from 'antd';

const { Option } = Select;

function onChange(value:any) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val:any) {
    console.log('search:', val);
}

class Pageadd extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <>
               <h2>添加用户</h2>
               <div className="adduserbox">
                   <div className="adduser">
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加用户</Button>
                                <Button>更新用户</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div>
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width:220 }}
                                    placeholder="请输入身份id"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                                >
                                    <Option value="jack">管理者</Option>
                                    <Option value="lucy">出题者</Option>
                                    <Option value="tom">浏览者</Option>
                                </Select>,
                            </div>
                            <div className="btns">
                                <Button type="primary">
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加用户</Button>
                                <Button>更新用户</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div>
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请输入身份id"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                                >
                                    <Option value="jack">管理者</Option>
                                    <Option value="lucy">出题者</Option>
                                    <Option value="tom">浏览者</Option>
                                </Select>,
                            </div>
                            <div className="btns">
                                <Button type="primary">
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加用户</Button>
                                <Button>更新用户</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div>
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请输入身份id"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                                >
                                    <Option value="jack">管理者</Option>
                                    <Option value="lucy">出题者</Option>
                                    <Option value="tom">浏览者</Option>
                                </Select>,
                            </div>
                            <div className="btns">
                                <Button type="primary">
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加用户</Button>
                                <Button>更新用户</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div>
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请输入身份id"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                                >
                                    <Option value="jack">管理者</Option>
                                    <Option value="lucy">出题者</Option>
                                    <Option value="tom">浏览者</Option>
                                </Select>
                            </div>
                            <div className="btns">
                                <Button type="primary">
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加用户</Button>
                                <Button>更新用户</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div>
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请输入身份id"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                                >
                                    <Option value="jack">管理者</Option>
                                    <Option value="lucy">出题者</Option>
                                    <Option value="tom">浏览者</Option>
                                </Select>
                            </div>
                            <div className="btns">
                                <Button type="primary">
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加用户</Button>
                                <Button>更新用户</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div>
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请输入身份id"
                                    optionFilterProp="children"
                                    onChange={onChange}
                                    onFocus={onFocus}
                                    onBlur={onBlur}
                                    onSearch={onSearch}
                                // filterOption={(input, option) =>
                                //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                // }
                                >
                                    <Option value="jack">管理者</Option>
                                    <Option value="lucy">出题者</Option>
                                    <Option value="tom">浏览者</Option>
                                </Select>
                            </div>
                            <div className="btns">
                                <Button type="primary">
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                   </div>
               </div>
            </>
        );
    }
}

export default Pageadd;