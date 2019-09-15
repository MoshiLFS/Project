import * as React from 'react'
import { Menu, Icon, Switch } from 'antd';
// 引用 侧边栏的 css样式
import './index.css'
// 引侧边栏的 数组
import topicArr from './topic'

const { SubMenu } = Menu;

interface Props{
    history:any,
    path:object
}

// class Sideedge extends React.Component {
    class Sideedge extends React.Component<Props> {
    state: any = {
        theme: 'dark',
        current: '1',
    };
    handleClick = (e: any) => {
        // console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };
    render() {
        return (
            <div className="sideedge">
                <Menu
                    theme={this.state.theme}
                    onClick={this.handleClick}
                    style={{ width: 256 }}
                    defaultOpenKeys={['sub1']}
                    selectedKeys={[this.state.current]}
                    mode="inline"
                >
                    {
                        topicArr.map((v:any,i)=>{
                            return <SubMenu
                                        key={i}
                                        title={
                                            <span>
                                                <Icon type="setting" />
                                                <span>{v.ClassA}</span>
                                            </span>
                                        }
                                    >
                                        {v.ClassB.length&&
                                            v.ClassB.map((itm:any)=>{
                                                return <Menu.Item key={itm.branchId} onClick={()=>{
                                                    // 二级路由跳转
                                                    this.props.history.push(itm.branchUrl)
                                                }}>
                                                    {itm.branchNmae}
                                                </Menu.Item>
                                            })
                                        }
                                    </SubMenu>
                        })
                    }
                </Menu>
            </div>
        )
    }
}
export default Sideedge;