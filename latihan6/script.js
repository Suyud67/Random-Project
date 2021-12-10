// input password dan checkbox
const password = document.querySelector('input.password');
const checkbox = document.querySelector('.checkbox');
let check = true;
// jika checkbox di click
checkbox.addEventListener('click', () => {
  if (check) {
    password.setAttribute('type', 'text');
    check = false;
  } else {
    password.setAttribute('type', 'password');
    check = true;
  }
});
