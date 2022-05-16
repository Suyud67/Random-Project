let desc1 = document.getElementById('desc1');
let desc2 = document.getElementById('desc2');
let desc3 = document.getElementById('desc3');
const btnGuess = document.getElementById('btn-guess');

let number = Math.floor(Math.random() * 100) + 1;
let noGuess = 0;
let guessNumber = [];

btnGuess.addEventListener('click', function () {
  const guessInput = document.getElementById('input-field').value;
  // cek input lebih kecil atau lebih besar
  if (guessInput < 1 || guessInput > 100) {
    alert('guess a number between 1 - 100');
  } else {
    //   memasukkan input ke array untuk digunakan sebagai history
    guessNumber.push(guessInput);

    // percobaan keberapa
    noGuess += 1;

    // ketika input lebih kecil dari number
    if (guessInput < number) {
      desc1.textContent = `Your Guess Is Too Low`;
      desc2.textContent = `Number of Guessed: ${noGuess}`;
      //diambil dari noGuess
      desc3.textContent = `The number you was guessed: ${guessNumber}`;
      //diambil dari guessNumber.push()
    } else if (guessInput > number) {
      // ketika input lebih besar dari number
      desc1.textContent = `Your Guess Is Too High`;
      desc2.textContent = `Number of Guessed: ${noGuess}`;
      desc3.textContent = `The number you was guessed: ${guessNumber}`;
    } else if (guessInput == number) {
      // ketika tebakan benar
      desc1.textContent = `Congratulation Your Guess Is Right!!`;
      desc2.textContent = `The Answer Is ${number}`;
      desc3.textContent = `The number you was guessed: ${guessNumber}`;
      alert('Congratulation Your Guess Is Right!! Press F5 for Guess a number again');
    }
  }
});
