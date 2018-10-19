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
    accept: 'image/*',      // 设置过滤文件类型
    multiple: true,         // 设置选择多个文件
    capture: 'camera'       // 设置默认调取相机 （注：不能与 multiple 属性同时使用）
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
  - `capture {String}` : 设置调用默认相机，摄像，录音功能。可选值： `'camera' | 'camcorder' | 'microphone'`。
- `callback {Function}` : 选择文件后的回调函数，回调函数将收到如下参数：
  - `files {FileList}` ： 选择的文件数组

> 注：`capture`属性和`multiple`属性不能同时存在，如果设置了`multiple`属性，`capture`属性将不生效。



### 上传
使用浏览器自带的`fetch`函数 + `FormData`对象上传文件。

``` js

import FileSelector from 'weex-file-selector-h5'

const file_selector =  weex.requireModule('file-selector')

file_selector.open({
    accept: 'image/*',
    multiple: true,
}, (files)=>{
    var file = files[0]

    var formData = new FormData()

    formData.append('framework', 'weex/file-selector-h5')
    formData.append('file', file)

    fetch('http://自己的url',
        { method: 'POST',
          body: formData,
          headers: { },
        }
    ).then(resp=> {
        return new Promise((resolve, reject)=>{
          resp.json().then(d=>{
            resp.data = d
            resolve(resp)
          })
        })
    })

})

```