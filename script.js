function createTable () {
  const rows = document.getElementById('row').value;
  const cols = document.getElementById('column').value;
  if (rows < 0 || cols < 0)
    return;

  let divTable = document.getElementById('table');
  if (divTable !== null) 
    divTable.remove();

  divTable = document.createElement('div');
  divTable.id = 'table';

  let table = document.createElement('table');
  table.id = 'data';
  for (let i = 0; i < rows; i++) {
    let tr = document.createElement('tr');
    table.append(tr);

    for (let c = 0; c < cols; c++) {
      let td = document.createElement('td');
      tr.append(td);
    } 
  }

  document.getElementById('middle').append(divTable);
  divTable.append(table);
}

function fillTable() {
  let table = document.getElementById('data');
  if (table === null) 
    return;

  for (let r = 0; r < table.childNodes.length; r++) {
    const tr = table.childNodes[r];
    for (let c = 0; c < tr.childNodes.length; c++) {
      const td = tr.childNodes[c];
      td.innerHTML = `${r + 1}${c + 1}`;

      td.addEventListener('click', function() {
        td.style.backgroundColor = (td.style.backgroundColor === '') ? '#' + getRandomColor() : '';      
      });   
    }  
  }
}

function getRandomColor() {
  return Math.floor(Math.random() * 16777215).toString(16);
}

const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', createTable);
submitBtn.addEventListener('click', fillTable);