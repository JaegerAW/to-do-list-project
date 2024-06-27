import { myProjects } from './myProjects.js';
import { addTaskModal } from './addTaskModal.js';

export default function createTask(task, priority) {

return {
    "name": task,
    "priority": priority
}

}