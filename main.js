'use strict';
const tasks=[{title:'Verificare la navigazione interna',who:'Prova tecnica',done:false},{title:'Tornare a ORTO Hub senza Safari',who:'Prova tecnica',done:false},{title:'Mantenere separati i dati reali',who:'Prova tecnica',done:true}];
let filter='all';
const home=document.getElementById('home'),todo=document.getElementById('todo');
function route(){const active=location.hash==='#todo';home.hidden=active;todo.hidden=!active;window.scrollTo(0,0);if(active)render();}
function render(){const box=document.getElementById('tasks');box.replaceChildren();tasks.forEach((t,i)=>{if(filter==='open'&&t.done||filter==='done'&&!t.done)return;const row=document.createElement('label');row.className='task'+(t.done?' done':'');const check=document.createElement('input');check.type='checkbox';check.checked=t.done;check.addEventListener('change',()=>{tasks[i].done=check.checked;render()});const caption=document.createElement('span');caption.textContent=t.title;const who=document.createElement('small');who.textContent=t.who;caption.appendChild(who);row.append(check,caption);box.appendChild(row)});}
document.querySelector('[data-open="todo"]').addEventListener('click',()=>{location.hash='todo'});
document.getElementById('back').addEventListener('click',()=>{location.hash=''});
document.querySelectorAll('[data-filter]').forEach(b=>b.addEventListener('click',()=>{filter=b.dataset.filter;document.querySelectorAll('[data-filter]').forEach(x=>x.classList.toggle('selected',x===b));render()}));
window.addEventListener('hashchange',route);route();
