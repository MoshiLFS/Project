import * as React from 'react';
import { Table,Modal, Button } from 'antd';
// import question from "../../../store/index";
import "./index.css";

import { inject, observer } from 'mobx-react';
const columns = [
    {
        title: '类型ID',
        dataIndex: 'name',
    },
    {
        title: '类型名称',
        dataIndex: 'age',
    },
    {
        title: '操作',
        dataIndex: '',
    },
];
const data = [];
interface Props {
    getQuestionsType: any,
    addtype:any,
    result: any
}

@inject('getQuestionsType','addtype')
@observer
class Rank extends React.Component<Props>{
     state = {
        list: [],
         ModalText: '请输入类型名称',
         visible: false,
         confirmLoading: false,
         addval:""
    }
  componentDidMount() {
      let list = this.props.addtype.addtype()
      console.log(list,'list')
        this.getList()
    }
    getList = async () => {
         const result = await this.props.getQuestionsType.getQuestionsType();
        this.setState({
             list: result.data
        })
    }
    addtype() {
        // console.log(111)  
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = () => {
        let str=Math.floor(Math.random()*(111-1)+1)+'a'
      let list = this.props.addtype.addtype({
           text:this.state.addval,
           sort: str
       })
       console.log(list,'list')
        this.setState({
            ModalText: 'The modal will be closed after two seconds',
            confirmLoading: true,
        });
        setTimeout(() => {
            this.setState({
                visible: false,
                confirmLoading: false,
            });
        }, 2000);
    };

    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
            visible: false,
        });
    };
   render() {
       const { list, visible, confirmLoading, ModalText,addval} =this.state;
        // console.log(list)
        const data = list.map((item:any,index)=>{
            return{
                name: item.questions_type_id,
                age: item.questions_type_text
            }
        })
        return (
            <>
            <div className="rankbox">
                <h2>试题分类</h2>
                <div className="add">
                    <div className="addtype">
                            <Button type="primary" onClick={this.showModal}>
                                + 添加类型
                            </Button>
                        {/* <span>+ 添加类型</span> */}
                        <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                </div>
            </div>
            <div>
                <Modal
                    title="创建新类型"
                    visible={visible}
                    onOk={this.handleOk}
                    confirmLoading={confirmLoading}
                    onCancel={this.handleCancel}
                >
                        <input placeholder={ModalText} value={addval} onChange={(e)=>{
                            this.state.addval=e.target.value
                            this.setState({})
                    }}/>
                </Modal>
            </div>
            </>
        )
    }
}
 export default Rank;
