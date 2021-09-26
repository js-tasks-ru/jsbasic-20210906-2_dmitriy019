    function highlight(table) {
      for (i = 0; i < table.rows.length; i++) {
        let tr = table.rows[i]; 
        tr.cells[2].innerHTML == "m" ? tr.classList.add('male') : tr.classList.add('female');

        if (tr.cells[3].getAttribute("data-available") == "true") {
          tr.classList.add('available');
        } else if (tr.cells[3].getAttribute("data-available") == "false") {
          tr.classList.add('unavailable');
        }  else {
          tr.hidden = true;
        }

        if (tr.cells[1].innerHTML < 18) tr.setAttribute("style", "text-decoration: line-through");
      }
    }
