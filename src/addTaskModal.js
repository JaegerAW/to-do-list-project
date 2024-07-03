import { myProjects } from "./myProjects";

const addTaskModal = document.createElement('div');
addTaskModal.classList.add('hidden');
addTaskModal.classList.add('modal');
const closeForm = document.createElement('button');

closeForm.innerHTML = 'Close Form';

closeForm.addEventListener('click', ()=>{
    newTaskInput.value = '';
    taskDescriptionInput.value = '';
    addTaskModal.classList.toggle('hidden');

})
addTaskModal.appendChild(closeForm);
//const addTaskModal = document.createElement('div');

//addTaskModal.classList.add('hidden');

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

//add textArea description of task
const newTaskDescription = document.createElement('div');
newTaskDescription.classList.add('prioritylabel');
newTaskDescription.textContent = "Description: ";
newTaskDescription.setAttribute('placeholder', "Enter task details here");

const taskDescriptionInput = document.createElement('textarea');
taskDescriptionInput.setAttribute('cols', '30');
taskDescriptionInput.setAttribute('rows', '5');
newTaskDescription.appendChild(taskDescriptionInput);
//button to submit new task to the project
const submitNewTaskBtn = document.createElement('button');
submitNewTaskBtn.classList.add('prioritylabel');
submitNewTaskBtn.textContent = "Submit New Task";




addTaskModal.appendChild(newTask);
addTaskModal.appendChild(newPriority);
addTaskModal.appendChild(newTaskDescription);

addTaskModal.appendChild(submitNewTaskBtn);


export { addTaskModal };
export { submitNewTaskBtn };
export { newTaskInput };
export { newPriorityInput };
export { taskDescriptionInput };