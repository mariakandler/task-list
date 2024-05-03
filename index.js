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
}

// validanting date

function validateDate (date) {
    const dueDateString = document.getElementById('dueDate').value;
    const today = new Date().setHours(0, 0, 0, 0)
    const beforeToday = 
}

// new task handler
document.addEventListener('DOMContentLoaded', function() {
saveTaskBtn.addEventListener('click', () => {
    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
    const dueDateString = document.getElementById('dueDate').value;
    const dueDate = new Date(dueDateString + "T00:00:00");

    if (mainSection.classList.contains('hidden')) {
        mainSection.classList.remove('hidden');
        addTaskHtml(taskTitle, taskDescription, dueDate);
        getTimeFrame(dueDate)
    } else {
        addTaskHtml(taskTitle, taskDescription, dueDate);
        getTimeFrame(dueDate)
    }

    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDescription').value = "";
    document.getElementById('dueDate').value = "";
    
})
})

// time frame handler
function getTimeFrame (due) {
  const today = new Date();
  today.setHours(0, 0, 0, 0); 

  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0); 

  const dueDate = new Date(due);
  dueDate.setHours(0, 0, 0, 0); 

  const todayDiv = document.getElementById('todayDiv');
  const tomorrowDiv = document.getElementById('tomorrowDiv');
  const nextDiv = document.getElementById('nextDiv');

  if (dueDate.getTime() === today.getTime()) {
    console.log('today');
  } else if (dueDate.getTime() === tomorrow.getTime()) {
    console.log('tomorrow');
  } else {
    console.log('next');
}
}
