import * as React from 'react'
import {Icon} from 'antd'
import './static/index.min.css'

export default class index extends React.Component {
    render() {
        console.log('edit........prprops', this.props);
        return (
            <div className = 'lfs_edit'>
                <div className="edit_header">
                    <ul>
                        <li><p><Icon type="caret-left" theme="filled" /></p></li>
                        <li><p><Icon type="caret-right" theme="filled"/></p></li>
                        <li><p>H1</p> </li>
                        <li><p>H2</p></li>
                        <li><p>H3</p></li>
                        <li><p>H4</p></li>
                        <li><p><Icon type="camera" theme="filled" /></p></li>
                        <li><p><Icon type="golden" theme="filled" /></p></li>
                        <li><p><Icon type="build" theme="filled" /></p></li>
                        <li><p><Icon type="save" theme="filled" /></p></li>
                    </ul>
                    <ul>
                        <li><p><Icon type="trophy" theme="filled" /></p> </li>
                        <li><p><Icon type="heart" theme="filled" /></p> </li>
                    </ul>
                </div>
                <div className="edit_main">
                    <div className="edit_main_left">
                        <ul>
                            <li>1</li>
                        </ul>
                    </div>
                    <div className="edit_main_right">
                        <textarea name="" id="" placeholder='请输入你要输的内容......'></textarea>
                    </div>
                </div>
            </div>
        )
    }
}
