const theme=document.querySelector('#theme');
const menu=document.querySelector('#menu');
const links=document.querySelector('#navlinks');
if(theme){theme.addEventListener('click',()=>{document.body.classList.toggle('dark');theme.textContent=document.body.classList.contains('dark')?'☀️':'🌙';});}
if(menu){menu.addEventListener('click',()=>links.classList.toggle('open'));}
document.querySelectorAll('.navlinks a').forEach(a=>a.addEventListener('click',()=>links.classList.remove('open')));
