function factorial(n) {

  if ((n < 0) || /*n%1 != 0*/ (!Number.isInteger(n))) {
    return undefined;
  }  

  if ((n == 0) || (n == 1)) {
    return 1;
  }

  let result = n;

  for (i = n; i > 2; i--) {
    result = result * (i - 1);
  }
  return result;
}
