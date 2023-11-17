function renderRecords(containerId, records) {
  const container = document.getElementById(containerId);
  const attendantBtn = document.getElementById('attendantBtn');
  const pilotBtn = document.getElementById('pilotBtn');
  const attendantsContainer = document.getElementById('attendants-container');
  const pilotsContainer = document.getElementById('pilots-container');
  const btnGroup = document.getElementById('btnGroup');

// Show flight attendants
  attendantBtn.addEventListener('click', (e) => {
    attendantsContainer.classList.remove('hidden');
    btnGroup.classList.add('hidden');
    
    records.forEach(record => {
      // Asssings ID to each record in Airtable
      const id = '#' + `${record.fields.ID}`.slice(9, 14).toUpperCase()

      const recordDiv = document.createElement('div');
      recordDiv.classList.add('w-full', 'bg-whiteBg', 'border', 'border-black', 'rounded-lg', 'shadow-md', 'py-4', 'px-12', 'mt-8', 'text-black', 'flex', 'flex-col'); 
      
      const rowOne = document.createElement('div');
      rowOne.classList.add('rowOne', 'flex', 'items-center', 'justify-between', 'mb-5')
      recordDiv.appendChild(rowOne);
          // Get ID
          const userId = document.createElement('p');
          userId.innerHTML = `<span class="text-lg text-black_half italic font-bold">${id}</span>`;
          rowOne.appendChild(userId);


      const rowTwo = document.createElement('div');
      rowTwo.classList.add('rowTwo', 'flex', 'items-center', 'justify-between')
      recordDiv.appendChild(rowTwo);
          // Get age
          const age = document.createElement('p');
          age.innerHTML = `<span class="font-semibold text-lg">Age:</span> ${record.fields.Age}`;
          rowTwo.appendChild(age);
          // Get nationality
          const nationality = document.createElement('p');
          nationality.innerHTML = `<span class="font-semibold text-lg">Nationality:</span> ${record.fields.Nationality}`;
          rowTwo.appendChild(nationality);


      const rowThree = document.createElement('div');
      rowThree.classList.add('rowThree', 'flex', 'items-center', 'justify-between', 'mb-2')
      recordDiv.appendChild(rowThree);
          // Get residence
          const residence = document.createElement('p');
          residence.innerHTML = `<span class="font-semibold text-lg">Residence:</span> ${record.fields.Country_of_residence}`;
          rowThree.appendChild(residence);

          // Get gender
          const gender = document.createElement('p');
          gender.innerHTML = `<span class="font-semibold text-lg">Gender:</span> ${record.fields.Gender}`;
          rowThree.appendChild(gender);
      

      const rowFour = document.createElement('div');
      rowFour.classList.add('rowFour', 'flex', 'items-center', 'justify-between', 'mb-2')
      recordDiv.appendChild(rowFour);
          // Get VIP Experience
          const vipExperience = document.createElement('p');
          vipExperience.innerHTML = `<span class="font-semibold text-lg">VIP Experience:</span> ${record.fields.VIP_Experience} years`;
          rowFour.appendChild(vipExperience);

          // Get license types
          const licenseTypes = document.createElement('p');
          licenseTypes.innerHTML = `<span class="font-semibold text-lg">License Type(s):</span> ${record.fields.License_Type}`;
          rowFour.appendChild(licenseTypes);

        const rowFive = document.createElement('div');
        rowFive.classList.add('rowFive', 'flex', 'items-center', 'justify-between')
        recordDiv.appendChild(rowFive);
          // Get aircraft types
          const aircraftTypes = document.createElement('p');
          const aircrafts = record.fields.Aircraft_Type;
          const aircraftTypesText = aircrafts.map(aircraft => `<li class="text-sm">${aircraft}</li>`
          ).join('');
          aircraftTypes.innerHTML = `<span class="font-semibold text-lg">Aircraft Type(s):</span> ${aircraftTypesText}`;
          
          rowFive.appendChild(aircraftTypes);
      
      container.appendChild(recordDiv);
    });
  })

  // Show flight attendants
  pilotBtn.addEventListener('click', (e) => {
    pilotsContainer.classList.remove('hidden');
    btnGroup.classList.add('hidden');
    
    records.forEach(record => {
      // Asssings ID to each record in Airtable
      const id = '#' + `${record.fields.ID}`.slice(9, 14).toUpperCase()

      const recordDiv = document.createElement('div');
      recordDiv.classList.add('w-1/2', 'bg-whiteBg', 'border', 'border-black', 'rounded-lg', 'shadow-md', 'py-4', 'px-12', 'mt-8', 'text-black', 'flex', 'flex-col'); 
      
      const rowOne = document.createElement('div');
      rowOne.classList.add('rowOne', 'flex', 'items-center', 'justify-between', 'mb-5')
      recordDiv.appendChild(rowOne);
          // Get ID
          const userId = document.createElement('p');
          userId.innerHTML = `<span class="text-lg text-black_half italic font-bold">${id}</span>`;
          rowOne.appendChild(userId);


      const rowTwo = document.createElement('div');
      rowTwo.classList.add('rowTwo', 'flex', 'items-center', 'justify-between')
      recordDiv.appendChild(rowTwo);
          // Get age
          const age = document.createElement('p');
          age.innerHTML = `<span class="font-semibold text-lg">Age:</span> ${record.fields.Age}`;
          rowTwo.appendChild(age);
          // Get nationality
          const nationality = document.createElement('p');
          nationality.innerHTML = `<span class="font-semibold text-lg">Nationality:</span> ${record.fields.Nationality}`;
          rowTwo.appendChild(nationality);


      const rowThree = document.createElement('div');
      rowThree.classList.add('rowThree', 'flex', 'items-center', 'justify-between', 'mb-2')
      recordDiv.appendChild(rowThree);
          // Get residence
          const residence = document.createElement('p');
          residence.innerHTML = `<span class="font-semibold text-lg">Residence:</span> ${record.fields.Country_of_residence}`;
          rowThree.appendChild(residence);

          // Get gender
          const gender = document.createElement('p');
          gender.innerHTML = `<span class="font-semibold text-lg">Gender:</span> ${record.fields.Gender}`;
          rowThree.appendChild(gender);
      

      const rowFour = document.createElement('div');
      rowFour.classList.add('rowFour', 'flex', 'items-center', 'justify-between', 'mb-2')
      recordDiv.appendChild(rowFour);
          // Get Total Time
          const totalTime = document.createElement('p');
          totalTime.innerHTML = `<span class="font-semibold text-lg">Total time:</span> ${record.fields.Total_Time} hours`;
          rowFour.appendChild(totalTime);

          // Get Command Time
          const commandTime = document.createElement('p');
          totalTime.innerHTML = `<span class="font-semibold text-lg">Command time:</span> ${record.fields.commandTime} hours`;
          rowFour.appendChild(commandTime);

          // Get license types
          const licenseTypes = document.createElement('p');
          licenseTypes.innerHTML = `<span class="font-semibold text-lg">License Type(s):</span> ${record.fields.License_Type}`;
          rowFour.appendChild(licenseTypes);

        const rowFive = document.createElement('div');
        rowFive.classList.add('rowFive', 'flex', 'items-center', 'justify-between')
        recordDiv.appendChild(rowFive);
          // Get aircraft types
          const aircraftTypes = document.createElement('p');
          const aircrafts = record.fields.Aircraft_Type;
          const aircraftTypesText = aircrafts.map(aircraft => `<li class="text-sm">${aircraft}</li>`
          ).join('');
          aircraftTypes.innerHTML = `<span class="font-semibold text-lg">Aircraft Type(s):</span> ${aircraftTypesText}`;
          
          rowFive.appendChild(aircraftTypes);
      
      container.appendChild(recordDiv);
    });
  })
}


window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    btnGroup.classList.remove('hidden');
  }, 3000);

  fetch('/operatorData')
  .then(response => response.json())
  .then(data => {
    if (data && typeof data === 'object') {
      renderRecords('pilots-container', data.pilots || []);
      renderRecords('attendants-container', data.attendants || []);
    } else {
      console.error('Invalid response data:', data);
    }
  })
  .catch(error => console.error('Error fetching data:', error));
})
