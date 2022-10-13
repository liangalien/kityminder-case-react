import React, { Component } from 'react';
import { Row, Button} from 'antd';
import { BranchesOutlined, ClearOutlined } from '@ant-design/icons';

class LayoutStyle extends Component {
    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<BranchesOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('resetlayout')}}>
                        整理布局
                    </Button>
                </Row>
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<ClearOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('clearstyle')}}>
                        清除样式
                    </Button>
                </Row>
            </div>
        )
    }
}

export default LayoutStyle;
