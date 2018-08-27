# weex-file-selector-h5

### 概述
weex-file-selector-h5 提供 weex 选择文件的组件。仅支持h5。
Android，IOS选择文件组件，推荐使用[Nat.js](http://natjs.com/#/zh-cn/)

### Install
``` sh
npm install weex-file-selector-h5
```

### Use it
``` js
import FileSelector from 'weex-file-selector-h5'

const file_selector =  weex.requireModule('file-selector')

file_selector.open({
    accept: 'image/*',
    multiple: true,
}, (files)=>{
    console.log(files);
})

```


### API

`open([options,] callback)`

打开文件选择器

##### 参数
- `options {Object}` : 选择文件的一些选项
  - `accept {String}` ： 文件的类型，具体用法参考[MIME TYPE](http://tool.oschina.net/commons)
  - `multiple {Boolean}` : 是否可以选择多个文件
- `callback {Function}` : 选择文件后的回调函数，回调函数将收到如下参数：
  - `files {FileList}` ： 选择的文件数组