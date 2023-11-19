let validLicense = document.getElementById('validLicense');
const invalidLicenseContainer = document.getElementById('invalidLicenseContainer');
const invalidLicense = document.getElementById('invalidLicense');
const licenseSelectContainer = document.getElementById('licenseSelectContainer');
// const licenseContainer = document.getElementById('licenseContainer');
const licenseSelectHTML = document.getElementById('licenseSelect');
const icaoInput = document.getElementById('icaoInput');
const icaoInputContainer = document.getElementById('icaoInputContainer');
const FAAInputContainer = document.getElementById('FAAInputContainer');
const jobTypeContainer = document.getElementById('jobTypeContainer');
const visaContainer = document.getElementById('visaContainer');
const cvUploadContainer = document.getElementById('cvUploadContainer');
const photoUploadContainer = document.getElementById('photoUploadContainer');
const validationMessage = document.getElementById('validationMessage');
let selectedValues = [];
let getURL = window.location.href;

const getSelectedLicense = () => {
  const licenseSelect = Array.from(licenseSelectHTML.selectedOptions);
  for (let i =0; i < licenseSelect.length; i++) {
    selectedValues[i] = licenseSelect[i].value;
  };
  
  if (selectedValues.includes('ICAO')) {
    icaoInputContainer.classList.remove('hidden');
  } else if (!selectedValues.includes('ICAO')) {
    icaoInputContainer.classList.add('hidden');
  };

  if (selectedValues.includes('FAA')) {
    FAAInputContainer.classList.remove('hidden');
  } else if (!selectedValues.includes('FAA')) {
    FAAInputContainer.classList.add('hidden');
  };
}

setInterval(() => {
  if (validLicense.checked) {
    invalidLicenseContainer.classList.add('hidden');
    licenseSelectContainer.classList.remove('hidden');
    getSelectedLicense();
    validLicense.value = true;
  } else {
    invalidLicenseContainer.classList.remove('hidden');
    licenseSelectContainer.classList.add('hidden');
    icaoInputContainer.classList.add('hidden');
    FAAInputContainer.classList.add('hidden');
    selectedValues = [];
  }

  if (invalidLicense.checked) {
    validLicense.value = 'false';
    
  }
}, 100);

// Form validation
let formHTML = document.querySelectorAll('.form');
const form = formHTML[0];

form.addEventListener('submit', (e) => {
  // Validate required fields
  const requiredFields =  getURL.includes('attendant') ? 
  ['fname', 'lname', 'email', 'age', 'gender', 'phone', 'age', 'nationality', 'residence', 'vipExperience', 'visa', 'cvUpload', 'photoUpload'] : ['fname', 'lname', 'email', 'age', 'gender', 'phone', 'age', 'nationality', 'residence', 'visa', 'cvUpload', 'photoUpload']
  ;
  for (const field of requiredFields) {
    const inputElement = document.getElementById(field);
    if (inputElement.value === '') {
      inputElement.classList.add('border-2', 'border-red', 'p-1');
      e.preventDefault();
      return;
    } else {
      inputElement.classList.remove('border-2', 'border-red', 'p-1');
    }
  };

  // Check if the "validLicense" or "invalidLicense" is selected
  const validLicense = document.getElementById('validLicense');
  const invalidLicense = document.getElementById('invalidLicense');
  const licenseContainer = document.getElementById('licenseContainer');
  const yesNoMessage = document.getElementById('yesNoMessage');

  if (!validLicense.checked && !invalidLicense.checked) {
    licenseContainer.classList.add('border-2', 'border-red');
    yesNoMessage.classList.remove('hidden');
    e.preventDefault();
    return;
  } else {
    licenseContainer.classList.remove('border-2', 'border-red');
    yesNoMessage.classList.add('hidden');
  }

  // Check if the "validLicense" is selected, ensure that the "licenseSelect" field is not empty
  const licenseSelectHTML = document.getElementById('licenseSelect');
  const licenseSelectContainer = document.getElementById('licenseSelectContainer');

  if (validLicense.checked && licenseSelectHTML.value === '') {
    licenseSelectContainer.classList.add('border-2', 'border-red');
    e.preventDefault();
    return;
  } else {
    licenseSelectContainer.classList.remove('border-2', 'border-red');
  }

  // Check if selected licenses include 'ICAO', ensure that the 'icaoInput' field is not empty
  const selectedValues = Array.from(licenseSelectHTML.selectedOptions).map(option => option.value);
  const icaoInput = document.getElementById('icaoInput');
  const icaoInputContainer = document.getElementById('icaoInputContainer');

  if (selectedValues.includes('ICAO') && icaoInput.value === '') {
    icaoInputContainer.classList.add('border-2', 'border-red');
    e.preventDefault();
    return;
  } else {
    icaoInputContainer.classList.remove('border-2', 'border-red');
  }

  // Check if selected licenses include 'FAA', ensure that the 'FAAInput' field is not empty
  const FAAInput = document.getElementById('FAAInput');
  const FAAInputContainer = document.getElementById('FAAInputContainer');

  if (selectedValues.includes('FAA') && FAAInput.value === '') {
    FAAInputContainer.classList.add('border-2', 'border-red');
    e.preventDefault();
    return;
  } else {
    FAAInputContainer.classList.remove('border-2', 'border-red');
  }

  // Ensure that at least one of the job types (permanent or freelance) is checked
  const permanentCheckbox = form.permanent;
  const freelanceCheckbox = form.freelance;
  const jobTypeContainer = document.getElementById('jobTypeContainer');
  const pAndFMessage = document.getElementById('pAndFMessage');

  if (!permanentCheckbox.checked && !freelanceCheckbox.checked) {
    jobTypeContainer.classList.add('border-2', 'border-red');
    pAndFMessage.classList.remove('hidden');
    e.preventDefault();
    return;
  } else {
    jobTypeContainer.classList.remove('border-2', 'border-red');
    pAndFMessage.classList.add('hidden');
  }

  // Additional checks for other conditions

  // ...

  // If all checks pass, the form will be submitted
});






