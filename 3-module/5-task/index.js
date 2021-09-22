let inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {
  let numArr = str.split(' ').map (item => Number(item)).filter(item => Number.isFinite(item)).sort(compareNumeric);
  let minValue = numArr[0];
  let maxValue = numArr[numArr.length-1];
  
  return { min: minValue, max: maxValue};
}

function compareNumeric(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

//console.log(getMinMax(inputData)); // { min: -5.8, max: 73  }