const contLogo = document.querySelector('.container-logo');
const headerSvg = document.querySelector('.header-svg-logo');
const color = document.querySelector('.header-switch');
const slider = document.querySelector('.header-switch-slider');
const home = document.querySelector('.header-home');
const shopping = document.querySelector('.header-shopping');

color.addEventListener('click', onClickBtnTheme);

if (window.location.pathname === '/index.html') {
  home.classList.add('active-button');
} else if (window.location.pathname === '/shopping.html') {
  shopping.classList.add('active-button');
}

home.addEventListener('click', onClickHome);
shopping.addEventListener('click', onClickShopping);

function onClickHome() {
  window.location.href = '/index.html';
  shopping.classList.remove('active-button');
  home.classList.add('active-button');
}

function onClickShopping() {
  window.location.href = '/shopping.html';
  shopping.classList.add('active-button');
  home.classList.remove('active-button');
}
// console.log(localStorage.getItem('theme'));

// додаємо клас теми
function initialState(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
initialState('light-theme');

// function toggleTheme() - функція перемикання теми з світлої на темну,
//  що включає додавання лого з темними буквами на світлій темі,
//  а на темній темі додається лого з світлими буквами

function toggleTheme() {
  if (localStorage.getItem('theme') == 'dark-theme') {
        initialState('light-theme');
  contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <svg class="header-svg-logo" width="109" height="28">
              <use href="./img/symbol-defs.svg#icon-logo"></use>
            </svg>
          </a>`;

    slider.classList.add("header-switch-slider-light");
    slider.classList.remove("header-switch-slider-dark");

  } else {
    initialState('dark-theme');
       contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
            <svg class="header-svg-logo" width="109" height="28">
              <use href="./img/symbol-defs.svg#icon-logoblack"></use>
            </svg>
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

// if(toggleTheme("dark-theme")){
//   localStorage.setItem("theme", "light-theme");
// }else{
//   localStorage.setItem("theme", "dark-theme");
// }