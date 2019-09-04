import * as React from 'react';
import {Layout, Avatar, Menu, Icon, Button} from 'antd';
import {observer, inject} from 'mobx-react';
import 'antd/dist/antd.css'
import './index.css'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

@inject('question')
@observer
class LoginPage extends React.Component{
    constructor(props: any){
        super(props);
        const {getQuestion} = props.question;
        getQuestion();
    }
    state = {
        collapsed: false,
      };
    
      toggleCollapsed = () => {
        this.setState({
          collapsed: !this.state.collapsed,
        });
      };



    public render(){
        return <Layout>
            <Header>
                <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg'/>
                <div>
                    <Avatar size="large" icon="user" /><span>chenmanjie</span>
                </div>
            </Header>
            <Layout>
                <Sider>
                <div style={{ width: 100+'%'}}>
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
          <Menu.Item key="1">
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
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>Navigation One</span>
              </span>
            }
          >
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <Menu.Item key="7">Option 7</Menu.Item>
            <Menu.Item key="8">Option 8</Menu.Item>
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
        </Menu>
      </div>

                </Sider>
                
                <Content>333</Content>
            </Layout>
        </Layout>
    }
}

export default LoginPage;