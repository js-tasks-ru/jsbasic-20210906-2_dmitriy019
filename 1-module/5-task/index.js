function truncate(str, maxlength) {
  try {
    if (str.length <= maxlength) {
      return str;
    } else {
      return str.substring (0, maxlength - 1) + "…";
    }

  } catch(err) {  
    return err.message;
  }
}
