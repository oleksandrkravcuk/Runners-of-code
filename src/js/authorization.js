// import Notiflix from "notiflix";

document.addEventListener('DOMContentLoaded', function() {
  const formContainer = document.querySelector('.form-container');

  formContainer.addEventListener('submit', function(event) {
    event.preventDefault();

    const currentForm = event.target.id;
    
    if (currentForm === 'registrationForm') {
      saveData(event); 
    } else if (currentForm === 'loginForm') {
      login(event);
    }
  });

  formContainer.addEventListener('click', function(event) {
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
    // Notiflix.Notify.failure('Please fill in all fields.');
    return;
  }

  const dataObject = {
    name,
    email,
    password,
  };
  console.log(dataObject);
  localStorage.setItem('userData', JSON.stringify(dataObject));
  clearFormFields();
//   Notiflix.Notify.success('User registered successfully!');
  setTimeout(function() {
    window.location.href = '../index.html';
  }, 3000);
}

function login(event) {
  event.preventDefault();
  let loginEmail = document.getElementById('loginEmail').value;
  let loginPassword = document.getElementById('loginPassword').value;
  let storedData = localStorage.getItem('userData');
  if (storedData) {
    let userData = JSON.parse(storedData);

    if (loginEmail === userData.email && loginPassword === userData.password) {
    //   Notiflix.Notify.success('User logged in successfully!');
      setTimeout(function() {
        window.location.href = '../index.html';
      }, 3000);
    } else {
    //   Notiflix.Notify.info('Invalid email or password. Try again.');
    }
  }
}

function clearFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
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



  const closeIcon = document.querySelector('.close-icon');
  closeIcon.addEventListener('click', function() {
      const newPageURL = '../index.html';
      window.location.href = newPageURL;
  });