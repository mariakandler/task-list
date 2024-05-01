const getStartedBtn = document.getElementById('getStartedBtn');
const firstTaskSection = document.getElementById('firstTaskSection');
const createTaskBtn = document.getElementById('createTaskBtn');
const addTaskSection = document.getElementById('addTaskSection');
const saveTaskBtn = document.getElementById('saveTaskBtn');
const mainSection = document.getElementById('mainSection');


// initial scroll
getStartedBtn.addEventListener('click', () => 
firstTaskSection.scrollIntoView({behavior: 'smooth'})
);

// create task button
createTaskBtn.addEventListener('click', () => {
if (addTaskSection.classList.contains('hidden')) {
    addTaskSection.classList.remove('hidden')
} else {
    addTaskSection.classList.add('hidden')
}
});

// adding task to html
function addTaskHtml (title, desc, date){
    const taskContainer = document.createElement('div');
    const taskH1 = document.createElement('h1');
    const taskDesc = document.createElement('p');
    const taskDate = document.createElement('p');
    

    taskContainer.className = 'taskDiv';
    taskH1.innerHTML = title;
    taskDesc.innerHTML = desc;
    taskDate.innerHTML = date;

    mainSection.appendChild(taskContainer);
    taskContainer.append(taskH1, taskDesc, taskDate);

    //date - extrair data em texto, comparar e blablabla
}

// new task handler
document.addEventListener('DOMContentLoaded', function() {
saveTaskBtn.addEventListener('click', () => {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDate = document.getElementById('dueDate').value;

    if (mainSection.classList.contains('hidden')) {
        mainSection.classList.remove('hidden');
        addTaskHtml(taskTitle, taskDescription, dueDate);
        timeFrame(dueDate);
    } else {
        addTaskHtml(taskTitle, taskDescription, dueDate);
        timeFrame(dueDate);
    }

    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDescription').value = "";
    document.getElementById('dueDate').value = "";
    
})
})

// time frame handler
// function timeFrame (due) {
//     const today = new Date()
//     const currentDay = today.getDate(); 
//     const tomorrow = new Date(today);
//     tomorrow.setDate(currentDay + 1);

//     if (due.getTime() === today.getTime()) {
//         console.log("hoje");
//     } else if (due.getTime() === tomorrow.getTime()) {
//         console.log("amanhã");
//     } else {
//         console.log("depois");
//     }
// }


function timeFrame(due) {
    const today = new Date();
    const currentDay = today.getDate();
    const tomorrow = new Date(today);
    tomorrow.setDate(currentDay + 1);

    // Verifica se due é uma string e tenta convertê-la para Date
    if (typeof due === 'string') {
        due = new Date(due);
    }

    // Verifica se due é uma data válida
    if (due instanceof Date && !isNaN(due.getTime())) {
        if (due.toDateString() === today.toDateString()) {
            console.log("hoje");
        } else if (due.toDateString() === tomorrow.toDateString()) {
            console.log("amanhã");
        } else {
            console.log("depois");
        }
    } else {
        console.log("Data inválida");
    }
}