import * as React from 'react';
import "./index.css";
import { inject, observer } from 'mobx-react';
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

interface Props {
    adduser: any,
    result: any
}

@inject('adduser')
@observer
class Pageadd extends React.Component<Props> {
   state = {
    nameval: "",
    pwdval: ""
};
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        //   console.log(this.props.question)
        //    const { getQuestion } = this.props.question
        //   getQuestion()
        const result = await this.props.adduser.adduser()
        this.setState({
            list: result.data
        })
    }
    addbtn=async()=>{
        const { nameval, pwdval}=this.state;
        const data=await this.props.adduser.adduser({
            user_name:nameval, 
            user_pwd:pwdval
        })
        console.log(data)
    }
    change(e:any){
        // const { name, pwd } = this.state;
        this.setState({
            nameval:e.currentTarget.value.trim()
        })
    }
    changepwd(e:any){
        this.setState({
            pwdval: e.currentTarget.value.trim()
        })
    }
    render() {
        const { nameval, pwdval } = this.state;
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
                                    <Input placeholder="请输入用户名" value={nameval} onChange={(e)=>this.change(e)}/>
                                    <Input placeholder="请输入密码" value={pwdval} onChange={(e)=>this.changepwd(e)}/>
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
                                <Button type="primary" onClick={this.addbtn}>
                                    确定
                                </Button>
                                <Button type="danger">
                                    重置
                                </Button>
                            </div>
                        </div>
                        <div className="dl">
                            <div className="top">
                                <Button style={{ color: "blue" }}>添加身份</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入身份证明" />
                                </div>
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
                                <Button style={{ color: "blue" }}>添加api接口权限</Button>
                            </div>
                            <div className="content">
                                <div>
                                    <Input placeholder="请输入api接口权限名称" />
                                    <Input placeholder="请输入api接口权限url" />
                                    <Input placeholder="请输入api接口权限方法" />
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
                                <Button style={{ color: "blue" }}>接口视图接口权限</Button>
                            </div>
                            {/* <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div> */}
                            <div className="bottom">
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请选择已有视图"
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
                                <Button style={{ color: "blue" }}>给身份设置api接口权限</Button>
                            </div>
                            {/* <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div> */}
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
                                <Button style={{ color: "blue" }}>给身份设置视图权限</Button>
                            </div>
                            {/* <div className="content">
                                <div>
                                    <Input placeholder="请输入用户名" />
                                    <Input placeholder="请输入密码" />
                                </div>
                            </div> */}
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
                                <Select
                                    showSearch
                                    style={{ width: 220 }}
                                    placeholder="请输入视图权限id"
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