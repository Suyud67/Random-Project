// * local storage key
const todoKey = 'TODOLOCAL_KEY';

// array untuk menampung nilai todo
let todos = [];

// *function ini digunakan untuk check local storage pada browser
function checkLocalStorage() {
  if (typeof Storage !== 'undefined') {
    return true;
  } else {
    alert('Browser mu tidak mendukung Local Storage!');
    return false;
  }
}

// function ini digunakan untuk save input user ke format object
function saveToObject(todo, deadline, isCompleted) {
  return {
    id: +new Date(),
    todo,
    deadline,
    isCompleted,
  };
}

// function ini digunakan untuk save data ke local storage
function saveDataToLocal() {
  if (checkLocalStorage()) {
    // * mengubah data dalam todos ke format yang bisa dibaca (JSON)
    const data = JSON.stringify(todos);
    localStorage.setItem(todoKey, data);
  }
}

// track element berdasarkan argument yang sudah dikirim
function findIdTodo(idTodo) {
  for (todo of todos) {
    if (todo.id === idTodo) return todo;
  }
}

function findIndexTodo(todoId) {
  let index = 0;
  for (todo of todos) {
    if (todo.id === todoId) return index;

    index++;
  }

  return -1;
}

function loadRestoreData() {
  if (checkLocalStorage()) {
    if (localStorage.getItem(todoKey) !== null) {
      const localTodo = localStorage.getItem(todoKey);
      let todoObj = JSON.parse(localTodo);

      if (todoObj !== null) todos = todoObj;

      for (todo of todos) {
        const todoRefresh = createTodo(todo.todo, todo.deadline, todo.isCompleted);
        todoRefresh[trackTodo] = todo.id;
      }
    } else {
      return [];
    }
  }
}
