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
  