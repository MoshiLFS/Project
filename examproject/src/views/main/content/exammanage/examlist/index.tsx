import * as React from 'react';
import { Table } from 'antd';
import { observer, inject } from 'mobx-react';
import './index.css';
const data=[
  {
    name:''
  }
];
const columns = [
  {
    title: '试卷信息',
    key:'title',
    dataIndex: 'title',
  },
  {
    title: '班级',
    key:'grade_name',
    dataIndex: 'grade_name',
  },
  {
    title: '创建人',
    key:'user_name',
    dataIndex: 'user_name',
  },
  {
    title: '开始时间',
    key:'start_time',
    dataIndex:'start_time',
  },
  {
    title: '结束时间',
    key:'end_time',
    dataIndex: 'end_time',
  },
  {
    title: '操作',
    key:'action',
    dataIndex: '详情',
  }
];

interface Props {
  examList: any
}

@inject('examList')
@observer

class Examlist extends React.Component<Props>{
  // constructor(props:any) {
  // super(props)       
  // }
  state = {
    list: []
  }
  componentDidMount() {
    this.getList()
  }
  getList = async () => {
    const { exam } = await this.props.examList.examList();
    this.setState({
      list: exam
    })
    console.log(this.state.list, "试卷列表")
  }
  render() {
    const { list } = this.state
    return (
      <div className='examlist'>
        <h1 className='title'>试卷列表</h1>
        <div className='search common'>查询</div>
        <div className='list common'>
          <h4 className='examList'>试卷列表</h4>
          <Table  className='table'  columns={columns} dataSource={list} size='middle' style={{height:'200px' }}  />
        </div>
      </div>
    )
  }
}

export default Examlist;