"use strict"
const closeBtn = document.getElementById('closeBtn');
const mobileNav = document.getElementById('mobileNav');
const navMenu = document.getElementById('navMenu');
const main = document.getElementById('main')
const navBar = document.getElementById('navbar');

setTimeout(() => {
  navBar.classList.remove('opacity-0')
  navBar.classList.add('opacity-100')
}, 3000);

window.onscroll = () => {
  const navBar = document.getElementById('navbar');
  let scrollPos = window.scrollY;

  if (scrollPos > 250) {
    navBar.classList.remove('py-8')
    navBar.classList.add('py-4')
  } else {
    navBar.classList.remove('py-4')
    navBar.classList.add('py-8')
  }
  const reveals = document.querySelectorAll('.reveal');

  for (let i = 0; i < reveals.length; i++) {
    let windowHeight = window.innerHeight;
    let elementTop = reveals[i].getBoundingClientRect().top;
    let elementVisible = 50;

    if (elementTop < (windowHeight - elementVisible)) {
      reveals[i].classList.add('active')
    } else {
      reveals[i].classList.remove('active')
      
    }
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

const accordion = new Accordion('.accordion-container');






