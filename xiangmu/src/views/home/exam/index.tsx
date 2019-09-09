import * as React from 'react';
import './index.css';
import { DatePicker, Button, Cascader, InputNumber } from 'antd';
import { any } from 'prop-types';

const { RangePicker, MonthPicker } = DatePicker;
interface Props {
    startValue: any,
    value: any,
    state: any,

}
function onChange(value: any) {
    console.log('changed', value);
}
export default class Addexam extends React.Component<Props> {

    state = {
        startValue: null,
        endValue: null,
        endOpen: false,

    };


    public render() {
        const { startValue, endValue, endOpen } = this.state;
        const options = [
            {
                value: '周考一',
                label: '周考一',
            },
            {
                value: '周考二',
                label: '周考二',
            }, {
                value: '周考三',
                label: '周考三',
            },
            {
                value: '月考',
                label: '月考',
            },
        ];
        function onChange(value: any) {
            console.log(value);
        }

        const options1 = [
            {
                value: 'javaScript上',
                label: 'javaScript上',

            },
            {
                value: 'javaScript下',
                label: 'javaScript下',
            }, {
                value: '模块法开发',
                label: '模块法开发',
            },
            {
                value: '移动端开发',
                label: '移动端开发',
            },{
                value: 'node高级',
                label: 'node高级',
            },
            {
                value: '渐进式开发',
                label: '渐进式开发',
            },
            {
                value: '项目实战',
                label: '项目实战',
            },
            {
                value: 'node基础',
                label: 'node基础',
            },
            {
                value: 'javascript高级',
                label: 'javascript高级',
            },
        ];
        function onChange1(value: any) {
            console.log(value);
        }
        return (
            <div className="wrap">
                <h3>添加考试</h3>
                <div className="nav">
                    <div className="dem">
                        <div className='one1'>
                            <h4><span>＊</span>试卷名称:</h4>
                            <input type="text" placeholder='' />
                        </div>
                        <div className='one2'>
                            <h4><span>＊</span>选择考试类型:</h4>
                            <Cascader options={options} onChange={onChange} placeholder="周考一" />
                        </div>
                        <div className='one3'>
                            <h4><span>＊</span>选择课程:</h4>
                            <Cascader options={options1} onChange={onChange1} placeholder="javascript上" />
                        </div>
                        <div className='one4'>
                            <h4><span>＊</span>设置题量:</h4>
                            <InputNumber min={1} max={10} defaultValue={3} onChange={onChange} />
                        </div>
                        <div className="time">
                            <h4>考试时间:</h4>
                            <div>
                                <div>
                                    <DatePicker renderExtraFooter={() => 'extra footer'} />
                                    <DatePicker renderExtraFooter={() => 'extra footer'}  />     
                                </div>
                            </div>
                        </div>
                        <div>
                            <Button type="primary" className='one0'>创建试卷</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}