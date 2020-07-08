const install = function(Vue) {
  if (install.installed) return;
  const file = require.context("./", false, /\.vue$/);
  file.keys().forEach(key => {
    Vue.component(key.replace(/(\.\/|\.vue)/g, ""), file(key).default);
  });
};
export default {
  install
};
