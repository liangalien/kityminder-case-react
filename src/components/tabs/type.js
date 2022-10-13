import React, { Component } from 'react';
import { Row, Button} from '@antd';

class Type extends Component {
    state = {
        background1: null,
        background2: null,
        background3: null,
    };

    componentDidUpdate() {
        if (this.props.minder && !this.state.background1) {
            this.setState(
                {
                    background1: this.props.minder.getResourceColor(1).toHEX(),
                    background2: this.props.minder.getResourceColor(2).toHEX(),
                    background3: this.props.minder.getResourceColor(3).toHEX()
                })
        }
    }

    render() {
        return (
            <div className="km-btn-group">
                <div className="km-type">
                    <Row>
                        <label>
                            <span disabled={this.props.minder && this.props.minder.queryCommandState('type') === -1} style={{background: this.state.background1}} onClick={()=>{this.props.minder.execCommand('type', 1)}}>模块</span>
                        </label>
                        <label>
                            <span disabled={this.props.minder && this.props.minder.queryCommandState('type') === -1} style={{background: this.state.background2}} onClick={()=>{this.props.minder.execCommand('type', 2)}}>用例</span>
                        </label>
                        <label>
                            <span disabled={this.props.minder && this.props.minder.queryCommandState('type') === -1} style={{background: this.state.background3}} onClick={()=>{this.props.minder.execCommand('type', 3)}}>步骤</span>
                        </label>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Type;
