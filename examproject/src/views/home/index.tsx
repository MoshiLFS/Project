import * as React from 'react';
<<<<<<< HEAD
import { Menu, Icon, Button, Layout, Switch,Table, Avatar} from 'antd';
import { NavLink} from 'react-router-dom';
import Routerview from "../../routes/routerview";

=======
import { Button,Table} from 'antd';
>>>>>>> lfs
import "./index.css";
import { inject, observer } from 'mobx-react';

const data = [];
const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
    },
    {
        title: '密码',
        dataIndex: 'age',
    },
    {
        title: '身份',
        dataIndex: 'address',
    },
];
interface Props {
    showdata: any,
    result: any
}
@inject('showdata')
@observer
class Show extends React.Component<Props> {
    state = {
        list: []
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const result = await this.props.showdata.showdata();
        this.setState({
<<<<<<< HEAD
            collapsed: !this.state.collapsed,
        });
    };
    public render() {
        return (
           
                <Layout>
                    <Header>
                    <div className="imgs"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/></div>
                    <div>
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        <span>chenmanjie</span>
                    </div>
                    </Header>
                    <Layout>
                        <Sider>
                        <div>
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="mail" />
                                            <span>试题管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5"><NavLink to="/home/add">添加试题</NavLink></Menu.Item>
                                    <Menu.Item key="6"><NavLink to="/home/rank">试题分类</NavLink></Menu.Item>
                                    <Menu.Item key="7"><NavLink to="/home/check">查看试题</NavLink></Menu.Item>
                                </SubMenu>
                                <SubMenu
                                    key="sub2"
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>Navigation Two</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>Navigation Three</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9">Option 13</Menu.Item>
                                    <Menu.Item key="10">Option 14</Menu.Item>
                                    <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 15</Menu.Item>
                                        <Menu.Item key="12">Option 16</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                            </Menu>
=======
            list: result.data
        })
    }
    render() {
        const { list } = this.state;
        console.log(list)
        const data = list.map((item: any, index) => {
            return {
                name: item.user_name,
                age: item.user_pwd,
                address: item.identity_text
            }
        })
        return ( 
                <div className="showbox">
                    <h2>用户展示</h2>
                    <div className="uls">
                        <ul className="ul">
                            <Button type="primary" ghost>
                                用户数据
                        </Button>
                            <Button >
                                身份数据
                        </Button>
                            <Button>
                                api接口权限
                        </Button>
                            <Button>
                                身份和api接口关系
                        </Button>
                            <Button>
                                视图接口权限
                        </Button>
                            <Button>
                                身份和视图权限关系
                        </Button>
                        </ul>
                    </div>
                    <div>
                        <h2>用户数据</h2>
                        <div className="userbox">
                            <div className="tabbox">
                                <Table columns={columns} dataSource={data} size="middle" />
                            </div>
>>>>>>> lfs
                        </div>
                    </div>
                </div>
        );
    }
}

export default Show;