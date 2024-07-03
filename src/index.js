import './styles.css';
import { myProjects } from './myProjects.js';
import renderMain from './renderMain.js';
import createTask from './addTask.js';
import { addTaskModal } from './addTaskModal.js';
//import  updateTaskContainer  from './renderMain.js';





const mainContent = document.querySelector('#main');
const sideBar = document.querySelector('#sidebarproject');


const deleteProject = (e) => {
    let deleteProjectIndex = e.target.id.split('-')[1];
    console.log(deleteProjectIndex);    
    myProjects.splice(deleteProjectIndex,1);
    localStorage.setItem('projects', JSON.stringify(myProjects));
    renderSidebar();
    
    
}



function renderSidebar() {
    let sidebarHTML = '';
    myProjects.forEach((project, index) => {
        sidebarHTML += `<div class="projects" id="project-${index}">${project.name}</div>
                        <button class="delete" id="delete-${index}">Delete Project</button>
        `

    })
    sideBar.innerHTML = "";
    sideBar.innerHTML += sidebarHTML;
    const projects = document.querySelectorAll('.projects');
    projects.forEach(project => 
        project.addEventListener('click', renderMain)
    )
    const deleteProjectBtn = document.querySelectorAll('.delete');
    deleteProjectBtn.forEach(btn => {
        btn.addEventListener('click', deleteProject);
    })
}




renderSidebar();






mainContent.appendChild(addTaskModal);





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