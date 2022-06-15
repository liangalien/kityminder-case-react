import React, { Component } from 'react';
import { Row, Button, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import TempImg from '../../images/template.png';

class Template extends Component {

    constructor(props) {
        super(props);

        this.state = {
            name: 'default'
        };

        this.temps = ['default', 'structure', 'filetree', 'right', 'fish-bone'];
        this.menu = (
            <Menu
                items={this.temps.map((temp, index) => {
                    return {
                        label: <a style={{backgroundImage: 'url(' + TempImg + ')'}} className={'temp-item ' + temp}></a>,
                        key: temp
                    };
                })}
                onClick={this.update.bind(this)}
            />
        );


    }

    update(event) {
        if (this.props.minder && event.key) {
            this.props.minder.execCommand('template', event.key);
            this.setState({name: event.key});
        }
    }


    render() {


        return (
            <div className='km-btn-group'>
                <div className='km-template'>
                    <Dropdown overlay={this.menu} trigger={['click']}>
                        <a style={{backgroundImage: 'url(' + TempImg + ')'}} className={'temp-item ' + this.state.name}>
                        </a>
                    </Dropdown>
                </div>
            </div>
        )
    }
}


export default Template;
