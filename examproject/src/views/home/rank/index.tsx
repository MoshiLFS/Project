import * as React from 'react';
import { Table } from 'antd';
<<<<<<< HEAD
import { DndProvider, DragSource, DropTarget } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import update from 'immutability-helper';
import "./index.css";

let dragingIndex = -1;
interface Props {
    isOver: any, connectDragSource: any, connectDropTarget: any, moveRow: any, style: any, className: any, index: number,
}

class BodyRow extends React.Component<Props>{
    render() {
        const { isOver, connectDragSource, connectDropTarget, moveRow, ...restProps } = this.props;
        const style = { ...restProps.style, cursor: 'move' };

        let { className } = restProps;
        if (isOver) {
            if (restProps.index > dragingIndex) {
                className += ' drop-over-downward';
            }
            if (restProps.index < dragingIndex) {
                className += ' drop-over-upward';
            }
        }

        return connectDragSource(
            connectDropTarget(<tr {...restProps} className={className} style={style} />),
        );
    }
}

const rowSource = {
    beginDrag(props: { index: number; }) {
        dragingIndex = props.index;
        return {
            index: props.index,
        };
    },
};

const rowTarget = {
    drop(props: { index: any; moveRow: (arg0: any, arg1: any) => void; }, monitor: { getItem: { (): { index: any; }; (): { index: any; }; }; }) {
        const dragIndex = monitor.getItem().index;
        const hoverIndex = props.index;

        // Don't replace items with themselves
        if (dragIndex === hoverIndex) {
            return;
        }

        // Time to actually perform the action
        props.moveRow(dragIndex, hoverIndex);

        // Note: we're mutating the monitor item here!
        // Generally it's better to avoid mutations,
        // but it's good here for the sake of performance
        // to avoid expensive index searches.
        monitor.getItem().index = hoverIndex;
    },
};

const DragableBodyRow = DropTarget('row', rowTarget, (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
}))(
    DragSource('row', rowSource, connect => ({
        connectDragSource: connect.dragSource(),
    }))(BodyRow),
);

const columns = [
    {
        title: '类型ID',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '类型名称',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '操作',
        dataIndex: '操作',
        key: '操作',
    },
];

class Rank extends React.Component {
    state = {
        data: [
            {
                key: '1',
                name: 'John Brown',
                age: '简答题',
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                age: '代码阅读题',
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: '代码补全',
                address: 'Sidney No. 1 Lake Park',
            },
        ],
    };

    components = {
        body: {
            row: DragableBodyRow,
        },
    };

    moveRow = (dragIndex: number, hoverIndex: number) => {
        const { data } = this.state;
        const dragRow = data[dragIndex];

        this.setState(
            update(this.state, {
                data: {
                    $splice: [[dragIndex, 1], [hoverIndex, 0, dragRow]],
                },
            }),
        );
    };

    render() {
        return (
            <DndProvider backend={HTML5Backend}>
            <p>试题分类</p>
                <Table
                    columns={columns}
                    dataSource={this.state.data}
                    components={this.components}
                    onRow={(record, index) => ({
                        index,
                        moveRow: this.moveRow,
                    })}
                />
            </DndProvider>
        );
    }
}
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
