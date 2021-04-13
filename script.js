const submitBtn = document.getElementById('submitBtn');

submitBtn.onclick = function () {
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
};