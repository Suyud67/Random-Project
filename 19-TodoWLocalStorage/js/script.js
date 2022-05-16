// todo: mengambil form, membuat element baru, isikan dari value yang diambil, event dari btn, element pindah dari unfinish ke finish dan sebaliknya.
// variabel untuk track data masuk dari user
const trackTodo = 'getIdTodo';

// load data
window.addEventListener('load', function () {
  loadRestoreData();
});

// * mengambil nilai dari form
const formSubmit = document.getElementById('formTodo');

formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  addTodo();
});

// menambahkan todo
function addTodo() {
  const todoField = document.getElementById('todo').value;
  const deadLine = document.getElementById('dateTodo').value;

  // menambahkan todo ke website dan localStorage
  const todo = createTodo(todoField, deadLine, false);
  const todoLocalStorage = saveToObject(todoField, deadLine, false);

  // *bagian ini berfungsi track input user yang masuk melalui Id
  todo[trackTodo] = todoLocalStorage.id;
  todos.push(todoLocalStorage);

  // function untuk save data ke localStorage
  saveDataToLocal();
}

// membuat element dari todo yang sudah diambil
function createTodo(todo, deadline, isCompleted) {
  // membuat element dan menempelkan pada value yang sudah dikirim lewat argument
  const todoList = document.createElement('h3');
  todoList.innerHTML = todo;

  const deadLine = document.createElement('h4');
  deadLine.innerHTML = deadline;

  const infoTodo = document.createElement('div');
  infoTodo.classList.add('infoTodo');
  infoTodo.append(todoList, deadLine);

  // membuat penampung Todo
  const containerTodo = document.createElement('div');
  containerTodo.classList.add('todo');

  containerTodo.append(infoTodo);

  // track user todo user dari tombol yang diclick
  if (isCompleted) {
    containerTodo.append(undoTodo(), deleteTodo());
    const completedTask = document.querySelector('.completed-todos');
    completedTask.append(containerTodo);
  } else {
    containerTodo.append(finishTodo(), deleteTodo());
    const uncompletedTask = document.querySelector('.uncompleted-todos');
    uncompletedTask.append(containerTodo);
  }

  return containerTodo;
}

// tombol complete task
function finishTodo() {
  // membuat tombol complete task
  const btn = document.createElement('i');
  btn.classList.add('fas', 'fa-check-circle', 'fa-2x');

  // membuat event dari element yang dibuat
  btn.addEventListener('click', function (e) {
    finishTask(e.target.parentElement);
  });

  return btn;
}

// tombol hapus task
function deleteTodo() {
  // membuat tombol complete task
  const btn = document.createElement('i');
  btn.classList.add('fas', 'fa-trash', 'fa-2x');

  // membuat event dari element yang dibuat
  btn.addEventListener('click', function (e) {
    deleteTask(e.target.parentElement);
  });

  return btn;
}

// tombol undo task
function undoTodo() {
  // membuat tombol complete task
  const btn = document.createElement('i');
  btn.classList.add('fas', 'fa-redo-alt', 'fa-2x');

  // membuat event dari element yang dibuat
  btn.addEventListener('click', function (e) {
    undoTask(e.target.parentElement);
  });

  return btn;
}

// * event ketika icon di click

// completed / finish event
function finishTask(event) {
  // * mengambil nilai pada element dalam event yang di click
  const finishTodo = event.querySelector('.infoTodo > h3').innerHTML;
  const deadLineTodo = event.querySelector('.infoTodo > h4').innerHTML;

  const todo = createTodo(finishTodo, deadLineTodo, true);
  const getIdElement = findIdTodo(event[trackTodo]);
  getIdElement.isCompleted = true;
  todo[trackTodo] = getIdElement.id;

  event.remove();

  saveDataToLocal();
}

// undo event
function undoTask(event) {
  // * mengambil nilai pada element dalam event yang di click
  const finishTodo = event.querySelector('.infoTodo > h3').innerHTML;
  const deadLineTodo = event.querySelector('.infoTodo > h4').innerHTML;

  const todo = createTodo(finishTodo, deadLineTodo, false);
  const getIdElement = findIdTodo(event[trackTodo]);
  getIdElement.isCompleted = false;
  todo[trackTodo] = getIdElement.id;

  event.remove();

  saveDataToLocal();
}

function deleteTask(event) {
  const indexElement = findIndexTodo(event[trackTodo]);
  todos.splice(indexElement, 1);

  event.remove();

  saveDataToLocal();
}
