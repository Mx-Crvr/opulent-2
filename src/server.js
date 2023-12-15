const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const Airtable = require('airtable');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const upload = multer().fields([
	{ name: 'FAAInput', maxCount: 1 },
	{ name: 'cvUpload', maxCount: 1 },
	{ name: 'videoUpload', maxCount: 1 },
	{ name: 'photoUpload', maxCount: 1 },
]);
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/dist', express.static(path.join(__dirname, '../dist/imgs')));
// app.use('/dist', express.static(path.join(__dirname, '../dist/styles.css')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Airtable config
const opulentBase = new Airtable({ apiKey: `${process.env.TOKEN}` }).base(
	`${process.env.OPULENT_BASE}`
);

// Tables config
const attendantsTable = opulentBase('Attendant');
const pilotsTable = opulentBase('Pilot');
const contactTable = opulentBase('Contact');
// Cloudinary config
cloudinary.config({
	cloud_name: `${process.env.CLOUDINARY_CLOUD_NAME}`,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});
// Main route
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

// @route     : Attendant table
// @origin    : /attendant form
app.post('/attendant', async (req, res) => {
	upload(req, res, async (err) => {
		try {
			if (err) {
				console.error(err);
				return res.status(500).send('Error uploading file');
			}
			console.log(req.body.licenseSelect);

			const hasValidLicense = req.body.validLicense === 'true';
			const licenseType = hasValidLicense
				? [req.body.licenseSelect]
				: null;
			const faaResult = req.files['FAAInput']
				? await uploadToCloudinary(req.files['FAAInput'][0])
				: null;
			const cvResult = req.files['cvUpload']
				? await uploadToCloudinary(req.files['cvUpload'][0])
				: null;
			const photoResult = req.files['photoUpload']
				? await uploadToCloudinary(req.files['photoUpload'][0])
				: null;
			const airtableRecord = {
				fields: {
					First_Name: req.body.fname,
					Last_Name: req.body.lname,
					Email_address: req.body.email,
					Phone_number: req.body.phone,
					Age: req.body.age,
					Gender: req.body.gender,
					License_Type: Array.isArray(req.body.licenseSelect)
						? req.body.licenseSelect
						: [req.body.licenseSelect],
					Nationality: req.body.nationality,

					Country_of_residence: req.body.residence,
					VIP_Experience: req.body.vipExperience,
					Valid_licence: req.body.validLicense,
					Visas: req.body.visa,
					Aircraft_Type: Array.isArray(req.body.aircraftSelect)
						? req.body.aircraftSelect
						: [req.body.aircraftSelect],
					Country_ICAO: req.body.icaoInput,
					FAA_Verification: faaResult
						? [
								{
									url: faaResult.url,
								},
						  ]
						: null,
					Permanent: req.body.permanent,
					Freelance: req.body.freelance,
					Photo_upload: photoResult
						? [
								{
									url: photoResult.url,
								},
						  ]
						: null,
					CV_File: cvResult
						? [
								{
									url: cvResult.url,
								},
						  ]
						: null,
				},
			};
			await attendantsTable.create([airtableRecord]);
			res.send(
				'Thank you for your application. We will be in touch soon'
			);
		} catch (error) {
			console.error(error);
			res.status(500).send('Error creating record');
		}
	});
});
// @route     : Pilot table
// @origin    : /pilot form
app.post('/pilot', async (req, res) => {
	upload(req, res, async (err) => {
		try {
			if (err) {
				console.error(err);
				return res.status(500).send('Error uploading file');
			}
			console.log(req.body.licenseSelect);
			const hasValidLicense = req.body.validLicense === 'true';
			const licenseType = hasValidLicense
				? [req.body.licenseSelect]
				: null;
			const faaResult = req.files['FAAInput']
				? await uploadToCloudinary(req.files['FAAInput'][0])
				: null;
			const cvResult = req.files['cvUpload']
				? await uploadToCloudinary(req.files['cvUpload'][0])
				: null;
			const photoResult = req.files['photoUpload']
				? await uploadToCloudinary(req.files['photoUpload'][0])
				: null;
			const airtableRecord = {
				fields: {
					First_Name: req.body.fname,
					Last_Name: req.body.lname,
					Email_address: req.body.email,
					Phone_number: req.body.phone,
					Age: req.body.age,
					Gender: req.body.gender,
					Total_Time: req.body.totalTime,
					Command_Time: req.body.commandTime,
					Time_in_Second_Command: req.body.secondTime,
					Single_Engine_Land: req.body.singleEngine,
					Multi_Engine_Land: req.body.multiEngine,
					Jet_Time: req.body.jetTime,
					Turbine_Time: req.body.turbineTime,
					Total_Helicopter_Hours: req.body.heliHours,
					Total_Instructor_Hours: req.body.instructorHours,
					License_Type: Array.isArray(req.body.licenseSelect)
						? req.body.licenseSelect
						: [req.body.licenseSelect],
					Aircraft_Type: Array.isArray(req.body.aircraftSelect)
						? req.body.aircraftSelect
						: [req.body.aircraftSelect],
					Nationality: req.body.nationality,
					Country_of_residence: req.body.residence,
					Valid_licence: req.body.validLicense,
					Visas: req.body.visa,
					Country_ICAO: req.body.icaoInput,
					FAA_Verification: faaResult
						? [
								{
									url: faaResult.url,
								},
						  ]
						: null,
					Permanent: req.body.permanent,
					Freelance: req.body.freelance,
					Photo_upload: photoResult
						? [
								{
									url: photoResult.url,
								},
						  ]
						: null,
					CV_File: cvResult
						? [
								{
									url: cvResult.url,
								},
						  ]
						: null,
				},
			};
			await pilotsTable.create([airtableRecord]);

			res.sendFile(path.join(__dirname, '../dist/styles.css'));
			console.log('It worked');
		} catch (error) {
			console.error(error);
			res.status(500).send('Error creating record');
		}
	});
});
// @route     : Contact table
// @origin    : /contact form
app.post('/contact', async (req, res) => {
	upload(req, res, async (err) => {
		try {
			if (err) {
				console.error(err);
				return res.status(500).send('Error uploading file');
			}

			const airtableRecord = {
				fields: {
					'First Name': req.body.fname,
					'Last Name': req.body.lname,
					'Email address': req.body.email,
					'Phone number': req.body.phone,
					Message: req.body.message,
				},
			};

			await contactTable.create([airtableRecord]);
			console.log('It worked');
			console.log(req.body);
			res.send('Record created successfully');
		} catch (error) {
			console.error(error);
			res.status(500).send('Error creating record');
		}
	});
});
// Uploads files to cloudinary
async function uploadToCloudinary(file) {
	const streamifier = require('streamifier');
	const bufferStream = streamifier.createReadStream(file.buffer);

	return new Promise((resolve, reject) => {
		const stream = cloudinary.uploader.upload_stream(
			{ resource_type: 'raw' },
			(error, result) => {
				if (error) reject(error);
				else resolve(result);
			}
		);

		bufferStream.pipe(stream);
	});
}
app.get('/operatorData', async (req, res) => {
	try {
		const attendantRecords = await fetchRecords(attendantsTable);
		const pilotRecords = await fetchRecords(pilotsTable);
		// const contactRecords = await fetchRecords(contactTable);
		console.log(process.env.TOKEN);

		const allRecords = {
			attendants: attendantRecords,
			pilots: pilotRecords,
		};
		res.sendFile(path.join(__dirname, '../dist/operator.html')); // Sending the file directly
		res.end(JSON.stringify(allRecords)); // Sending the data separately (optional)
	} catch (error) {
		console.error(error);
		res.status(500).send('Error fetching records');
	}
});
async function fetchRecords(table) {
	return new Promise((resolve, reject) => {
		table.select().firstPage((err, records) => {
			if (err) {
				reject(err);
			} else {
				resolve(records);
			}
		});
	});
}
app.listen(process.env.PORT);
