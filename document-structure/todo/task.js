const taskInput = document.getElementById('task__input');
const addButton = document.getElementById('tasks__add');
const toDoList = document.getElementById('tasks__list');

addButton.addEventListener('click', (element) => {
  element.preventDefault();

  taskInput.value = taskInput.value.trim();

  if (taskInput.value !== '') {
    toDoList.insertAdjacentHTML(
      'afterend',
      `<div class="task"><div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a></div>`
    );
  }

  taskInput.value = '';
  const taskRemoveButton = document.querySelector('.task__remove');

  taskRemoveButton.addEventListener('click', (element) => {
    element.preventDefault();

    let taskRemoveButtonParent = taskRemoveButton.parentElement;
    taskRemoveButtonParent.remove();
  });
});
