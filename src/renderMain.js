import { myProjects } from './myProjects.js';


import { addTaskModal } from './addTaskModal.js';


const mainContent = document.querySelector('#main');



export default function renderMain(event) { //render project from sidebar to mainContent body

    mainContent.textContent = '';
    mainContent.appendChild(addTaskModal); //dialog to input new task and its priority
   
    let index = parseInt(event.target.id.split('-')[1]);
   
   
    
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', myProjects[index].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  myProjects[index].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = myProjects[index].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

       
    
  
    for (let i = 0; i < myProjects[index].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        myProjects[index].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(myProjects));
        renderMain(event);
        })
 
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = myProjects[index].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.appendChild(deleteBtn);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        addTaskModal.showModal();

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}

