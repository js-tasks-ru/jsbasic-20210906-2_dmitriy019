function ucFirst(str) {
  try {
    let firstLetter = str.charAt(0);
    return str.replace(firstLetter, firstLetter.toUpperCase());
  } catch(err) {  
    return err.message;
  }
}
