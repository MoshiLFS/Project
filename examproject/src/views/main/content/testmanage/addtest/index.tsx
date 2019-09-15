import * as React from 'react'
import { Form, Input, Button, message, Cascader } from 'antd';
import { observer, inject } from "mobx-react";
import Editor from "for-editor";
const { TextArea } = Input
import './index.css'
interface propsInfo {
  question: any,
  form: any,
  history: any,
  login: any,
  user:any
}
@inject(
    "question","user" 
    )
@observer
export class addtest extends React.Component<propsInfo> {
  state = {
    examTypeOptions: [],
    exam_id: "",//考试类型id
    subjectListOptions: [],
    subject_id: "",//课程id
    questionsTypeOptions: [],
    questions_type_id: "",//试题类型id
    user_id: "",
    questions_answer: "",//答案信息
    questions_stem: "",//题目主题,
    title: "",//题目标题
    exam_name: "",//考试类型
    subject_text: "",//课程类型
    questions_type_text: '',//题目类型
  }
  constructor(props: propsInfo) {
    super(props)
    this.getExamType()
    this.getSubjectLxt()
    this.getQuestionsType()
    this.getUserInfo()
  }
  componentDidMount() {
    this.getdefaultQuestion()
  }
  getdefaultQuestion = () => {
    let data: any = window.localStorage.getItem("questionDetail")
    if (data) {
      let defaultQuestion = JSON.parse(data)[0]
      let { title, exam_name, subject_text, questions_type_text, questions_stem, questions_answer } = defaultQuestion
      this.setState({
        title: title, exam_name: exam_name, subject_text: subject_text, questions_type_text: questions_type_text, questions_stem: questions_stem, questions_answer: questions_answer
      })
    }
  }
  getExamType = async () => {
    let result = await this.props.question.getType()
    if (result.code === 1) {
      let examTypeList: any = []
      result.data.map((item: any, index: number) => {
        examTypeList.push({ value: item.exam_name, label: item.exam_name, id: item.exam_id, key: item.exam_id })
        return examTypeList
      })
      this.setState({
        examTypeOptions: examTypeList
      })
    }
  }
  onChangeExamType = (value: any, item: any) => {
    this.setState({
      exam_id: item[0].id
    })
  }
  getSubjectLxt = async () => {
    let result = await this.props.question.getSubjectLxt()
    if (result.code === 1) {
      let subjectList: any = []
      result.data.map((item: any, index: number) => {
        subjectList.push({ value: item.subject_text, label: item.subject_text, id: item.subject_id, key: item.subject_id })
        return subjectList
      })
      this.setState({
        subjectListOptions: subjectList
      })
    }
  }
  onChangeSubjectType = (value: any, item: any) => {
    this.setState({
      subject_id: item[0].id
    })
  }
  getQuestionsType = async () => {
    let result = await this.props.question.questionType()
    if (result.code === 1) {
      let questionsTypeList: any = []
      result.data.map((item: any, index: number) => {
        questionsTypeList.push({ value: item.questions_type_text, label: item.questions_type_text, id: item.questions_type_id, key: item.questions_type_id })
        return questionsTypeList
      })
      this.setState({
        questionsTypeOptions: questionsTypeList
      })
    }
  }
  onChangeQuestionsType = (value: any, item: any) => {
    this.setState({
      questions_type_id: item[0].id
    })
  }
  getUserInfo = async () => {
    let result = await this.props.user.getUserInfoFn()
    if (result.code === 1) {
      this.setState({
        user_id: result.data.user_id
      })
    }
  }
  handleChange = (value: any) => {
    this.setState({
      questions_answer: value
    })
  }
  changeStem = (value: any) => {
    this.setState({
      questions_stem: value
    })
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    let { exam_id, subject_id, questions_type_id, user_id, questions_answer, questions_stem } = this.state
    this.props.form.validateFields(async (err: Error, values: any) => {
      if (!err) {
        let params = {
          exam_id, subject_id, questions_type_id, user_id, questions_answer, questions_stem, title: values.title
        }
        if (exam_id && subject_id && questions_type_id && user_id && questions_answer && questions_stem && values.title) {
          let result = await this.props.question.addQuestionsAction(params)
          if (result.code === 1) {
            message.info(result.msg)
          }
        } else {
          message.error("请将页面填写完整")
        }
      }
    });
  };
  public render() {
    const { getFieldDecorator } = this.props.form;
    const { title, exam_name, subject_text, questions_type_text, examTypeOptions, subjectListOptions, questionsTypeOptions, questions_answer, questions_stem } = this.state
    return (
      <div className="addtest">
        <div className="title">
          添加试题
        </div>
        <div className='formLxt'>
        <Form 
        onSubmit={this.handleSubmit} 
        className="formBox">
          <Form.Item className="formItem">
            <span>
              题目标题
            </span>
            {getFieldDecorator('title', {
              validateTrigger: "onBlur",
              initialValue: title,
              rules: [{ required: true, message: 'Please input questions title!' }]
            })(
              <Input
                placeholder="请输入题目标题，不超过20个字"
                style={{ width: "500px", display: "block", marginTop: "10px" }}
              />,
            )}
          </Form.Item>
          <Form.Item>
            <span>
              题目主题
            </span>
            <Editor value={questions_stem} 
            onChange={this.changeStem} 
            style={{ height: "335px" }}>
            </Editor>
          </Form.Item>
          <Form.Item className="formItem" style={{ width: "176px" }}>
            <span>
              选择考试类型
            </span>
            <Cascader options={examTypeOptions} 
            onChange={this.onChangeExamType} 
            placeholder={exam_name ? exam_name : "选择考试类型"} />
          </Form.Item>
          <Form.Item className="formItem" style={{ width: "176px" }}>
            <span>
              请选择课程类型
            </span>
            <Cascader options={subjectListOptions} 
            onChange={this.onChangeSubjectType} 
            placeholder={subject_text ? subject_text : "选择课程类型"} />
          </Form.Item>
          <Form.Item className="formItem" style={{ width: "176px" }}>
            <span>
              请选择题目类型
            </span>
            <Cascader options={questionsTypeOptions} 
            onChange={this.onChangeQuestionsType} 
            placeholder={questions_type_text ? questions_type_text : "选择题目类型"} />
          </Form.Item>
          <Form.Item>
            <span>
              答案信息
            </span>
            <Editor value={questions_answer} 
            onChange={this.handleChange} 
            style={{ height: "335px" }}>
            </Editor>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              提交
            </Button>
          </Form.Item>
        </Form>
        </div>
      </div>
    )
  }
}

export default Form.create({ name: 'normal_login' })(addtest)