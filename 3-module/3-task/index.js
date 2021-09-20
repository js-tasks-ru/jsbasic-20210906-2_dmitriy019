function camelize(str) {
  let myArray = str.split("-");
  for (let i = 1; i < myArray.length; i++) {
    let item = myArray[i];
    myArray[i] = item[0].toUpperCase() + item.substring(1, item.length);
  }
  return myArray.join("");
}

//console.log(camelize("-qwer-def"));