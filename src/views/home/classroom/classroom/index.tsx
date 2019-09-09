import * as React from 'react'
import { Layout, Button, Modal, Table, Input, InputNumber, Popconfirm, Form } from 'antd';
const { Content } = Layout;

import './static/index.min.css'


export default class index extends React.Component {
    state = { visible: false };

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
    render() {
        return (
            <Layout>
                <div className="classRoom">
                    <h2>班级管理</h2>
                    <div className="classRoom_form">
                        <div className="paddingButton">
                            <Button type="primary" icon='plus' className='addClassRoom' onClick={this.showModal}>
                                添加班级
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
                    
                    </div>
                </div>
            </Layout>
        )
    }
}
