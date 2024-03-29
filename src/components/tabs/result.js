import React, { Component } from 'react';
import {Row, Dropdown, Menu } from 'antd';

class Result extends Component {
    stepSettingMenu = (index, record) => {
        return <Menu>
            <Menu.ItemGroup title="后续步骤">
                <Menu.Item onClick={() => {this.setResult(1, true)}}>成功</Menu.Item>
                <Menu.Item onClick={() => {this.setResult(2, true)}}>失败</Menu.Item>
                <Menu.Item onClick={() => {this.setResult(3, true)}}>阻塞</Menu.Item>
            </Menu.ItemGroup>
        </Menu>
    };

    setResult = (result, next) => {
        if (next) {
            var selectedNodes = this.props.minder.getSelectedNodes();
            for (var i in selectedNodes) {
                var curNode = selectedNodes[i];
                var curIndex = curNode.getData('index');
                var sameNodes = curNode.getParent().getChildren(); //同级节点
                for (var idx=curIndex; idx < sameNodes.length; idx++) {
                    sameNodes[idx].setData('result', result).render();
                }
            }
            this.props.minder.layout();

        }
        else {
            this.props.minder.execCommand('result', result)
        }
    };


    render() {
        return (
            <div className="km-btn-group">
                <div className='km-result'>
                    <Row>
                        <div className="icon" disabled={this.props.minder && this.props.minder.queryCommandState('result') === -1} onClick={()=>{this.setResult(1, false)}}>
                            <svg t="1648094628707" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                                <path
                                    d="M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m238.933333 349.866666l-2.133333 2.133334-277.333333 277.333333c-10.666667 10.666667-29.866667 12.8-42.666667 2.133333L426.666667 704l-149.333334-149.333333c-12.8-12.8-12.8-32 0-44.8 10.666667-10.666667 29.866667-12.8 42.666667-2.133334l2.133333 2.133334 125.866667 125.866666 253.866667-253.866666c10.666667-10.666667 29.866667-12.8 42.666666-2.133334l2.133334 2.133334c12.8 12.8 12.8 32 4.266666 42.666666z"
                                    p-id="3947" fill="#00a000"></path>
                            </svg>
                        </div>

                        <div className="icon" disabled={this.props.minder && this.props.minder.queryCommandState('result') === -1} onClick={()=>{this.setResult(2, false)}}>
                            <svg t="1648094628707"  viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                                <path
                                    d="M512 949.333333C270.933333 949.333333 74.666667 753.066667 74.666667 512S270.933333 74.666667 512 74.666667 949.333333 270.933333 949.333333 512 753.066667 949.333333 512 949.333333z m-151.466667-292.266666c10.666667 10.666667 29.866667 12.8 42.666667 2.133333l2.133333-2.133333 104.533334-102.4 102.4 102.4 2.133333 2.133333c12.8 10.666667 32 8.533333 42.666667-2.133333 12.8-12.8 12.8-32 0-44.8L554.666667 509.866667l102.4-102.4 2.133333-2.133334c10.666667-12.8 8.533333-32-2.133333-42.666666s-29.866667-12.8-42.666667-2.133334l-2.133333 2.133334-102.4 102.4-102.4-102.4-2.133334-2.133334c-12.8-10.666667-32-8.533333-42.666666 2.133334-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4-2.133334 2.133333c-10.666667 12.8-10.666667 32 0 42.666667z"
                                    p-id="3749" fill="#f08825"></path>
                            </svg>
                        </div>

                        <div className="icon" disabled={this.props.minder && this.props.minder.queryCommandState('result') === -1} onClick={()=>{this.setResult(3, false)}}>
                            <svg t="1648094628707" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                                <path
                                    d="M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667z m0 341.333333c-17.066667 0-32 14.933333-32 32v300.8c2.133333 17.066667 14.933333 29.866667 32 29.866667s32-14.933333 32-32V445.866667c-2.133333-17.066667-14.933333-29.866667-32-29.866667z m0-160c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666 42.666667-19.2 42.666667-42.666666-19.2-42.666667-42.666667-42.666667z"
                                    p-id="4491" fill="#1296db"></path>
                            </svg>
                        </div>

                        <div className="icon" disabled={this.props.minder && this.props.minder.queryCommandState('result') === -1} onClick={()=>{this.setResult(0, false)}}>
                            <svg t="1648094628707" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="3946" width="22" height="22">
                                <path
                                    d="M511.632 35.751c-263.677 0-477.428 213.751-477.428 477.428s213.751 477.428 477.428 477.428S989.06 776.856 989.06 513.179 775.307 35.751 511.632 35.751z m203.746 686.471c0 0.842-0.08 1.664-0.192 2.476v17.12c0 12.313-9.98 22.294-22.293 22.294H330.371c-11.287 0-20.592-8.398-22.066-19.283a16.4 16.4 0 0 1-0.419-3.649V383.432c0-9.374 7.899-16.973 17.642-16.973h27.33c9.743 0 17.643 7.599 17.643 16.973v318.066h282.267V384.901c0-10.186 8.582-18.443 19.17-18.443h24.272c10.587 0 19.17 8.256 19.17 18.443v337.321z m-278.975-66.488V406.911c0-11.749 6.21-21.273 13.871-21.273h13.121c7.661 0 13.871 9.523 13.871 21.273v248.823c0 11.748-6.211 21.271-13.871 21.271h-13.121c-7.662 0-13.871-9.523-13.871-21.271z m109.593 0V406.911c0-11.749 6.21-21.273 13.871-21.273h13.121c7.662 0 13.871 9.523 13.871 21.273v248.823c0 11.748-6.211 21.271-13.871 21.271h-13.121c-7.662 0-13.871-9.523-13.871-21.271zM746.67 333.125c0 12.46-10.1 22.56-22.56 22.56H299.154c-12.46 0-22.56-10.1-22.56-22.56v-17.493c0-12.461 10.1-22.56 22.56-22.56h165.521v-12.415c0-10.167 8.241-18.41 18.41-18.41h57.094c10.166 0 18.41 8.242 18.41 18.41v12.415H724.11c12.46 0 22.56 10.099 22.56 22.56v17.493z"
                                    fill="#939393" p-id="11778"></path>
                            </svg>
                        </div>

                        <div className="icon" disabled={this.props.minder && !(this.props.minder.queryCommandValue('data') && this.props.minder.queryCommandValue('data').parent_id)} >
                            <Dropdown overlay={this.stepSettingMenu} >
                                <svg t="1659511698111" viewBox="0 0 1024 1024" version="1.1"
                                     xmlns="http://www.w3.org/2000/svg" p-id="14982" width="21" height="21">
                                    <path
                                        d="M512 512m-90.112 0a90.112 90.112 0 1 0 180.224 0 90.112 90.112 0 1 0-180.224 0Z"
                                        p-id="14983" fill="#8a8a8a"></path>
                                    <path
                                        d="M512 0C229.376 0 0 229.376 0 512s229.376 512 512 512 512-229.376 512-512S794.624 0 512 0z m272.384 581.632c-6.144 25.6-16.384 50.176-29.696 71.68-3.072 5.12-7.168 9.216-12.288 11.264l-3.072-3.072c-21.504-21.504-56.32-21.504-77.824 0-21.504 21.504-21.504 56.32 0 77.824l3.072 3.072c-2.048 5.12-6.144 9.216-11.264 12.288-22.528 13.312-46.08 23.552-71.68 29.696-5.12 1.024-10.24 1.024-15.36 0v-4.096c0-30.72-24.576-55.296-55.296-55.296-30.72 0-55.296 24.576-55.296 55.296v5.12c-5.12 1.024-10.24 2.048-15.36 0-25.6-6.144-50.176-16.384-71.68-29.696-5.12-3.072-9.216-7.168-11.264-12.288l3.072-3.072c21.504-21.504 21.504-56.32 0-77.824-21.504-21.504-56.32-21.504-77.824 0l-3.072 3.072c-5.12-2.048-9.216-6.144-12.288-11.264-13.312-22.528-23.552-46.08-29.696-71.68-1.024-5.12-1.024-10.24 0-15.36h4.096c30.72 0 55.296-24.576 55.296-55.296 0-30.72-24.576-55.296-55.296-55.296h-5.12c-1.024-5.12-2.048-10.24 0-15.36 6.144-25.6 16.384-50.176 29.696-71.68 3.072-5.12 7.168-9.216 12.288-11.264l3.072 3.072c21.504 21.504 56.32 21.504 77.824 0 21.504-21.504 21.504-56.32 0-77.824l-3.072-3.072c2.048-5.12 6.144-9.216 11.264-12.288 22.528-13.312 46.08-23.552 71.68-29.696 5.12-1.024 10.24-1.024 15.36 0v5.12c0 30.72 24.576 55.296 55.296 55.296 30.72 0 55.296-24.576 55.296-55.296v-5.12c5.12-1.024 10.24-2.048 15.36 0 25.6 6.144 50.176 16.384 71.68 29.696 5.12 3.072 9.216 7.168 11.264 12.288l-3.072 3.072c-21.504 21.504-21.504 56.32 0 77.824 21.504 21.504 56.32 21.504 77.824 0l3.072-3.072c5.12 2.048 9.216 6.144 12.288 11.264 13.312 22.528 23.552 46.08 29.696 71.68 1.024 5.12 1.024 10.24 0 15.36h-4.096c-30.72 0-55.296 24.576-55.296 55.296s24.576 55.296 55.296 55.296h5.12c1.024 4.096 1.024 9.216 0 14.336z"
                                        p-id="14984" fill="#8a8a8a"></path>
                                </svg>
                            </Dropdown>
                        </div>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Result;
