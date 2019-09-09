import * as React from 'react';
import { Menu, Icon, Button, Layout, Switch,Table } from 'antd';
import { NavLink} from 'react-router-dom';
import Routerview from "../../routes/routerview";
import "./index.css";
const { SubMenu } = Menu;


const { Header, Content, Sider } = Layout;

interface Props{
    path:any
}

class Home extends React.Component<Props> {
    state = {
    collapsed: false
};   
  toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    public render() {
        console.log(this.props.path)
        return (
           
                <Layout>
                    <Header>
                    <div className="imgs"><img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/></div>
                    <div>孙少娜</div>
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
                                            <span>用户管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9"><NavLink to="/home/pageadd">添加用户</NavLink></Menu.Item>
                                    <Menu.Item key="10"><NavLink to="/home/show">用户展示</NavLink></Menu.Item>
                                    {/* <SubMenu key="sub3" title="Submenu">
                                        <Menu.Item key="11">Option 11</Menu.Item>
                                        <Menu.Item key="12">Option 12</Menu.Item>
                                    </SubMenu> */}
                                </SubMenu>
                                <SubMenu
                                    key="sub3"
                                    title={
                                        <span>
                                            <Icon type="appstore" />
                                            <span>阅卷管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="9"><NavLink to="/home/special">特批班级</NavLink></Menu.Item>
                                </SubMenu>
                            </Menu>
                        </div>
                        </Sider>
                        <Content>
                            <Routerview routes={this.props.path}></Routerview>
                        </Content>
                    </Layout>
                </Layout>
           
        );
    }
}

export default Home;