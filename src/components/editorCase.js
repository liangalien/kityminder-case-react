import React, { Component } from 'react';
import {Tabs, Layout } from 'antd';
import 'antd/dist/antd.css';
import AppendNode  from './tabs/appendNode';
import Arrange from './tabs/arrange';
import Operation from './tabs/operation';
import Disabled from './tabs/disabled';
import Priority from './tabs/priority';
import Type from './tabs/type';
import Result from './tabs/result';
import Issue from './tabs/issue';
import Template from './tabs/template';
import Theme from './tabs/theme';
import LayoutStyle from './tabs/layout';
import Expand from './tabs/expand';
import SearchNode from './tabs/search';

import 'hotbox-ui';
import 'kity';
import 'kityminder-core';
import 'kityminder-core/dist/kityminder.core.css';
import '../kityminder-editor/kityminder.editor';
import '../kityminder-editor/kityminder.editor.css';

import 'hotbox-ui/hotbox.css';

const { TabPane } = Tabs;

class EditorCase extends Component {
    constructor(props) {
        super(props);
        this.state = {
            minder: null
        };
        setTimeout(()=>{
            if (this.minder) {
                this.setState({
                    minder: this.minder
                });
            } else {
                setTimeout(arguments.callee, 10);
            }
        }, 10);
    }

    render() {
        return (
            <div>
            <Tabs defaultActiveKey="2" style={{margin: "0 10px 0 10px"}}>
                <TabPane tab="编辑" key="1">
                    <Layout class='page-header'>
                        <AppendNode minder={this.minder}/>
                        <Arrange minder={this.minder}/>
                        <Operation minder={this.minder}/>
                        <Disabled minder={this.minder}/>
                        <Issue minder={this.minder}/>
                        <Priority minder={this.minder}/>
                        <Type minder={this.minder}/>
                        <Result minder={this.minder}/>
                    </Layout>
                </TabPane>

                <TabPane tab="外观" key="2">
                    <Layout class='page-header'>
                        <Template minder={this.minder}/>
                        <Theme minder={this.minder}/>
                        <Expand minder={this.minder}/>
                        <LayoutStyle minder={this.minder}/>
                        <SearchNode minder={this.minder}/>
                    </Layout>
                </TabPane>
            </Tabs>

            <div style={{width: '100%', height: 'calc(100vh - 92px)'}} ref={(input) => {
                if (!this.minder) {
                    this.editor = new window.kityminder.Editor(input);
                    window.minder = this.minder = this.editor.minder;

                    if (this.props.hasOwnProperty('data')) {
                        this.minder.importJson(this.props.data);
                    } else {
                        this.minder.execCommand('type', 1);
                        this.minder.execCommand('text', '模块名称');
                    }

                    var _this = this;
                    this.minder.on('selectionchange', function (e) {
                        _this.setState({minder: _this.minder});
                    });
                }
            }}>
            </div>

            </div>
        )
    }
}

export default EditorCase;
