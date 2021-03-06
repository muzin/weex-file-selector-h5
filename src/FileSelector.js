
import { Capture } from './capture_enum'

let Configs, changeCallback, fileContainter
export default function FileSelector(configs, callback) {
  
  if(!configs && !callback){        // 如果没有参数
    console.error('[x-file-selector] required callback')
    return;
  }
  
  if(configs && !callback){       // 如果只有一个参数
    if(typeof configs != 'function'){
      console.error('[x-file-selector] required callback')
      return;
    }else{
      callback = configs
      configs = {}
    }
  }
  
  if(typeof callback != 'function'){
    console.error('[x-file-selector] required callback')
    return;
  }
  
  Configs = configs
  changeCallback = callback
  this._init()
}
FileSelector.prototype = {
  
  _init: function () {
    this._create()
    this._addEvent()
    this._show()
  },
  
  _create: function () {
    fileContainter = document.createElement('input')
    fileContainter.setAttribute('type', 'file')
    fileContainter.style.display = 'none'
    if(Configs){
      if(Configs.multiple){
        fileContainter.setAttribute('multiple', 'multiple')
      }
      if(Configs.accept){
        fileContainter.setAttribute('accept', Configs.accept)
      }
      if(!Configs.multiple                            // 没有设置 multiple
          && Configs.capture                          // 设置了 capture
          && ~Capture.indexOf(Configs.capture)){      // 设置的 capture 在 支持的类型中
        fileContainter.setAttribute('capture', Configs.capture)
      }
    }
    document.body.append(fileContainter)
  },
  
  _addEvent: function () {
    fileContainter.onchange = function () {
      var files = fileContainter.files
      changeCallback(files)
    }
  },
  
  _show: function () {
    fileContainter.click()
    var timer = setTimeout(function(){
        clearTimeout(timer)
        document.body.removeChild(fileContainter)
    }, 300)
  }
  
}
