import * as React from 'react'
import { Layout } from 'antd';
import {observer, inject} from 'mobx-react';
import Nav from './header';
import Sideedge from './sider'
import './index.css'
import RouterView from '../../router/RouterViews'
const { Header, Sider, Content } = Layout;

interface Props {
    children: any,
    routes:Array<object>,
    question:any
}
@inject('question')
@observer
class Main extends React.Component<Props> {
    constructor(props:any) {
        super(props);
    }
    state={
        data:[]
    }
    render() {
        // console.log(this.props)
        // console.log(this.obj,'obj')
        let route:any=this.props
        return (
            <Layout>
                <Header className="header">
                    <Nav/>
                </Header>
                <Layout>
                    <Sider>
                        {/* <Sideedge/> */}
                        <Sideedge {...route}/>
                    </Sider>
                    <Content>
                        <RouterView routes={this.props.routes} />
                    </Content>
                </Layout>
            </Layout>
        )
    }
    public getdaata=async ()=>{
        let list=await this.props.question.getQuestion()
        this.setState({
            data:list.data
        })
        // console.log(this.state.data,"jjjj")
    }
    componentDidMount(){
        this.getdaata()
    }
}
export default Main;
