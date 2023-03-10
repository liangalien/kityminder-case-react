import React, { useState, useEffect } from 'react';
import { Row, Input, Button } from 'antd';

import { UpOutlined, DownOutlined } from '@ant-design/icons';

export default (props) => {
    const [result, setResult] = useState([]);
    const [resultNum, setResultNum] = useState(0);

    useEffect(() => {
        if (result.length > 0 && resultNum > 0) {
            selectNodeByIdx(result, resultNum - 1);
        }
    }, [resultNum]);

    const selectNodeByIdx = (idList, idx) => {
        props.minder.removeAllSelectedNodes();
        props.minder.selectById(idList[idx]);
        props.minder.execCommand('Expand')
    };

    const search = (text) => {
        var r = [];

        if (text) {
            var nodes = props.minder.getSelectedNodes();
            if (nodes.length == 0) nodes = [props.minder.getRoot()];
            r = searchNodes(nodes, text);
        }
        props.minder.removeAllSelectedNodes();
        setResult(r);
        if (r.length > 0) {
            selectNodeByIdx(r, 0);
            setResultNum(1);
        } else {
            setResultNum(0);
        }
    };

    const searchNodes = (nodes, text) => {
        var nodeIds = [];
        nodes.map(node => {
            var nodeText = node.getData("text") || "";

            if (nodeText.indexOf(text) != -1) {
                nodeIds.push(node.getData("id"));
            }

            if (node.children && node.children.length > 0) {
                nodeIds = nodeIds.concat(searchNodes(node.children, text))
            }
        });

        return nodeIds;
    };

    return (
        <div className="km-btn-group">
            <div className="km-search">
                <Row>
                    <Input.Group compact>
                        <Input
                            placeholder="搜索节点"
                            allowClear
                            style={{
                                width: 250,
                            }}
                            size="large"
                            addonAfter={resultNum + "/" + result.length}
                            onPressEnter={e => {
                                search(e.target.value)
                            }}
                        />
                        <div>
                            <div>
                                <a disabled={resultNum <= 1 || result.length == 0} onClick={() => {
                                    if (resultNum > 1 && result.length != 0) setResultNum(resultNum - 1)
                                }}><UpOutlined/></a>
                            </div>
                            <div>
                                <a disabled={resultNum >= result.length} onClick={() => {
                                    if (resultNum < result.length) setResultNum(resultNum + 1)
                                }}><DownOutlined/></a>
                            </div>
                        </div>
                    </Input.Group>
                </Row>
            </div>
        </div>
    );
};
