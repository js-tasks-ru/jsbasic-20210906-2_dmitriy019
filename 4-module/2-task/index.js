function makeDiagonalRed(table) {
  for (i = 0; i < table.rows.length; i++) {
    let td = table.rows[i].cells[i];
    td.style.backgroundColor = "red"; // highlight it
  }
}
