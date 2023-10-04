const mobileNav = document.getElementById('mobileNav');
const navMenu = document.getElementById('navMenu');
const main = document.getElementById('main')
const closeBtn = document.getElementById('closeBtn');

window.onscroll = () => {
  const navBar = document.getElementById('navbar');
  let scrollPos = window.scrollY;

  if (scrollPos > 250) {
    navBar.classList.remove('py-8')
    navBar.classList.add('py-6')
  } else {
    navBar.classList.remove('py-6')
    navBar.classList.add('py-8')
  }
};


navMenu.addEventListener('click', () => {
  mobileNav.classList.remove('hidden');
  main.classList.add('blur-sm');
})

closeBtn.addEventListener('click', () => {
  mobileNav.classList.add('hidden');
  main.classList.remove('blur-sm');
})