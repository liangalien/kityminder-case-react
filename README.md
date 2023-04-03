KityMinder Case React(Antd)
==========

百度脑图测试用例定制版 For React
==========

## 说明
基于[kityminder-case-core](https://github.com/liangalien/kityminder-case-core)，移植kityminder-editor部分功能和样式，使用antd重写

Vue版本请移步：[kityminder-case-vue](https://github.com/liangalien/kityminder-case-vue)

kityminder-editor for react原版（非测试用例定制版）即将发布，敬请期待。


## 预览
[![](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s1.png)](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s1.png)

[![](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s2.png)](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s2.png)

[![](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s3.png)](https://github.com/liangalien/kityminder-case-react/blob/3fa74142c64c9cd1cf47e82ce855686f4f75a856/src/images/s3.png)


## 使用说明
```bash
npm i kityminder-case-react
```

App.js
```javascript
import React from "react";
import MinderCase from "kityminder-case-react";


export default () => {
    return (
        <MinderCase
            onFinished={(minder) => {
                console.log("初始化成功，", minder);
            }}
            onChange={(data) => {
                console.log("脑图有变更操作，", data);
            }}
            onRemove={(data) => {
                console.log("脑图有删除操作，", data);
            }}
        />
    );
};

```

## 开发说明
```bash
npm i
npm run dev
npm run build
```
