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


export default{
  xlhString,
  dataArray,
  toArray,
  toSplitArray
}
