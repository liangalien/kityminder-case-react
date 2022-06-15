import React, { Component } from 'react';
import { Row, Col, Button} from 'antd';
import { SolutionOutlined, BugOutlined } from '@ant-design/icons';


class Issue extends Component {
    render() {
        return (
            <div className="km-btn-group">

                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('ArrangeDown') === -1} type="text" shape="round" icon={<SolutionOutlined />} size="small" onClick={()=>{this.insertNode('AppendSameNode')}}>
                        需求
                    </Button>
                </Row>
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('ArrangeDown') === -1} type="text" shape="round" icon={<BugOutlined />} size="small" onClick={()=>{this.insertNode('AppendSameNode')}}>
                        故障
                    </Button>
                </Row>
            </div>


        )
    }
}

export default Issue;
