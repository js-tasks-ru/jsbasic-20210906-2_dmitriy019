function camelize(str) {
  let strArr = str.split("-");
  let returnArray = strArr.map(function(item, index) {
    return ((index != 0) ? (item[0] ?? "").toUpperCase() : (item[0] ?? "").toLowerCase())
      + item.substring(1, item.length);
  });
  return returnArray.join("");
}

//console.log(camelize("qwe--asd-zxc"));