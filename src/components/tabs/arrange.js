import React, { Component } from 'react';
import { Row, Button} from 'antd';
import { UpOutlined, DownOutlined } from '@ant-design/icons';
import '../../minder.css';

class Arrange extends Component {
    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button type="text" shape="round" icon={<UpOutlined />} size="small" onClick={()=>{this.props.minder.queryCommandState('ArrangeUp') === -1 || this.props.minder.execCommand('ArrangeUp')}}>
                        上移
                    </Button>
                </Row>
                <Row>
                    <Button type="text" shape="round" icon={<DownOutlined />} size="small" onClick={()=>{this.props.minder.queryCommandState('ArrangeDown') === -1 || this.props.minder.execCommand('ArrangeDown')}}>
                        下移
                    </Button>
                </Row>
            </div>
        )
    }
}

export default Arrange;
