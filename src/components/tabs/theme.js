import React, { Component } from 'react';
import { Row, Col, Button, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';

class Theme extends Component {
    constructor(props) {
        super(props);

        this.themeNameMap = {
            'classic': '脑图经典',
            'classic-compact': '紧凑经典',
            'snow': '温柔冷光',
            'snow-compact': '紧凑冷光',
            'fish': '鱼骨图',
            'wire': '线框',
            'fresh-red': '清新红',
            'fresh-soil': '泥土黄',
            'fresh-green': '文艺绿',
            'fresh-blue': '天空蓝',
            'fresh-purple': '浪漫紫',
            'fresh-pink': '脑残粉',
            'fresh-red-compat': '紧凑红',
            'fresh-soil-compat': '紧凑黄',
            'fresh-green-compat': '紧凑绿',
            'fresh-blue-compat': '紧凑蓝',
            'fresh-purple-compat': '紧凑紫',
            'fresh-pink-compat': '紧凑粉',
            'tianpan':'经典天盘',
            'tianpan-compact': '紧凑天盘'
        };
        this.themeMap = window.kityminder.Minder.getThemeList();

        this.state = {
            name: this.themeNameMap['fresh-blue-compat'],
            style: this.getThemeThumbStyle('fresh-blue-compat')
        };

        this.menu = (
            <Menu>
                <Row gutter={5} style={{width: 230}}>
                    {Object.keys(this.themeMap).map((key) => {
                        var style = this.getThemeThumbStyle(key);
                        style.margin = 5;

                        return <Col span={12}><Menu.Item className='theme-item' key={key} style={style} onClick={e => {
                            if (this.props.minder && key) {
                                this.props.minder.execCommand('theme', key);
                                this.setState({name: this.themeNameMap[key], style: this.getThemeThumbStyle(key)});
                            }
                        }}>
                            <a style={this.getThemeThumbStyle(key)}> {this.themeNameMap[key]}</a>
                        </Menu.Item></Col>
                    })}
                </Row>
            </Menu>
        );
    }


    getThemeThumbStyle (theme) {
        var themeObj = this.themeMap[theme];
        if (!themeObj) {
            return;
        }
        var style = {
            'color': themeObj['root-color'],
            'border-radius': themeObj['root-radius'] / 2
        };

        if (themeObj['root-background']) {
            style['background'] = themeObj['root-background'].toString();
        }

        return style;
    }


    render() {

        return (
            <div className='km-btn-group'>
                <div className='km-theme'>
                    <Dropdown disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} overlay={this.menu} trigger={['click']}>
                        <a className={'theme-item'} style={this.state.style}> {this.state.name}
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}


export default Theme;
