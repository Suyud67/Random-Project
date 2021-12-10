// dapatkan elemen
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 1;
displaySlide(index);

// next btn click
nextBtn.addEventListener('click', function () {
  let nextIndex = 1;
  displaySlide((index += nextIndex));
});

prevBtn.addEventListener('click', function () {
  let prevIndex = -1;
  displaySlide((index += prevIndex));
});

// display slide img
function displaySlide(n) {
  const imgSlides = Array.from(document.querySelectorAll('.img-menu'));

  if (n > imgSlides.length) {
    index = 1;
  }
  if (n < 1) {
    index = imgSlides.length;
  }
  for (let i = 0; i < imgSlides.length; i++) {
    imgSlides[i].style.display = 'none';
  }
  imgSlides[index - 1].style.display = 'block';
}
