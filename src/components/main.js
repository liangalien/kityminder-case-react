import React, {useState, useEffect, Component} from 'react';
import {Tabs, Layout, Spin } from '@antd';
import UndoRedo  from './tabs/undoRedo';
import AppendNode  from './tabs/appendNode';
import Arrange from './tabs/arrange';
import Operation from './tabs/operation';
import Disabled from './tabs/disabled';
import Priority from './tabs/priority';
import Type from './tabs/type';
import Result from './tabs/result';
import Theme from './tabs/theme';
import LayoutStyle from './tabs/layout';
import Expand from './tabs/expand';
import SearchNode from './tabs/search';

import 'hotbox-ui';
import 'kity';
import 'kityminder-case-core';
import 'kityminder-case-core/dist/kityminder.case.core.css';
import '../kityminder-editor/expose-editor';
import '../kityminder-editor/kityminder.editor.css';

import 'hotbox-ui/hotbox.css';

import '../index.less';

const { TabPane } = Tabs;

class Main extends Component {

    constructor(props) {
        super(props);

        this.state = {
            minder: null,
            editor: null,
            element: null,
            spin: false,
            flag: true,
        };
    }

    componentDidUpdate() {
        if (this.state.minder == null) {
            var editor = new window.kityminder.Editor(this.state.element);
            var minder = window.minder = editor.minder;
            this.setState({minder: minder});
            this.setState({editor: editor});

            minder.importJson({
                root: {
                    data: {
                        id: minder.getGuid(),
                        text: "模块名称",
                        type: minder.getTypeMap().module.id,

                    },
                },
                template: 'right'
            });

            var _this = this;
            minder.on('selectionchange', function (e) {
                _this.setState({flag: !_this.state.flag}); //触发组件更新
            });


        }
    }

    render() {
        return (<div>
            <Tabs defaultActiveKey="1" style={{margin: "0 10px 0 10px"}} onTabClick={() => this.setState({flag: !this.state.flag})}>
                <TabPane tab="编辑" key="1">
                    <Layout class='page-header'>
                        <UndoRedo editor={this.state.editor}/>
                        <AppendNode minder={this.state.minder}/>
                        <Arrange minder={this.state.minder}/>
                        <Operation minder={this.state.minder}/>
                        <Disabled minder={this.state.minder}/>
                        <Priority minder={this.state.minder}/>
                        <Type minder={this.state.minder}/>
                    </Layout>
                </TabPane>

                <TabPane tab="外观" key="2">
                    <Layout class='page-header'>
                        <Theme minder={this.state.minder}/>
                        <Expand minder={this.state.minder}/>
                        <LayoutStyle minder={this.state.minder}/>
                        <SearchNode minder={this.state.minder}/>
                    </Layout>
                </TabPane>

                <TabPane tab="执行" key="3">
                    <Layout class='page-header'>
                        <Result minder={this.state.minder}/>
                    </Layout>
                </TabPane>
            </Tabs>
            <Spin spinning={this.state.spin}>
                <div style={{width: '100%', height: 650}} ref={(input) => {
                    if (this.state.element == null) this.setState({element: input});
                }}>
                </div>
            </Spin>
        </div>);
    }
}

export default Main;

