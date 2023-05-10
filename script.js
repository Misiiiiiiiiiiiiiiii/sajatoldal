// Form Validation
const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const error = document.querySelector('.error');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
    error.textContent = 'Please fill in all fields';
  } else {
    error.textContent = '';
    form.submit();
  }
});