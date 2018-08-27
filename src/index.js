import FileSelector from './FileSelector'
const FileSelectorModule = {
  open: function (options, callback) {
    new FileSelector(options, callback)
  },
}
const meta = {
  'file-selector': [{
    name: 'open',
    args: ['object', 'function']
  }]
}
export default {
  init: function (Weex) {
    Weex.registerApiModule('file-selector', FileSelectorModule, meta)
  }
}
