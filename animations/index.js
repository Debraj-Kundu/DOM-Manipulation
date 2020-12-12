function animateDiv(){
  let elem = document.getElementById('toAnimate');
  let pos = 0;
  let id = setInterval(move, 5);
  function move(){
    if(pos == 350){
      clearInterval(id);
    }else{
      pos++;
      elem.style.top = pos+'px';
      elem.style.left = pos+'px';
    }
  }
}

const btn = document.getElementById('animate');
btn.onclick = animateDiv;

const divele = document.getElementById('container');
divele.onmouseover = ()=>{
  divele.style.background = 'blue';
}
divele.onmouseout = ()=>{
  divele.style.background = 'yellow';
}