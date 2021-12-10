// mengambil innput dan span
const input = document.querySelector('.input');
const span = document.querySelector('.output');

input.addEventListener('keyup', () => {
  let save = input.value.length;
  span.textContent = save;
});
