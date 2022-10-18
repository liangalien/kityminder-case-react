KityMinder Case React(Antd)
==========

## 背景
想基于百度脑图做一个测试用例编写、执行一体的在线脑图工具，本来都已经基于百度脑图的源码改了一版，是angularJS的，但是公司前端大部分用react，只能重新搞一下。

找了很久，都没有找到基于react的百度脑图，无奈之下只能自力更生，自己写了一个。react初学者，写得不咋的，勉强能用，也阉割掉了部分功能（其实是懒得写了）。

## 预览
[![](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s1.png)](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s1.png)

[![](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s2.png)](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s2.png)

[![](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s3.png)](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s3.png)

## 开发说明

```bash
npm i
npm run dev
npm run build
```

## 使用说明
```bash
npm i kityminder-case-react
```
```javascript
import MinderCase from 'kityminder-case-react/src/components/main';

export default function () {
    return (
        <MinderCase></MinderCase>
    );
}
```

```javascript
//报错@antd找不到，需要在webpack.conf添加
module.exports = {
    resolve: {
        alias: {
            '@antd': 'antd'
        }
    }
}
```
