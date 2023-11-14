"use strict"

const container = document.getElementById('candidatesContainer');
const results = document.getElementById('results');
const searchInput = document.getElementById('search');

let jsonData = [];

const displayCandidates = () => {
  fetch('../dist/scripts/candidate.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      results.textContent = data.length;
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

          const nameText = document.createElement('p');
          const name = document.createElement('p');
          columnOne.appendChild(name);
          name.classList.add('text-md')
          name.textContent = nameText.textContent = 'Name: ' + candidate.firstName;

          const xp = document.createElement('p');
          columnOne.appendChild(xp);
          const xpText = document.createElement('p');
          xp.classList.add('text-md')
          xp.textContent = xpText.textContent = 'Experience: ' + candidate.experience;

          const jobTypeText = document.createElement('p')
          const jobType = document.createElement('p');
          columnOne.appendChild(jobType);
          jobType.classList.add('text-md');
          jobType.textContent = jobTypeText.textContent = 'Type: ' + candidate.jobType;

        const columnTwo = document.createElement('div');
        infoContainer.appendChild(columnTwo);
        columnTwo.classList.add('flex', 'flex-col', 'justify-center', 'items-stretch', 'columnTwo')

          const dobText = document.createElement('p');
          const dob = document.createElement('p');
          columnTwo.appendChild(dob);
          dob.textContent = dobText.textContent = 'DOB: ' + candidate.dob;

          const nationalitytext = document.createElement('p');
          const nationality = document.createElement('p');
          columnTwo.appendChild(nationality);
          nationality.textContent = nationalitytext.textContent = 'Nationality: ' + candidate.nationality;

          const genderText = document.createElement('p');
          const gender = document.createElement('p');
          columnTwo.appendChild(gender);
          gender.textContent = genderText.textContent = 'Gender: ' + candidate.gender;

        const columnThree = document.createElement('div');
        infoContainer.appendChild(columnThree);
        columnTwo.classList.add('flex', 'flex-col', 'justify-center', 'items-stretch', 'columnTwo');

          const licenceTypeText = document.createElement('p');
          const licenceType = document.createElement('p');
          columnThree.appendChild(licenceType);
          licenceType.textContent = licenceTypeText.textContent = 'Licence Type: ' + candidate.licenceType;

          const languageText = document.createElement('p');
          const language = document.createElement('p');
          columnThree.appendChild(language);
          language.textContent = licenceTypeText.textContent = 'Language(s): ' + candidate.languages;
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
