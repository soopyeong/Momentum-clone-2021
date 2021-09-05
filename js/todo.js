const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

let toDos = [];

const TODOS_KET = "todos";

const SAVE_TODO_PLACEHOLDER = todoInput.placeholder;

function focusTodoInput() {
  todoInput.placeholder = "";
}
function blurTodoInput() {
  todoInput.placeholder = SAVE_TODO_PLACEHOLDER;
}

function saveTodos() {
  localStorage.setItem(TODOS_KET, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  span.innerText = newTodo.text;
  button.innerText = "❌";
  li.appendChild(button);
  li.appendChild(span);
  todoList.appendChild(li);

  button.addEventListener("click", deleteTodo);
}

function toDoSubmit(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObject = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObject);
  paintTodo(newTodoObject);
  saveTodos();
}

todoForm.addEventListener("submit", toDoSubmit);

const savedTodos = localStorage.getItem(TODOS_KET);

if (savedTodos) {
  const parseTodos = JSON.parse(savedTodos);
  toDos = parseTodos;
  parseTodos.forEach(paintTodo);
}

todoInput.addEventListener("focus", focusTodoInput);
todoInput.addEventListener("blur", blurTodoInput);
