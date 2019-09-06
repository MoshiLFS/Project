import * as React from 'react';


import {addQuestion} from '../../../service/question'
class Add extends React.Component {
    constructor(props:any) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
               
            </div>
        );
    }
    componentDidMount(){
        addQuestion('/exam/questions').then(res=>{
            console.log(res);
        })
    }
}

export default Add;