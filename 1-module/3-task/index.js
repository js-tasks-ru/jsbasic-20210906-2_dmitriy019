function ucFirst(str) {
  if ((str != null) && (str != undefined)) {
    let firstLetter = str.charAt(0);
    return str.replace(firstLetter, firstLetter.toUpperCase());
  } else {
    return `The argument ${str} must be a String`;
  }
}
