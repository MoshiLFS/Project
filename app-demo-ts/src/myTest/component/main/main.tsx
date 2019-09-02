import * as React from 'react';
import Left from './component/left/left'
import Right from './component/right/right'

class Main extends React.Component {
    public render() {
        return (
          <div className = 'main'>
            <Left/>
            <Right/>
          </div>
        )
    }
}

export default Main