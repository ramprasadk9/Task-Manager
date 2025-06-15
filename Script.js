function addProject() {
  const projectName = document.getElementById('projectName').value.trim();
  if (!projectName) return;

  const projectsDiv = document.getElementById('projects');

  const projectDiv = document.createElement('div');
  projectDiv.className = 'project';

  const title = document.createElement('h2');
  title.textContent = projectName;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete Project';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => projectDiv.remove();

  const taskInputDiv = document.createElement('div');
  taskInputDiv.className = 'task-inputs';

  const taskInput = document.createElement('input');
  taskInput.placeholder = 'New Task Name';

  const timeInput = document.createElement('input');
  timeInput.type = 'number';
  timeInput.placeholder = 'Time (sec)';
  timeInput.style.width = '100px';
  timeInput.style.marginLeft = '5px';

  const addTaskBtn = document.createElement('button');
  addTaskBtn.textContent = 'Add Task';
  addTaskBtn.className = 'task';
  addTaskBtn.onclick = () => {
    const taskName = taskInput.value.trim();
    const time = parseInt(timeInput.value);

    if (!taskName || isNaN(time) || time <= 0) return;

    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    const taskText = document.createElement('span');
    const countdown = document.createElement('span');

    taskText.textContent = `${taskName} (Remaining: ${time}s)`;

    taskItem.appendChild(taskText);
    taskItem.appendChild(countdown);

    const deleteTaskBtn = document.createElement('button');
    deleteTaskBtn.textContent = 'Delete';
    deleteTaskBtn.className = 'delete';
    deleteTaskBtn.onclick = () => taskItem.remove();

    taskItem.appendChild(deleteTaskBtn);

    taskList.appendChild(taskItem);

    // Countdown timer
    let remaining = time;
    const interval = setInterval(() => {
      remaining--;
      taskText.textContent = `${taskName} (Remaining: ${remaining}s)`;
      if (remaining <= 0) {
        clearInterval(interval);
        alert(`Task "${taskName}" is completed!`);
        taskText.textContent = `${taskName} (Completed)`;
      }
    }, 1000);

    taskInput.value = '';
    timeInput.value = '';
  };

  taskInputDiv.appendChild(taskInput);
  taskInputDiv.appendChild(timeInput);
  taskInputDiv.appendChild(addTaskBtn);

  const taskList = document.createElement('div');
  taskList.className = 'task-container';

  projectDiv.appendChild(title);
  projectDiv.appendChild(deleteBtn);
  projectDiv.appendChild(taskInputDiv);
  projectDiv.appendChild(taskList);

  projectsDiv.appendChild(projectDiv);

  document.getElementById('projectName').value = '';
}
