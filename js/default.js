var word;
document.getElementById('form').onsubmit = function(){
  word=parseInt(document.getElementById('form').word.value);
  window.alert(document.getElementById('form').word.value);
  
for(var i=0; i < word; i++){
  var ValueTable = document.createElement('li');
  ValueTable.textContent = i + 1;
  document.getElementById('list').appendChild(ValueTable);
}

  return false;
};


