function sumSalary(salaries) {
  let sumOfSalaries = 0;
  for(let key in salaries) {
    if (((typeof salaries[key]) == "number") && !isNaN(salaries[key])  && (salaries[key] != Infinity) && (salaries[key] != -Infinity)) {
      sumOfSalaries = sumOfSalaries + salaries[key];
    }
  }
  return(sumOfSalaries);
}
