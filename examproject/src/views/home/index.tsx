import * as React from 'react';
import { Menu, Icon, Button, Layout, Switch,Table } from 'antd';
const { SubMenu } = Menu;


const { Header, Content, Sider } = Layout;
class Home extends React.Component {
    state = {
    collapsed: false
};   
  toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    public  render() {
        return (
           
                <Layout>
                    <Header>
                        <p className="school">八维研修学院</p>
                    </Header>
                    <Layout>
                        <Sider>
                        <div style={{ width: 256 }}>
                            {/* <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                            </Button> */}
                            <Menu
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode="inline"
                                theme="dark"
                                inlineCollapsed={this.state.collapsed}
                            >
                                {/* <Menu.Item key="1">
                                    <Icon type="pie-chart" />
                                    <span>Option 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                    <Icon type="desktop" />
                                    <span>Option 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                    <Icon type="inbox" />
                                    <span>Option 3</span>
                                </Menu.Item> */}
                                <SubMenu
                                    key="sub1"
                                    title={
                                        <span>
                                            <Icon type="mail" />
                                            <span>试题管理</span>
                                        </span>
                                    }
                                >
                                    <Menu.Item key="5">添加试题</Menu.Item>
                                    <Menu.Item key="6">试题分类</Menu.Item>
                                    <Menu.Item key="7">查看试题</Menu.Item>
                                    {/* <Menu.Item key="8">Option 8</Menu.Item> */}
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
                        </div>
                        </Sider>
                        <Content></Content>
                    </Layout>
                </Layout>
           
        );
    }
}

export default Home;