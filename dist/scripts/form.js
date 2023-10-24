"use strict"

const yes = document.getElementById('yes');
const no = document.getElementById('license_no');
const dropdown = document.getElementById('license_yes');
const licenseType = document.getElementById('license_type')


yes.addEventListener('input', () => {
  dropdown.classList.remove('hidden');
})

no.addEventListener('input', () => {
  dropdown.classList.add('hidden');
  licenseType.classList.add('hidden');
})

dropdown.addEventListener('input', () => {
  if (dropdown.value == "other") {
    licenseType.classList.remove('hidden')
  }
})