import React, { Component } from 'react';
import { Row, Col, Button, Menu, Dropdown, Space } from 'antd';

class Template extends Component {
    constructor(props) {
        super(props);

        this.templateMap = window.kityminder.Minder.getTemplateList();

        this.menu = (
            <Menu>
                <Row gutter={5} style={{width: 160}}>
                    {Object.keys(this.templateMap).map((key) => {
                        return <Col span={12}><Menu.Item onClick={() => {
                            this.props.minder.execCommand('template', key);
                            this.setState({current: key});
                        }}>
                            <a className={"temp-item "  + key}></a>
                        </Menu.Item></Col>
                    })}
                </Row>
            </Menu>
        );

        this.state = {
            current: null
        };
    }

    componentDidUpdate() {
        if (this.state.current == null && this.props.minder)
            this.setState({current: this.props.minder.queryCommandValue('template')});
    }

    render() {

        return (
            <div className='km-btn-group'>
                <div className='km-theme'>
                    <Dropdown disabled={this.props.minder && this.props.minder.queryCommandState('text') == -1} overlay={this.menu} trigger={['click']}>
                        <a className={'temp-item ' + this.state.current}>
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}


export default Template;
