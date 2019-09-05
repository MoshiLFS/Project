import * as React from 'react';
import { Layout, Avatar, Menu, Icon, Button } from 'antd';
import { observer, inject } from 'mobx-react';
import RouterView from '../../router/RouterView'
import 'antd/dist/antd.css'
import './index.css'
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;


@inject('question')
@observer
class LoginPage extends React.Component {
  constructor(props: any) {
    super(props);
    const { getQuestion } = props.question;
    console.log('props.............router', props)
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

  handleClick(path: string) {
    let { history }: any = this.props;
    history.push(path)
  }


  public render() {
    console.log('this.props.......', this.props.children)
    let { children }: any = this.props;
    return <Layout>
      <Header>
        <img src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg' />
        <div>
          <Avatar size="large" icon="user" /><span>chenmanjie</span>
        </div>
      </Header>
      <Layout>
        <Sider>
          <div style={{ width: 100 + '%' }}>
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

              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="mail" />
                    <span>试题管理</span>
                  </span>
                }
              >
                <Menu.Item key="1" onClick={this.handleClick.bind(this, '/main/oneView')}>
                  <Icon type="pie-chart" />
                  <span>添加试题</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={this.handleClick.bind(this, '/main/twoView')}>
                  <Icon type="desktop" />
                  <span>试题分类</span>
                </Menu.Item>
                <Menu.Item key="3" onClick={this.handleClick.bind(this, '/main/threeView')}>
                  <Icon type="inbox" />
                  <span>查看试题</span>
                </Menu.Item>
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
                <Menu.Item key="4" onClick={this.handleClick.bind(this, '/main/oneView')}>
                  <Icon type="pie-chart" />
                  <span>添加试题</span>
                </Menu.Item>
                <Menu.Item key="5" onClick={this.handleClick.bind(this, '/main/twoView')}>
                  <Icon type="desktop" />
                  <span>试题分类</span>
                </Menu.Item>
                <Menu.Item key="6" onClick={this.handleClick.bind(this, '/main/threeView')}>
                  <Icon type="inbox" />
                  <span>查看试题</span>
                </Menu.Item>
              </SubMenu>
            </Menu>
          </div>

        </Sider>

        <Content>
          <RouterView routes={children} />
        </Content>
      </Layout>
    </Layout>
  }
}

export default LoginPage;