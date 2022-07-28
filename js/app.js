function hamburger() {
  const hamburgerMenu = document.getElementsByClassName('nav-icon');
  const hamburgerMenuExit = document.getElementsByClassName('close');
  const hamburgerMenuItems = document.getElementsByClassName('hamburger-list');

  hamburgerMenu[0].addEventListener('click', () => {
    document.getElementsByClassName('menu')[0].style.display = 'flex';
  });

  hamburgerMenuExit[0].addEventListener('click', () => {
    document.getElementsByClassName('menu')[0].style.display = 'none';
  });

  [...hamburgerMenuItems].forEach((element) => {
    element.addEventListener('click', () => {
      document.getElementsByClassName('menu')[0].style.display = 'none';
    });
  });
}
hamburger();

const btnSubmit = document.getElementById('send');
const inputEmail = document.getElementById('email');
const EMAIL_CASE_CHECK = 'Email adress should be in lower case';
const EMAIL_CHECK = 'Enter valid email';
const error = document.getElementById('warning');

btnSubmit.addEventListener('click', (e) => {
  const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const address = inputEmail.value;
  if (address === address.toLowerCase()) {
    if (validRegex.test(address)) {
      error.classList.remove('.alert');
      error.classList.add('.off-alert');
    } else {
      error.innerHTML = `<span id="warning">${EMAIL_CHECK}</span>`;
      e.preventDefault();
      error.classList.add('.alert');
      error.classList.remove('.off-alert');
    }
  } else {
    e.preventDefault();
    error.innerHTML = `<span id="warning">${EMAIL_CASE_CHECK}</span>`;
    error.classList.add('.alert');
    error.classList.remove('.off-alert');
  }
  setTimeout(() => {
    error.classList.remove('.alert');
    error.classList.add('.off-alert');
  }, 100);
});

// storage

const information = [];
const store = (e) => {
  e.preventDefault();
  const info = {
    names: document.getElementById('fullname').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  information.push(info);
  // document.forms[0].reset();

  localStorage.setItem('formData', JSON.stringify(information));
};
const feedback = JSON.parse(window.localStorage('formData'));

document.getElementById('fullname').value = feedback.names;
document.getElementById('email').value = feedback.email
document.getElementById('message').value = feedback.message;

store();