function toggleDarkMode() {
  const body = document.body;
  // body.classList.toggle('dark-mode');
  const darkModeToggle = document.getElementById('darkModeToggle');
  body.classList.toggle('dark-mode');
  darkModeToggle.classList.toggle('active');
  list = body.classList;
  console.log(list);
  // Update icon based on mode
  const darkModeIcon = document.querySelector('.dark-mode-icon');
  const iconClass = body.classList.contains('dark-mode') ? 'bxs-sun' : 'bxs-moon';
  darkModeIcon.classList.remove('bxs-moon', 'bxs-sun');
  darkModeIcon.classList.add(iconClass);
}


const contactForm = document.getElementById('contactForm');
const fullName = document.getElementById('fullName');
const phoneNumber = document.getElementById('phoneNumber');
const email = document.getElementById('email');
const message = document.getElementById('message');

contactForm.addEventListener('submit', function (event) {
  event.preventDefault();

  if (validateForm()) {
    // You can add your form submission logic here
    alert('Form submitted successfully!');
  }
});

function validateForm() {
  let isValid = true;

  if (fullName.value.trim() === '') {
    isValid = false;
    fullName.classList.add('is-invalid');
  } else {
    fullName.classList.remove('is-invalid');
  }

  if (phoneNumber.value.trim() === '') {
    isValid = false;
    phoneNumber.classList.add('is-invalid');
  } else {
    phoneNumber.classList.remove('is-invalid');
  }

  if (email.value.trim() === '' || !isValidEmail(email.value)) {
    isValid = false;
    email.classList.add('is-invalid');
  } else {
    email.classList.remove('is-invalid');
  }

  if (message.value.trim() === '') {
    isValid = false;
    message.classList.add('is-invalid');
  } else {
    message.classList.remove('is-invalid');
  }

  return isValid;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
