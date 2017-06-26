
document.getElementById('inputform').onsubmit = function(){
  window.alert(document.getElementById('inputform').valuetable.value);
  return false;
};

for(var i=0; i < 100 ; i++){
  var ValueTable = document.createElement('ValueTable');
  ValueTable.textContent = i;
  document.getElementById('TableList').appendChild('ValueTable');
}
