import React, { Component } from 'react';
import { Row, Input} from 'antd';

const { Search } = Input;

class SearchNode extends Component {
    render() {
        return (
            <div className="km-btn-group">
                <div className="km-search">
                    <Row>
                        <Search
                            placeholder="ๆ็ดข่็น"
                            allowClear
                            style={{
                                width: 250,
                            }}
                        />
                    </Row>
                </div>
            </div>
        )
    }
}

export default SearchNode;
