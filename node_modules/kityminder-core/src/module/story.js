define(function(require, exports, module) {
    var kity = require('../core/kity');
    var Command = require('../core/command');
    var Module = require('../core/module');

    Module.register('Story', function() {
        var StoryCommand = kity.createClass('StoryCommand', {

            base: Command,

            execute: function(minder, story) {
                var nodes = minder.getSelectedNodes();
                nodes.forEach(function(node) {
                    if (node.getData('type') === minder.getTypeMap().case.id)
                        node.setData('story', story);
                });
            },

            queryValue: function(minder) {
                var node = minder.getSelectedNode();
                return node && node.getData('story') || [];
            }
        });

        return {
            commands: {
                'story': StoryCommand
            },
        };
    });
});
