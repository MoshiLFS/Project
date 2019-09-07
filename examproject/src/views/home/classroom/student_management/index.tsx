import * as React from 'react'
import { Layout, Input, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader} from 'antd';
import {getAllClass, getAllClassName} from '../../../../service/question'
import './static/index.min.css'


const InputGroup = Input.Group;
const { Option } = Select;

const options = [{}];
const className = [{}]
getAllClass().then(res=>{
    console.log('getallclass ......................', res.data)
    res.data.map((item: any)=>options.push({
        value: item.room_text,
        label: item.room_text,}))
})

getAllClassName().then(res=>{
    console.log('getallclass ......................', res.data)
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
          
            <Col span={5}>
              <Input defaultValue="0571" />
            </Col>
    
            <Cascader style={{ width: '20%' }} options={options} placeholder="请选择教室号" />
            <Cascader style={{ width: '20%' }} options={className} placeholder="请选择班级名" />
    
        </InputGroup>
        
        
      </div>
                </div>
            </Layout>
        )
    }
}
