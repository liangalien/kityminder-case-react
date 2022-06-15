import React, { Component } from 'react';
import {Row, Button, Dropdown, Menu, Drawer, Input } from 'antd';
import { DownOutlined, DeleteOutlined, BarsOutlined } from '@ant-design/icons';

const { TextArea } = Input;

class Operation extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false,
            value: null
        };
    }


    onClose = () => {
        this.setState({visible: false});
    };

    onShow = () => {
        this.setState({visible: true, value: this.props.minder.queryCommandValue('note')});
    };

    onChange = (input) => {
        let value = input.target.value;
        if (!value) value = null;

        this.props.minder.execCommand('note', value);
    };


    render() {
        return (
            <div>
            <div className="km-btn-group">
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('note') === -1} type="text" shape="round" icon={<BarsOutlined/>} size="small" onClick={this.onShow}>
                            备注
                    </Button>
                </Row>
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('RemoveNode') === -1 && 'disabled' || ''} type="text" shape="round" icon={<DeleteOutlined />} size="small" onClick={()=>{this.props.minder.queryCommandState('RemoveNode') === -1 || this.props.minder.execCommand('RemoveNode')}}>
                        删除
                    </Button>
                </Row>
            </div>

                <Drawer
                    title="备注"
                    width={500}
                    onClose={this.onClose}
                    visible={this.state.visible}
                >
                    <TextArea rows={35} allowClear={true} onChange={this.onChange} value={this.state.value}/>
                </Drawer>

            </div>
        )
    }
}

export default Operation;
