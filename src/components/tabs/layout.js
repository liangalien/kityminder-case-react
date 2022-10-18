import React, { Component } from 'react';
import { Row, Col, Button} from '@antd';
import { BranchesOutlined, ClearOutlined, CopyOutlined, SnippetsOutlined } from '@ant-design/icons';

class LayoutStyle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isCopy: false
        };
    }

    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Col span={12}>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<BranchesOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('resetlayout')}}>
                        整理布局
                    </Button>
                    </Col>

                    <Col span={12}>
                        <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<CopyOutlined />} size="small" onClick={()=>{
                            this.setState({isCopy: true});
                            this.props.minder.execCommand('copystyle');
                        }}>
                            复制样式
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<ClearOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('clearstyle')}}>
                        清除样式
                    </Button>
                    </Col>

                    <Col span={12}>
                        <Button disabled={(this.props.minder && this.props.minder.queryCommandState('text') == -1) || !this.state.isCopy} type="text" shape="round" icon={<SnippetsOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('pastestyle')}}>
                            粘贴样式
                        </Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default LayoutStyle;
