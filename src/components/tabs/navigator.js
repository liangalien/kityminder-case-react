import React, { Component } from 'react';
import { Row, Button} from '@antd';

class Navigator extends Component {
    constructor(props) {
        super(props);

        this.state = {
            zoomEvent: false,
            zoom: 100, // 初始的缩放倍数
            panHeight: 0,
        };
    }

    zoomStack = [10, 20, 30, 50, 80, 100, 120, 150, 200];

    componentDidMount() {
        console.log("componentDidMount")

        this.setState({panHeight: document.getElementsByClassName("zoom-pan")[0].offsetHeight});
    }

    componentDidUpdate() {
        if (!this.state.zoomEvent && this.props.minder) {
            this.props.minder.setDefaultOptions({zoom: this.zoomStack});
            this.props.minder.on('zoom', e => this.setState({zoom: e.zoom})); // 发生缩放事件时
            this.setState({zoomEvent: true});
        }
    }

    getZoomRadio = function(value) {
        var minValue = this.zoomStack[0];
        var maxValue = this.zoomStack[this.zoomStack.length - 1];
        var valueRange = maxValue - minValue;

        return (1 - (value - minValue) / valueRange);
    };

    getHeight = function(value) {
        return this.getZoomRadio(value) * this.state.panHeight;
    };


    render() {
        return (
            <div className="nav-bar">
                <div className="nav-btn zoom-in" onClick={() => {
                    this.props.minder.execCommand('zoomIn')
                }}>
                    <div className="icon"></div>
                </div>
                <div className="zoom-pan">
                    <div
                        className="origin"
                        style={{transform: 'translate(0, ' + this.getHeight(100) + 'px)'}}
                        onClick={() => this.props.minder.execCommand('zoom', 100)}
                    ></div>
                    <div
                        className="indicator"
                        style={{transform: 'translate(0, ' + this.getHeight(this.state.zoom) + 'px)', transition: 'transform 200ms'}}
                    ></div>
                </div>
                <div className="nav-btn zoom-out" onClick={() => {
                    this.props.minder.execCommand('zoomOut')
                }}>
                    <div className="icon"></div>
                </div>
                <div
                    className="nav-btn camera"
                    onClick={() => {this.props.minder.execCommand('camera', this.props.minder.getRoot(), 600)}}
                >
                    <div className="icon"></div>
                </div>
            </div>
        )
    }
}

export default Navigator;
