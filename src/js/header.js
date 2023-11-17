import pngB from '../img/png/logo_b.png';
import pngW from '../img/png/logo_w.png';

const contLogo = document.querySelector('.container-logo');
const headerSvg = document.querySelector('.header-svg-logo');
const color = document.querySelector('.header-switch');
const slider = document.querySelector('.header-switch-slider');
const home = document.querySelector('.header-home');
const shopping = document.querySelector('.header-shopping');

contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <img src="${pngB}" alt="logo">
          </a>`;


color.addEventListener('click', onClickBtnTheme);


home.classList.add('active-button');



// console.log(localStorage.getItem('theme'));

// додаємо клас теми
function initialState(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
}
if (!localStorage.getItem('theme')) {
    initialState('light-theme');
} else {
    if (localStorage.getItem('theme') === 'light-theme') {
        initialState('light-theme');
        contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <img src="${pngB}" alt="logo" width="109" height="28">
          </a>`;

        slider.classList.add("header-switch-slider-light");
        slider.classList.remove("header-switch-slider-dark");

    } else {
        initialState('dark-theme');
        contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <img src="${pngW}" alt="logo" width="109" height="28">
          </a>`;
        slider.classList.remove("header-switch-slider-light");
        slider.classList.add("header-switch-slider-dark");
    }
}


// function toggleTheme() - функція перемикання теми з світлої на темну,
//  що включає додавання лого з темними буквами на світлій темі,
//  а на темній темі додається лого з світлими буквами

function toggleTheme() {
    if (localStorage.getItem('theme') === 'dark-theme') {
        initialState('light-theme');
        contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <img src="${pngB}" alt="logo" width="109" height="28">
          </a>`;

        slider.classList.add("header-switch-slider-light");
        slider.classList.remove("header-switch-slider-dark");

    } else {
        initialState('dark-theme');
        contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <img src="${pngW}" alt="logo" width="109" height="28">
          </a>`;
        slider.classList.remove("header-switch-slider-light");
        slider.classList.add("header-switch-slider-dark");
    }

}

// перемикання теми при кліку
function onClickBtnTheme(e) {
    e.preventDefault();
    toggleTheme();
}