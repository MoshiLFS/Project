import * as React from 'react';
// 待批班级
import { observer, inject } from 'mobx-react';

interface Props{
  question:any,
  match:any
}
@inject("question")
@observer
// getWaitclass   /manger/grade
class Juandetail extends React.Component<Props>{
    constructor(props:any) {
    super(props)       
    
    }
    render(){
        return(
            <div className="Juandetail">
                Juandetail
                <h2> 
                    批卷详情
                </h2>
            </div>
        )
    }
    /**
     * 详情数据
     */
    public Juan=async (id:any)=> {
        console.log(id)
       let list = await this.props.question.getJuandetail(id)
       console.log(list,'list')
    }
    componentDidMount(){
        // console.log(this.props.match.params.id)
        this.Juan(this.props.match.params.id)
    }
}
export default Juandetail