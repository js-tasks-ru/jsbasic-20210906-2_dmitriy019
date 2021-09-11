function checkSpam(str) {
  try {
    if ((str.toUpperCase().indexOf("1XBET") > -1) || (str.toUpperCase().indexOf("XXX") > -1)) {
      return true;
    } else {
      return false;
    }

  } catch(err) {  
    //alert(err.message);
    return false;
  }
}
