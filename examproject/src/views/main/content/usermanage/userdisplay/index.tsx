import * as React from 'react';
// 用户展示
import { Table, Tabs, Radio } from 'antd';
import {observer,inject} from 'mobx-react'
const { TabPane } = Tabs;
import './index.css';

interface Props{
    question:any
}
@inject('question')
@observer
class Userdisplay extends React.Component<Props> {
    constructor(props: any) {
        super(props)
    }
    state = {
        size: 'small',
        list: [
            {
                type: 0,
                tabTitle: "用户数据",
                children: [
                    {
                        title: '用户名',
                        dataIndex: "user_name",
                        key: "user_name"
                    },
                    {
                        title: '密码',
                        dataIndex: "user_pwd",
                        key: "user_pwd"
                    },
                    {
                        title: '身份',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    }
                ],
                url: "/user/user"
            },
            {
                type: 1,
                tabTitle: "身份数据",
                children: [
                    {
                        title: '身份名称',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    }
                ],
                url: "/user/identity"
            },
            {
                type: 2,
                tabTitle: "API接口权限",
                children: [
                    {
                        title: 'api权限名称',
                        dataIndex: "api_authority_text",
                        key: "api_authority_text"
                    },
                    {
                        title: 'api权限url',
                        dataIndex: "api_authority_url",
                        key: "api_authority_url"
                    },
                    {
                        title: 'api权限方法',
                        dataIndex: "api_authority_method",
                        key: "api_authority_method"
                    }
                ],
                url: "/user/api_authority"
            },
            {
                type: 3,
                tabTitle: "身份和api接口关系",
                children: [
                    {
                        title: '身份名称',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    },
                    {
                        title: 'api权限名称',
                        dataIndex: "api_authority_text",
                        key: "api_authority_text"
                    },
                    {
                        title: 'api权限url',
                        dataIndex: "api_authority_url",
                        key: "api_authority_url"
                    },
                    {
                        title: 'api权限方法',
                        dataIndex: "api_authority_method",
                        key: "api_authority_method"
                    }
                ],
                url: '/user/identity_api_authority_relation'
            },
            {
                type: 4,
                tabTitle: "视图接口权限",
                children: [
                    {
                        title: '视图权限名称',
                        dataIndex: "view_authority_text",
                        key: "view_authority_text"
                    },
                    {
                        title: '视图id',
                        dataIndex: "view_id",
                        key: "view_id"
                    }
                ],
                url: '/user/view_authority'
            },
            {
                type: 5,
                tabTitle: "身份和视图权限关系",
                children: [

                    {
                        title: '身份',
                        dataIndex: "identity_text",
                        key: "identity_text"
                    },
                    {
                        title: '视图名称',
                        dataIndex: "view_authority_text",
                        key: "view_authority_text"
                    },
                    {
                        title: '视图id',
                        dataIndex: "view_id",
                        key: "view_id"
                    }
                ],
                url: "/user/identity_view_authority_relation"
            }
        ],
        columns: [],
        data: [],
        count:0,
        htwo:'',
        // url:'',
        url:'/user/user'
    };
    onChange = (e: any) => {
        this.setState({ size: e.target.value });
    };
    render() {
        const { size } = this.state;
        return (
            <div className="userdisplay">
                userdisplay
                <h2>
                    用户展示
                </h2>
                {/* <Tabs type="card">
                    {this.state.list.length &&
                        this.state.list.map((v: any, i: any) => {
                            return <TabPane tab={v.tabTitle} key={v.type}>
                                
                            </TabPane>
                        })
                    }
                </Tabs> */}
                <nav className="userdisplay_nav">
                    {
                        this.state.list.map((v:any,i:any)=>{
                            return <span className={this.state.count==i?"spans":''} key={v.type} onClick={this.clickFn.bind(this,i,v)}>{v.tabTitle} </span>
                        })
                    }
                </nav>
                <h2>
                    {this.state.htwo}
                </h2>
                <Table columns={this.state.columns} dataSource={this.state.data} />
            </div>
        )
    }
    clickFn(ind:any,itm:any){
        // this.state.count=ind,
        // this.state.columns=itm.children,
        // this.state.htwo=itm.tabTitle,
        // this.state.url=itm.url
        this.setState({
            count:ind,
            columns:itm.children,
            htwo:itm.tabTitle
        })
        this.getUserFn(itm.url)
    }
    componentDidMount(){
        this.setState({
            // url:this.state.list[0].url,
            columns:this.state.list[0].children,
            htwo:this.state.list[0].tabTitle
        })
        this.getUserFn(this.state.url)
    }
    public getUserFn=async (url?:any,params?:any)=>{
        console.log(this.props.question,'question')
        let list =await this.props.question.getUserdisplay(url,params)
        // console.log(list,'list')
        if (list.code==1) {
            list.data.map((itm:any,ind:any)=>{
                itm.key=ind
            })
            this.setState({
                data:list.data
            })
        } 
    }
    
}
export default Userdisplay;