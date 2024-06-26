import { myProjects } from './myProjects.js';

const mainContent = document.querySelector('#main');
export default function renderMain(event) {
    mainContent.textContent = '';
    let index = parseInt(event.target.id.split('-')[1]);

   
    
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  myProjects[index].name
   projectCard.appendChild(projectCardHeader);    
   
   const projectDue = document.createElement('div');
    projectDue.textContent = myProjects[index].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

  
   for (let i = 0; i < myProjects[index].tasks.length; i++) {

    //projectCard.innerHTML +=`<div class="tasks ${myProjects[index].tasks[i].priority}"><input type='checkbox'>${myProjects[index].tasks[i].name}</div>`;
    
    const tasks = document.createElement('div');
   const deleteBtn = document.createElement('button');
   deleteBtn.textContent = 'Delete Task';
   deleteBtn.addEventListener('click', ()=>{
    myProjects[index].tasks.splice(i, 1);
    renderMain(event);
   })
 

   
  
   tasks.textContent = myProjects[index].tasks[i].name;
   tasks.classList.add('tasks');
   tasks.appendChild(deleteBtn);
   projectCard.appendChild(tasks);
  
}
    mainContent.appendChild(projectCard)

}

