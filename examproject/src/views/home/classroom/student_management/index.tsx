import * as React from 'react'
import { Layout, Input, Col, Row, Button,Select, InputNumber, Pagination, DatePicker, AutoComplete, Cascader, Table } from 'antd';
import {getAllClass, getAllClassName, getAllStudent} from '../../../../service/question'
import './static/index.min.css'

//表格相关
const columns = [
  { title: '姓名', dataIndex: 'name', key: 'name' },
  { title: '学号', dataIndex: 'age', key: 'age' },
  { title: '班级', dataIndex: 'class', key: 'class' },
  { title: '教室', dataIndex: 'jiaoshi', key: 'jiaoshi' },
  { title: '密码', dataIndex: 'password', key: 'password' },
  {
    title: '操作',
    dataIndex: '',
    key: 'x',
    render: () => <span>删除</span>,
  },
];

const data = [
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    jiaoshi: 'New York No. 1 Lake Park',
    class : 10,
    password :123321
  },
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    jiaoshi: 'New York No. 1 Lake Park',
    class : 10,
    password :123321
  },
  {
    key: 1,
    name: 'John Brown',
    age: 32,
    jiaoshi: 'New York No. 1 Lake Park',
    class : 10,
    password :123321
  },
];

// getAllStudent().then(res=>{
//   console.log('res.........', res);
// })



//
//分页相关
function onShowSizeChange(current: any, pageSize: any) {
  console.log(current, pageSize);
}
function onChange(pageNumber: any) {
  console.log('Page: ', pageNumber);
}
//
const InputGroup = Input.Group;
const { Option } = Select;

const options = [{}];
const className = [{}]
getAllClass().then(res=>{
    // console.log('getallclass ......................', res.data)
    res.data.map((item: any)=>options.push({
        value: item.room_text,
        label: item.room_text,}))
})

getAllClassName().then(res=>{
    // console.log('getallclass ......................', res.data)
    res.data.map((item: any)=>className.push({
        value: item.grade_name,
        label: item.grade_name,}))
})

export default class index extends React.Component {

    state = {
        dataSource: [],
      };
    
      handleChange = (value: any) => {
        this.setState({
          dataSource:
            !value || value.indexOf('@') >= 0
              ? []
              : [`${value}@gmail.com`, `${value}@163.com`, `${value}@qq.com`],
        });
      };

    render() {
        return (
            <Layout>
                <div className="classRoom">
                    <h2>学生管理</h2>
                    <div>
        <InputGroup size="large">
            <div className="goCenter">
              <Col span={5}>
                <Input defaultValue="0571" />
              </Col>
      
              <Cascader style={{ width: '20%' }} options={options} placeholder="请选择教室号" />
              <Cascader style={{ width: '20%' }} options={className} placeholder="请选择班级名" />
              <Button type="primary">搜索</Button>
              <Button type="primary">重置</Button>
            </div>
            <Table
              columns={columns}
              expandedRowRender={record => <p style={{ margin: 0 }}></p>}
              dataSource={data}
            />
            <div>
            {/* <Pagination
              showSizeChanger
              onShowSizeChange={onShowSizeChange}
              defaultCurrent={3}
              total={500} */}
            />
            <br />
            {/* <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={onChange} /> */}
    <br />
          </div>
        </InputGroup>
        
        
      </div>
                </div>
            </Layout>
        )
    }
}
