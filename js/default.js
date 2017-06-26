var word;
document.getElementById('form').onsubmit = function(){
  word=parseInt(document.getElementById('form').word.value);
  window.alert(document.getElementById('form').word.value);
  
for(var i=0; i < word; i++){
  var ValueTable = document.createElement('li');
  ValueTable.textContent = i + 1;
  
  if(ValueTable.textContent % 3 ==0){
    ValueTable.TextContent ='Fizz';
  }else if(ValueTable.textContent % 5 == 0){
    ValueTable.textContent ='Buzz';
  }else if(ValueTable.textContent % 15 ==0){
    ValueTable.textContent ='Fizz Buzz!!';
  }
  
  document.getElementById('list').appendChild(ValueTable);
}

  return false;
};


