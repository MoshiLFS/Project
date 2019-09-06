import * as React from 'react';
import { Table } from 'antd';
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
