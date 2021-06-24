
document.addEventListener("DOMContentLoaded", () => {

let todoItems = [];


function addTodo(text) {
        const todo = {
        text,
        checked: false,
        };

    todoItems.push(todo);
    showTodo(todo);
}

const form = document.getElementById('create-task-form');

form.addEventListener('submit', event => {
    event.preventDefault();
    const input = document.getElementById('txtVal');

    const text = input.value.trim();
    if (text !== ''){
        addTodo(text);
        input.value = '';
        input.focus();
    }
});

function showTodo(todo) {
    const list = document.getElementById('tasks');

    const isChecked = todo.checked ? 'done': '';

    const node = document.createElement("li");

    node.setAttribute('class', `todo-item ${isChecked}`);

    node.setAttribute('data-key', todo.id);

    node.innerHTML = `
    <input  id="${todo.id}" type="checkbox"/>
    <label for="${todo.id}" class="tick js-tick-tick"></label>
    <span>${todo.text}</span>
    `;
    list.append(node);
}
    const list = document.getElementById('txtVal');

    list.addEventListener('click', event => {
        if (event.target.classList.contains('js-tick')) {
            const itemKey = event.target.parentElement.dataset.key;
            toggleDone(itemKey);
        }
    });
function toggleDone(key) {
    const index =todoItems.findIndex(item =>item.id === Number(key));
    todoItems[index].checked = !todoItems[index].checked;;
    showTodo(todoItems[index]);
}


})