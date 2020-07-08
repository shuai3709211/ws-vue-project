export const layzLoading = path => () => import(`@/views/${path}.vue`);
export const getRouters = (menu = [], routers = []) => {
  for (let i = 0; i < menu.length; i++) {
    let item = menu[i];
    if (item.component && item.path) {
      item.component = layzLoading(item.component);
      routers.push(item);
    }
    if (item.children) {
      getRouters(item.children, routers);
    }
  }
  return routers;
};
