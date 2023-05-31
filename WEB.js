// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting

  // Validate the form fields
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const nicknameInput = document.getElementById('nickname');
  const ageSelect = document.getElementById('age');
  const discord = document.getElementById('discord')
  const vk = document.getElementById('vk')

  // Validate name field
if (nameInput.value.trim() === '') {
  showError(nameInput, 'Specify your real name');
} else if (/\d/.test(nameInput.value.trim())) {
  showError(nameInput, 'Name');
} else {
  removeError(nameInput);
}

// Validate nickname field
if (nicknameInput.value.trim() === '') {
  showError(nicknameInput, 'Specify your in game NickName');
} else if (/\d/.test(nicknameInput.value.trim())) {
  showError(nicknameInput, 'NickName cannot contain numbers');
} else {
  removeError(nicknameInput);
}

// Validate discord field
if (discord.value.trim() === '') {
  showError(discord, 'Specify your discord ID');
} else if (/\D/.test(discord.value.trim())) {
  showError(discord, 'ID can contain only numbers!');
} else {
  removeError(discord);
}

// Validate vk field
if (vk.value.trim() === '') {
  showError(vk, 'Specify your VK ID');
} else if (/\D/.test(vk.value.trim())) {
  showError(vk, 'ID can contain only numbers!');
} else {
  removeError(vk);
}


  // Validate email field
  if (emailInput.value.trim() === '') {
    showError(emailInput, 'Specify your email');
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError(emailInput, 'Your email is invalid. Please specify a correct one');
  } else {
    removeError(emailInput);
  }

  
  // Validate age field
  if (ageSelect.value === '') {
    showError(ageSelect, 'Выберите свой возраст');
  } else {
    removeError(ageSelect);
  }

  // Submit the form if there are no errors
  if (form.querySelectorAll('.error').length === 0) {
    form.submit();
  }
});

// Function to show error message
function showError(input, message) {
  const errorContainer = input.nextElementSibling;
  errorContainer.textContent = message;
  errorContainer.style.display = 'block'; // Show the error message
  input.classList.add('error');
}

// Function to remove error message
function removeError(input) {
  const errorContainer = input.nextElementSibling;
  errorContainer.textContent = '';
  errorContainer.style.display = 'none'; // Hide the error message
  input.classList.remove('error');
}

// Function to validate email format
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
