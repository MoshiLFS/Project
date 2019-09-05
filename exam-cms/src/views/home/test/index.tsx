
 import { Form, Select, Input, Button} from 'antd';
 import * as React from 'react'
 const { Option } = Select;
 interface Props{
   form: any
 }
 class test extends React.Component<Props> {

  public handleSubmit = (e: { preventDefault: () => void; }) => {
     e.preventDefault();
     this.props.form.validateFields((err: any, values: any) => {
       if (!err) {
         console.log('Received values of form: ', values);
       }
     });
   };
 
   public handleSelectChange = (value: string) => {
     console.log(value);
     this.props.form.setFieldsValue({
       note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
     });
   };
 
   public render() {
     const { getFieldDecorator } = this.props.form;
     return (
       <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
         <Form.Item label="Note"> 
           {getFieldDecorator('note', {
             rules: [{ required: true, message: 'Please input your note!' }],
           })(<Input />)}
         </Form.Item>
         <Form.Item label="Gender">
           {getFieldDecorator('gender', {
             rules: [{ required: true, message: 'Please select your gender!' }],
           })(
             <Select
               placeholder="Select a option and change input text above"
               onChange={this.handleSelectChange}
             >
               <Option value="male">male</Option>
               <Option value="female">female</Option>
             </Select>,
           )}
         </Form.Item>
         <Form.Item wrapperCol={{ span: 12, offset: 5 }}>
           <Button type="primary" htmlType="submit">
             Submit
           </Button>
         </Form.Item>
       </Form>
     );
   }
 }
 
export default Form.create()(test);