let todos = JSON.parse(localStorage.getItem('todos')) || [];

renderTodos();

document.querySelector('.js-add-button').addEventListener('click', () => {
    addTodo();
});

document.querySelector('.js-clear-button').addEventListener('click', () => {
    todos = [];
    localStorage.removeItem('todos');
    renderTodos();
});

function renderTodos() {
    let todoListHTML = '';
    todos.forEach((todoObject, i) => {
        todoListHTML += `
                <div>${todoObject.name}</div>
                <div>${todoObject.dueDate}</div>
                <button class="delete-todo-button">Delete</button>
            `;
    });
    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
    console.log(todos);

    document.querySelectorAll('.delete-todo-button').forEach((button, i) => {
        button.addEventListener('click', () => {
            todos.splice(i, 1);
            renderTodos();
        });
    });
}

function addTodo() {
    const input = document.querySelector('.js-todo-input');
    const todo = input.value;
    const dateinput = document.querySelector('.js-due-date-input');
    const date = dateinput.value;
    todos.push({
        name: todo,
        dueDate: date
    });
    input.value = '';
    renderTodos();
    console.log(todos);
    localStorage.setItem('todos', JSON.stringify(todos));
}