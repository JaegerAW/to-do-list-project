import './styles.css';
import { myProjects } from './myProjects.js';
import renderMain from './renderMain.js';
import createTask from './addTask.js';





const mainContent = document.querySelector('#main');
const sideBar = document.querySelector('#sidebarproject');






function renderSidebar() {
    let sidebarHTML = '';
    myProjects.forEach((project, index) => {
        sidebarHTML += `<div class="projects" id="project-${index}">${project.name}</div>`

    })
    sideBar.innerHTML += sidebarHTML;
    const projects = document.querySelectorAll('.projects');
    projects.forEach(project => 
        project.addEventListener('click', renderMain)
    )
}




renderSidebar();
//create modal to add task
const addTaskModal = document.createElement('dialog');
addTaskModal.classList.add('modal');

//create label and input box for user to input new task title
const newTask = document.createElement('div');
newTask.classList.add('modallabel');
newTask.textContent = "New Task :";
const newTaskInput = document.createElement('input');
newTaskInput.setAttribute('placeholder', 'Add New Task Here');
newTaskInput.setAttribute('id', 'newtaskinput');
newTaskInput.classList.add('inputbox');
newTask.appendChild(newTaskInput);

//create label and select input for user to input new task priority
const newPriority = document.createElement('div');
newPriority.textContent = "Priority: ";
newPriority.classList.add('prioritylabel');
const newPriorityInput = document.createElement('select');
newPriorityInput.setAttribute('id', 'newpriorityinput');
//add options to select
const selectHigh = document.createElement('option');
selectHigh.textContent = "High";
selectHigh.setAttribute('value', 'High')
newPriorityInput.appendChild(selectHigh);
const selectMedium = document.createElement('option');
selectMedium.textContent = "Medium";
newPriorityInput.appendChild(selectMedium);
const selectLow = document.createElement('option');
selectLow.textContent = "Low";
newPriorityInput.appendChild(selectLow);
newPriority.appendChild(newPriorityInput);


addTaskModal.appendChild(newTask);
addTaskModal.appendChild(newPriority);





mainContent.appendChild(addTaskModal);


const addTaskBtn = document.createElement('button');
addTaskBtn.textContent = "Add Task";
mainContent.appendChild(addTaskBtn);
addTaskBtn.addEventListener('click', ()=>{
    addTaskModal.showModal();

});



    //sidebar shows a list of projects
    //sidebar can run a forEach on a projects array
    //project1 in array has name and duedate when created, project1.items.push(item) when click on add task
    //projectsArray.forEach((project)=> {})



    //content shows a project when it's clicked on the sidebar


    /*
function renderMain(event) {

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
    projectCard.innerHTML +=`<div class="tasks ${myProjects[index].tasks[i].priority}"><input type='checkbox'>${myProjects[index].tasks[i].name}</div>`;
   }
    mainContent.appendChild(projectCard)

}
*/



















/*
function logMessage() {
    console.log('hello');
}

logMessage();
const myProjects = [ 

];
//{projectname: xxx, dueDate: date, list:[{title: asdasd, description: asdasd, priority: yes/no}]}

/*myprojects = [
{
    projectName: get a job, dueDate: 10 dec 2025, todolist:[
    {
    item: get good at programming, description: try to be better at programming everyday, priority: true
    },
    {
    item: Prepare for interviews, description
    }
    ]
}
]



function createProject(projectName, dueDate, todolist, items, description, priority)  {
return {
"project name": projectName,
"Due Date": dueDate,
"to do list": [{item: items, Description: description, Priority: priority}]
}

}

const project1 = new createProject('get a job', '10-12-2025', 'get good at programming', 'complete odin project wholly to get good at programming', 'yes');
myProjects.push(project1);
const btn = document.createElement('button');
btn.addEventListener('click', createProject);
btn.textContent = "test";

document.body.appendChild(btn)

*/

/*const myProjects = [
    {
        name: "Go to supermarket",
        due: "12/2/25",
        tasks: [
                    {
                        name: "Buy apples",
                        priority: "high"
                    },
                    {
                        name: "Buy Eggs",
                        priority: "medium"
                    }
                ]
    },
    {
        name: "Clean the house",
        due: "13/2/25",
        tasks: [
                    {
                        name: "Sweep and mop the floor",
                        priority: "high"
                    },
                    {
                        name: "Do laundry",
                        priority: "high"
                    }
                ]
    }
]; 
*/