import * as React from 'react';
import { Button,Table} from 'antd';
import "./index.css";
import { inject, observer } from 'mobx-react';

const data = [];
const columns = [
    {
        title: '用户名',
        dataIndex: 'name',
    },
    {
        title: '密码',
        dataIndex: 'age',
    },
    {
        title: '身份',
        dataIndex: 'address',
    },
];
interface Props {
    showdata: any,
    result: any
}
@inject('showdata')
@observer
class Show extends React.Component<Props> {
    state = {
        list: []
    }
    componentDidMount() {
        this.getList()
    }
    getList = async () => {
        const result = await this.props.showdata.showdata();
        this.setState({
            list: result.data
        })
    }
    render() {
        const { list } = this.state;
        console.log(list)
        const data = list.map((item: any, index) => {
            return {
                name: item.user_name,
                age: item.user_pwd,
                address: item.identity_text
            }
        })
        return ( 
                <div className="showbox">
                    <h2>用户展示</h2>
                    <div className="uls">
                        <ul className="ul">
                            <Button type="primary" ghost>
                                用户数据
                        </Button>
                            <Button >
                                身份数据
                        </Button>
                            <Button>
                                api接口权限
                        </Button>
                            <Button>
                                身份和api接口关系
                        </Button>
                            <Button>
                                视图接口权限
                        </Button>
                            <Button>
                                身份和视图权限关系
                        </Button>
                        </ul>
                    </div>
                    <div>
                        <h2>用户数据</h2>
                        <div className="userbox">
                            <div className="tabbox">
                                <Table columns={columns} dataSource={data} size="middle" />
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default Show;