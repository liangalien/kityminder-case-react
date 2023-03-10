import React, {Component} from 'react';
import {Tabs, Layout, Spin } from 'antd';
import UndoRedo  from './tabs/undoRedo';
import AppendNode  from './tabs/appendNode';
import Arrange from './tabs/arrange';
import Operation from './tabs/operation';
import Disabled from './tabs/disabled';
import Priority from './tabs/priority';
import Type from './tabs/type';
import Result from './tabs/result';
import Template from './tabs/template';
import Theme from './tabs/theme';
import LayoutStyle from './tabs/layout';
import Fonts from './tabs/font';
import Expand from './tabs/expand';
import SearchNode from './tabs/search';
import Navigator from './tabs/navigator';
import Extras from './tabs/extras';

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
            flag: true,
        };
    }

    componentDidUpdate() {
        if (this.state.minder == null) {
            var editor = new window.kityminder.Editor(this.state.element);
            var minder = window.minder = editor.minder;
            this.setState({minder: minder});
            this.setState({editor: editor});

            var _this = this;
            minder.on('selectionchange', function (e) {
                _this.setState({flag: !_this.state.flag}); //触发组件更新
            });


            if (this.props.onChange) {
                minder.on('datachange contentchange', this.props.onChange);
            }

            if (this.props.onRemove) {
                minder.on('dataremove', this.props.onRemove);
            }

            if (this.props.onResult) {
                minder.on('resultchange', this.props.onResult);
            }

            if (this.props.onFinished) {
                this.props.onFinished(minder);
            }

            if (this.props.default != false) {
                minder.importJson({
                    root: {
                        data: {
                            id: minder.getGuid(),
                            text: "模块名称",
                            type: minder.getTypeMap().module.id,
                        },
                        children: [{
                            data: {
                                id: minder.getGuid(),
                                text: "用例名称",
                                type: minder.getTypeMap().case.id,

                            },
                        }]
                    },
                    template: 'right'
                });
            }

        }
    }

    render() {
        return (<div class="minder-container">
            <Tabs
                defaultActiveKey="1"
                style={{margin: "0 10px 0 10px"}}
                onChange={() => this.setState({flag: !this.state.flag})}
                {...this.props.tabsProps || {}}
            >
                <TabPane tab="编辑" key="1">
                    <Layout class='page-header'>
                        <UndoRedo editor={this.state.editor}/>
                        <AppendNode minder={this.state.minder}/>
                        <Arrange minder={this.state.minder}/>
                        <Operation minder={this.state.minder}/>
                        <Disabled minder={this.state.minder}/>
                        <Priority minder={this.state.minder}/>
                        <Type minder={this.state.minder}/>
                        {
                            this.props.extras && this.props.extras.edit && <Extras minder={this.state.minder} extras={this.props.extras.edit}/>
                        }
                    </Layout>
                </TabPane>

                <TabPane tab="外观" key="2">
                    <Layout class='page-header'>
                        <Template minder={this.state.minder}/>
                        <Theme minder={this.state.minder}/>
                        <Expand minder={this.state.minder}/>
                        <LayoutStyle minder={this.state.minder}/>
                        <Fonts minder={this.state.minder}/>
                        <SearchNode minder={this.state.minder}/>
                    </Layout>
                </TabPane>

                <TabPane tab="执行" key="3">
                    <Layout class='page-header'>
                        <Result minder={this.state.minder}/>
                    </Layout>
                </TabPane>
            </Tabs>
            <Spin spinning={this.props.loading || false}>
                <div style={{width: '100%', height: 'calc(100vh - 109px)'}} ref={(input) => {
                    if (this.state.element == null) this.setState({element: input});
                }}>
                </div>
                <Navigator minder={this.state.minder}/>
            </Spin>
        </div>);
    }
}

export default Main;

