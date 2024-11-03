document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const taskText = event.target.value;
        if (taskText) {
            addTask(taskText);
            event.target.value = '';
        }
    }
});

function addTask(task) {
    const todoList = document.getElementById('todoList');
    const li = document.createElement('li');
    li.textContent = task;

    const completeButton = document.createElement('button');
    completeButton.textContent = '완료';
    completeButton.addEventListener('click', function() {
        completeTask(li);
    });

    li.appendChild(completeButton);
    todoList.appendChild(li);
}

function completeTask(taskItem) {
    const completedList = document.getElementById('completedList');
    const li = document.createElement('li');
    li.textContent = taskItem.textContent.replace('완료', '').trim();

    const deleteButton = document.createElement('button');
    deleteButton.textContent = '삭제';
    deleteButton.classList.add('delete');
    deleteButton.addEventListener('click', function() {
        deleteTask(li);
    });

    li.appendChild(deleteButton);
    completedList.appendChild(li);
    taskItem.remove();
}

function deleteTask(taskItem) {
    taskItem.remove();
}