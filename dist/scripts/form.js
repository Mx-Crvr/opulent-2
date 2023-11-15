"use strict"

const yes = document.getElementById('yes');
const noRadio = document.getElementById('no');
const no = document.getElementById('license_no');
const dropdown = document.getElementById('license_yes');
const licenseType = document.getElementById('license_type');
const selectContainer = document.getElementById('selectContainer');
const ICAO_country = document.getElementById('ICAO_country');

yes.addEventListener('change', () => {
  selectContainer.classList.remove('hidden');
})

no.addEventListener('input', () => {
  dropdown.classList.add('hidden');
  licenseType.classList.add('hidden');
})

dropdown.addEventListener('input', () => {
  if (dropdown.value == "other") {
    licenseType.classList.remove('hidden')
  } else {
    licenseType.classList.add('hidden')
  }

  if (noRadio.checked) {
    document.getElementById('selectContainer').classList.add('hidden')
    document.getElementById('random').classList.add('hidden');
  }

  if (dropdown.value == "faa") {
    document.getElementById('faa_verify_container').classList.remove('hidden');
    document.getElementById('faa_btn').classList.remove('hidden');
  } else {
    document.getElementById('faa_verify_container').classList.add('hidden');
    document.getElementById('faa_btn').classList.add('hidden');
  }

  if (dropdown.value == 'icao') {
    document.getElementById('ICAO_country').classList.remove('hidden');
    document.getElementById('faa_verify_container').classList.remove('hidden');

  } else {
    document.getElementById('ICAO_country').classList.add('hidden');
    
  }
})

// // Pilot Form Submit Handler
// const pilotForm = document.getElementById('pilotForm');



// // Attendant Form Submit Handler
// const attendantForm = document.getElementById('attendantForm');
document.addEventListener('DOMContentLoaded', () => {
  const aircraftSelect = document.getElementById('aircraftSelect'); 
  let selectedOptions = document.getElementById('selected_options');
  let selectedOptionsAircraft = document.getElementById('selected_options_aircraft');
  dropdown.addEventListener('change', () => {
    selectedOptions.innerHTML = '';

    for (let i = 0; i < dropdown.options.length; i++) {
      if (dropdown.options[i].selected) {
        const selectedOption = document.createElement('div');
        selectedOption.textContent += dropdown.options[i].text;
        selectedOptions.appendChild(selectedOption)
      }
    }
  })

  const getURL = window.location.href;

  if (getURL.includes('operator')) {
    aircraftSelect.addEventListener('change', () => {
      selectedOptionsAircraft.innerHTML = '';
  
      for (let i = 0; i < aircraftSelect.options.length; i++) {
        if (aircraftSelect.options[i].selected) {
          const selectedOptionAircraft = document.createElement('div');
          selectedOptionAircraft.textContent += aircraftSelect.options[i].text == '' ? `${aircraftSelect.options[i].text}` : `${aircraftSelect.options[i].text}, `;
          selectedOptionsAircraft.appendChild(selectedOptionAircraft)
        }
      }
    })
  }
 

  
})