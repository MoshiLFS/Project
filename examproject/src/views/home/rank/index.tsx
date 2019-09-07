import * as React from 'react';
import { Table } from 'antd';
<<<<<<< HEAD
<<<<<<< HEAD
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
=======
// import question from "../../../store/index";
>>>>>>> 6ebd4bb1571a63f79bfac9501e2e7659033756e6
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
    result: any
}

@inject('getQuestionsType')
@observer
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

   render() {
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
import "./index.css";

import { inject, observer } from 'mobx-react';
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Age',
        dataIndex: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
    },
];
interface Props {
    question: any,
    result: any
}
// interface Props {
//     path: any
// }

@inject('question')
@observer
class Rank extends React.Component<Props> {
    // constructor(props: any) {
    //     super(props)
    //     this.getList()
    // }
    public state = {
        list: []
    }
    public componentDidMount() {
        this.getList()
        console.log('list.....................？？？',this.state.list)
    }
    public getList = async () => {
        // const { getQuestion } = this.props.question
        // getQuestion()
        const result = await this.props.question.getQuestion()
        this.setState({
            list: result
        })
    }

    public render() {
        // const {list} =this.state;
        // console.log(list)
        return (
            <div>
                <Table columns={columns} dataSource={data} size="middle" />
                <h4>Small size table</h4>
                <Table columns={columns} dataSource={data} size="small" />
            </div>
        )
    }
}

export default Rank;
>>>>>>> lfs
=======
 export default Rank;
>>>>>>> 6ebd4bb1571a63f79bfac9501e2e7659033756e6
