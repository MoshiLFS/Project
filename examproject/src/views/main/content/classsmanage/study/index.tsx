import * as React from 'react';
import { Table,Input,Select ,Button, Radio, Icon} from 'antd';
import {observer,inject} from 'mobx-react'
import './index.css'
const { Option } = Select;
interface Props{
  question:any
}
let newData:Array<object>=[];
@inject('question')
@observer
class Study extends React.Component<Props>{
    constructor(props:any) {
    super(props)       
    }
    state={
      data:[],
      columns :[
        { title: '姓名', dataIndex: 'student_name', key: 'student_name' },
        { title: '学号', dataIndex: 'student_id', key: 'student_id' },
        { title: '班级', dataIndex: 'grade_name', key: 'grade_name' },
        { title: '教室', dataIndex: 'room_text', key: 'room_text' },
        { title: '密码', dataIndex: 'student_pwd', key: 'student_pwd' },
        { title: '操作', key: 'operation', render: (text:any) => <a onClick={()=>{
          let id = text.student_id
          this.removeStudyFn(id)
        }}>删除</a> },
      ],
      roomdata:[],//教室号
      classesdata:[],//班级名
      studyStr:'',
      roomStr:"",
      classesStr:""
    }
    handleChange=(str:any,value?:any)=> {
      console.log(`${str}----${value}`);
      if (str=="ROOM") {
        this.state.roomStr=value
        this.setState({})
      } else {
        if (str=="CLASSES") {
          this.state.classesStr=value
          this.setState({})
        }
      }
    }
    /**
     * 筛选 搜索
     */
    searchFn() {
      let list = newData.filter((itm:any,ind:any)=>{
          if (this.state.studyStr!==''&&this.state.roomStr==''&&this.state.classesStr=='') {
              return itm.student_name==this.state.studyStr
          }
          else if (this.state.studyStr!==''&&this.state.roomStr!==''&&this.state.classesStr=='') {
            return itm.student_name==this.state.studyStr&&itm.room_text==this.state.roomStr
          }
          else if (this.state.studyStr!==''&&this.state.roomStr!==''&&this.state.classesStr!=='') {
            return itm.student_name==this.state.studyStr&&itm.room_text==this.state.roomStr&&itm.grade_name==this.state.classesStr  
          }
          else if (this.state.studyStr==''&&this.state.roomStr!==''&&this.state.classesStr!=='') {
            return itm.room_text==this.state.roomStr&&itm.grade_name==this.state.classesStr  
          }
          else if (this.state.studyStr==''&&this.state.roomStr==''&&this.state.classesStr!=='') {
            return itm.grade_name==this.state.classesStr  
          }
          else if (this.state.studyStr==''&&this.state.roomStr!==''&&this.state.classesStr=='') {
            return itm.room_text==this.state.roomStr
          }
          else {
             return true
          }
      })
     console.log(list,'list')
     this.setState({
       data:list
     })
    }
    render(){
        return(
            <div className="study">
                <h2> 
                    学生管理
                </h2>
                <nav>

                  <Input placeholder="请输入学生姓名" style={{ width:170,marginRight:20 }} onChange={(e:any)=>{
                    this.state.studyStr=e.target.value
                    this.setState({})
                    // console.log(this.state.studyStr)
                  }}/>

                  <Select defaultValue="请选择教室号" style={{ width: 170,marginRight:20 }} onChange={this.handleChange.bind(this,'ROOM')}>
                    {this.state.roomdata.length&&
                      this.state.roomdata.map((v:any,i:any)=>{
                        return <Option key={v.room_id} value={v.room_text}>{v.room_text}</Option>
                      })
                    }
                  </Select>

                  <Select defaultValue="班级名" style={{ width: 170,marginRight:20 }} onChange={this.handleChange.bind(this,'CLASSES')}>
                    {
                      this.state.classesdata.length&&
                      this.state.classesdata.map((v:any,i:any)=>{
                        return <Option key={v.grade_id} value={v.grade_name}>{v.grade_name}</Option>
                      })
                    }
                  </Select>

                  <Button type="primary" style={{ width: 100,marginRight:20 }} onClick={this.searchFn.bind(this)}>
                    搜索
                  </Button>

                  <Button type="primary" style={{ width: 100,marginRight:20 }}  onClick={()=>{
                    this.setState({
                      studyStr:null,
                      roomStr:null,
                      classesStr:null
                    })
                  }}>
                    重置
                  </Button>

                </nav>
                <Table columns={this.state.columns} dataSource={this.state.data}/>
            </div>
        )
    } 
    /**
     * 教室号  
     * 班级名
     */
    public getroom=async ()=>{//教室号
      let roomdata=await this.props.question.getRoom();
      if (roomdata.code==1) {
        roomdata.data.map((v:any,i:any)=>{v.key=i})
        this.setState({
          roomdata:roomdata.data
        })
      }
    }
    public getCLasses=async ()=>{//班级名
      let classdata=await this.props.question.getClasses();
      if (classdata.code==1) {
        classdata.data.map((v:any,i:any)=>{v.key=i})
        this.setState({
          classesdata:classdata.data
        })
      }
    }
    /**
     * 获取学生管理 数据
     */
    public getstudy=async()=> {
      let list=await this.props.question.getStudy()
      // console.log( list,' list.data')
      if (list.code==1) {
        list.data.map((v:any,i:any)=>{v.key=i})
        newData=list.data
      this.setState({
        data:newData
      })
      }
      console.log(this.state.data)
    }
    /**
     * removeStudyFn
     * 删除学生数据 方法
     */
    public removeStudyFn=async(obj:object)=> {
        let list = await this.props.question.removeStudy(obj);
        console.log(list)
        if (list.code==1) {
          this.getstudy()
        }
    }
    componentDidMount(){      
      this.getstudy()
      this.getroom()
      this.getCLasses()
    }
}
export default Study;