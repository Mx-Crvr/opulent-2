'use strict';
const captainRequirementDetails = document.getElementById(
	'captainRequirementDetails'
);
const firstOfficeRequirementDetails = document.getElementById(
	'firstOfficeRequirementDetails'
);
const attendantRequirementDetails = document.getElementById(
	'attendantRequirementDetails'
);

const captain = document.getElementById('captain');
const firstOffice = document.getElementById('firstOffice');
const flightAttendant = document.getElementById('flightAttendant');

setInterval(() => {
	if (captain.checked) {
		captainRequirementDetails.classList.remove('hidden');
	} else {
		captainRequirementDetails.classList.add('hidden');
	}

	if (firstOffice.checked) {
		firstOfficeRequirementDetails.classList.remove('hidden');
	} else {
		firstOfficeRequirementDetails.classList.add('hidden');
	}

	if (flightAttendant.checked) {
		attendantRequirementDetails.classList.remove('hidden');
	} else {
		attendantRequirementDetails.classList.add('hidden');
	}
}, 100);

const form = document.getElementById('employerForm');
const validationMessage = document.getElementById('validationMessage');

let selectedValues = [];
form.addEventListener('submit', (e) => {
	const requiredFields = [
		'cname',
		'fname',
		'lname',
		'email',
		'phone',
		'country',
		'aircraftSelect',
		'tailNum',
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

	const permanentCheckbox = form.permanent;
	const freelanceCheckbox = form.freelance;
	const jobTypeContainer = document.getElementById('jobTypeContainer');

	if (!permanentCheckbox.checked && !freelanceCheckbox.checked) {
		jobTypeContainer.classList.add('border-2', 'border-red');
		e.preventDefault();
		return;
	} else {
		jobTypeContainer.classList.remove('border-2', 'border-red');
	}

	const requirementsContainer = document.getElementById(
		'requirementsContainer'
	);

	if (!captain.checked && !firstOffice.checked && !flightAttendant.checked) {
		e.preventDefault();
		requirementsContainer.classList.add('border-2', 'border-red');
		return;
	} else {
		requirementsContainer.classList.remove('border-2', 'border-red');
	}

	const captainNum = document.getElementById('captainNum');
	const captainMinHours = document.getElementById('captainMinHours');
	const captainAddInfo = document.getElementById('captainAddInfo');

	if (
		captain.checked &&
		(captainMinHours.value === '' || captainNum.value === '')
	) {
		captainRequirementDetails.classList.add('border-2', 'border-red');
		e.preventDefault();
		return;
	} else {
		captainRequirementDetails.classList.remove('border-2', 'border-red');
	}

	const firstOfficeNum = document.getElementById('firstOfficeNum');
	const firstOfficeMinHours = document.getElementById('firstOfficeMinHours');
	const firstOfficeAddInfo = document.getElementById('firstOfficeAddInfo');

	if (
		firstOffice.checked &&
		(firstOfficeMinHours.value === '' || firstOfficeNum.value === '')
	) {
		firstOfficeRequirementDetails.classList.add('border-2', 'border-red');
		e.preventDefault();
		return;
	} else {
		firstOfficeRequirementDetails.classList.remove(
			'border-2',
			'border-red'
		);
	}

	const flightAttendantNum = document.getElementById('flightAttendantNum');
	const flightAttendantMinHours = document.getElementById(
		'flightAttendantMinHours'
	);
	const flightAttendantAddInfo = document.getElementById(
		'flightAttendantAddInfo'
	);

	if (
		flightAttendant.checked &&
		(flightAttendantMinHours.value === '' ||
			flightAttendantNum.value === '')
	) {
		attendantRequirementDetails.classList.add('border-2', 'border-red');
		e.preventDefault();
		return;
	} else {
		attendantRequirementDetails.classList.remove('border-2', 'border-red');
	}

	const ownerFlights = document.getElementById('ownerFlights');
	const chargerFlights = document.getElementById('chargerFlights');
	const scheduledAirline = document.getElementById('scheduledAirline');
	const opType = document.getElementById('opType');

	if (
		!ownerFlights.checked &&
		!chargerFlights.checked &&
		!scheduledAirline.checked
	) {
		opType.classList.add('border-2', 'border-red');
		e.preventDefault();
		return;
	} else {
		opType.classList.remove('border-2', 'border-red');
	}

	const aircraftSelect = document.getElementById('aircraftSelect');
	const Censna = document.getElementById('Censna');
	const Beechcraft = document.getElementById('Beechcraft');
	const ATR = document.getElementById('ATR');
	const Embrear = document.getElementById('Embrear');
	const Legacy = document.getElementById('Legacy');
	const Bombardier = document.getElementById('Bombardier');
	const BombardierChallenger = document.getElementById(
		'BombardierChallenger'
	);
	const Gulfstream = document.getElementById('Gulfstream');
	const Dassault = document.getElementById('Dassault');
	const DassaultFelcon = document.getElementById('DassaultFelcon');

	if (
		!Censna.checked &&
		!Beechcraft.checked &&
		!ATR.checked &&
		!Embrear.checked &&
		!Legacy.checked &&
		!Bombardier.checked &&
		!BombardierChallenger.checked &&
		!Gulfstream.checked &&
		!Dassault.checked &&
		!DassaultFelcon.checked
	) {
		e.preventDefault();
		aircraftSelect.classList.add('border-2', 'border-red');
		return;
	} else {
		aircraftSelect.classList.remove('border-2', 'border-red');
	}
});
