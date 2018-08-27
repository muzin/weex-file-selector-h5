import file_selector from "./index";
if(typeof window !== 'undefined') {
  if (window.Weex) {
    Weex.install(file_selector);
  } else if (window.weex) {
    weex.install(file_selector);
  }
}
