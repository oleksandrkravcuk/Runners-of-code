import Notiflix from 'notiflix';

// Firebase
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// const firebaseConfig = {
//   apiKey: "AIzaSyAxn0yKjSusco_l-oihq9eHcj84Uh_Sbu8",
//   authDomain: "project-ec93f.firebaseapp.com",
//   projectId: "project-ec93f",
//   storageBucket: "project-ec93f.appspot.com",
//   messagingSenderId: "30851493431",
//   appId: "1:30851493431:web:afec4c2dd36f5e79e4d9b2",
//   measurementId: "G-CPTMDRZ288"
// };

// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.getElementById('openModalButton');
  const modal = document.getElementById('modal');
  const body = document.body;
  openModalButton.addEventListener('click', function () {
    modal.style.display = 'block';
    body.classList.add('modal-open');
  });

  const closeModalButton = document.getElementById('closeModalButton');
  closeModalButton.addEventListener('click', function () {
    modal.style.display = 'none';
    body.classList.remove('modal-open');
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const formContainer = document.querySelector('.form-container');

  formContainer.addEventListener('submit', function (event) {
    event.preventDefault();

    const currentForm = event.target.id;

    if (currentForm === 'registrationForm') {
      saveData(event);
    } else if (currentForm === 'loginForm') {
      login(event);
    }
  });

  formContainer.addEventListener('click', function (event) {
    if (event.target.tagName === 'A') {
      event.preventDefault();

      const targetFormId = event.target.dataset.form;

      if (targetFormId) {
        switchForm(targetFormId);
      }
    }
  });
});

function saveData(event) {
  event.preventDefault();
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;

  if (name === '' || email === '' || password === '') {
    Notiflix.Notify.failure('Please fill in all fields.');
    return;
  }

  const dataObject = {
    name,
    email,
    password,
  };
  console.log(dataObject);
  localStorage.setItem('userData', JSON.stringify(dataObject));

  const signUpButton = document.getElementById('signUpLink');
  signUpButton.closest('.sign-up-button').style.display = 'none';

  const userButton = document.querySelector('.user-button');
  userButton.style.display = 'flex';
  userButton.querySelector('p').textContent = name;

  clearFormFields();
  Notiflix.Notify.success('User registered successfully!');
}

function login(event) {
  event.preventDefault();
  let loginEmail = document.getElementById('loginEmail').value;
  let loginPassword = document.getElementById('loginPassword').value;
  let storedData = localStorage.getItem('userData');
  if (storedData) {
    let userData = JSON.parse(storedData);

    if (loginEmail === userData.email && loginPassword === userData.password) {
      const signUpButton = document.getElementById('signUpLink');
      signUpButton.closest('.sign-up-button').style.display = 'none';

      const userButton = document.querySelector('.user-button');
      userButton.style.display = 'flex';
      userButton.querySelector('p').textContent = userData.name;
      Notiflix.Notify.success('User logged in successfully!');
    } else {
      Notiflix.Notify.info('Invalid email or password. Try again.');
    }
  }
}

function clearFormFields() {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('password').value = '';
  document.getElementById('loginEmail').value = '';
  document.getElementById('loginPassword').value = '';
}

function switchForm(targetFormId) {
  const forms = document.querySelectorAll('.form-container form');

  forms.forEach(form => {
    if (form.id === targetFormId) {
      form.style.display = 'block';
    } else {
      form.style.display = 'none';
    }
  });
}

// const closeIcon = document.querySelector('.close-icon');
// closeIcon.addEventListener('click', function() {
//     const newPageURL = './index.html';
//     window.location.href = newPageURL;
// });

const passwordInput = document.getElementById('password');
const togglePasswordButton = document.getElementById('togglePassword');

togglePasswordButton.addEventListener('click', function () {
  if (passwordInput.type === 'password') {
    passwordInput.type = 'text';
  } else {
    passwordInput.type = 'password';
  }
});

const passwordLoginInput = document.getElementById('loginPassword');
const togglePasswordButtonLogin = document.getElementById(
  'togglePasswordLogin'
);

togglePasswordButtonLogin.addEventListener('click', function () {
  if (passwordLoginInput.type === 'password') {
    passwordLoginInput.type = 'text';
  } else {
    passwordLoginInput.type = 'password';
  }
});

const emailInput = document.getElementById('email');
const emailIcon = document.getElementById('emailIcon');
emailIcon.addEventListener('click', function () {
  const userEmail = emailInput.value;
  if (userEmail && userEmail.includes('@')) {
    window.location.href = 'mailto:' + userEmail;
  } else {
    Notiflix.Notify.warning('Please enter a valid email address.');
  }
});

const emailInputLogin = document.getElementById('loginEmail');
const emailIconLogin = document.getElementById('loginEmailIcon');
emailIconLogin.addEventListener('click', function () {
  const userEmailLogin = emailInputLogin.value;
  if (userEmailLogin && userEmailLogin.includes('@')) {
    window.location.href = 'mailto:' + userEmailLogin;
  } else {
    Notiflix.Notify.warning('Please enter a valid email address.');
  }
});
