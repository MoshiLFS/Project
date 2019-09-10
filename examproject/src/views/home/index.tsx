import * as React from 'react';
import { Menu, Icon, Button, Layout, Switch,Table, Avatar} from 'antd';
import { NavLink} from 'react-router-dom';
import Routerview from "../../routes/routerview";
import routers from '../../routes/config'

import "./index.css";
const { SubMenu } = Menu;


const { Header, Content, Sider } = Layout;

interface Props{
    path:any,
}

class Home extends React.Component<Props> {
    state = {
        collapsed: false,  routers: routers[0].children
    };   
  toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    public render() {
        console.log('routers..................111111111111111111...',this.props)
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
                                {
                                    this.state.routers && this.state.routers.map((item: any,index: any)=>{
                                       return item.title ? <SubMenu
                                       key={index}
                                       title={
                                           <span>
                                               <Icon type="mail" />
                                               <span>{item.title}</span>
                                           </span>
                                       }
                                   >
                                       {/* <Menu.Item ><NavLink to="/home/add">添加试题</NavLink></Menu.Item> */}
                                     {
                                        //  item.children ? item.children.filter() : null
                                        // console.log(item.children,'..................')
                                        // item.children.map((item1:any)=>{
                                        //     console.log(item1)
                                        // })
                                        // <Menu.Item ><NavLink to="/home/add">添加试题</NavLink></Menu.Item>
                                        
                                       
                                        item.children.map((item:any, index: any)=>{ 
                                            return <Menu.Item ><NavLink to={item.path}>{item.title}</NavLink></Menu.Item>
                                        }) 
                                      
                                     }
                                       
                                   </SubMenu> : null
                                    })
                                }
                                
                            </Menu>
                        </div>
                        </Sider>
                        <Content>
                            <Routerview routes={this.props.children}></Routerview>
                        </Content>
                    </Layout>
                </Layout>
           
        );
    }
}

export default Home;