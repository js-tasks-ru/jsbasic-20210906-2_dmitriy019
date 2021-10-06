/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.tableHTML = "<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody></tbody>";
    this.myTable = document.createElement("table");
    this.myTable.innerHTML = this.tableHTML;
    this.tableBody = this.myTable.querySelector("tbody");

    this.counter = 0;
    for (this.item of rows) {
      this.myRow = this.tableBody.insertRow();
      this.myRow.insertCell();
      this.tableBody.rows[this.counter].cells[0].innerHTML = this.item.name;
      this.myRow.insertCell();
      this.tableBody.rows[this.counter].cells[1].innerHTML = this.item.age;
      this.myRow.insertCell();  
      this.tableBody.rows[this.counter].cells[2].innerHTML = this.item.salary;
      this.myRow.insertCell();
      this.tableBody.rows[this.counter].cells[3].innerHTML = this.item.city;
      this.myRow.insertCell();     
      this.tableBody.rows[this.counter].cells[4].innerHTML = "<button onclick='this.parentElement.parentElement.remove()'>X</button>";

      this.counter++;
    }
    this.elem = this.myTable;
  }

  hideRow() {
    alert(this.hideStr);
  }

  get elem() {
    return this._elem;
  }

  set elem(value) {
    this._elem = value;
  }
}
