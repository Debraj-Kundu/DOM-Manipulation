function getList(){
  let formElement = document.forms['frm1'];
  let text='';
  for(let i=0; i<formElement.length; i++){
    text += formElement.elements[i].value + '<br>';
  }
  document.getElementById('show').innerHTML = text;
}

const btn = document.getElementById('btn');
btn.onclick = getList;
