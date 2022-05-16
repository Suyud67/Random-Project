// mendapatkan element
const btnStart = document.querySelector('.start');
const btnReset = document.querySelector('.reset');
const btnStop = document.querySelector('.stop');
let second = document.querySelector('.sec');
let milSecond = document.querySelector('.mil');
let minutes = document.querySelector('.min');
let hour = document.querySelector('.hour');

// variable untuk menjalankan interval
let stop;

// var untuk timer
let mil = 0;
let sec = 0;
let min = 0;
let h = 0;

// jika btn start di click
btnStart.addEventListener('click', function () {
  clearInterval(stop);
  stop = setInterval(tambah, 10);
});

// btn stop di klik
btnStop.addEventListener('click', function () {
  // menghentikan timer
  clearInterval(stop);
});

// btn reset di klik
btnReset.addEventListener('click', function () {
  clearInterval(stop);

  // reset nilai timer
  mil = 0;
  sec = 0;
  min = 0;
  h = 0;

  // append ke html
  milSecond.innerHTML = mil;
  second.innerHTML = sec;
  minutes.innerHTML = min;
  hour.innerHTML = h;
});

// function untuk menambahkan angka ke timer
function tambah() {
  mil += 10;
  if (mil == 1000) {
    mil = 00;
    sec++;
    if (sec == 60) {
      sec = 00;
      min++;
      if (min == 60) {
        min = 00;
        h++;
      }
    }
  }

  // append timer ke element html
  minutes.innerHTML = min;
  hour.innerHTML = h;
  second.innerHTML = sec;
  milSecond.innerHTML = mil;
}
