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
    id: `${task}${Date.now()}`,
    name: task,
    priority: priority,
    description: description,
  };
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


const addTaskModal = document.createElement("div");
addTaskModal.classList.add("hidden");
addTaskModal.classList.add("modal");
const closeForm = document.createElement("button");

closeForm.innerHTML = "Close Form";

closeForm.addEventListener("click", () => {
  newTaskInput.value = "";
  taskDescriptionInput.value = "";
  addTaskModal.classList.toggle("hidden");
});
addTaskModal.appendChild(closeForm);
//const addTaskModal = document.createElement('div');

//addTaskModal.classList.add('hidden');

//create label and input box for user to input new task title
const newTask = document.createElement("div");
newTask.classList.add("modallabel");
newTask.textContent = "New Task :";
const newTaskInput = document.createElement("input");
newTaskInput.setAttribute("placeholder", "Add New Task Here");
newTaskInput.setAttribute("id", "newtaskinput");
newTaskInput.classList.add("inputbox");
newTask.appendChild(newTaskInput);

//create label and select input for user to input new task priority
const newPriority = document.createElement("div");
newPriority.textContent = "Priority: ";
newPriority.classList.add("prioritylabel");
const newPriorityInput = document.createElement("select");
newPriorityInput.setAttribute("id", "newpriorityinput");

//add options to select
const selectHigh = document.createElement("option");
selectHigh.textContent = "High";
selectHigh.setAttribute("value", "High");
newPriorityInput.appendChild(selectHigh);
const selectMedium = document.createElement("option");
selectMedium.textContent = "Medium";
newPriorityInput.appendChild(selectMedium);
const selectLow = document.createElement("option");
selectLow.textContent = "Low";
newPriorityInput.appendChild(selectLow);
newPriority.appendChild(newPriorityInput);

//add textArea description of task
const newTaskDescription = document.createElement("div");
newTaskDescription.classList.add("prioritylabel");
newTaskDescription.textContent = "Description: ";
newTaskDescription.setAttribute("placeholder", "Enter task details here");

const taskDescriptionInput = document.createElement("textarea");
taskDescriptionInput.setAttribute("cols", "30");
taskDescriptionInput.setAttribute("rows", "5");
newTaskDescription.appendChild(taskDescriptionInput);
//button to submit new task to the project
const submitNewTaskBtn = document.createElement("button");
submitNewTaskBtn.classList.add("prioritylabel");
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
let myProjects = JSON.parse(localStorage.getItem("projects")) || [];



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






const mainContent = document.querySelector("#main");

let currentProjectIndex;
let currentTaskIndex;

const reset = () => {
  _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value = "";
  _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value = "";
};

function renderMain(event) {
  //render project from sidebar to mainContent body

  mainContent.textContent = "";
  mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority

  currentProjectIndex = parseInt(event.target.id.split("-")[1]);

  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

  const projectCardHeader = document.createElement("h3");
  projectCardHeader.classList.add("cardheader");
  projectCardHeader.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name;
  projectCard.appendChild(projectCardHeader);

  const projectDue = document.createElement("div");
  projectDue.textContent = `Due: ${_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due}`;
  projectDue.classList.add("date");
  projectCard.appendChild(projectDue);

  for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    const tasks = document.createElement("div");

    //when we want to update after delete, just store with same "key" and the "key" will be updated.

    tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
    tasks.classList.add("tasks");
    tasks.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
    const taskDescription = document.createElement("div");
    taskDescription.textContent =
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
    taskDescription.classList.add("taskdescription");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Task";
    editBtn.setAttribute("id", `edit-${i}`);
    editBtn.addEventListener("click", (e) => {
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
      currentTaskIndex = parseInt(e.target.id.split("-")[1]);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
      console.log(currentTaskIndex);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete Task";
    deleteBtn.addEventListener("click", () => {
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
      localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
      renderMain(event);
    });

    tasks.appendChild(deleteBtn);
    tasks.appendChild(editBtn);
    tasks.appendChild(taskDescription);
    projectCard.appendChild(tasks);
  }

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  mainContent.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", () => {
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Add New Task";
  });
  mainContent.appendChild(addTaskBtn);
  mainContent.appendChild(projectCard);
}

function updateTaskContainer() {
  //exactly the same as renderMain, only without reassigning the currentProjectIndex. used for after altering myProjects array(deleteTask, addTask)
  mainContent.textContent = "";
  mainContent.appendChild(_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal); //dialog to input new task and its priority

  const projectCard = document.createElement("div");
  projectCard.classList.add("card");
  projectCard.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].id);

  const projectCardHeader = document.createElement("h3");
  projectCardHeader.classList.add("cardheader");
  projectCardHeader.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].name;
  projectCard.appendChild(projectCardHeader);

  const projectDue = document.createElement("div");
  projectDue.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].due;
  projectDue.classList.add("date");
  projectCard.appendChild(projectDue);

  for (let i = 0; i < _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks?.length; i++) {
    const tasks = document.createElement("div");
    const deleteBtn = document.createElement("button");

    //when we want to update after delete, just store with same "key" and the "key" will be updated.

    tasks.textContent = _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].name;
    tasks.classList.add("tasks");
    tasks.setAttribute("id", _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].id);
    const taskDescription = document.createElement("div");
    taskDescription.textContent =
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[i].description;
    taskDescription.classList.add("taskdescription");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit Task";
    editBtn.setAttribute("id", `edit-${i}`);
    editBtn.addEventListener("click", (e) => {
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
      currentTaskIndex = parseInt(e.target.id.split("-")[1]);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].name;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].priority;
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value =
        _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex].description;
      console.log(currentTaskIndex);
      _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Submit Editted Task";
    });

    deleteBtn.textContent = "Delete Task";
    deleteBtn.addEventListener("click", () => {
      _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.splice(i, 1);
      localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
      updateTaskContainer();
    });
    tasks.appendChild(deleteBtn);
    tasks.appendChild(editBtn);
    tasks.appendChild(taskDescription);
    projectCard.appendChild(tasks);
  }

  const addTaskBtn = document.createElement("button");
  addTaskBtn.textContent = "Add Task";
  mainContent.appendChild(addTaskBtn);
  addTaskBtn.addEventListener("click", () => {
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.textContent = "Add New Task";
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
  });
  mainContent.appendChild(addTaskBtn);
  mainContent.appendChild(projectCard);
}

const submitNewTask = () => {
  const taskObj = {
    name: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
    priority: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
    description: _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value,
  };
  // const currentTaskIndex = myProjects[currentProjectIndex].tasks.findIndex((item)=> item.id === currentTask.id);
  if (!_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value && !_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value) {
    alert("Please enter task details");
  } else if (!_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks) {
    //new project, no task property yet, assign task(s) property
    _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks = [
      (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value
      ),
    ];
    localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    reset();
    updateTaskContainer();
  } else if (_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex]) {
    //if task exists, edit task

    _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks[currentTaskIndex] = taskObj;
    localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
    reset();
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    currentTaskIndex = null; //after submit editted task, turn off currentTaskIndex, bug fixed where we keep on editing the same task index when we create new task.
    updateTaskContainer();
  } else {
    _myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects[currentProjectIndex].tasks.push(
      (0,_addTask_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newTaskInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.newPriorityInput.value,
        _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.taskDescriptionInput.value
      )
    ); //project already made, tasks property exist, but no currentTaskIndex;
    localStorage.setItem("projects", JSON.stringify(_myProjects_js__WEBPACK_IMPORTED_MODULE_0__.myProjects));
    reset();
    _addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.addTaskModal.classList.toggle("hidden");
    updateTaskContainer();
  }
};

_addTaskModal_js__WEBPACK_IMPORTED_MODULE_1__.submitNewTaskBtn.addEventListener("click", submitNewTask);

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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REFBb0Qsc0RBQVU7QUFDOUQ7QUFDQSxJQUFJLDBEQUFZO0FBQ2hCO0FBQ0E7QUFDQTs7QUFFQSw4REFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvYWRkVGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3QvLi9zcmMvYWRkVGFza01vZGFsLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9teVByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0LXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3QtcHJvamVjdC8uL3NyYy9yZW5kZXJNYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzLmpzXCI7XG5pbXBvcnQgeyBhZGRUYXNrTW9kYWwgfSBmcm9tIFwiLi9hZGRUYXNrTW9kYWwuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlVGFzayh0YXNrLCBwcmlvcml0eSwgZGVzY3JpcHRpb24pIHtcbiAgcmV0dXJuIHtcbiAgICBpZDogYCR7dGFza30ke0RhdGUubm93KCl9YCxcbiAgICBuYW1lOiB0YXNrLFxuICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXG4gIH07XG59XG4iLCJpbXBvcnQgeyBteVByb2plY3RzIH0gZnJvbSBcIi4vbXlQcm9qZWN0c1wiO1xuXG5jb25zdCBhZGRUYXNrTW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuYWRkVGFza01vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG5hZGRUYXNrTW9kYWwuY2xhc3NMaXN0LmFkZChcIm1vZGFsXCIpO1xuY29uc3QgY2xvc2VGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuY2xvc2VGb3JtLmlubmVySFRNTCA9IFwiQ2xvc2UgRm9ybVwiO1xuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3VGFza0lucHV0LnZhbHVlID0gXCJcIjtcbiAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBcIlwiO1xuICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbn0pO1xuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKGNsb3NlRm9ybSk7XG4vL2NvbnN0IGFkZFRhc2tNb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4vL2FkZFRhc2tNb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuLy9jcmVhdGUgbGFiZWwgYW5kIGlucHV0IGJveCBmb3IgdXNlciB0byBpbnB1dCBuZXcgdGFzayB0aXRsZVxuY29uc3QgbmV3VGFzayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uZXdUYXNrLmNsYXNzTGlzdC5hZGQoXCJtb2RhbGxhYmVsXCIpO1xubmV3VGFzay50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2sgOlwiO1xuY29uc3QgbmV3VGFza0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xubmV3VGFza0lucHV0LnNldEF0dHJpYnV0ZShcInBsYWNlaG9sZGVyXCIsIFwiQWRkIE5ldyBUYXNrIEhlcmVcIik7XG5uZXdUYXNrSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXd0YXNraW5wdXRcIik7XG5uZXdUYXNrSW5wdXQuY2xhc3NMaXN0LmFkZChcImlucHV0Ym94XCIpO1xubmV3VGFzay5hcHBlbmRDaGlsZChuZXdUYXNrSW5wdXQpO1xuXG4vL2NyZWF0ZSBsYWJlbCBhbmQgc2VsZWN0IGlucHV0IGZvciB1c2VyIHRvIGlucHV0IG5ldyB0YXNrIHByaW9yaXR5XG5jb25zdCBuZXdQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uZXdQcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IFwiO1xubmV3UHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInByaW9yaXR5bGFiZWxcIik7XG5jb25zdCBuZXdQcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbm5ld1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJuZXdwcmlvcml0eWlucHV0XCIpO1xuXG4vL2FkZCBvcHRpb25zIHRvIHNlbGVjdFxuY29uc3Qgc2VsZWN0SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zZWxlY3RIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG5zZWxlY3RIaWdoLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiSGlnaFwiKTtcbm5ld1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0SGlnaCk7XG5jb25zdCBzZWxlY3RNZWRpdW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuc2VsZWN0TWVkaXVtLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbm5ld1ByaW9yaXR5SW5wdXQuYXBwZW5kQ2hpbGQoc2VsZWN0TWVkaXVtKTtcbmNvbnN0IHNlbGVjdExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG5zZWxlY3RMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xubmV3UHJpb3JpdHlJbnB1dC5hcHBlbmRDaGlsZChzZWxlY3RMb3cpO1xubmV3UHJpb3JpdHkuYXBwZW5kQ2hpbGQobmV3UHJpb3JpdHlJbnB1dCk7XG5cbi8vYWRkIHRleHRBcmVhIGRlc2NyaXB0aW9uIG9mIHRhc2tcbmNvbnN0IG5ld1Rhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5uZXdUYXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInByaW9yaXR5bGFiZWxcIik7XG5uZXdUYXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOiBcIjtcbm5ld1Rhc2tEZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJwbGFjZWhvbGRlclwiLCBcIkVudGVyIHRhc2sgZGV0YWlscyBoZXJlXCIpO1xuXG5jb25zdCB0YXNrRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzMFwiKTtcbnRhc2tEZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xubmV3VGFza0Rlc2NyaXB0aW9uLmFwcGVuZENoaWxkKHRhc2tEZXNjcmlwdGlvbklucHV0KTtcbi8vYnV0dG9uIHRvIHN1Ym1pdCBuZXcgdGFzayB0byB0aGUgcHJvamVjdFxuY29uc3Qgc3VibWl0TmV3VGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5zdWJtaXROZXdUYXNrQnRuLmNsYXNzTGlzdC5hZGQoXCJwcmlvcml0eWxhYmVsXCIpO1xuc3VibWl0TmV3VGFza0J0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0IE5ldyBUYXNrXCI7XG5cbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChuZXdUYXNrKTtcbmFkZFRhc2tNb2RhbC5hcHBlbmRDaGlsZChuZXdQcmlvcml0eSk7XG5hZGRUYXNrTW9kYWwuYXBwZW5kQ2hpbGQobmV3VGFza0Rlc2NyaXB0aW9uKTtcblxuYWRkVGFza01vZGFsLmFwcGVuZENoaWxkKHN1Ym1pdE5ld1Rhc2tCdG4pO1xuXG5leHBvcnQgeyBhZGRUYXNrTW9kYWwgfTtcbmV4cG9ydCB7IHN1Ym1pdE5ld1Rhc2tCdG4gfTtcbmV4cG9ydCB7IG5ld1Rhc2tJbnB1dCB9O1xuZXhwb3J0IHsgbmV3UHJpb3JpdHlJbnB1dCB9O1xuZXhwb3J0IHsgdGFza0Rlc2NyaXB0aW9uSW5wdXQgfTtcbiIsImxldCBteVByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKSB8fCBbXTtcblxuZXhwb3J0IHsgbXlQcm9qZWN0cyB9O1xuXG4vL0NPQkEhIGNvbnN0IHN0b3JlZFByb2plY3RzID0gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuXG4vL2xvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcblxuLypcblxubXlQcm9qZWN0cy5wdXNoKDEpO1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xubXlQcm9qZWN0cy5wb3AoKTtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KG15UHJvamVjdHMpKTtcbi8vZG9udCBzZXQgaXRlbSBoZXJlLCBhcyBwcm9qZWN0IHdpbGwgYWx3YXlzIGdldCB1cGRhdGVkIHdoZW4gcmVmcmVzaGVkO1xuKi9cblxuLy93aGVuIGkgZGVsZXRlIGZyb20gbG9jYWwgc3RvcmFnZSwgcmVuZGVyTWFpbiBkb2VzbnQgc2hvdyB1cGRhdGVkIHZlcnNpb24gYXMgaXQgcmVuZGVycyBteVByb2plY3RzLlxuLy9hZGQgcHJvamVjdCBmdW5jdGlvbiBzaG91bGQgYmUgaGVyZS4gZ2V0IHRoZSBkb20gZm9yIHRoZSBmb3JtIHRvIGFkZCBwcm9qZWN0IGhlcmUgdG9vXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IG15UHJvamVjdHMgfSBmcm9tIFwiLi9teVByb2plY3RzLmpzXCI7XG5cbmltcG9ydCB7IHN1Ym1pdE5ld1Rhc2tCdG4sIHRhc2tEZXNjcmlwdGlvbiB9IGZyb20gXCIuL2FkZFRhc2tNb2RhbC5qc1wiO1xuaW1wb3J0IHtcbiAgYWRkVGFza01vZGFsLFxuICBuZXdUYXNrSW5wdXQsXG4gIG5ld1ByaW9yaXR5SW5wdXQsXG4gIHRhc2tEZXNjcmlwdGlvbklucHV0LFxufSBmcm9tIFwiLi9hZGRUYXNrTW9kYWwuanNcIjtcbmltcG9ydCBjcmVhdGVUYXNrIGZyb20gXCIuL2FkZFRhc2suanNcIjtcblxuY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21haW5cIik7XG5cbmxldCBjdXJyZW50UHJvamVjdEluZGV4O1xubGV0IGN1cnJlbnRUYXNrSW5kZXg7XG5cbmNvbnN0IHJlc2V0ID0gKCkgPT4ge1xuICBuZXdUYXNrSW5wdXQudmFsdWUgPSBcIlwiO1xuICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9IFwiXCI7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJNYWluKGV2ZW50KSB7XG4gIC8vcmVuZGVyIHByb2plY3QgZnJvbSBzaWRlYmFyIHRvIG1haW5Db250ZW50IGJvZHlcblxuICBtYWluQ29udGVudC50ZXh0Q29udGVudCA9IFwiXCI7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tNb2RhbCk7IC8vZGlhbG9nIHRvIGlucHV0IG5ldyB0YXNrIGFuZCBpdHMgcHJpb3JpdHlcblxuICBjdXJyZW50UHJvamVjdEluZGV4ID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LmlkLnNwbGl0KFwiLVwiKVsxXSk7XG5cbiAgY29uc3QgcHJvamVjdENhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0Q2FyZC5jbGFzc0xpc3QuYWRkKFwiY2FyZFwiKTtcbiAgcHJvamVjdENhcmQuc2V0QXR0cmlidXRlKFwiaWRcIiwgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS5pZCk7XG5cbiAgY29uc3QgcHJvamVjdENhcmRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gIHByb2plY3RDYXJkSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjYXJkaGVhZGVyXCIpO1xuICBwcm9qZWN0Q2FyZEhlYWRlci50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0ubmFtZTtcbiAgcHJvamVjdENhcmQuYXBwZW5kQ2hpbGQocHJvamVjdENhcmRIZWFkZXIpO1xuXG4gIGNvbnN0IHByb2plY3REdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBwcm9qZWN0RHVlLnRleHRDb250ZW50ID0gYER1ZTogJHtteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLmR1ZX1gO1xuICBwcm9qZWN0RHVlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RHVlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3M/Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgLy93aGVuIHdlIHdhbnQgdG8gdXBkYXRlIGFmdGVyIGRlbGV0ZSwganVzdCBzdG9yZSB3aXRoIHNhbWUgXCJrZXlcIiBhbmQgdGhlIFwia2V5XCIgd2lsbCBiZSB1cGRhdGVkLlxuXG4gICAgdGFza3MudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2ldLm5hbWU7XG4gICAgdGFza3MuY2xhc3NMaXN0LmFkZChcInRhc2tzXCIpO1xuICAgIHRhc2tzLnNldEF0dHJpYnV0ZShcImlkXCIsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uaWQpO1xuICAgIGNvbnN0IHRhc2tEZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID1cbiAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0uZGVzY3JpcHRpb247XG4gICAgdGFza0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrZGVzY3JpcHRpb25cIik7XG5cbiAgICBjb25zdCBlZGl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBlZGl0QnRuLnRleHRDb250ZW50ID0gXCJFZGl0IFRhc2tcIjtcbiAgICBlZGl0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIGBlZGl0LSR7aX1gKTtcbiAgICBlZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgICBjdXJyZW50VGFza0luZGV4ID0gcGFyc2VJbnQoZS50YXJnZXQuaWQuc3BsaXQoXCItXCIpWzFdKTtcbiAgICAgIG5ld1Rhc2tJbnB1dC52YWx1ZSA9XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ubmFtZTtcbiAgICAgIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLnByaW9yaXR5O1xuICAgICAgdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUgPVxuICAgICAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzW2N1cnJlbnRUYXNrSW5kZXhdLmRlc2NyaXB0aW9uO1xuICAgICAgY29uc29sZS5sb2coY3VycmVudFRhc2tJbmRleCk7XG4gICAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXQgRWRpdHRlZCBUYXNrXCI7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkZWxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICByZW5kZXJNYWluKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRhc2tzLmFwcGVuZENoaWxkKGRlbGV0ZUJ0bik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoZWRpdEJ0bik7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQodGFza0Rlc2NyaXB0aW9uKTtcbiAgICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZCh0YXNrcyk7XG4gIH1cblxuICBjb25zdCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICBzdWJtaXROZXdUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgTmV3IFRhc2tcIjtcbiAgfSk7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Q2FyZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVUYXNrQ29udGFpbmVyKCkge1xuICAvL2V4YWN0bHkgdGhlIHNhbWUgYXMgcmVuZGVyTWFpbiwgb25seSB3aXRob3V0IHJlYXNzaWduaW5nIHRoZSBjdXJyZW50UHJvamVjdEluZGV4LiB1c2VkIGZvciBhZnRlciBhbHRlcmluZyBteVByb2plY3RzIGFycmF5KGRlbGV0ZVRhc2ssIGFkZFRhc2spXG4gIG1haW5Db250ZW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza01vZGFsKTsgLy9kaWFsb2cgdG8gaW5wdXQgbmV3IHRhc2sgYW5kIGl0cyBwcmlvcml0eVxuXG4gIGNvbnN0IHByb2plY3RDYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdENhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG4gIHByb2plY3RDYXJkLnNldEF0dHJpYnV0ZShcImlkXCIsIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uaWQpO1xuXG4gIGNvbnN0IHByb2plY3RDYXJkSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICBwcm9qZWN0Q2FyZEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY2FyZGhlYWRlclwiKTtcbiAgcHJvamVjdENhcmRIZWFkZXIudGV4dENvbnRlbnQgPSBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLm5hbWU7XG4gIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHByb2plY3RDYXJkSGVhZGVyKTtcblxuICBjb25zdCBwcm9qZWN0RHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcHJvamVjdER1ZS50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0uZHVlO1xuICBwcm9qZWN0RHVlLmNsYXNzTGlzdC5hZGQoXCJkYXRlXCIpO1xuICBwcm9qZWN0Q2FyZC5hcHBlbmRDaGlsZChwcm9qZWN0RHVlKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3M/Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnN0IGRlbGV0ZUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgICAvL3doZW4gd2Ugd2FudCB0byB1cGRhdGUgYWZ0ZXIgZGVsZXRlLCBqdXN0IHN0b3JlIHdpdGggc2FtZSBcImtleVwiIGFuZCB0aGUgXCJrZXlcIiB3aWxsIGJlIHVwZGF0ZWQuXG5cbiAgICB0YXNrcy50ZXh0Q29udGVudCA9IG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbaV0ubmFtZTtcbiAgICB0YXNrcy5jbGFzc0xpc3QuYWRkKFwidGFza3NcIik7XG4gICAgdGFza3Muc2V0QXR0cmlidXRlKFwiaWRcIiwgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tpXS5pZCk7XG4gICAgY29uc3QgdGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPVxuICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tpXS5kZXNjcmlwdGlvbjtcbiAgICB0YXNrRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRhc2tkZXNjcmlwdGlvblwiKTtcblxuICAgIGNvbnN0IGVkaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGVkaXRCdG4udGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuICAgIGVkaXRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgYGVkaXQtJHtpfWApO1xuICAgIGVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICBhZGRUYXNrTW9kYWwuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKTtcbiAgICAgIGN1cnJlbnRUYXNrSW5kZXggPSBwYXJzZUludChlLnRhcmdldC5pZC5zcGxpdChcIi1cIilbMV0pO1xuICAgICAgbmV3VGFza0lucHV0LnZhbHVlID1cbiAgICAgICAgbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrc1tjdXJyZW50VGFza0luZGV4XS5uYW1lO1xuICAgICAgbmV3UHJpb3JpdHlJbnB1dC52YWx1ZSA9XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0ucHJpb3JpdHk7XG4gICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZSA9XG4gICAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0uZGVzY3JpcHRpb247XG4gICAgICBjb25zb2xlLmxvZyhjdXJyZW50VGFza0luZGV4KTtcbiAgICAgIHN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdCBFZGl0dGVkIFRhc2tcIjtcbiAgICB9KTtcblxuICAgIGRlbGV0ZUJ0bi50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcbiAgICBkZWxldGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3Muc3BsaWNlKGksIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShteVByb2plY3RzKSk7XG4gICAgICB1cGRhdGVUYXNrQ29udGFpbmVyKCk7XG4gICAgfSk7XG4gICAgdGFza3MuYXBwZW5kQ2hpbGQoZGVsZXRlQnRuKTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZChlZGl0QnRuKTtcbiAgICB0YXNrcy5hcHBlbmRDaGlsZCh0YXNrRGVzY3JpcHRpb24pO1xuICAgIHByb2plY3RDYXJkLmFwcGVuZENoaWxkKHRhc2tzKTtcbiAgfVxuXG4gIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICBtYWluQ29udGVudC5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHN1Ym1pdE5ld1Rhc2tCdG4udGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICB9KTtcbiAgbWFpbkNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIG1haW5Db250ZW50LmFwcGVuZENoaWxkKHByb2plY3RDYXJkKTtcbn1cblxuY29uc3Qgc3VibWl0TmV3VGFzayA9ICgpID0+IHtcbiAgY29uc3QgdGFza09iaiA9IHtcbiAgICBuYW1lOiBuZXdUYXNrSW5wdXQudmFsdWUsXG4gICAgcHJpb3JpdHk6IG5ld1ByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgZGVzY3JpcHRpb246IHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICB9O1xuICAvLyBjb25zdCBjdXJyZW50VGFza0luZGV4ID0gbXlQcm9qZWN0c1tjdXJyZW50UHJvamVjdEluZGV4XS50YXNrcy5maW5kSW5kZXgoKGl0ZW0pPT4gaXRlbS5pZCA9PT0gY3VycmVudFRhc2suaWQpO1xuICBpZiAoIW5ld1Rhc2tJbnB1dC52YWx1ZSAmJiAhdGFza0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUpIHtcbiAgICBhbGVydChcIlBsZWFzZSBlbnRlciB0YXNrIGRldGFpbHNcIik7XG4gIH0gZWxzZSBpZiAoIW15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3MpIHtcbiAgICAvL25ldyBwcm9qZWN0LCBubyB0YXNrIHByb3BlcnR5IHlldCwgYXNzaWduIHRhc2socykgcHJvcGVydHlcbiAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzID0gW1xuICAgICAgY3JlYXRlVGFzayhcbiAgICAgICAgbmV3VGFza0lucHV0LnZhbHVlLFxuICAgICAgICBuZXdQcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICB0YXNrRGVzY3JpcHRpb25JbnB1dC52YWx1ZVxuICAgICAgKSxcbiAgICBdO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICAgIGFkZFRhc2tNb2RhbC5jbGFzc0xpc3QudG9nZ2xlKFwiaGlkZGVuXCIpO1xuICAgIHJlc2V0KCk7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICB9IGVsc2UgaWYgKG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0pIHtcbiAgICAvL2lmIHRhc2sgZXhpc3RzLCBlZGl0IHRhc2tcblxuICAgIG15UHJvamVjdHNbY3VycmVudFByb2plY3RJbmRleF0udGFza3NbY3VycmVudFRhc2tJbmRleF0gPSB0YXNrT2JqO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICAgIHJlc2V0KCk7XG4gICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgY3VycmVudFRhc2tJbmRleCA9IG51bGw7IC8vYWZ0ZXIgc3VibWl0IGVkaXR0ZWQgdGFzaywgdHVybiBvZmYgY3VycmVudFRhc2tJbmRleCwgYnVnIGZpeGVkIHdoZXJlIHdlIGtlZXAgb24gZWRpdGluZyB0aGUgc2FtZSB0YXNrIGluZGV4IHdoZW4gd2UgY3JlYXRlIG5ldyB0YXNrLlxuICAgIHVwZGF0ZVRhc2tDb250YWluZXIoKTtcbiAgfSBlbHNlIHtcbiAgICBteVByb2plY3RzW2N1cnJlbnRQcm9qZWN0SW5kZXhdLnRhc2tzLnB1c2goXG4gICAgICBjcmVhdGVUYXNrKFxuICAgICAgICBuZXdUYXNrSW5wdXQudmFsdWUsXG4gICAgICAgIG5ld1ByaW9yaXR5SW5wdXQudmFsdWUsXG4gICAgICAgIHRhc2tEZXNjcmlwdGlvbklucHV0LnZhbHVlXG4gICAgICApXG4gICAgKTsgLy9wcm9qZWN0IGFscmVhZHkgbWFkZSwgdGFza3MgcHJvcGVydHkgZXhpc3QsIGJ1dCBubyBjdXJyZW50VGFza0luZGV4O1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkobXlQcm9qZWN0cykpO1xuICAgIHJlc2V0KCk7XG4gICAgYWRkVGFza01vZGFsLmNsYXNzTGlzdC50b2dnbGUoXCJoaWRkZW5cIik7XG4gICAgdXBkYXRlVGFza0NvbnRhaW5lcigpO1xuICB9XG59O1xuXG5zdWJtaXROZXdUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzdWJtaXROZXdUYXNrKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==