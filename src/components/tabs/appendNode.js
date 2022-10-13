import React, { Component } from 'react';
import { Row, Button} from '@antd';
import { EnterOutlined, RollbackOutlined, RetweetOutlined } from '@ant-design/icons';

class AppendNode extends Component {

    isDisabled(command) {
        if (this.props.minder && this.props.minder.queryCommandState(command) === -1)
            return 'disabled';
        return '';
    }

    insertNode(command) {
        if (this.props.minder.queryCommandState(command) === -1)
            return;

        this.props.minder.execCommand(command);
    }



    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button disabled={this.isDisabled('AppendNextNode')} type="text" shape="round" icon={<EnterOutlined />} size="small" onClick={()=>{this.insertNode('AppendNextNode')}}>
                        插入下级
                    </Button>
                    <Button disabled={this.isDisabled('AppendPrevNode')} type="text" shape="round" icon={<RollbackOutlined />} size="small" onClick={()=>{this.insertNode('AppendPrevNode')}}>
                        插入上级
                    </Button>
                </Row>

                <Row>
                    <Button disabled={this.isDisabled('AppendSameNode')} type="text" shape="round" icon={<RetweetOutlined />} size="small" onClick={()=>{this.insertNode('AppendSameNode')}}>
                        插入同级
                    </Button>
                </Row>
            </div>
        )
    }
}


export default AppendNode;
