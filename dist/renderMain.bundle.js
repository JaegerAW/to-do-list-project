/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/addTask.js":
/*!************************!*\
  !*** ./src/addTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ "./src/myProjects.js");
/* harmony import */ var _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskModal.js */ "./src/addTaskModal.js");



function createTask(task, priority, description) {
        
    return {
        "id": `${task}${Date.now()}`,
        "name": task,
        "priority": priority,
        "description": description,
    
    }

}

/***/ }),

/***/ "./src/addTaskModal.js":
/*!*****************************!*\
  !*** ./src/addTaskModal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskModal: () => (/* binding */ addTaskModal),
/* harmony export */   newPriorityInput: () => (/* binding */ newPriorityInput),
/* harmony export */   newTaskInput: () => (/* binding */ newTaskInput),
/* harmony export */   submitNewTaskBtn: () => (/* binding */ submitNewTaskBtn),
/* harmony export */   taskDescriptionInput: () => (/* binding */ taskDescriptionInput)
/* harmony export */ });
/* harmony import */ var _myProjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects */ "./src/myProjects.js");


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








/***/ }),

/***/ "./src/myProjects.js":
/*!***************************!*\
  !*** ./src/myProjects.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   myProjects: () => (/* binding */ myProjects)
/* harmony export */ });
let myProjects = JSON.parse(localStorage.getItem('projects')) || [];



//COBA! const storedProjects = localStorage.setItem('projects', JSON.stringify(myProjects));

//localStorage.setItem('projects', JSON.stringify(myProjects));

/*

myProjects.push(1);
localStorage.setItem('projects', JSON.stringify(myProjects));
myProjects.pop();
localStorage.setItem('projects', JSON.stringify(myProjects));
//dont set item here, as project will always get updated when refreshed;
*/

//when i delete from local storage, renderMain doesnt show updated version as it renders myProjects.
//add project function should be here. get the dom for the form to add project here too


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!***************************!*\
  !*** ./src/renderMain.js ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ renderMain),
/* harmony export */   updateTaskContainer: () => (/* binding */ updateTaskContainer)
/* harmony export */ });
/* harmony import */ var _myProjects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./myProjects.js */ "./src/myProjects.js");
/* harmony import */ var _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./addTaskModal.js */ "./src/addTaskModal.js");
/* harmony import */ var _addTask_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addTask.js */ "./src/addTask.js");







const mainContent = document.querySelector('#main');

let currentProjectIndex;
let currentTaskIndex;

const reset = () => {
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = '';
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = '';
}

function renderMain(event) { //render project from sidebar to mainContent body

    mainContent.textContent = '';
    mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority
   
    currentProjectIndex = parseInt(event.target.id.split('-')[1]);
  
   
    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = `Due: ${_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due}`;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);


       
    
  
    for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
        const taskDescription = document.createElement('div');
        taskDescription.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
        taskDescription.classList.add('taskdescription');

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit Task";
        editBtn.setAttribute('id', `edit-${i}`);
        editBtn.addEventListener('click', (e)=>{
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
            currentTaskIndex = parseInt(e.target.id.split('-')[1]);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
            console.log(currentTaskIndex);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
        }
        )
        
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
        renderMain(event);
        })
 

        tasks.appendChild(deleteBtn);
        tasks.appendChild(editBtn);
        tasks.appendChild(taskDescription);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = 'Add New Task';

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}

function updateTaskContainer() { //exactly the same as renderMain, only without reassigning the currentProjectIndex. used for after altering myProjects array(deleteTask, addTask)
    mainContent.textContent = '';
    mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority

    const projectCard = document.createElement('div');
    projectCard.classList.add('card');
    projectCard.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

    const projectCardHeader = document.createElement('h3');
    projectCardHeader.classList.add('cardheader');
    projectCardHeader.textContent =  _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name
    projectCard.appendChild(projectCardHeader);    
   
    const projectDue = document.createElement('div');
    projectDue.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due;
    projectDue.classList.add('date');
    projectCard.appendChild(projectDue);

       
    
  
    for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    
        const tasks = document.createElement('div');
        const deleteBtn = document.createElement('button');
     
 
    //when we want to update after delete, just store with same "key" and the "key" will be updated.
   
  
        tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
        tasks.classList.add('tasks');
        tasks.setAttribute('id', _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
        const taskDescription = document.createElement('div');
        taskDescription.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
        taskDescription.classList.add('taskdescription');

        const editBtn = document.createElement('button');
        editBtn.textContent = "Edit Task";
        editBtn.setAttribute('id', `edit-${i}`);
        editBtn.addEventListener('click', (e)=>{
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
            currentTaskIndex = parseInt(e.target.id.split('-')[1]);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
            console.log(currentTaskIndex);
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
        }
        )

        deleteBtn.textContent = 'Delete Task';
        deleteBtn.addEventListener('click', ()=>{
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
        localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
        updateTaskContainer();
        })
        tasks.appendChild(deleteBtn);
        tasks.appendChild(editBtn);
        tasks.appendChild(taskDescription);
        projectCard.appendChild(tasks);
        
    }

    const addTaskBtn = document.createElement('button');
    addTaskBtn.textContent = "Add Task";
    mainContent.appendChild(addTaskBtn);
    addTaskBtn.addEventListener('click', ()=>{
        
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = 'Add New Task';
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');

    });
    mainContent.appendChild(addTaskBtn);
    mainContent.appendChild(projectCard)



}



const submitNewTask =() => {
    const taskObj = {
        name: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
        priority: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
        description: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value
    };
   // const currentTaskIndex = myProjects[currentProjectIndex].tasks.findIndex((item)=> item.id === currentTask.id);
    if (!_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value && !_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value) {
        alert('Please enter task details');
    }
    else if (!_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks) { //new project, no task property yet, assign task(s) property
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks = 
            [(0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value)];
            localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
            _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
            reset();
            updateTaskContainer();
        
    }
    else if (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex]) { //if task exists, edit task
        
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex] = taskObj;
        localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
        reset();
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
        currentTaskIndex = null;//after submit editted task, turn off currentTaskIndex, bug fixed where we keep on editing the same task index when we create new task.
        updateTaskContainer();
        }

    
    else {_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.push((0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value, _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value)); //project already made, tasks property exist, but no currentTaskIndex;
localStorage.setItem('projects', JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
reset();
_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle('hidden');
updateTaskContainer();
    }};





_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.addEventListener('click', submitNewTask);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVLHNEQUFVLGlDQUFpQyx1REFBVSxDQUFDLDBEQUFZLFFBQVEsOERBQWdCLFFBQVEsa0VBQW9CLFVBQVU7QUFDMUksZ0RBQWdELHNEQUFVO0FBQzFEO0FBQ0EsMERBQVk7QUFDWjtBQUNBOzs7Ozs7QUFNQSw4REFBZ0IsMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvYWRkVGFza01vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9teVByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9yZW5kZXJNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tICcuL215UHJvamVjdHMuanMnO1xuaW1wb3J0IHsgYWRkVGFza01vZGFsIH0gZnJvbSAnLi9hZGRUYXNrTW9kYWwuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKHRhc2ssIHByaW9yaXR5LCBkZXNjcmlwdGlvbikge1xuICAgICAgICBcbiAgICByZXR1cm4ge1xuICAgICAgICBcImlkXCI6IGAke3Rhc2t9JHtEYXRlLm5vdygpfWAsXG4gICAgICAgIFwibmFtZVwiOiB0YXNrLFxuICAgICAgICBcInByaW9yaXR5XCI6IHByaW9yaXR5LFxuICAgICAgICBcImRlc2NyaXB0aW9uXCI6IGRlc2NyaXB0aW9uLFxuICAgIFxuICAgIH1cblxufSIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzXCI7XG5cbmNvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuYWRkVGFza01vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuYWRkVGFza01vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsJyk7XG5jb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuY2xvc2VGb3JtLmlubmVySFRNTCA9ICdDbG9zZSBGb3JtJztcblxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICBuZXdUYXNrSW5wdXQudmFsdWUgPSAnJztcbiAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9ICcnO1xuICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcblxufSlcbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChjbG9zZUZvcm0pO1xuLy9jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuLy9hZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbi8vY3JlYXRlIGxhYmVsIGFuZCBpbnB1dCBib3ggZm9yIHVzZXIgdG8gaW5wdXQgbmV3IHRhc2sgdGl0bGVcbmNvbnN0IG5ld1Rhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbm5ld1Rhc2suY2xhc3NMaXN0LmFkZCgnbW9kYWxsYWJlbCcpO1xubmV3VGFzay50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2sgOlwiO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbm5ld1Rhc2tJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0FkZCBOZXcgVGFzayBIZXJlJyk7XG5uZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXd0YXNraW5wdXQnKTtcbm5ld1Rhc2tJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dGJveCcpO1xubmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrSW5wdXQpO1xuXG4vL2NyZWF0ZSBsYWJlbCBhbmQgc2VsZWN0IGlucHV0IGZvciB1c2VyIHRvIGlucHV0IG5ldyB0YXNrIHByaW9yaXR5XG5jb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3UHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBcIjtcbm5ld1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5bGFiZWwnKTtcbmNvbnN0IG5ld1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbm5ld1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICduZXdwcmlvcml0eWlucHV0Jyk7XG5cbi8vYWRkIG9wdGlvbnMgdG8gc2VsZWN0XG5jb25zdCBzZWxlY3RIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5zZWxlY3RIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5zZWxlY3RIaWdoLnNldEF0dHJpYnV0ZSgndmFsdWUnLCAnSGlnaCcpXG5uZXdQcmlvcml0eUlucHV0LmFwcGVuZENoaWxkKHNlbGVjdEhpZ2gpO1xuY29uc3Qgc2VsZWN0TWVkaXVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5zZWxlY3RNZWRpdW0udGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xubmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3RNZWRpdW0pO1xuY29uc3Qgc2VsZWN0TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5zZWxlY3RMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xubmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3RMb3cpO1xubmV3UHJpb3JpdHkuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHlJbnB1dCk7XG5cbi8vYWRkIHRleHRBcmVhIGRlc2NyaXB0aW9uIG9mIHRhc2tcbmNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xubmV3VGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5bGFiZWwnKTtcbm5ld1Rhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246IFwiO1xubmV3VGFza0Rlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBcIkVudGVyIHRhc2sgZGV0YWlscyBoZXJlXCIpO1xuXG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG50YXNrRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCAnMzAnKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZSgncm93cycsICc1Jyk7XG5uZXdUYXNrRGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uSW5wdXQpO1xuLy9idXR0b24gdG8gc3VibWl0IG5ldyB0YXNrIHRvIHRoZSBwcm9qZWN0XG5jb25zdCBzdWJtaXROZXdUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zdWJtaXROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoJ3ByaW9yaXR5bGFiZWwnKTtcbnN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBOZXcgVGFza1wiO1xuXG5cblxuXG5hZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQobmV3VGFzayk7XG5hZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHkpO1xuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG5cbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChzdWJtaXROZXdUYXNrQnRuKTtcblxuXG5leHBvcnQgeyBhZGRUYXNrTW9kYWwgfTtcbmV4cG9ydCB7IHN1Ym1pdE5ld1Rhc2tCdG4gfTtcbmV4cG9ydCB7IG5ld1Rhc2tJbnB1dCB9O1xuZXhwb3J0IHsgbmV3UHJpb3JpdHlJbnB1dCB9O1xuZXhwb3J0IHsgdGFza0Rlc2NyaXB0aW9uSW5wdXQgfTsiLCJsZXQgbXlQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RzJykpIHx8IFtdO1xuXG5leHBvcnQgeyBteVByb2plY3RzIH07XG5cbi8vQ09CQSEgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5cbi8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuXG4vKlxuXG5teVByb2plY3RzLnB1c2goMSk7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5teVByb2plY3RzLnBvcCgpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuLy9kb250IHNldCBpdGVtIGhlcmUsIGFzIHByb2plY3Qgd2lsbCBhbHdheXMgZ2V0IHVwZGF0ZWQgd2hlbiByZWZyZXNoZWQ7XG4qL1xuXG4vL3doZW4gaSBkZWxldGUgZnJvbSBsb2NhbCBzdG9yYWdlLCByZW5kZXJNYWluIGRvZXNudCBzaG93IHVwZGF0ZWQgdmVyc2lvbiBhcyBpdCByZW5kZXJzIG15UHJvamVjdHMuXG4vL2FkZCBwcm9qZWN0IGZ1bmN0aW9uIHNob3VsZCBiZSBoZXJlLiBnZXQgdGhlIGRvbSBmb3IgdGhlIGZvcm0gdG8gYWRkIHByb2plY3QgaGVyZSB0b29cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgbXlQcm9qZWN0cyB9IGZyb20gJy4vbXlQcm9qZWN0cy5qcyc7XG5cbmltcG9ydCB7IHN1Ym1pdE5ld1Rhc2tCdG4sIHRhc2tEZXNjcmlwdGlvbiB9IGZyb20gJy4vYWRkVGFza01vZGFsLmpzJztcbmltcG9ydCB7IGFkZFRhc2tNb2RhbCwgbmV3VGFza0lucHV0LCBuZXdQcmlvcml0eUlucHV0LCB0YXNrRGVzY3JpcHRpb25JbnB1dCB9IGZyb20gJy4vYWRkVGFza01vZGFsLmpzJztcbmltcG9ydCBjcmVhdGVUYXNrICBmcm9tICcuL2FkZFRhc2suanMnO1xuXG5cbmNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4nKTtcblxubGV0IGN1cnJlbnRQcm9qZWN0SW5kZXg7XG5sZXQgY3VycmVudFRhc2tJbmRleDtcblxuY29uc3QgcmVzZXQgPSAoKSA9PiB7XG4gICAgbmV3VGFza0lucHV0LnZhbHVlID0gJyc7XG4gICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSAnJztcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVuZGVyTWFpbihldmVudCkgeyAvL3JlbmRlciBwcm9qZWN0IGZyb20gc2lkZWJhciB0byBtYWluQ29udGVudCBib2R5XG5cbiAgICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7IC8vZGlhbG9nIHRvIGlucHV0IG5ldyB0YXNrIGFuZCBpdHMgcHJpb3JpdHlcbiAgIFxuICAgIGN1cnJlbnRQcm9qZWN0SW5kZXggPSBwYXJzZUludChldmVudC50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7XG4gIFxuICAgXG4gICAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKCdpZCcsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uaWQpO1xuXG4gICAgY29uc3QgcHJvamVjdENhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHByb2plY3RDYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2NhcmRoZWFkZXInKTtcbiAgICBwcm9qZWN0Q2FyZEhlYWRlci50ZXh0Q29udGVudCA9ICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLm5hbWVcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZEhlYWRlcik7ICAgIFxuICAgXG4gICAgY29uc3QgcHJvamVjdER1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3REdWUudGV4dENvbnRlbnQgPSBgRHVlOiAke215UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uZHVlfWA7XG4gICAgcHJvamVjdER1ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdER1ZSk7XG5cblxuICAgICAgIFxuICAgIFxuICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3M/Lmxlbmd0aDsgaSsrKSB7XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIFxuICAgIC8vd2hlbiB3ZSB3YW50IHRvIHVwZGF0ZSBhZnRlciBkZWxldGUsIGp1c3Qgc3RvcmUgd2l0aCBzYW1lIFwia2V5XCIgYW5kIHRoZSBcImtleVwiIHdpbGwgYmUgdXBkYXRlZC5cbiAgIFxuICBcbiAgICAgICAgdGFza3MudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLm5hbWU7XG4gICAgICAgIHRhc2tzLmNsYXNzTGlzdC5hZGQoJ3Rhc2tzJyk7XG4gICAgICAgIHRhc2tzLnNldEF0dHJpYnV0ZSgnaWQnLCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLmlkKTtcbiAgICAgICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrZGVzY3JpcHRpb24nKTtcblxuICAgICAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuICAgICAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCBgZWRpdC0ke2l9YCk7XG4gICAgICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSk9PntcbiAgICAgICAgICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGN1cnJlbnRUYXNrSW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdCgnLScpWzFdKTtcbiAgICAgICAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ubmFtZTtcbiAgICAgICAgICAgIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLnByaW9yaXR5O1xuICAgICAgICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLmRlc2NyaXB0aW9uO1xuICAgICAgICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tJbmRleCk7XG4gICAgICAgICAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXQgRWRpdHRlZCBUYXNrXCI7XG4gICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgICBcbiAgICAgICAgY29uc3QgZGVsZXRlQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9ICdEZWxldGUgVGFzayc7XG4gICAgICAgIGRlbGV0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICAgIHJlbmRlck1haW4oZXZlbnQpO1xuICAgICAgICB9KVxuIFxuXG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgICAgIHRhc2tzLmFwcGVuZENoaWxkKGVkaXRCdG4pO1xuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgICAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xuICAgICAgICBcbiAgICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gJ0FkZCBOZXcgVGFzayc7XG5cbiAgICB9KTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZClcblxuXG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRhc2tDb250YWluZXIoKSB7IC8vZXhhY3RseSB0aGUgc2FtZSBhcyByZW5kZXJNYWluLCBvbmx5IHdpdGhvdXQgcmVhc3NpZ25pbmcgdGhlIGN1cnJlbnRQcm9qZWN0SW5kZXguIHVzZWQgZm9yIGFmdGVyIGFsdGVyaW5nIG15UHJvamVjdHMgYXJyYXkoZGVsZXRlVGFzaywgYWRkVGFzaylcbiAgICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7IC8vZGlhbG9nIHRvIGlucHV0IG5ldyB0YXNrIGFuZCBpdHMgcHJpb3JpdHlcblxuICAgIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZSgnaWQnLCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmlkKTtcblxuICAgIGNvbnN0IHByb2plY3RDYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBwcm9qZWN0Q2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKCdjYXJkaGVhZGVyJyk7XG4gICAgcHJvamVjdENhcmRIZWFkZXIudGV4dENvbnRlbnQgPSAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5uYW1lXG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRIZWFkZXIpOyAgICBcbiAgIFxuICAgIGNvbnN0IHByb2plY3REdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0RHVlLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5kdWU7XG4gICAgcHJvamVjdER1ZS5jbGFzc0xpc3QuYWRkKCdkYXRlJyk7XG4gICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdER1ZSk7XG5cbiAgICAgICBcbiAgICBcbiAgXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzPy5sZW5ndGg7IGkrKykge1xuICAgIFxuICAgICAgICBjb25zdCB0YXNrcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgXG4gXG4gICAgLy93aGVuIHdlIHdhbnQgdG8gdXBkYXRlIGFmdGVyIGRlbGV0ZSwganVzdCBzdG9yZSB3aXRoIHNhbWUgXCJrZXlcIiBhbmQgdGhlIFwia2V5XCIgd2lsbCBiZSB1cGRhdGVkLlxuICAgXG4gIFxuICAgICAgICB0YXNrcy50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0ubmFtZTtcbiAgICAgICAgdGFza3MuY2xhc3NMaXN0LmFkZCgndGFza3MnKTtcbiAgICAgICAgdGFza3Muc2V0QXR0cmlidXRlKCdpZCcsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uaWQpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICAgICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2tkZXNjcmlwdGlvbicpO1xuXG4gICAgICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgZWRpdEJ0bi50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG4gICAgICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKCdpZCcsIGBlZGl0LSR7aX1gKTtcbiAgICAgICAgZWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV0pO1xuICAgICAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XS5uYW1lO1xuICAgICAgICAgICAgbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ucHJpb3JpdHk7XG4gICAgICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0luZGV4KTtcbiAgICAgICAgICAgIHN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBFZGl0dGVkIFRhc2tcIjtcbiAgICAgICAgfVxuICAgICAgICApXG5cbiAgICAgICAgZGVsZXRlQnRuLnRleHRDb250ZW50ID0gJ0RlbGV0ZSBUYXNrJztcbiAgICAgICAgZGVsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbiAgICAgICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgICAgICB9KVxuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChkZWxldGVCdG4pO1xuICAgICAgICB0YXNrcy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICAgICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICAgICAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQodGFza3MpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcbiAgICAgICAgXG4gICAgICAgIHN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSAnQWRkIE5ldyBUYXNrJztcbiAgICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xuXG4gICAgfSk7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gICAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmQpXG5cblxuXG59XG5cblxuXG5jb25zdCBzdWJtaXROZXdUYXNrID0oKSA9PiB7XG4gICAgY29uc3QgdGFza09iaiA9IHtcbiAgICAgICAgbmFtZTogbmV3VGFza0lucHV0LnZhbHVlLFxuICAgICAgICBwcmlvcml0eTogbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgfTtcbiAgIC8vIGNvbnN0IGN1cnJlbnRUYXNrSW5kZXggPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLmZpbmRJbmRleCgoaXRlbSk9PiBpdGVtLmlkID09PSBjdXJyZW50VGFzay5pZCk7XG4gICAgaWYgKCFuZXdUYXNrSW5wdXQudmFsdWUgJiYgIXRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlKSB7XG4gICAgICAgIGFsZXJ0KCdQbGVhc2UgZW50ZXIgdGFzayBkZXRhaWxzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKCFteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzKSB7IC8vbmV3IHByb2plY3QsIG5vIHRhc2sgcHJvcGVydHkgeWV0LCBhc3NpZ24gdGFzayhzKSBwcm9wZXJ0eVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzID0gXG4gICAgICAgICAgICBbY3JlYXRlVGFzayhuZXdUYXNrSW5wdXQudmFsdWUsIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUsIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlKV07XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICAgICAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICByZXNldCgpO1xuICAgICAgICAgICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgICAgICBcbiAgICB9XG4gICAgZWxzZSBpZiAobXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XSkgeyAvL2lmIHRhc2sgZXhpc3RzLCBlZGl0IHRhc2tcbiAgICAgICAgXG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0gPSB0YXNrT2JqO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICAgIHJlc2V0KCk7XG4gICAgICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRkZW4nKTtcbiAgICAgICAgY3VycmVudFRhc2tJbmRleCA9IG51bGw7Ly9hZnRlciBzdWJtaXQgZWRpdHRlZCB0YXNrLCB0dXJuIG9mZiBjdXJyZW50VGFza0luZGV4LCBidWcgZml4ZWQgd2hlcmUgd2Uga2VlcCBvbiBlZGl0aW5nIHRoZSBzYW1lIHRhc2sgaW5kZXggd2hlbiB3ZSBjcmVhdGUgbmV3IHRhc2suXG4gICAgICAgIHVwZGF0ZVRhc2tDb250YWluZXIoKTtcbiAgICAgICAgfVxuXG4gICAgXG4gICAgZWxzZSB7bXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5wdXNoKGNyZWF0ZVRhc2sobmV3VGFza0lucHV0LnZhbHVlLCBuZXdQcmlvcml0eUlucHV0LnZhbHVlLCB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSkpOyAvL3Byb2plY3QgYWxyZWFkeSBtYWRlLCB0YXNrcyBwcm9wZXJ0eSBleGlzdCwgYnV0IG5vIGN1cnJlbnRUYXNrSW5kZXg7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG5yZXNldCgpO1xuYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xudXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICAgIH19O1xuXG5cblxuXG5cbnN1Ym1pdE5ld1Rhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzdWJtaXROZXdUYXNrKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=