//window evetnt
window.addEventListener('resize', ()=>{
  document.getElementById('win').innerHTML = 'Screen Width' + screen.availWidth;
});
//component event
const btn = document.getElementById('btn');
btn.addEventListener('mouseover', ()=>{
  document.getElementById('show').innerHTML += 'Mouse over'+'<br>';
});
btn.addEventListener('click', ()=>{
  document.getElementById('show').innerHTML += 'Clicked'+'<br>';
});
btn.addEventListener('mouseout', ()=>{
  document.getElementById('show').innerHTML += 'Mouse out'+'<br>';
});

//event bubbling & capture
document.getElementById('myP1').addEventListener('click', ()=>{
  alert('White elment was clicked');
}, false);
document.getElementById('myDiv1').addEventListener('click', ()=>{
  alert('Orange elment was clicked');
}, false);
document.getElementById('myP2').addEventListener('click', ()=>{
  alert('White elment was clicked');
}, true);
document.getElementById('myDiv2').addEventListener('click', ()=>{
  alert('Orange elment was clicked');
}, true);