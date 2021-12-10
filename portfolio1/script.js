const navbar = document.querySelector('.center-menu');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.nav-link');
const container = document.querySelector('.container');

hamburger.addEventListener('click', function () {
  navbar.classList.toggle('active');
  hamburger.classList.toggle('active');
  container.classList.toggle('active');
});

navLinks.forEach((link) => {
  link.addEventListener('click', function () {
    navbar.classList.remove('active');
    hamburger.classList.remove('active');
    container.classList.toggle('active');
  });
});
