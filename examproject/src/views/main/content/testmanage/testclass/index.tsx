import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { Table, Modal, Button } from 'antd';
import './index.css'

interface Props {
    question: any
}
@inject('question')
@observer
class testclass extends React.Component<Props>{
    state = {
        data: [],
        columns : [
            {
                title: '类型ID',
                dataIndex: 'questions_type_id',
                render: (text: any) => <a>{text}</a>,
            },
            {
                title: '类型名称',
                dataIndex: 'questions_type_text',
            },
            {
                title: '操作',
                dataIndex: 'address',
            },
        ],
        visible: false,
        msg:'请输入类型名称'
    }

    // 对话框
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e:any) => {
        let str=Math.floor(Math.random()*(111 - 1) + 1)+'wsj'
        let obj={
            text:this.state.msg,
            sort:str
        }
        console.log(obj,'oobj')
        this.addTest(obj)
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e:any) => {
        this.setState({
            visible: false,
        });
    };

    render() {
        // console.log(this.props.question, 'prosp---testclass')
        return (
            <div className="testclass">
                <div className="header">
                    <h2>
                        试题分类
                    </h2>
                </div>
                <div className="section">
                     {/* 对话框 */}
                    <div className="btns">
                        <Button type="primary" size="large" onClick={this.showModal}>
                            + 添加类型
                        </Button>
                    </div>
                    <Modal title="创建新类型" visible={this.state.visible} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <input className="inp" type="text" value={this.state.msg} onChange={(e)=>{
                            this.setState({
                                msg:e.target.value
                            })
                        }}/>
                    </Modal>
                    {/* 表格 */}
                    <Table columns={this.state.columns} dataSource={this.state.data}/>
                </div>
            </div>
        )
    }
    // 获取试题分类数据
    public getTest = async () => {
        let list = await this.props.question.getTestion()
        console.log(list,'list')
        if(list.code==1){
            list.data.map((itm:any,ind:any)=>{itm.key=ind})
            this.setState({
                data:list.data
            })
        }else{
            console.log(list,'list')
        }
    }
    // 添加类型
    public addTest=async (obj:object)=>{
        let list=await this.props.question.addTestLei(obj)
        console.log(list)
        if (list.code==1) {
            this.getTest()
        } else {
            console.log('添加失败')
        }
    }
    componentDidMount() {
        this.getTest()
    }
}
export default testclass;