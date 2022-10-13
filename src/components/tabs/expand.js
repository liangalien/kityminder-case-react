import React, { Component } from 'react';
import { Row, Button, Menu, Dropdown } from '@antd';
import { NodeExpandOutlined, BorderInnerOutlined, DownOutlined  } from '@ant-design/icons';

class Expand extends Component {
    constructor(props) {
        super(props);

        this.expandMenu = (
            <Menu>
                {['全部', '一级', '二级', '三级', '四级', '五级', '六级'].map((name, index) => {
                    return <Menu.Item key={index || 999} onClick={this.expandNode.bind(this)}>
                        展开{name}节点
                    </Menu.Item>
                })}
            </Menu>
        );

        this.selectMap = {
            'selectall': '全选',
            'selectrevert': '反选',
            'selectsiblings': '选择兄弟节点',
            'selectlevel': '选择同级节点',
            'selectpath': '选择路径',
            'selecttree': '选择子树'
        };

        this.selectMenu = (
            <Menu>
                {Object.keys(this.selectMap).map((key) => {
                    return <Menu.Item key={key} onClick={this.selectNode.bind(this)}>
                        {this.selectMap[key]}
                    </Menu.Item>
                })}
            </Menu>
        );
    }

    expandNode(event) {
        if (this.props.minder && event.key) {
            this.props.minder.execCommand('ExpandToLevel', event.key);
        }
    }

    selectNode(event) {
        if (this.props.minder && event.key) {
            var minder = this.props.minder;

            var methods = {
                selectall: function () {
                    var selection = [];
                    minder.getRoot().traverse(function (node) {
                        selection.push(node);
                    });
                    minder.select(selection, true);
                    minder.fire('receiverfocus');
                },
                selectrevert: function () {
                    var selected = minder.getSelectedNodes();
                    var selection = [];
                    minder.getRoot().traverse(function (node) {
                        if (selected.indexOf(node) == -1) {
                            selection.push(node);
                        }
                    });
                    minder.select(selection, true);
                    minder.fire('receiverfocus');
                },
                selectsiblings: function () {
                    var selected = minder.getSelectedNodes();
                    var selection = [];
                    selected.forEach(function (node) {
                        if (!node.parent) return;
                        node.parent.children.forEach(function (sibling) {
                            if (selection.indexOf(sibling) == -1) selection.push(sibling);
                        });
                    });
                    minder.select(selection, true);
                    minder.fire('receiverfocus');
                },
                selectlevel: function () {
                    var selectedLevel = minder.getSelectedNodes().map(function (node) {
                        return node.getLevel();
                    });
                    var selection = [];
                    minder.getRoot().traverse(function (node) {
                        if (selectedLevel.indexOf(node.getLevel()) != -1) {
                            selection.push(node);
                        }
                    });
                    minder.select(selection, true);
                    minder.fire('receiverfocus');
                },
                selectpath: function () {
                    var selected = minder.getSelectedNodes();
                    var selection = [];
                    selected.forEach(function (node) {
                        while (node && selection.indexOf(node) == -1) {
                            selection.push(node);
                            node = node.parent;
                        }
                    });
                    minder.select(selection, true);
                    minder.fire('receiverfocus');
                },
                selecttree: function () {
                    var selected = minder.getSelectedNodes();
                    var selection = [];
                    selected.forEach(function (parent) {
                        parent.traverse(function (node) {
                            if (selection.indexOf(node) == -1) selection.push(node);
                        });
                    });
                    minder.select(selection, true);
                    minder.fire('receiverfocus');
                }
            };

            methods[event.key]();
        }
    }

    render() {
        return (
            <div className="km-btn-group">
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<NodeExpandOutlined />} size="small">
                        <Dropdown overlay={this.expandMenu} trigger={['click']}><span>展开 <DownOutlined /></span></Dropdown>
                    </Button>
                </Row>
                <Row>
                    <Button disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} type="text" shape="round" icon={<BorderInnerOutlined />} size="small">
                        <Dropdown overlay={this.selectMenu} trigger={['click']}><span>全选 <DownOutlined /></span></Dropdown>
                    </Button>
                </Row>
            </div>
        )
    }
}

export default Expand;
