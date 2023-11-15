"use strict"

const container = document.getElementById('candidatesContainer');
const results = document.getElementById('results');
const searchInput = document.getElementById('search');

let jsonData = [];



const displayCandidates = () => {
  fetch('../src/candidate.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      results.textContent = data.length;
      sendDataToServer(jsonData);
      renderCandidates(jsonData)
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}

const renderCandidates = (data) => {
  container.innerHTML = '';
  data.forEach(candidate => {
    const item = document.createElement('div');
    container.appendChild(item);
    item.classList.add('border', 'border-slate-400', 'bg-slate-100', 'rounded-lg', 'shadow-sm', 'px-8', 'py-4', 'flex', 'justify-center', 'flex-col', 'text-black');
      const title = document.createElement('p');
      item.appendChild(title);
      title.textContent = candidate.title;
      title.classList.add('font-semibold', 'text-2xl')

      const infoContainer = document.createElement('div');
      item.appendChild(infoContainer);
      infoContainer.classList.add('flex', 'lg:items-center', 'lg:flex-row', 'flex-col', 'justify-between')

        const columnOne = document.createElement('div');
        infoContainer.appendChild(columnOne);
        columnOne.classList.add('flex', 'flex-col', 'justify-center', 'items-stretch',)

          const xp = document.createElement('p');
          columnOne.appendChild(xp);
          const xpText = document.createElement('p');
          xp.classList.add('text-md')
          xp.innerHTML = xpText.innerHTML = "<span class='text-md font-semibold'>Total time: </span>" + candidate.totalTime;

          const ageText = document.createElement('p');
          const age = document.createElement('p');
          columnOne.appendChild(age);
          age.innerHTML = ageText.innerHTML = "<span class='text-md font-semibold'>Age: </span>" + candidate.age;

          const genderText = document.createElement('p');
          const gender = document.createElement('p');
          columnOne.appendChild(gender);
          gender.innerHTML = genderText.innerHTML = "<span class='text-md font-semibold'>Gender: </span>" + candidate.gender;

        const columnTwo = document.createElement('div');
        infoContainer.appendChild(columnTwo);
        columnTwo.classList.add('flex', 'flex-col', 'justify-center', 'items-stretch', 'columnTwo')

          const nationalitytext = document.createElement('p');
          const nationality = document.createElement('p');
          columnTwo.appendChild(nationality);
          nationality.innerHTML = nationalitytext.innerHTML = "<span class='text-md font-semibold'>Nationality: </span>" + candidate.nationality;

          const residingCountryText = document.createElement('p');
          const residingCountry = document.createElement('p');
          columnTwo.appendChild(residingCountry);
          residingCountry.innerHTML = residingCountryText.innerHTML = "<span class='text-md font-semibold'>Residence: </span>" + candidate.residingCountry;

          const languageText = document.createElement('p');
          const language = document.createElement('p');
          columnTwo.appendChild(language);
          language.innerHTML = languageText.innerHTML = "<span class='text-md font-semibold'>Language(s): </span>" + candidate.languages;

        const columnThree = document.createElement('div');
        infoContainer.appendChild(columnThree);
        columnTwo.classList.add('flex', 'flex-col', 'justify-center', 'items-stretch', 'columnTwo');

          const licenceTypeText = document.createElement('p');
          const licenceType = document.createElement('p');
          columnThree.appendChild(licenceType);
          licenceType.innerHTML = licenceTypeText.innerHTML = "<span class='text-md font-semibold'>Licence Type: </span>" + candidate.licenceType;

          const aircraftTypeText = document.createElement('p');
          const aircraftType = document.createElement('p');
          columnThree.appendChild(aircraftType);
          aircraftType.innerHTML = aircraftTypeText.innerHTML = "<span class='text-md font-semibold'>Aircraft type: </span>" + candidate.aircraftType;
          
          // Conditionals
          if (candidate.title === 'Pilot') {
            const timeInCommandText = document.createElement('p');
            const timeInCommand = document.createElement('p');
            columnThree.appendChild(timeInCommand);
            timeInCommand.innerHTML = timeInCommandText.innerHTML = "<span class='text-md font-semibold'>Time in command: </span>" + candidate.timeInCommand;
          }
          
          if (candidate.title === 'Flight attendant') {
            const vipExperienceText = document.createElement('p');
            const vipExperience = document.createElement('p');
            columnThree.appendChild(vipExperience);
            vipExperience.innerHTML = vipExperienceText.innerHTML = "<span class='text-md font-semibold'>VIP Experience: </span>" + candidate.vipExperience;
          }
  });
}

const filterCandidates = (query) => {
  const filteredData = jsonData.filter(candidate => {
    for (const key in candidate) {
      if (candidate[key].toString().toLowerCase().includes(query.toLowerCase())) {
        return true;
      }
    }
    return false;
  });
  results.textContent = filteredData.length;
  renderCandidates(filteredData);
}

searchInput.addEventListener('input', () => {
  const inputValue = searchInput.value;
  filterCandidates(inputValue)
});


displayCandidates();
