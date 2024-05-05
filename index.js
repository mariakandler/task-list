const getStartedBtn = document.getElementById('getStartedBtn');
const firstTaskAlert = document.getElementById('firstTaskAlert');
const firstTaskBtn = document.getElementById('firstTaskBtn');
const addTaskSection = document.getElementById('addTaskSection');
const saveTaskBtn = document.getElementById('saveTaskBtn');
const timeFramesSec = document.getElementById('timeFramesSec');
const main = document.getElementById('main')


// initial scroll
getStartedBtn.addEventListener('click', () => 
main.scrollIntoView({behavior: 'smooth'})
);

// create task button
firstTaskBtn.addEventListener('click', () => {
if (FirstTaskInputsDiv.classList.contains('hidden')) {
    FirstTaskInputsDiv.classList.remove('hidden');
    firstTaskBtn.remove();
} else {
    FirstTaskInputsDiv.classList.add('hidden')
}
});

// adding task to html
function addTaskHtml (title, desc, date, targetDiv){
    const taskContainer = document.createElement('div');
    const taskH1 = document.createElement('h1');
    const taskDesc = document.createElement('p');
    const taskDate = document.createElement('p');
    

    taskContainer.className = 'taskDiv';
    taskH1.innerHTML = title;
    taskDesc.innerHTML = desc;
    taskDate.innerHTML = date;

    taskContainer.append(taskH1, taskDesc, taskDate);
    targetDiv.append(taskContainer)
}

// validanting date
function validateDate (dueDate) {
    const today = new Date().setHours(0, 0, 0, 0);
    
    if (dueDate < today) {
        window.alert("data inválida");
        return false;
    } else {
        return true;
    }
}

// time frame handler
function getTimeFrame (due) {
    const today = new Date();
    today.setHours(0, 0, 0, 0); 
  
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0); 
  
    const dueDate = new Date(due);
    dueDate.setHours(0, 0, 0, 0); 

    const taskTitle = document.getElementById('taskTitle').value;
    const taskDescription = document.getElementById('taskDescription').value;
  
    const todayDiv = document.getElementById('todayDiv');
    const tomorrowDiv = document.getElementById('tomorrowDiv');
    const nextDiv = document.getElementById('nextDiv');
  
    if (dueDate.getTime() === today.getTime()) {
      addTaskHtml(taskTitle, taskDescription, dueDate, todayDiv);
    } else if (dueDate.getTime() === tomorrow.getTime()) {
      addTaskHtml(taskTitle, taskDescription, dueDate, tomorrowDiv);
    } else {
      addTaskHtml(taskTitle, taskDescription, dueDate, nextDiv);
  } 
}

// clear inputs 
function clearInputs () {
    document.getElementById('taskTitle').value = "";
    document.getElementById('taskDescription').value = "";
    document.getElementById('dueDate').value = "";
}

// first task handler
document.addEventListener('DOMContentLoaded', function() {
    saveTaskBtn.addEventListener('click', () => {
        
        const dueDateString = document.getElementById('dueDate').value;
        const dueDate = new Date(dueDateString + "T00:00:00");

    
        if (mainSection.classList.contains('hidden')) {
            mainSection.classList.remove('hidden');
            if (validateDate(dueDate)) {
                getTimeFrame(dueDate);
            } else {
                window.alert('nao')
            }
        } else {
            if (validateDate(dueDate)) {
                getTimeFrame(dueDate);
            } else {
                window.alert('nao')
            }
        }

    clearInputs();
        
    })
})


