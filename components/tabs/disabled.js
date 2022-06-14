import React, { Component } from 'react';
import { Row, Button} from 'antd';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';
import '../../minder.css';

class Disabled extends Component {
    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button type="text" shape="round" icon={<EyeInvisibleOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('disabled', 1)}}>
                        禁用
                    </Button>
                </Row>
                <Row>
                    <Button type="text" shape="round" icon={<EyeOutlined />} size="small" onClick={()=>{this.props.minder.execCommand('disabled', 0)}}>
                        启用
                    </Button>
                </Row>
            </div>
        )
    }
}

export default Disabled;
