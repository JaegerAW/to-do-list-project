import { myProjects } from './myProjects.js';
import { addTaskModal } from './addTaskModal.js';

export default function createTask(task, priority, description) {
        
    return {
        "id": `${task}${Date.now()}`,
        "name": task,
        "priority": priority,
        "description": description,
    
    }

}