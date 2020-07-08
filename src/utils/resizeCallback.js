export default (callback, time = 500) => {
  let isFirst = true;
  let timer = null;
  return function() {
    if (isFirst) {
      isFirst = false;
      if (typeof callback === "function") callback.apply(null, arguments);
      else throw new Error("callback is must a function");
    } else {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        if (typeof callback === "function") callback.apply(null, arguments);
        else throw new Error("callback is must a function");
      }, time);
    }
  };
};
