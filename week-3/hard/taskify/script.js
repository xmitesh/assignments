const todo = []

function addNewTodo(){
    const value = document.querySelector("#newtask");
    if (value.value === "")
        alert("enter a valid todo");
    else{
        todo.push({
            name: value.value,
            status: 'todo'
        })
        render();
    }
}

function deletetodo(index){
    todo.splice(index,1);
    render();
}

function render(){
    const todoTasks = document.querySelector(".todo-tasks");
    const inProgressTasks = document.querySelector(".in-progress-tasks");
    const finishedTasks = document.querySelector(".finished-tasks");
    
    let todoStr = "", inProgressStr = "", finishedStr = "";
    
    todo.forEach((element, index) => {
        const taskHtml = `
            <div class="task" draggable="true" data-index="${index}">
                <p>${element.name}</p>
                <button type="button" onclick="deletetodo(${index})">
                    <img src="delete.png" alt="delete button" id="delete-icon" style="width:20px ; height : 20px ">
                </button>
            </div>`;
            
        switch(element.status) {
            case 'in-progress':
                inProgressStr += taskHtml;
                break;
            case 'finished':
                finishedStr += taskHtml;
                break;
            default:
                todoStr += taskHtml;
        }
    });
    
    todoTasks.innerHTML = todoStr;
    inProgressTasks.innerHTML = inProgressStr;
    finishedTasks.innerHTML = finishedStr;
    
    const tasks = document.querySelectorAll('.task');
    const columns = document.querySelectorAll('.tasks-column');
    
    tasks.forEach(task => {
        task.addEventListener('dragstart', (e) => {
            task.classList.add('dragging');
            e.dataTransfer.setData('text/plain', task.dataset.index);
            console.log('Drag started:', task.dataset.index);
        });
        
        task.addEventListener('dragend', () => {
            task.classList.remove('dragging');
            console.log('Drag ended');
        });
    });
    
    columns.forEach(column => {
        column.addEventListener('dragover', (e) => {
            e.preventDefault();
            console.log('Dragging over column:', column.dataset.status);
        });
        
        column.addEventListener('drop', (e) => {
            e.preventDefault();
            const taskIndex = e.dataTransfer.getData('text/plain');
            const newStatus = column.dataset.status;
            
            if (taskIndex !== null && newStatus) {
                console.log('Dropping task', taskIndex, 'to', newStatus);
                todo[taskIndex].status = newStatus;
                render();
            }
        });
    });
}

    