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
    }
    document.body.append(fileContainter)
  },
  
  _addEvent: function () {
    fileContainter.onchange = function () {
      var files = fileContainter.files
      document.body.removeChild(fileContainter)
      changeCallback(files)
    }
  },
  
  _show: function () {
    fileContainter.click()
  }
  
}
