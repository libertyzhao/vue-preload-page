
function setData(route, from, next, Vue) {
  const matchedComponents = router.getMatchedComponents(route);
  if (!matchedComponents.length) {
    next();
  }

  try {
    matchedComponents.map(Component => {
      let TrustedComponent = Vue.extend(Component);
      let pre = TrustedComponent.options.preload;
  
      if (pre) {
        pre.forEach(componentRoute => {
          let route = router.resolve(componentRoute).route;
          route.matched.forEach(fn => {
            let comp = fn.components;
            Object.keys(comp).forEach(key => {
              if (typeof comp[key] == "function") {
                comp[key]();
              }
            });
          });
        });
      }
    });
  } catch (error) {
    console.error(error);
  }
  next();
}

module.exports = (router ,Vue) => {
  router.onReady(() => {
    const route = router.resolve(location.pathname + location.search).route;
    setData(undefined, {}, () => {}, Vue);
    router.beforeResolve((to, from, next, Vue) => {
      setData(to, from, next);
    });
  });
};
