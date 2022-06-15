import React, { Component } from 'react';
import { Row, Button} from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import priorityDelete from "../../images/pd.png";
import priority1 from "../../images/p1.png";
import priority2 from "../../images/p2.png";
import priority3 from "../../images/p3.png";

class Priority extends Component {
    render() {
        return (
            <div className="km-btn-group">
                <div className="km-priority">
                    <Row>
                        <img disabled={this.props.minder && this.props.minder.queryCommandState('priority') === -1} src={ priorityDelete } onClick={()=>{this.props.minder.execCommand('priority', null)}}/>
                        <img disabled={this.props.minder && this.props.minder.queryCommandState('priority') === -1} src={ priority1 } onClick={()=>{this.props.minder.execCommand('priority', 1)}}/>
                        <img disabled={this.props.minder && this.props.minder.queryCommandState('priority') === -1} src={ priority2 } onClick={()=>{this.props.minder.execCommand('priority', 2)}}/>
                        <img disabled={this.props.minder && this.props.minder.queryCommandState('priority') === -1} src={ priority3 } onClick={()=>{this.props.minder.execCommand('priority', 3)}}/>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Priority;
