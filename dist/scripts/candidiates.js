"use strict"

const container = document.getElementById('candidatesContainer');
const results = document.getElementById('results');

let jsonData = [];

const displayCandidates = () => {
  fetch('http://127.0.0.1:5500/dist/scripts/candidate.json')
    .then(response => response.json())
    .then(data => {
      jsonData = data;
      results.textContent = data.length;

      renderCandidates(jsonData)
    })
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
          jobType.classList.add('text-md')
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
      
  });
}

const search = document.getElementById('search');

const searchCandidates = () => {
  const searchTerm = search.value.toLowerCase();
  const filtered = jsonData.filter(candidate => candidate.title.toLowerCase().includes(searchTerm));
  renderCandidates(filtered);
  results.textContent =  filtered.length
}

search.addEventListener('input', searchCandidates)

displayCandidates()