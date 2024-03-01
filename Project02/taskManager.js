document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('taskForm');
    const taskList = document.getElementById('taskList');

    // Creates new task
    function createTaskItem(task) {
        const taskItem = document.createElement('li');
        taskItem.innerHTML = `
            <span>${task.title}</span><br>
            <span>Priority: ${task.priority}</span><br>
            <span>Status: ${task.status}</span><br>
            <button class="remove">Remove</button>
            <button class="complete">Mark as Complete</button>
        `;
        return taskItem;
    }

    // adds task to list 
    function addTask(task) {
        const taskItem = createTaskItem(task);
        taskList.appendChild(taskItem);
    }

    // removes task from list
    function removeTask(taskItem) {
        taskItem.remove();
    }

    // marks task as complete
    function toggleComplete(taskItem) {
        taskItem.classList.toggle('completed');
    }


    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const taskTitle = document.getElementById('task').value;
        const priorityLevel = document.getElementById('priority').value;
        const status = document.querySelector('input[name="status"]:checked').value;

        const task = {
            title: taskTitle,
            priority: priorityLevel,
            status: status
        };

        addTask(task); // adds task to the task list
        form.reset();
    });

    
    taskList.addEventListener('click', function(event) {
        const taskItem = event.target.closest('li');
        if (!taskItem) return; // Exit if the clicked element is not a task item

        if (event.target.classList.contains('remove')) {
            removeTask(taskItem); // removes task
        } else if (event.target.classList.contains('complete')) {
            toggleComplete(taskItem); 
        }
    });
});

