const form = document.querySelector('#form');
const email = document.querySelector('#email');
const submitBtn = document.querySelector('#submit');
const errorMsg = document.querySelector('.error-msg');
const errorIcon = document.querySelector('.error-icon');

function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function submit(e) {
  e.preventDefault();
  if(validateEmail(email.value)) {
    form.innerHTML = `<p>Email Submitted!</p>`
  } else {
    errorMsg.classList.add('error');
    errorIcon.classList.add('error');
    email.classList.add('error');
  }
}

submitBtn.addEventListener('click', submit);
