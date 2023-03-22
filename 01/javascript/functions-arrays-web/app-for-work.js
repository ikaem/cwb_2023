// personal info logic
// Create variables to store personal information
let firstName = '';
let lastName = '';
let age = '';
let canSpeakCroatian = false;

// Get references to the form and form inputs
const personalInfoForm = document.getElementById('personal-info-form');
personalInfoForm.addEventListener('submit', updatePersonalInfo);

// Function to update personal information variables with form data
function updatePersonalInfo(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get the values from the form inputs and save them into variables
  // const formData = new FormData(event.target);
  // firstName = formData.get('first-name');
  // lastName = formData.get('last-name');

  // // Calculate the age from the date of birth
  // const dob = new Date(formData.get('dob'));
  // const now = new Date();
  // age = now.getFullYear() - dob.getFullYear();

  // // Set the "Can speak Croatian" variable based on the checkbox value
  // canSpeakCroatian = formData.get('can-speak-croatian') === 'on';


  // // Log the values to the console to verify they were retrieved correctly
  // console.log(firstName, lastName, age, canSpeakCroatian);

  // Update the personal information section with the new values
  updatePersonalInfoSection();
}

// Function to update the personal information section with the current values
function updatePersonalInfoSection() {
  // Get references to the HTML elements we want to update
  // const firstNameLabel = document.getElementById('first-name-label');
  // const lastNameLabel = document.getElementById('last-name-label');
  // const ageLabel = document.getElementById('age-label');
  // const canSpeakCroatianLabel = document.getElementById('can-speak-croatian-label');

  // const cvOwnerLabel = document.getElementById('cv-owner-title');

  // // Set the text content of the labels to the current values
  // firstNameLabel.textContent = firstName;
  // lastNameLabel.textContent = lastName;
  // ageLabel.textContent = age;
  // canSpeakCroatianLabel.textContent = canSpeakCroatian ? 'Yes' : 'No';

	// cvOwnerLabel.textContent = firstName;
}

// work experiences
// Create an empty array to store work experiences
const workExperiences = [];

// Get references to the form and form inputs
const workExperienceForm = document.getElementById('work-experience-form');

workExperienceForm.addEventListener('submit', addWorkExperience);

// Function to add work experience to the array with form data
function addWorkExperience(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get the values from the form inputs and save them into variables
  // const formData = new FormData(event.target);
  // const startDate = formData.get('work-start-date');
  // const endDate = formData.get('work-end-date');
  // const companyName = formData.get('work-company-name');
  // const industry = formData.get('work-industry');
  // const current = formData.get('work-current') === 'on';

	for (let [key, value] of formData.entries()) {
		console.log(`${key}: ${value}`);
	}


  // // Create a new work experience object with the form data
  // const newExperience = {
  //   id: workExperiences.length + 1, // Assign an ID based on the current length of the array
  //   startDate,
  //   endDate,
  //   companyName,
  //   industry,
  //   current
  // };

  // Add the new work experience to the array
  // workExperiences.push(newExperience);

	event.target.reset();

  // Log the array to the console to verify the new experience was added
  // console.log(workExperiences);

  // Update the work experience list with the new experience
  updateWorkExperienceList();
}

function updateWorkExperienceList() {
  const workExperienceList = document.querySelector('.work-experience__list');
  
  // Clear any existing items in the list
  workExperienceList.innerHTML = '';

  // Loop through the workExperience array and add each work experience to the list

		workExperiences.forEach((item, index) => {
			// const li = document.createElement('li');
			// li.setAttribute('id', index + 1);

			// const startDate = document.createElement('p');
			// const startDateText = item.startDate ? `Start date: ${item.startDate}` : 'Start date: N/A';
			// startDate.textContent = startDateText;

			// const endDate = document.createElement('p');
			// const endDateText = item.endDate ? `End date: ${item.endDate}` : 'End date: N/A';
			// endDate.textContent = endDateText;

			// const company = document.createElement('p');
			// const companyText = item.companyName ? `Company: ${item.companyName}` : 'Company: N/A';
			// company.textContent = companyText;
			
			// const industry = document.createElement('p');
			// const industryText = item.industry ? `Industry: ${item.industry}` : 'Industry: N/A';
			// industry.textContent = industryText;

			// const stillWorking = document.createElement('p');
			// const stillWorkingText = item.current ? 'Yes' : 'No';
			// stillWorking.textContent = `Still working: ${stillWorkingText}`;

			// const deleteBtn = document.createElement('button');
			// deleteBtn.textContent = 'Delete';
			// deleteBtn.classList.add('delete-work-experience-btn');
			// deleteBtn.dataset.id = index + 1;

			// deleteBtn.addEventListener('click', deleteWorkExperience);

			// // adding elements to list item
			// li.appendChild(startDate);
			// li.appendChild(endDate);
			// li.appendChild(company);
			// li.appendChild(industry);
			// li.appendChild(stillWorking);
			// li.appendChild(deleteBtn);

			// workExperienceList.appendChild(li);
  });
}


// delete work experience 
function deleteWorkExperience(event) {
  // Get the ID of the work experience to delete
  // const id = parseInt(event.target.dataset.id);
	// console.log(event.target.dataset);

  // // Find the index of the work experience with the corresponding ID
  // const index = workExperiences.findIndex((item) => item.id === id);

	// if(index === -1) return;

	// console.log(index);

  // // Remove the work experience from the array
  // // workExperiences.splice(-1, 1); --> pay attention to this
  // workExperiences.splice(index, 1);

  // Re-render the work experience list
  updateWorkExperienceList();
}

// delete first and last work experiences 
const deleteFirstWorkExperienceButton = document.querySelector(".delete-first-work-experience-btn");
const deleteLastWorkExperienceButton = document.querySelector(".delete-last-work-experience-btn");

deleteFirstWorkExperienceButton.addEventListener("click", (event) => {
	console.log("you clicked delete first work button. now write logic to delete it")


});

deleteLastWorkExperienceButton.addEventListener("click", (event) => {
	console.log("you clicked delete last work button. now write logic to delete it")


});


// homework 
/* 
1. create logic for delete first work experience 
- this should be a separate button on top of the screen
- button is already selected in js, and event listener is attached 
- you need to
	- create a function to delete first 
	- rerender all work expereinces again
	- pay attention to cases when there is no work experiences to delete - how to you check that? what do you do if there are no work expereinces to delete?
2. create logic for delete last work experience
- this should be a separate button on top of the screen
- button is already selected in js, and event listener is attached 
- you need to
	- create a function to delete last 
	- rerender all work expereinces again
	- pay attention to cases when there is no work experiences to delete - how to you check that? what do you do if there are no work expereinces to delete?

3. create functionality for education - advanced (use current work experiences as example)

in index.html
- you need section for education similar to work experiences

in app.js, 
- you need an array to hold all education data
	- one education consists of year start, year end, name of school, qualification, and if you are still student there
- you need function that will add new eduication to the array 
- you need function that will render all educations in the array 
- you need function to delete education
- functions to delete first and last 


4. go crazy.
- add languages used to work experiences 
- delete all work experiences that used english language 
- create ui and logic to add and delete topics you learned in this course




*/