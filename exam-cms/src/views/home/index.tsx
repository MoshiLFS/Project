import * as React from 'react'

import { Icon,Menu} from 'antd';
import '../home/index.css';
import { NavLink } from 'react-router-dom';
const { SubMenu } = Menu;

class Home extends React.Component {
  public state = {
    current: '1',
    theme: 'dark'
   
  };

  public changeTheme = (value: any) => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };

  public handleClick = (e: { key: any; }) => {

    this.setState({
      current: e.key,
    });
  };

  public render() {
    return (
      <div>
      
        <Menu
        //   theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
         <div className="div">
         <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1551624718911&di=4a7004f8d71bd8da84d4eadf1b59e689&imgtype=0&src=http%3A%2F%2Fimg105.job1001.com%2Fupload%2Falbum%2F2014-10-15%2F1413365052_95IE3msH.jpg" alt=""/> 
         </div>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="mail" />
                <span>试题管理</span>
              </span>
            }
          >
            <Menu.Item key="1"><NavLink to='/home/test'>添加试题</NavLink></Menu.Item>
            <Menu.Item key="2">考试分类</Menu.Item>
            <Menu.Item key="3">查看试题</Menu.Item>
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
            <Menu.Item key="5">添加用户</Menu.Item>
            <Menu.Item key="6">用户展示</Menu.Item>
            
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="setting" />
                <span>考试管理</span>
              </span>
            }
          >
            <Menu.Item key="9">添加考试</Menu.Item>
            <Menu.Item key="10">试卷管理</Menu.Item>
      
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="setting" />
                <span>班级管理</span>
              </span>
            }
          >
            <Menu.Item key="9">添加考试</Menu.Item>
            <Menu.Item key="10">试卷管理</Menu.Item>
          
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default Home