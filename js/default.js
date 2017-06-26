
document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').word.value);
  return false;
};

for(var i=0; i < 100 ; i++){
  var ValueTable = document.createElement('ValueTable');
  ValueTable.textContent = i;
  document.getElementById('TableList').appendChild('ValueTable');
}
