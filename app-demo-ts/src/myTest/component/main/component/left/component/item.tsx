import * as React from 'react';

class Item extends React.Component {
  public state = {data : ['试题管理','用户管理','考试管理','班级管理','阅卷管理']}
  public render() {
        return (
          <div className = 'item'>
            <ul>
              {
                this.state.data.map((item,index)=> <li key={index}>{item}</li>)
              }
            </ul>
          </div>
        )
    }
}


export default Item