"use strict"

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
  };

  const uploads = document.querySelectorAll('.upload');
  const symbols = document.querySelectorAll('.symbol'); 
  const fileBtns = document.querySelectorAll('.file-btn'); 

  uploads.forEach((upload, index) => {
    upload.addEventListener('change', () => {
      console.log(upload.files.length)
      if (upload.files.length > 0) {
        const fileName = upload.files[0].name;
        fileBtns[index].innerHTML = '&#10003;' + fileName;
      }; 
      
    })
  })     


// Application form validation
const form = document.querySelector('.form');
const validationMessage = document.getElementById('validationMessage');
const formInput = document.querySelectorAll('.formInput')
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const dob = document.getElementById('dob');
const gender = document.getElementById('gender');
const nationality = document.getElementById('nationality');
const residence = document.getElementById('residence');
// const experience = document.getElementById('experience');
const license_yes = document.getElementById('license_yes');
const license_no = document.getElementById('license_no');
const license_type = document.getElementById('license_type');
const permanent = document.getElementById('permanent');
const freelance = document.getElementById('freelance');
const photoUpload = document.getElementById('photoUpload');
const cvUpload = document.getElementById('cvUpload');

// form.addEventListener('submit', (e) => {
//   const yes = document.getElementById('yes');
//   const no = document.getElementById('no');

//   let isFormValid = true;

//   if (fname.value === '') {
//     isFormValid = false;
//   }
//   if (lname.value === '') {
//     isFormValid = false;
//   }
//   if (email.value === '') {
//     isFormValid = false;
//   }
//   if (phone.value === '') {
//     isFormValid = false;
//   }
//   if (dob.value === '') {
//     isFormValid = false;
//   }
//   if (gender.value === '') {
//     isFormValid = false;
//   }
//   if (nationality.value === '') {
//     isFormValid = false;
//   }
//   if (residence.value === '') {
//     isFormValid = false;
//   }
//   // if (experience.value === '') {
//   //   isFormValid = false;
//   // }
//   if (!yes.checked || !no.checked) {
//     isFormValid = false;
//   }
//   if (!freelance.checked || !permanent.checked) {
//     isFormValid = false;
//   }
//   if (cvUpload.value === '') {
//     isFormValid = false;
//   }
//   if (photoUpload.value === '') {
//     isFormValid = false;
//   }

//   if (!isFormValid) {
//     e.preventDefault();
//     formInput.forEach((input) => {
//       input.classList.add('border', 'border-red', 'p-2')
//       validationMessage.classList.remove('hidden')
//     })
//   }
// })



  