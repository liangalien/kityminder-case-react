import React, { Component } from 'react';
import { Row, Button} from '@antd';
import { SwapLeftOutlined, SwapRightOutlined } from '@ant-design/icons';

class UndoRedo extends Component {
    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button
                        type="text"
                        shape="round"
                        icon={<SwapLeftOutlined />}
                        size="small"
                        disabled={this.props.editor && this.props.editor.history.hasUndo() == false}
                        onClick={() => this.props.editor.history.undo()}>撤销
                    </Button>
                </Row>
                <Row>
                    <Button
                        type="text"
                        shape="round"
                        icon={<SwapRightOutlined />}
                        size="small"
                        disabled={this.props.editor && this.props.editor.history.hasRedo() == false}
                        onClick={() => this.props.editor.history.redo()}>重做
                    </Button>
                </Row>
            </div>
        )
    }
}

export default UndoRedo;
