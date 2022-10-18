import React, { Component } from 'react';
import { Row, Col, Button, Menu, Dropdown, Space, Select, Popover } from '@antd';

import { BoldOutlined, ItalicOutlined, UnderlineOutlined, FontColorsOutlined, BgColorsOutlined } from '@ant-design/icons';

import { SketchPicker } from 'react-color';

class Font extends Component {
    constructor(props) {
        super(props);

        this.familyList = [{
            label: '宋体',
            value: '宋体,SimSun'
        }, {
            label: '微软雅黑',
            value: '微软雅黑,Microsoft YaHei'
        }, {
            label: '楷体',
            value: '楷体,楷体_GB2312,SimKai'
        }, {
            label: '黑体',
            value: '黑体, SimHei'
        }, {
            label: '隶书',
            value: '隶书, SimLi'
        }, {
            label: 'Andale Mono',
            value: 'andale mono'
        }, {
            label: 'Arial',
            value: 'arial,helvetica,sans-serif'
        }, {
            label: 'arialBlack',
            value: 'arial black,avant garde'
        }, {
            label: 'Comic Sans Ms',
            value: 'comic sans ms'
        }, {
            label: 'Impact',
            value: 'impact,chicago'
        }, {
            label: 'Times New Roman',
            value: 'times new roman'
        }, {
            label: 'Sans-Serif',
            value: 'sans-serif'
        }];

        this.sizeList = [10, 12, 16, 18, 24, 32, 48].map(s => {return {value: s}});

        this.state = {
            family: null,
            size: null,
            bold: false,
            italic: false,
            underline: false,
            color: null,
            background: null
        };
    }

    componentWillReceiveProps() {
        this.setState({
            family: minder.queryCommandValue('fontfamily'),
            size: minder.queryCommandValue('fontsize'),
            bold: minder.queryCommandState('bold') === 1,
            italic: minder.queryCommandState('italic') === 1,
            underline: minder.queryCommandState('fontdecoration') === 1,
            color: minder.queryCommandValue('forecolor'),
            background: minder.queryCommandValue('background'),
        });
    }

    render() {

        return (
            <div className='km-btn-group'>
                <Row>
                    <Col span={12}>
                        <Select
                            disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1}
                            style={{width: 100}}
                            bordered={false}
                            placeholder="字体"
                            options={this.familyList}
                            value={this.state.family || null}
                            onChange={value => {
                                this.setState({family: value});
                                this.props.minder.execCommand('fontfamily', value);
                            }}
                        />
                    </Col>
                    <Col span={12}>
                        <Select
                            disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1}
                            style={{width: 70}}
                            bordered={false}
                            placeholder="字号"
                            options={this.sizeList}
                            value={this.state.size || null}
                            onChange={value => {
                                this.setState({size: value});
                                this.props.minder.execCommand('fontsize', value);
                            }}
                        />
                    </Col>
                </Row>

                <Row gutter={15}>
                    <Col span={4}>
                        <a style={{color: this.state.bold && "#1890ff" || "#262626"}}  disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} onClick={() => {
                            this.props.minder.execCommand('bold');
                            this.setState({bold: !this.state.bold})
                        }}><BoldOutlined /></a>
                    </Col>
                    <Col span={4}>
                        <a style={{color: this.state.italic && "#1890ff" || "#262626"}}  disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} onClick={() => {
                            this.props.minder.execCommand('italic');
                            this.setState({italic: !this.state.italic})
                        }}><ItalicOutlined /></a>
                    </Col>
                    <Col span={4}>
                        <a style={{color: this.state.underline && "#1890ff" || "#262626"}}  disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} onClick={() => {
                            if (this.props.minder.queryCommandState('fontdecoration') === 1) {
                                this.props.minder.execCommand('fontdecoration', null);
                                this.setState({underline: false})
                            }

                            else {
                                this.props.minder.execCommand('fontdecoration', 'underline');
                                this.setState({underline: true})
                            }

                            this.setState({underline: !this.state.underline})
                        }}><UnderlineOutlined /></a>
                    </Col>
                    <Col span={4}>
                        <Popover
                            content={<SketchPicker
                                color={this.state.color || "#262626"}
                                onChangeComplete={color => {
                                    this.setState({color: color.hex});
                                    this.props.minder.execCommand('forecolor', color.hex);
                                }}
                            />}
                            trigger="click"
                        >
                            <a style={{color: this.state.color || "#262626"}} disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1}><FontColorsOutlined /></a>
                        </Popover>
                    </Col>

                    <Col span={4}>
                        <Popover
                            content={<SketchPicker
                                color={this.state.background || "#262626"}
                                onChangeComplete={color => {
                                    this.setState({background: color.hex});
                                    this.props.minder.execCommand('background', color.hex);
                                }}
                            />}
                            trigger="click"
                        >
                            <a style={{color: this.state.background || "#262626"}} disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1}><BgColorsOutlined /></a>
                        </Popover>
                    </Col>
                </Row>
            </div>
        )
    }
}


export default Font;
