import { myProjects } from './myProjects.js';
const newTitleInput = document.querySelector('#newtitle');
const newDueInput = document.querySelector('#newdue');
const addProjectBtn = document.querySelector('#addnewproject');




const createProject = (title, date) => {
    return {
       id: myProjects.length, "name": title, "due": date
    };

}

addProjectBtn.addEventListener('click', ()=>{
    if(!newTitleInput.value || !newDueInput.value) {
        return;
    }
    myProjects.push(createProject(newTitleInput.value, newDueInput.value));
    localStorage.setItem('projects', JSON.stringify(myProjects));
    

})