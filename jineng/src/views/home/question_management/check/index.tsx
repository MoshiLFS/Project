import * as React from 'react';
import { inject, observer } from 'mobx-react';
import { Select,Button } from 'antd';
import "./index.css";

const { Option } = Select;

function onChange(value:any) {
    console.log(`selected ${value}`);
}

function onBlur() {
    console.log('blur');
}

function onFocus() {
    console.log('focus');
}

function onSearch(val:any) {
    console.log('search:', val);
}

interface Props {
    question: any,
    result: any
}

@inject('question')
@observer
class Check extends React.Component<Props>{
        state = {
         list: []
     }
    componentDidMount() {
         this.getList()
     }
     getList = async () => {
        //   console.log(this.props.question)
        //    const { getQuestion } = this.props.question
        //   getQuestion()
         const result = await this.props.question.getQuestion()
         this.setState({
             list: result.data
         })
     }
    render() {
        const { list } = this.state;
        console.log(list)
        return (
            <div className="wrapbox">
                <div className="top">
                    查看试题
                </div>
                <div className="center">
                <div className="content">
                    <div className="classtype">
                        <ul>
                            <span>课程类型:</span>
                            <li>All</li>
                            <li>JavaScript上</li>
                            <li>JavaScript下</li>
                            <li>模块化开发</li>
                            <li>移动端开发</li>
                            <li>node基础</li>
                            <li>组件化开发(vue)</li>
                            <li>渐进式开发(react)</li>
                            <li>项目实战</li>
                            <li>JavaScript高级</li>
                            <li>node高级</li>
                        </ul>
                    </div>
                    <div className="examtype">
                       <div>
                            考试类型:<Select
                                showSearch
                                style={{ width: 200 }}
                                // placeholder="Select a person"
                                optionFilterProp="children"
                                onChange={onChange}
                                onFocus={onFocus}
                                onBlur={onBlur}
                                onSearch={onSearch}
                            // filterOption={(input, option) =>
                            //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            // }
                            >
                                <Option value="jack">周考一</Option>
                                <Option value="lucy">周考二</Option>
                                <Option value="tom">周考三</Option>
                                <Option value="tom">月考</Option>
                            </Select>
                       </div>
                        <div>题目类型:<Select
                            showSearch
                            style={{ width: 200 }}
                            // placeholder="Select a person"
                            optionFilterProp="children"
                            onChange={onChange}
                            onFocus={onFocus}
                            onBlur={onBlur}
                            onSearch={onSearch}
                        // filterOption={(input, option) =>
                        //     option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                        // }
                        >
                            <Option value="jack">简答题</Option>
                            <Option value="lucy">代码阅读题</Option>
                            <Option value="tom">代码补全</Option>
                            <Option value="tom">修改bug</Option>
                            <Option value="tom">手写代码</Option>
                        </Select>
                            </div>
                        <Button type="primary" icon="search">
                            查询
                        </Button>
                    </div>
                </div>
                </div>
                <div className="bottom">
                   {
                       list&&list.map((item:any)=>{
                           return <div className="box">
                               <div className="left">
                                   <span>{item.title}</span>
                                   <div className="spanbox">
                                       <span>{item.questions_type_text}</span>
                                       <span>{item.subject_text}</span>
                                       <span>{item.exam_name}</span>
                                   </div>
                                   <span>dingshaoshan 发布</span>
                               </div>
                               <span>编辑</span>
                           </div>
                       })
                   }
                    {/* <div className="box">
                        <div className="left">
                            <span>机器人归位</span>
                            <div className="spanbox">
                                <span>代码补全</span>
                                <span>JavaScript上</span>
                                <span>周考1</span>
                            </div>
                            <span>dingshaoshan 发布</span>
                        </div>
                        <span>编辑</span>
                    </div> */}
                </div>
            </div>
        );
    }
}

export default Check;