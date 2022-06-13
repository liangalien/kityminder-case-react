define(function (require, exports, module) {
        var kity = require('../core/kity')
        var utils = require('../core/utils')
        var Minder = require('../core/minder')
        var MinderNode = require('../core/node')
        var Command = require('../core/command')
        var Module = require('../core/module')
        var Renderer = require('../core/render')

        Module.register('ResultModule', function () {
            var minder = this
            var RESULT_DATA = 'result'
            var DEFAULT_BACKGROUND = '#ffffff'
            var PASS_VALUE = 1
            var FAIL_VALUE = 2
            var BLOCK_VALUE = 3
            var FRAME_GRAD = new kity.LinearGradient().pipe(function(g) {
                g.setStartPosition(0, 0);
                g.setEndPosition(0, 1);
                g.addStop(0, '#fff');
                g.addStop(1, '#ccc');
            });


            var ResultIcon = kity.createClass('ResultIcon', {
                base: kity.Group,
                constructor: function (value) {
                    this.callBase()
                    this.setSize(20)
                    this.create()
                    this.setValue(value)
                    this.setId(utils.uuid('node_result'))
                    this.translate(0.5, 0.5)
                },
                setSize: function (size) {
                    this.width = this.height = size
                },
                create: function () {
                    var default_circle = new kity.Circle(9).fill(DEFAULT_BACKGROUND)
                    default_pie = new kity.Pie(9, 0).fill(DEFAULT_BACKGROUND)

                    pass = new kity.Path().setTranslate( - 10, -10).setScale(.0195).setPathData("M512 74.666667C270.933333 74.666667 74.666667 270.933333 74.666667 512S270.933333 949.333333 512 949.333333 949.333333 753.066667 949.333333 512 753.066667 74.666667 512 74.666667z m238.933333 349.866666l-2.133333 2.133334-277.333333 277.333333c-10.666667 10.666667-29.866667 12.8-42.666667 2.133333L426.666667 704l-149.333334-149.333333c-12.8-12.8-12.8-32 0-44.8 10.666667-10.666667 29.866667-12.8 42.666667-2.133334l2.133333 2.133334 125.866667 125.866666 253.866667-253.866666c10.666667-10.666667 29.866667-12.8 42.666666-2.133334l2.133334 2.133334c12.8 12.8 12.8 32 4.266666 42.666666z").fill("#00a000")


                    fail = new kity.Path().setTranslate( - 10, -10).setScale(.0195).setPathData("M512 949.333333C270.933333 949.333333 74.666667 753.066667 74.666667 512S270.933333 74.666667 512 74.666667 949.333333 270.933333 949.333333 512 753.066667 949.333333 512 949.333333z m-151.466667-292.266666c10.666667 10.666667 29.866667 12.8 42.666667 2.133333l2.133333-2.133333 104.533334-102.4 102.4 102.4 2.133333 2.133333c12.8 10.666667 32 8.533333 42.666667-2.133333 12.8-12.8 12.8-32 0-44.8L554.666667 509.866667l102.4-102.4 2.133333-2.133334c10.666667-12.8 8.533333-32-2.133333-42.666666s-29.866667-12.8-42.666667-2.133334l-2.133333 2.133334-102.4 102.4-102.4-102.4-2.133334-2.133334c-12.8-10.666667-32-8.533333-42.666666 2.133334-12.8 12.8-12.8 32 0 44.8l102.4 102.4-102.4 102.4-2.133334 2.133333c-10.666667 12.8-10.666667 32 0 42.666667z").fill("#f08825")

                    block = new kity.Path().setTranslate( - 10, -10).setScale(.0195).setPathData("M512 74.666667c241.066667 0 437.333333 196.266667 437.333333 437.333333S753.066667 949.333333 512 949.333333 74.666667 753.066667 74.666667 512 270.933333 74.666667 512 74.666667z m0 341.333333c-17.066667 0-32 14.933333-32 32v300.8c2.133333 17.066667 14.933333 29.866667 32 29.866667s32-14.933333 32-32V445.866667c-2.133333-17.066667-14.933333-29.866667-32-29.866667z m0-160c-23.466667 0-42.666667 19.2-42.666667 42.666667s19.2 42.666667 42.666667 42.666666 42.666667-19.2 42.666667-42.666666-19.2-42.666667-42.666667-42.666667z").fill("#1296db")


                    this.addShapes([default_pie,default_circle, pass, fail, block])
                    this.pie = default_pie
                    this.pass = pass
                    this.fail = fail
                    this.block = block
                },
                setValue: function (value) {
                    this.pass.setVisible(PASS_VALUE == value)
                    this.fail.setVisible(FAIL_VALUE == value)
                    this.block.setVisible(BLOCK_VALUE == value)

                }
            })

            var ResultCommand = kity.createClass('ResultCommand', {
                base: Command,
                execute: function (km, value) {
                    var nodes = km.getSelectedNodes()

                    for (var i = 0; i < nodes.length; i++) {
                        if (value === 0) {
                            nodes[i].removeKey(RESULT_DATA).render()
                        } else {
                            nodes[i].setData(RESULT_DATA, value || null).render()
                        }
                    }
                    km.layout();
                },
                queryValue: function (km) {
                    var nodes = km.getSelectedNodes()
                    var val
                    for (var i = 0; i < nodes.length; i++) {
                        val = nodes[i].getData(RESULT_DATA)
                        if (val) break
                    }
                    return val || null
                },
                queryState: function (km) {
                    return km.getSelectedNodes().length ? 0 : -1;
                }
            })
            return {
                commands: {
                    result: ResultCommand
                },
                renderers: {
                    left: kity.createClass('ResultRenderer', {
                        base: Renderer,
                        create: function (node) {
                            return new ResultIcon()
                        },
                        shouldRender: function (node) {
                            // return node.getData(RESULT_DATA);
                            return node.getData(RESULT_DATA) && !node.getData('hideState')
                        },
                        update: function (icon, node, box) {
                            var data = node.getData(RESULT_DATA)
                            var spaceLeft = node.getStyle('space-left')
                            var x, y
                            icon.setValue(data)
                            x = box.left - icon.width - spaceLeft
                            y = -icon.height / 2
                            icon.setTranslate(x + icon.width / 2, y + icon.height / 2)
                            return new kity.Box(x, y, icon.width, icon.height)
                        }
                    })
                }
            }
        })
    }
)
