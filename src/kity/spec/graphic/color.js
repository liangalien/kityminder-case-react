describe("Kity.graphic.Color", function () {
    var Color = kity.Color;
    describe("Color(colorString) 构造函数", function () {

        it("每个分量正确", function () {
            var color = new Color('rgb(12,23 ,34)');
            expect(color.get('r')).toBe(12);
            expect(color.get('g')).toBe(23);
            expect(color.get('b')).toBe(34);
        });
    });

    describe('实现 Serializable.parse()', function () {
        var color;

        it('解析 rgb(r, g, b) 形式的颜色', function () {
            color = Color.parse('rgb(12,23, 34)'); // 字符串里的空格是要来保证 parse 方法的容错性
            expect(color.get('r')).toBe(12);
            expect(color.get('g')).toBe(23);
            expect(color.get('b')).toBe(34);
        });

        it('解析 hex 形式的颜色', function () {
            color = Color.parse('#052fA1');
            expect(color.get('r')).toBe(0x05);
            expect(color.get('g')).toBe(0x2f);
            expect(color.get('b')).toBe(0xa1);
        });

        it('解析 hsl(h, s%, l%) 形式的颜色', function () {
            color = Color.parse('hsl(12, 50%, 50%)');
            expect(color.get('h')).toBe(12);
            expect(color.get('s')).toBe(50);
            expect(color.get('l')).toBe(50);
        });

        it('解析 rgba(r, g, b, a) 形式的颜色', function () {
            color = Color.parse('rgba (12,23, 34, .12 )');
            expect(color.get('r')).toBe(12);
            expect(color.get('g')).toBe(23);
            expect(color.get('b')).toBe(34);
            expect(color.get('a')).toBe(0.12);
        });

        it('解析 hsla(h, s%, l%, a) 形式的颜色', function () {
            color = Color.parse('hsla(12, 50%, 50%, 0.2)');
            expect(color.get('h')).toBe(12);
            expect(color.get('s')).toBe(50);
            expect(color.get('l')).toBe(50);
            expect(color.get('a')).toBe(0.2);
        });

    });
    describe('实现 Serializable.toString()', function () {
        var color;
        beforeEach(function () {
            color = Color.parse('#910131');
        });
        it('在透明度为1时返回rgb表示', function () {
            expect(color.toString()).toBe('rgb(145, 1, 49)');
        });
        it('在透明度不为1时返回rgba表示', function () {
            color.set('a', 0.3);
            expect(color.toString()).toBe('rgba(145, 1, 49, 0.3)');
        });
    });
    describe('Color.set() 和 Color.get()', function () {
        var color;
        beforeEach(function () {
            color = new Color();
        });
        it('每个分量都可以设置和获取', function () {
            var testValues = {
                r: 123,
                g: 111,
                b: 55,
                a: 0.5,
                h: 240,
                s: 50,
                l: 51
            };
            for (var name in testValues) {
                if (testValues.hasOwnProperty(name)) {
                    expect(color.set(name, testValues[name]).get(name)).toBe(testValues[name]);
                }
            }
        });
        it('rgb 值和 hsl 值互相联动更新', function () {
            var hsl, rgb;

            color.set('r', 12);
            hsl = color.toHSL();
            color.set('r', 18);
            expect(color.toHSL()).not.toBe(hsl);

            color.set('h', 12);
            rgb = color.toRGB();
            color.set('h', 18);
            expect(color.toRGB()).not.toBe(rgb);
        });
    });
    describe('Color.inc() 和 Color.dec()', function () {
        var color;
        beforeEach(function () {
            color = new Color();
        });

        it('inc 增加分量值', function () {
            expect(color.set('r', 10).inc('r', 20).get('r')).toBe(30);
        });

        it('dec 减少分量', function () {
            expect(color.set('r', 30).dec('r', 20).get('r')).toBe(10);
        });

        it('控制溢出', function () {
            expect(color.set('r', 200).inc('r', 100).get('r')).toBe(255);
            expect(color.set('a', 0.5).dec('a', 1).get('a')).toBe(0);
        });
    });
    describe('Color.toRGB()', function () {

        it('正确输出规范RGB格式', function () {
            var color = Color.parse('rgb(12,21,23)');
            expect(color.toRGB()).toBe("rgb(12, 21, 23)");
        });
    });

    describe('Color.toHEX()', function () {

        it('正确输出规范HEX格式', function () {
            var color = Color.parse('#12c26f');
            expect(color.toHEX()).toBe('#12c26f');
        });
    });
    describe('Color.toHSL()', function () {

        it('正确输出规范HSL格式', function () {
            var color = Color.parse('hsl (13,23%, 43%)');
            expect(color.toHSL()).toBe('hsl(13, 23%, 43%)');
        });
    });
    describe('Color.toRGBA()', function () {

        it('正确输出规范RGBA格式', function () {
            var color = Color.parse('rgba(12,21,23, .12)');
            expect(color.toRGBA()).toBe("rgba(12, 21, 23, 0.12)");
        });
    });
    describe('Color.toHSLA()', function () {

        it('正确输出规范HSLA格式', function () {
            var color = Color.parse('hsla (13,23%, 43%,.3)');
            expect(color.toHSLA()).toBe('hsla(13, 23%, 43%, 0.3)');
        });
    });
});