import * as React from 'react';
import Item from './component/item'
class Left extends React.Component {
  
    public render() {
        return (
          <div className = 'left'>
            this is Left Component .
                {
                   ['a'].map((item1,index)=> <Item key={index} />)
                }
          </div>
        )
    }
}


export default Left