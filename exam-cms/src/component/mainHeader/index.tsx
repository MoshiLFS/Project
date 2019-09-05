import * as React from 'react';
import { Tag } from 'antd';

const { CheckableTag } = Tag;
class MainHeader extends React.Component {
    state = { checked: true };

    handleChange = (checked: any) => {
        this.setState({ checked });
      };

    public render(){
        return <>
            <div className="tap">
                <div className="ClassList">
                    <span>课程类型</span>
                    <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
                    
                </div>
            </div>
        </>
    }
}

export default MainHeader;
