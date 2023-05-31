// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
  // Prevent form submission
  event.preventDefault();

  // Clear existing error messages
  clearErrorMessages();

  // Validate each input field
  const nameInput = document.getElementById('name');
  validateNameField(nameInput);

  const emailInput = document.getElementById('email');
  validateEmailField(emailInput);

  const nicknameInput = document.getElementById('nickname');
  validateNicknameField(nicknameInput);

  const vkInput = document.getElementById('vk');
  validateRequiredField(vkInput);

  const discordInput = document.getElementById('discord');
  validateDiscordField(discordInput);

  const ageSelect = document.getElementById('age');
  validateSelectField(ageSelect);

  const screenshotInputs = document.querySelectorAll('input[type="file"]');
  screenshotInputs.forEach((input) => {
    validateFileField(input);
  });

  // Submit the form if there are no errors
  if (!formHasErrors()) {
    form.submit();
  }
});

function validateNameField(input) {
  const namePattern = /^[A-Za-z]+$/;
  if (!namePattern.test(input.value.trim())) {
    displayErrorMessage(input, 'Please enter letters only.');
  }
}

// Function to validate a required input field
function validateRequiredField(input) {
  if (input.value.trim() === '') {
    displayErrorMessage(input, 'This field is required.');
  }
}

// Function to validate an email input field
function validateEmailField(input) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(input.value.trim())) {
    displayErrorMessage(input, 'Please enter a valid email address.');
  }
}

// Function to validate a nickname input field
function validateNicknameField(input) {
  const nicknamePattern = /^[A-Za-z]+$/;
  if (!nicknamePattern.test(input.value.trim())) {
    displayErrorMessage(input, 'Please enter letters only.');
  }
}

// Function to validate a discord input field
function validateDiscordField(input) {
  const discordPattern = /^\d+$/;
  if (!discordPattern.test(input.value.trim())) {
    displayErrorMessage(input, 'Please enter numbers only.');
  }
}

// Function to validate a select field
function validateSelectField(select) {
  if (select.value === '') {
    displayErrorMessage(select, 'Please select an option.');
  }
}

// Function to validate a file input field
function validateFileField(input) {
  const file = input.files[0];
  if (!file) {
    displayErrorMessage(input, 'Please select a file.');
  } else if (!isFileSupported(file)) {
    displayErrorMessage(input, 'Please select a valid file format (JPEG, JPG, PNG).');
  }
}

// Function to check if a file format is supported
function isFileSupported(file) {
  const supportedFormats = ['image/jpeg', 'image/jpg', 'image/png'];
  return supportedFormats.includes(file.type);
}

// Function to display an error message for an input field
function displayErrorMessage(input, message) {
  const errorDiv = input.parentElement.querySelector('.error');
  errorDiv.textContent = message;
  input.classList.add('input-error');
}

// Function to clear all error messages and remove error styling
function clearErrorMessages() {
  const errorDivs = document.querySelectorAll('.error');
  const inputFields = document.querySelectorAll('.input-error');

  errorDivs.forEach((errorDiv) => {
    errorDiv.textContent = '';
  });

  inputFields.forEach((inputField) => {
    inputField.classList.remove('input-error');
  });
}

// Function to check if the form has any errors
function formHasErrors() {
  const errorDivs = document.querySelectorAll('.error');
  return Array.from(errorDivs).some((errorDiv) => errorDiv.textContent !== '');
}
