const output = document.querySelector('.output');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let calculator = 0;
reset();

// reset function
function reset() {
  output.innerHTML = '0';
}

// plus click
plus.addEventListener('click', () => {
  calculator++;
  output.innerHTML = calculator;
});

// minus click
minus.addEventListener('click', () => {
  if (calculator == '0') {
    return false;
  } else {
    calculator -= 1;
  }

  output.innerHTML = calculator;
});
