const FORM = document.getElementById('task_form');
const TASK_LIST = document.getElementById('task_container');

FORM.onsubmit = function (e) {
    e.preventDefault();
    let taskTitle = document.getElementById('taskTitle').value;
    addNewTask(taskTitle);
    FORM.reset();
}

function addNewTask(taskTitle) {
    const NEW_TASK_DIV = document.createElement('div');
    const NEW_TASK_INPUT = document.createElement('input');
    const NEW_TASK_LABEL = document.createElement('label');

    NEW_TASK_DIV.setAttribute("id", `div_${taskTitle}`);

    NEW_TASK_INPUT.setAttribute("id", taskTitle);
    NEW_TASK_INPUT.setAttribute("type", "checkbox");

    NEW_TASK_LABEL.setAttribute("for", taskTitle);
    NEW_TASK_LABEL.innerHTML = taskTitle;

    NEW_TASK_DIV.appendChild(NEW_TASK_INPUT);
    NEW_TASK_DIV.appendChild(NEW_TASK_LABEL);
    TASK_LIST.appendChild(NEW_TASK_DIV);
}