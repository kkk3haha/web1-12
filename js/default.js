word = parseInt;
document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
  return false;
};



for(var i=0; i < word; i++){
  var ValueTable = document.createElement('ValueTable');
  ValueTable.textContent = i + 1;
  document.getElementById('ValueTable').appendChild(ValueTable);
}
