document.addEventListener('DOMContentLoaded', function () {
  const newsletterSubmit = document.querySelector('.submit');
  const dismissMessage = document.querySelector('.dismiss');

  const newsletterCard = document.querySelector('.newsletter-card');
  const successScreen = document.querySelector('.sign-up-success');
  const emailSpan = document.querySelector('.email-address');
  const errorMessageContainer = document.querySelector('.error-message');
  const emailInput = document.getElementById('email');

  newsletterSubmit.addEventListener('click', function (event) {
    event.preventDefault();

    const emailValue = emailInput.value.trim(); // Trim to remove leading and trailing whitespaces

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      displayErrorMessage('Valid email required');
     
      // Add a class to the input field for styling if email is not valid
      emailInput.classList.add('invalid-email');
      // Clear the input field if email is not valid
      emailInput.value = '';
      return; // Stop further execution
    }

    emailSpan.textContent = emailValue; // Set the displayed email dynamically
    hideErrorMessage();

    newsletterCard.style.display = 'none';
    successScreen.style.display = 'block';
    // Remove the class when email is valid
    emailInput.classList.remove('invalid-email');
    // Clear the input field
    emailInput.value = '';
  });

  dismissMessage.addEventListener('click', function () {
    hideErrorMessage();
    successScreen.style.display = 'none';
    newsletterCard.style.display = 'flex';

    // Clear the input field when dismissing the message
    emailInput.value = '';
  });

  function displayErrorMessage(message) {
    errorMessageContainer.textContent = message;
    errorMessageContainer.style.display = 'block';
  }

  function hideErrorMessage() {
    errorMessageContainer.textContent = '';
    errorMessageContainer.style.display = 'none';
  }
});
