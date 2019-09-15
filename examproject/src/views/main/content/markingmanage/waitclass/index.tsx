import * as React from 'react';
// 待批班级
import { observer, inject } from 'mobx-react';
import { Table} from 'antd';

interface Props{
  question:any,
  history:any
}
@inject("question")
@observer
// getWaitclass   /manger/grade   /exam/student
class Waitclass extends React.Component<Props>{
    constructor(props:any) {
    super(props)       
    }
    state={
      columns : [
        { title: '班级名', dataIndex: 'grade_name', key: 'grade_name' },
        { title: '课程名称', dataIndex: 'subject_text', key: 'subject_text' },
        { title: '阅卷状态', dataIndex: 'zTai', key: 'zTai' },
        { title: '课程名称', dataIndex: 'subject_text', key: 'subject_id' },
        { title: '成材率', dataIndex: 'room_text', key: 'room_text' },
        { title: '操作', key: 'operation', render: (text:any) => <a onClick={()=>{
          console.log(text,'text',this.props.history.push(`/main/Juandetail/${text.grade_id}`))
        }}>批卷</a> },
      ],
      data:[]
    }
    render(){
        return(
            <div className="waitclass">
                waitclass
                <h2> 
                    待批班级
                </h2>
                <Table columns={this.state.columns} dataSource={this.state.data}/>
            </div>
        )
    }
// 待批班级 数据
    public getWaitclass=async ()=>{
      let list = await this.props.question.getWaitclass()
      console.log(list,'list')
      if (list.code==1) {
        list.data.map((v:any,i:any)=>{
          v.key=i
          v.zTai=''
        })
        this.setState({
          data:list.data
        })
      }
    }
    componentDidMount(){
      this.getWaitclass()
    }
}
export default Waitclass