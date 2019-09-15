import * as React from 'react';
import { Table, Modal, Button } from 'antd';
import {observer, inject} from 'mobx-react';
import './index.css'



const data:Array<object> = [];
interface Props {
    question:any
}
@inject('question')
@observer
class Classroom extends React.Component<Props>{
    constructor(props:any) {
    super(props)       
    }
    state = {
        data: [],
        visible: false,
        msg:'请输入类型名称',
        columns : [
            { title: '教室号', dataIndex: 'room_text', key: 'room_id' },
            { title: '操作', key: 'operation', render: (text:any)=>{
                return <a onClick={()=>{
                           this.removeRoomFn(text)
                }} >删除</a>
            } },
          ]
    }
    // 对话框
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleOk = (e:any) => {
        // console.log(e);
        this.addroom({room_text:this.state.msg})
        this.setState({visible: false,});
    };
    handleCancel = (e:any) => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };
    render(){
        // console.log(this.props)
        return(
            <div className="classroom">
                <div className="classroom_zi">
                    <h2>
                        教室管理
                    </h2>
                    <div className="sections">
                        {/* 对话框 */}
                        <div className="btns">
                            <Button type="primary" onClick={this.showModal}>
                                + 添加教室
                            </Button>
                        </div>
                        <Modal
                            title="创建新类型"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
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
            </div>
        )
    }
    // 获取教室数据
    public getroom=async ()=> {
        let list=await this.props.question.getRoom()
        // console.log(list.data,'list')
        if (list.code==1) {
            list.data.map((itm:any,ind:number)=>itm.key=ind)
            this.setState({data:list.data})    
        } else {
            console.log("没有数据")
        }
    }
    // 添加教室接口
    public addroom=async (obj:object)=> {
        let list=await this.props.question.addRoom(obj)
        console.log(list,'list')
        if (list.code==1) {
            this.getroom()
        }
    }
    // 删除教室接口
    public removeRoomFn=async (text:any)=> {
        let list=await this.props.question.removeRoom({'room_id':text.room_id})
        console.log(list,'list')
        if (list.code==1) {
            this.getroom()
        }
    }
    componentDidMount(){
        this.getroom()
    }
}
export default Classroom;