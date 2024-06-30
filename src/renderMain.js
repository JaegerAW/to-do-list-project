import { myProjects } from './myProjects.js';

import { submitNewTaskBtn } from './addTaskModal.js';
import { addTaskModal, newTaskInput, newPriorityInput } from './addTaskModal.js';
import createTask  from './addTask.js';


const mainContent = document.querySelector('#main');

let currentProjectIndex;

export default function renderMain(event) { //render project from sidebar to mainContent body

    mainContent.textContent = '';
    mainContent.appendChild(addTaskModal); //dialog to input new task and its priority
   
    currentProjectIndex = parseInt(event.target.id.split('-')[1]);
  
   
    
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', myProjects[currentProjectIndex].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  myProjects[currentProjectIndex].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = myProjects[currentProjectIndex].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

       
    
  
    for (let i = 0; i < myProjects[currentProjectIndex].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        myProjects[currentProjectIndex].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(myProjects));
        renderMain(event);
        })
 
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = myProjects[currentProjectIndex].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.appendChild(deleteBtn);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        addTaskModal.classList.toggle('hidden');

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}

const updateTaskContainer = () => { //exactly the same as renderMain, only without reassigning the currentProjectIndex. used for after altering myProjects array(deleteTask, addTask)
    mainContent.textContent = '';
    mainContent.appendChild(addTaskModal); //dialog to input new task and its priority

    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', myProjects[currentProjectIndex].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  myProjects[currentProjectIndex].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = myProjects[currentProjectIndex].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

       
    
  
    for (let i = 0; i < myProjects[currentProjectIndex].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        myProjects[currentProjectIndex].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(myProjects));
        updateTaskContainer();
        })
 
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = myProjects[currentProjectIndex].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.appendChild(deleteBtn);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        addTaskModal.classList.toggle('hidden');

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}

const submitNewTask =() => {

    if (!myProjects[currentProjectIndex].tasks) {
        myProjects[currentProjectIndex].tasks = 
            [createTask(newTaskInput.value, newPriorityInput.value)];
            addTaskModal.classList.toggle('hidden');
            updateTaskContainer();
        
    }
  
    else {myProjects[currentProjectIndex].tasks.push(createTask(newTaskInput.value, newPriorityInput.value));
localStorage.setItem('projects', JSON.stringify(myProjects));
addTaskModal.classList.toggle('hidden');
updateTaskContainer();
    }};





submitNewTaskBtn.addEventListener('click', submitNewTask);