import * as React from 'react';
import { Table } from 'antd';
<<<<<<< HEAD

import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
=======
// import question from "../../../store/index";
>>>>>>> lfs
import "./index.css";

// import { inject, observer } from 'mobx-react';
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
    result: any
}

// @inject('getQuestionsType')
// @observer
class Rank extends React.Component<Props>{
     state = {
        list: []
    }
  componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const result = await this.props.getQuestionsType.getQuestionsType();
        this.setState({
            list: result.data
        })
    }

  public render() {
       const {list} =this.state;
        console.log(list)
        const data = list.map((item:any,index)=>{
            return{
                name: item.questions_type_id,
                age: item.questions_type_text
            }
        })
        return (
            <div className="rankbox">
                <h2>试题分类</h2>
                <div className="add">
                    <div className="addtype">
                        <span>+ 添加类型</span>
                        <Table columns={columns} dataSource={data} size="middle" />
                    </div>
                </div>
            </div>
        )
    }
}
<<<<<<< HEAD
export default Rank;
=======
 export default Rank;
>>>>>>> lfs
