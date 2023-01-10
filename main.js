var inputstr = prompt("이름을 입력해주세요")

$.ajax({
    url: 'mtmt.csv',
    dataType: 'text'
}).done(successFunction);


function successFunction(data) {
  var allRows = data.split(/\r?\n|\r/);
  var table = '<table>';
  for (var singleRow = 0; singleRow < allRows.length; singleRow++) {
    var rowCells = allRows[singleRow].split(',');
    if (rowCells[0] == inputstr || rowCells[1] == inputstr || singleRow == 0){
    if (singleRow === 0) {
      table += '<thead>';
      table += '<tr>';
    } else {
      table += '<tr>';
    }
    for (var rowCell = 0; rowCell < rowCells.length; rowCell++) {
      if (singleRow === 0) {
        table += '<th>';
        table += rowCells[rowCell];
        table += '</th>';
      } else {
        table += '<td>';
        table += rowCells[rowCell];
        table += '</td>';
      }
    }
    if (singleRow === 0) {
      table += '</tr>';
      table += '</thead>';
      table += '<tbody>';
    } else {
      table += '</tr>';
    }
    }
  }
  table += '</tbody>';
  table += '</table>';
  $('body').append(table);
}
