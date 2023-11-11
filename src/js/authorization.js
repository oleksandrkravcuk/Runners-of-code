function saveData(event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if (name === '' || email === '' || password === '') {
        console.error('Please fill in all fields.');
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
    console.log('User registered successfully!');
setTimeout(function () {
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
            console.log('User logged in successfully!');
            setTimeout(function () {
                window.location.href = '../index.html';
            }, 3000);
        } else {
            console.error('Invalid email or password. Try again.');
        }
    }
}
function clearFormFields() {
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('password').value = '';
}
function showLoginForm() {
    document.getElementById('registrationForm').style.display = 'none';
    document.getElementById('loginForm').style.display = 'block';
}
function showRegistrationForm() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('registrationForm').style.display = 'block';
}