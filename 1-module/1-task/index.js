function factorial(n) {
  if ( n < 0 || n%1 != 0) {
    return "Wrong argument! It must be a non-negative INTEGER like 0, 1, 2, 3 etc.";
  }  
  let result = undefined;
  if (n == 0) {
    result = 1;
  } else {
    result = n;
  }
  for (i = n; i > 1; i--) {
    result = result * (i - 1);
  }
  return result;
}
