import { myProjects } from './myProjects.js';


import { submitNewTaskBtn, addTaskModal } from './addTaskModal.js';


const mainContent = document.querySelector('#main');
const tasksContainer = document.querySelector('#tasks-container');



export default function renderMain(index, projectName) { //render project from sidebar to mainContent body

    tasksContainer.innerHTML = '';
    tasksContainer.innerHTML = `
    <div class="card" id="${myProjects[index].id}">
        <h2 class="cardheader">${myProjects[index].name}</h2>
        <div class="date">${myProjects[index].due}</div>
    </div>

    `
    const projectCard = document.querySelector('.card');


    for (let i = 0; i < myProjects[index].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        myProjects[index].tasks.splice(i, 1);
        
        renderMain(index, projectName);
        })
 
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = myProjects[index].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.appendChild(deleteBtn);
        projectCard.appendChild(tasks);
        
    }
}


 
   
    /*
    projectCard.addEventListener('click', (e) => { 
        const tgt = e.target.closest('button.delete'); 
        if (!tgt) return; 
        myProjects[tgt.dataset.index].tasks.splice(tgt.dataset.index, 1);
        renderMain(tgt.dataset.index,tgt.dataset.projectname);
      });
    */





