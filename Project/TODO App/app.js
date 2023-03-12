

// Difine UI Content
const form = document.querySelector('#taskForm');
const taskList = document.querySelector('#colaction');
const taskInpute = document.querySelector('#inpute');
const clearAll = document.querySelector('#clearAll');
const filter = document.querySelector('#filter');


// Load all event

    // create  mathord
    losdEventListeners();

    // create Event Function
    function losdEventListeners () {
        // Add Task
        form.addEventListener("submit", addTask);

        // Remove Task
        taskList.addEventListener("click", removeTask);

        // Remove all
        clearAll.addEventListener("click", clearTask);

        // Filter task
        filter.addEventListener("keyup", filterTask);
        
    }


// add tasks
function addTask(e) {
    if (taskInpute.value === '' ){
        alert("Please Add Task")
    }else{
    // create Element
    const li = document.createElement('li');
    const link = document.createElement('a');
    link.innerHTML = '<i class="fas fa-times"></i>'

    // add class
    link.className = "detete-item";
    li.className = "collaction-item"
    // apprnd Element and content
    li.appendChild(document.createTextNode(taskInpute.value))
    li.appendChild(link)
    taskList.appendChild(li);

    // Create blank inpute before
    taskInpute.value = '';
    }
 

    e.preventDefault();
}

// Remove Tasks
function removeTask (e) {
    //   console.log( e.target)
    if (e.target.parentElement.classList.contains("detete-item")) {
        e.target.parentElement.parentElement.remove();
    }
}

// Clear All Function 
function clearTask(e) {
    taskList.innerHTML= "";
    e.preventDefault();
}

// filter task function
function filterTask(e) {
    const text = e.target.value.toLowerCase();
    const allLi = document.querySelectorAll(".collaction-item");
    
    allLi.forEach(function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().search(text) != -1){
            task.style.display = "block";
        }else{
            task.style.display = 'none';
        }
        
    })


    e.preventDefault();
}











