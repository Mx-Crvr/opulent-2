"use strict"

const form = document.getElementById('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const message = document.getElementById('message');
const formInput = document.querySelectorAll('.formInput');
const validationMessage = document.getElementById('validationMessage');


form.addEventListener('submit', (e) => {
  let isValid = true;

  if (fname.value === '') {
    isValid = false;
  }
  if (lname.value === '') {
    isValid = false;
  }
  if (email.value === '') {
    isValid = false;
  }
  if (message.value === '') {
    isValid = false;
  }

  if (!isValid) {
    e.preventDefault();
    formInput.forEach((input) => {
      input.classList.add('border', 'border-red', 'p-2')
      validationMessage.classList.remove('hidden')
    });
  }
})
