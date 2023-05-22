// script.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const confirmInput = document.querySelector('input[name="confirmar"]');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const passwordInput = document.querySelector('input[name="password"]');
      const errorMessage = document.createElement('span');
      errorMessage.classList.add('error-message');
  
      if (passwordInput.value !== confirmInput.value) {
        errorMessage.textContent = 'Passwords do not match';
        confirmInput.parentNode.appendChild(errorMessage);
        confirmInput.classList.add('password-mismatch');
      } else {
        // Passwords match, remove error message and class
        if (confirmInput.classList.contains('password-mismatch')) {
          confirmInput.parentNode.removeChild(errorMessage);
          confirmInput.classList.remove('password-mismatch');
        }
        // Continue with form submission
        form.submit();
      }
    });
  });
  