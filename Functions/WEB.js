document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const nicknameInput = document.getElementById('nickname');
    const ageSelect = document.getElementById('age');
    
    if (nameInput.value.trim() === '') {
      showErrorMessage(nameInput, 'Please enter your real name');
    } else {
      removeErrorMessage(nameInput);
    }
    
    if (emailInput.value.trim() === '') {
      showErrorMessage(emailInput, 'Please enter your email');
    } else if (!isValidEmail(emailInput.value.trim())) {
      showErrorMessage(emailInput, 'Please enter a valid email address');
    } else {
      removeErrorMessage(emailInput);
    }
    
    if (nicknameInput.value.trim() === '') {
      showErrorMessage(nicknameInput, 'Please enter your nickname');
    } else {
      removeErrorMessage(nicknameInput);
    }
    
    if (ageSelect.value === '') {
      showErrorMessage(ageSelect, 'Please select your age');
    } else {
      removeErrorMessage(ageSelect);
    }
    
    if (document.querySelectorAll('.error').length === 0) {
      document.querySelector('form').submit();
    }
  });
  
  function showErrorMessage(input, message) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = message;
    input.classList.add('error');
  }
  
  function removeErrorMessage(input) {
    const errorDiv = input.nextElementSibling;
    errorDiv.textContent = '';
    input.classList.remove('error');
  }
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  