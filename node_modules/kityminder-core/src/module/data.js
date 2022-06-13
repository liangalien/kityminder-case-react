define(function(require, exports, module) {
    var kity = require('../core/kity');
    var Command = require('../core/command');
    var Module = require('../core/module');

    var DataCommand = kity.createClass({
        base: Command,
        queryState: function(minder) {
            return minder.getSelectedNodes().length === 1 ? 0 : -1;
        },
        queryValue: function(minder) {
            var node = minder.getSelectedNode();
            return node && node.getDataForChange() || null;
        }
    });

    var DatasCommand = kity.createClass({
        base: Command,
        queryState: function(minder) {
            return minder.getSelectedNodes().length === 1 ? 0 : -1;
        },
        queryValue: function(minder) {
            var nodes = minder.getSelectedNodes();
            var datas = []
            nodes.forEach(function (node) {
                datas.push(node.getDataForChange());
            });
            return datas;
        }
    });


    Module.register('data', {
        'commands': {
            'data': DataCommand,
        },
    });

    Module.register('datas', {
        'commands': {
            'datas': DatasCommand,
        },
    });

});
