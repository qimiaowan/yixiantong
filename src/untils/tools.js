function xlhString(data) {
  let key = Object.keys(data);
  return key.reduce((prev, item) => {
    prev.push(item + '=' + data[item]);
    return prev;
  }, []).join("&");
}

function dataArray(arr, key) {
  return arr.filter((item) => {
    if (item[key]) {
      item[key] = item[key].split(",");
    }
    return item;
  })
}

function toArray(str) {
  return JSON.parse(str);
}
function toSplitArray(str) {
  return str.split(",");
}

function trimStr(str) {
  return str.replace(/\s+/g, "");
}

function throttle(fun, delay) {
  let oldTime = 0,
      t = null;
  return function () {
    if (t) {
      clearTimeout(t);
    }
    let args = [...arguments],
        that = this,
      newTime = +new Date();

    if(newTime - oldTime >= delay) {
      fun.apply(that, args);
      oldTime = +new Date();
    } else {
      t = setTimeout(() => {
        fun.apply(that, args)
        oldTime = +new Date();;
      }, delay)
    }
  }
}


export default {
  xlhString,
  dataArray,
  toArray,
  toSplitArray,
  trimStr,
  throttle
}
