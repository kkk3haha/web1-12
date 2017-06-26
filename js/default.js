var word;
document.getElementById('form').onsubmit = function(){
  word=document.getElementById('form').word.value;
  window.alert(document.getElementById('form').word.value);
  return false;
};



for(var i=0; i < 100; i++){
  var ValueTable = document.createElement('li');
  ValueTable.textContent = i + 1;
  document.getElementById('list').appendChild(ValueTable);
}
