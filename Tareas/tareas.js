const inputTarea=document.getElementById('inputTarea');
const inputTiempo=document.getElementById('tiempo');
const listaTareas=document.querySelector('#tareas ul');

const tareas =[];

function addTarea(){
    const dato=inputTarea.value;
    const tiempo=inputTiempo.value;
    if(dato && tiempo){
        tareas.push({tarea:dato,time:tiempo});
        inputTarea.value='';
        inputTiempo.value='';
        showTareas();
    } else alert('Faltan datos en el campo o la hora.');
}

function showTareas(){
    const tareasLi=tareas.map(tarea=>`<li>${tarea.tarea} - ${tarea.time}</li>`)
    listaTareas.innerHTML=tareasLi.join('');
}