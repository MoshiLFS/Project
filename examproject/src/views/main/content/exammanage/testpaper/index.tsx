import * as React from 'react';
import { Button, Drawer, Modal } from 'antd';
import './index.css';
const { confirm } = Modal;
import { observer, inject } from 'mobx-react';

interface Props {
  location: History,
  deleteExam: any,
  history:any
}

@inject('deleteExam')
@observer

class TestPaper extends React.Component<Props> {
  state = {
    visible: false
  };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };
  showConfirm = () => {
    let that = this
    confirm({
      title: '确认提示',
      content: '是否要删除该题目',
      okText: '确认',
      cancelText: '取消',
      maskStyle: {
        background: 'rgba(0,0,0,.6)'
      },
      async onOk() {
        const result = await that.props.deleteExam.deleteExam()
        console.log(result, "删除")
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  Submit=()=>{
    // const { data } = this.props.location.state
    // this.props.history.push({pathname:"/main/examlist",state:{data}})
    this.props.history.push({pathname:"/main/examlist"})
  }
  render() {
    const { data } = this.props.location.state
    return (
      <div className='testPaper'>
        <h1 className='title'>创建试卷</h1>
        <div className="con">
          <div className='Left'>
            <Button onClick={this.showDrawer} className='add'>
              添加试题
                    </Button>
            <Drawer
              title="Basic Drawer"
              placement="right"
              closable={false}
              onClose={this.onClose}
              visible={this.state.visible}
            >
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
            </Drawer>
          </div>
          <div className="test">
            <h3>{data.title}</h3>
            <h5>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</h5>
            <div className='ques'>
              {
                data.question && data.question.length ?
                  data.question.map((item: any) =>
                    <div className="question_item" key={item.exam_id}>
                      <ul className="name_left">
                        <li>1：{item.title}</li>
                        <li>{item.questions_stem}</li>
                      </ul>
                      <div className='btn_right'>
                        <a onClick={this.showConfirm}>删除</a>
                      </div>
                    </div>
                  )
                  : null
              }
            </div>
          </div>
          <div className="build">
            <Button className='build_btn' type="primary" onClick={this.Submit}>创建试卷</Button>
          </div>
        </div>
      </div>
    )
  }
}

export default TestPaper;