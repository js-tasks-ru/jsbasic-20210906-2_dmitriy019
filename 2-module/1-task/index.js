function sumSalary(salaries) {
  let sumOfSalaries = 0;
  for(let key in salaries) {
    if (((typeof salaries[key]) == "number") && isFinite(salaries[key])) {
      sumOfSalaries = sumOfSalaries + salaries[key];
    }
  }
  return(sumOfSalaries);
}
