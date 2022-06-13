import React, { Component } from 'react';
import { Row, Button} from 'antd';
import { EnterOutlined, RollbackOutlined, RetweetOutlined } from '@ant-design/icons';
import '../../minder.css';

class AppendNode extends Component {
    insertNode(command) {
        if (this.props.minder.queryCommandState(command) === -1)
            return;

        this.props.minder.execCommand(command);
    }

    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button type="text" shape="round" icon={<EnterOutlined />} size="small" onClick={()=>{this.insertNode('AppendNextNode')}}>
                        插入下级
                    </Button>
                    <Button type="text" shape="round" icon={<RollbackOutlined />} size="small" onClick={()=>{this.insertNode('AppendPrevNode')}}>
                        插入上级
                    </Button>
                </Row>

                <Row>
                    <Button type="text" shape="round" icon={<RetweetOutlined />} size="small" onClick={()=>{this.insertNode('AppendSameNode')}}>
                        插入同级
                    </Button>
                </Row>
            </div>
        )
    }
}

export default AppendNode;
