import React, { Component } from 'react';
import { Menu, Space, Dropdown } from 'antd';
import { BarsOutlined, DownOutlined } from '@ant-design/icons';

class Note extends Component {
    render() {
        const descMenu = (
            <Menu>
                <Menu.Item>
            <span>
                插入备注
            </span>
                </Menu.Item>
                <Menu.Item>
            <span>
                移除备注
            </span>
                </Menu.Item>
            </Menu>
        );

        return (
            <div className="km-btn-group">
                <BarsOutlined />
                <Dropdown overlay={descMenu}>
                    <Space>备注
                        <DownOutlined /></Space>
                </Dropdown>
            </div>
        )
    }
}

export default Note;
