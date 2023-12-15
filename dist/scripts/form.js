let validLicense = document.getElementById('validLicense');
const invalidLicenseContainer = document.getElementById(
	'invalidLicenseContainer'
);
const invalidLicense = document.getElementById('invalidLicense');
const licenseSelectContainer = document.getElementById(
	'licenseSelectContainer'
);
// const licenseContainer = document.getElementById('licenseContainer');
const licenseSelectHTML = document.getElementById('licenseSelect');
const icaoInput = document.getElementById('icaoInput');
const ICAO = document.getElementById('ICAO');
const FAA = document.getElementById('FAA');
const otherLicense = document.getElementById('otherLicense');
const icaoInputContainer = document.getElementById('icaoInputContainer');
const FAAInputContainer = document.getElementById('FAAInputContainer');
const otherLicenseInputContainer = document.getElementById(
	'otherLicenseInputContainer'
);
const jobTypeContainer = document.getElementById('jobTypeContainer');
const visaContainer = document.getElementById('visaContainer');
const cvUploadContainer = document.getElementById('cvUploadContainer');
const photoUploadContainer = document.getElementById('photoUploadContainer');
const validationMessage = document.getElementById('validationMessage');
let selectedValues = [];
let getURL = window.location.href;

// Form validation
let formHTML = document.querySelectorAll('.form');
const form = formHTML[0];

setInterval(() => {
	if (ICAO.checked) {
		icaoInputContainer.classList.remove('hidden');
	} else {
		icaoInputContainer.classList.add('hidden');
	}

	if (FAA.checked) {
		FAAInputContainer.classList.remove('hidden');
	} else {
		FAAInputContainer.classList.add('hidden');
	}
	if (otherLicense.checked) {
		otherLicenseInputContainer.classList.remove('hidden');
	} else {
		otherLicenseInputContainer.classList.add('hidden');
	}
}, 100);

form.addEventListener('submit', (e) => {
	// Validate required fields
	const requiredFields = getURL.includes('attendant')
		? [
				'fname',
				'lname',
				'email',
				'age',
				'gender',
				'phone',
				'age',
				'nationality',
				'residence',
				'vipExperience',
				'visa',
				'cvUpload',
				'photoUpload',
				'aircraftSelect',
		  ]
		: [
				'fname',
				'lname',
				'email',
				'age',
				'gender',
				'phone',
				'age',
				'nationality',
				'residence',
				'visa',
				'cvUpload',
				'photoUpload',
				'aircraftSelect',
				'totalTime',
				'commandTime',
				'secondTime',
				'singleEngine',
				'multiEngine',
				'jetTime',
				'turbineTime',
				'heliHours',
				'instructorHours',
		  ];
	for (const field of requiredFields) {
		const inputElement = document.getElementById(field);
		if (inputElement.value === '') {
			inputElement.classList.add('border-2', 'border-red', 'p-1');
			e.preventDefault();
			return;
		} else {
			inputElement.classList.remove('border-2', 'border-red', 'p-1');
		}
	}

	// Check if the "validLicense" is selected, ensure that the "licenseSelect" field is not empty
	const licenseSelectHTML = document.getElementById('licenseSelect');
	const licenseSelectContainer = document.getElementById(
		'licenseSelectContainer'
	);

	if (validLicense.checked && licenseSelectHTML.value === '') {
		licenseSelectContainer.classList.add('border-2', 'border-red');
		e.preventDefault();
		return;
	} else {
		licenseSelectContainer.classList.remove('border-2', 'border-red');
	}

	// Check if selected licenses include 'ICAO', ensure that the 'icaoInput' field is not empty
	const selectedValues = Array.from(licenseSelectHTML.selectedOptions).map(
		(option) => option.value
	);
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
});
