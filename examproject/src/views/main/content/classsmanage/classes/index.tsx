import * as React from 'react';
import { Table,Modal, Button,Select,Input   } from 'antd';
import {observer,inject} from 'mobx-react'
import './index.css'
const { Option } = Select;
interface Props{
    question:any
}
// 教室号   /manger/room
// 课程名   /exam/subject
@inject('question')
@observer
class Classes extends React.Component<Props>{
    constructor(props:any) {
    super(props)       
    }
    state = {
        data: [],
        columns : [
            { title: '班级名', dataIndex: 'grade_name', key: 'grade_name' },
            { title: '课程名', dataIndex: 'subject_text', key: 'subject_text' },
            { title: '教室号', dataIndex: 'room_text', key: 'room_text' },
            { title: '操作', key: 'operation', render: (text:any) => <p>
            <a onClick={()=>{
                this.showModal(text,"GAI")
            }}>修改</a>
            |
            <a onClick={()=>{
                this.removeClassesFn(text)
            }}>删除</a>
            </p> },
        ],
        visible: false,//弹出框显示隐藏
        grade_id:null,//班级id
        grade_name:'请输入班级名',
        room_id:null,//教室id
        room_text:"请输入教室号",
        subject_id:null,//课程id
        subject_text:"请输入课程名",
        roomData:[],// 教室号数据
        examData:[],//课程名数据
        disabled:false//可否呗选中
    }
    // 对话框
    showModal = (text:any=null,dspl:string) => {
        console.log(text)
        console.log('===================================')
        if(dspl=="GAI"){
            this.setState({
                disabled:true,
                grade_id:text.grade_id,//班级id
                grade_name:text.grade_name,
                room_id:text.room_id,//教室id
                room_text:text.room_text,
                subject_id:text.subject_id,//课程id
                subject_text:text.subject_text,
            })
        }else{
            this.setState({
                disabled:false,
                grade_id:null,//班级id
                grade_name:'请输入班级名',
                room_id:null,//教室id
                room_text:"请输入教室号",
                subject_id:null,//课程id
                subject_text:"请输入课程名",
            })
        }
        this.setState({visible:true})
    };
    // ==============================================
    // 弹出框 确认
    handleOk = (e:any) => {
        // console.log(e,'e')
        this.setState({
            visible: false,
        });
        let obj:any=[]
       
        if (this.state.grade_id) {
            obj={
                grade_id:this.state.grade_id,
                grade_name:this.state.grade_name,
                subject_id:this.state.subject_id,
                room_id:this.state.room_id
            }
            console.log(obj,'obj--87')
            this.upClassesFn(obj)
        } else {
            obj={
                grade_name:this.state.grade_name,
                subject_id:this.state.subject_id,
                room_id:this.state.room_id
            }
            console.log(obj,'obj--96')
            this.addClasses(obj)
        }
        console.log('===================================')
        console.log("grade_id:",this.state.grade_id,'//班级id')
        console.log("grade_name:",this.state.grade_name,'//班级名')
        console.log('===================================')
        console.log("room_id:",this.state.room_id,'//教室id')
        console.log("room_text:",this.state.room_text)
        console.log("subject_id:",this.state.subject_id,'//课程id')
        console.log("subject_text:",this.state.subject_text)
        
    };
    handleCancel = (e:any) => {
        this.setState({
            visible: false,
        });
    };
    // ================================================
    // 下拉框 使用  
    onChange=(str:string,value:any,key:any)=> {
        // console.log(str,'str')
        // console.log(value,'value')
        // console.log(key.key,'key')
        if (str=="ROOM") {
            // console.log('room')
            this.setState({
                room_id:key.key,//教室id
                room_text:value,
            })
        } else {
            if (str=="SUBJECT") {
                // console.log('subject')
                this.setState({
                    subject_id:key.key,//课程id
                    subject_text:value,
                })
            } 
        }
        // console.log('===================================')
        // console.log(" room_id:",this.state.room_id,'//教室id')
        // console.log("room_text:",this.state.room_text)
        // console.log("subject_id:",this.state.subject_id,'//课程id')
        // console.log("subject_text:",this.state.subject_text)
    }
    // ================================================
    render(){
        return(
            <div className="classes">
                <h2> 
                    班级管理
                </h2>
                {/* 对话框 */}
                <div className="classes_zi">

                    <div className="classes_zizi">
                        <div className="btns">
                            <Button type="primary" size="large" onClick={this.showModal.bind(this)}>
                                + 添加班级
                            </Button>
                        </div>
                        <Modal
                            title="添加班级"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <p>班级名：</p>
                        <Input style={{ width: "85%" }} disabled={this.state.disabled}  value={this.state.grade_name} onChange={(e)=>{
                            this.setState({
                                grade_name:e.target.value
                            })
                        }}/>
                        <p>教室号：</p>
                        <Select
                                showSearch
                                style={{ width: "85%" }}
                                placeholder={this.state.room_text}
                                optionFilterProp="children"
                                onChange={this.onChange.bind(this,'ROOM')}
                                filterOption={(input:any, option:any) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    this.state.roomData.length&&
                                    this.state.roomData.map((v:any)=>{
                                        return <Option key={v.room_id} value={v.room_text}>{v.room_text}</Option>
                                    })
                                }   
                            </Select>
                        <p>课程名：</p>
                        <Select
                                showSearch
                                style={{ width: "85%" }}
                                placeholder={this.state.subject_text}
                                optionFilterProp="children"
                                onChange={this.onChange.bind(this,"SUBJECT")}
                                filterOption={(input:any, option:any) =>
                                option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    this.state.examData.length&&
                                    this.state.examData.map((v:any)=>{
                                        return <Option key={v.subject_id} value={v.subject_text}>{v.subject_text}</Option>
                                    })
                                }   
                            </Select>
                        </Modal>
                        <Table columns={this.state.columns} dataSource={this.state.data}/>

                    </div>

                </div>
            </div>
        )
    }
    // 往后台添加班级接口
    public addClasses=async (obj:object)=>{
        console.log('obj',obj,'obj')
        let list =await this.props.question.addClassEs(obj)
        console.log(list,'list-----往后台添加班级接口')
        if (list.code==1) {
            this.getclasses()
        }
    }
    // 修改班级
    public upClassesFn=async (obj:object)=>{
        let list =await this.props.question.upClassEs(obj);
        console.log(list.code,'code')
        if (list.code==1) {
            this.getclasses()
        }   
    }
    // 删除班级
    public removeClassesFn=async (text:any)=> {
        let list=await this.props.question.removeClassEs({'grade_id':text.grade_id})
        if (list.code==1) {
            this.getclasses()
        }
    }
    // 获取课程 的数据
    public getclasses=async ()=>{
        let list = await this.props.question.getClasses()
        if (list.code==1) {
            list.data.map((itm:any,ind:any)=>{
                return itm.key=ind
            })
            this.setState({
                data:list.data
            })
        } else {
            console.log('数据获取失败')
        }
    }
    // select 框的  教室号数据
    public getroom=async ()=>{
        let roomdata=await this.props.question.getRoom();
        this.setState({
            roomData:roomdata.data
        })
    }
    // select 框的  课程名 数据
    public getexam=async ()=>{
        let examData=await this.props.question.getcourse();
        this.setState({
            examData:examData.data
        })
    }
    componentDidMount(){
        this.getclasses()
        this.getroom()
        this.getexam()
    }
}
export default Classes;