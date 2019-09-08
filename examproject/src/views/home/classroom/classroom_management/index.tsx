import * as React from 'react'
import { Layout, Button, Modal, Table, Input, InputNumber, Popconfirm, Form } from 'antd';
import { getAllClass, } from '../../../../service/question'
const { Content } = Layout;

import './static/index.min.css'


const columns = [
    { title: '教室号', dataIndex: 'name1', key: 'name1' },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: () => <span>删除</span>,
    },
  ];
  


  
    
export default class ClassRoomManagement extends React.Component {
    state = { visible: false, data : [{}] };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = (e: any) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    componentDidMount(){
        let nullArr: any = [];
        getAllClass().then(res=>{
            res.data.map((item: any,index: any)=> {
                // this.state.data.push({key:index, name: item.text_room })
                console.log(item.room_text);
                nullArr.push({key:index, name1: item.text_room });
                this.setState({data : nullArr})
            })
          })
    }

    render() {
        return (
            <Layout>
                <div className="classRoom">
                    <h2>教室管理</h2>
                    <div className="classRoom_form">
                        <div className="paddingButton">
                            <Button type="primary" icon='plus' className='addClassRoom' onClick={this.showModal}>
                                添加教室
                            </Button>
                        </div>
                        <Modal
                            title="Basic Modal"
                            visible={this.state.visible}
                            onOk={this.handleOk}
                            onCancel={this.handleCancel}
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                        <Table
                            columns={columns}
                            expandedRowRender={record => <p style={{ margin: 0 }}></p>}
                            dataSource={this.state.data}
                        />
                    </div>
                    
                </div>
            </Layout>
        )
    }
}
