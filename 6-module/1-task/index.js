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
    this.myTable = document.createElement("table");
    this.myTable.innerHTML = "<thead><tr><th>Имя</th><th>Возраст</th><th>Зарплата</th><th>Город</th><th></th></tr></thead><tbody></tbody>";
    this.template(rows);
    this.elem = this.myTable;
  }

  template(rows) {
    let tableBody = this.myTable.querySelector("tbody");
    let counter = 0;
    let counter2 = 0;
    for (let item of rows) {
      let myRow = tableBody.insertRow();
      
      for (let key in item) {
        myRow.insertCell();
        tableBody.rows[counter].cells[counter2].innerHTML = item[key];        
        counter2++;
      }
      myRow.insertCell();     
      tableBody.rows[counter].cells[counter2].innerHTML = "<button onclick='this.parentElement.parentElement.remove()'>X</button>";
      
      if (counter < rows.length) {
        counter2 = 0; // reset counter2
        counter++;
      };

    }
  }

  get elem() {
    return this._elem;
  }

  set elem(value) {
    this._elem = value;
  }
}
