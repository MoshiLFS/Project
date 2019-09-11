import * as React from 'react';
import "./index.css";
import { inject,observer } from "mobx-react";
import { Table, Divider, Tag, Pagination  } from 'antd';

const data = [];

const columns = [
    {
        title: '班级名',
        dataIndex: 'name',
        key: 'name',
        
    },
    {
        title: '课程名称',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '阅卷状态',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '课程名称',
        key: 'tags',
        dataIndex: 'tags',
    },
    {
        title: '成材率',
        key: 'action',
        dataIndex: 'action',
    },
    {
        title: '操作',
        key: 'action1',
        dataIndex: 'action1',
    }
];
// function showTotal(total:any) {
//     return `Total ${total} items`;
// }

interface Props {
    special: any,
    result: any
}
@inject('special')
@observer
class Special extends React.Component<Props> {
    state = {
        list: []
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const result = await this.props.special.special();
        this.setState({
            list: result.data
        })
    }
    render() {
        const { list } = this.state;
        console.log(list)
        const data = list.map((item: any, index) => {
            return {
                name: item.grade_name,
                age: item.subject_text,
                address:'' ,
                tags:item.subject_text,
                action: item.room_text,
                action1:'批卷'
            }
        })
        return (
            <div className="specialwrap">
                <h2>特批班级</h2>
                <div className="specialbox">
                    <div className="bbox">
                        <Table columns={columns} dataSource={data} />
                        <div>
                            {/* <Pagination size="small" total={50} /> */}
                            {/* <Pagination size="small" total={50} showSizeChanger showQuickJumper /> */}
                            {/* <Pagination size="small" total={50} showTotal={showTotal} /> */}
                        </div>
                    </div>
                   
                </div>
              
            </div>
            
        );
    }
}

export default Special;