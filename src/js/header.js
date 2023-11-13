const contLogo = document.querySelector('.container-logo');
const headerSvg = document.querySelector('.header-svg-logo');
const color = document.querySelector('.header-switch');
const slider = document.querySelector('.header-switch-slider');
console.log(localStorage);

color.addEventListener('click', onClickBtnTheme);

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

// function headerLogoMarkup() {
 
//   if (initialState('light-theme')) {
//     contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
//             <svg class="header-svg-logo" width="109" height="28">
//               <use href="./img/symbol-defs.svg#icon-logo"></use>
//             </svg>
//           </a>`;
 
//   } else {
//      contLogo.innerHTML = `<a class="logo-header-link" href="./index.html">
//             <svg class="header-svg-logo" width="109" height="28">
//               <use href="./img/symbol-defs.svg#icon-logoblack"></use>
//             </svg>
//           </a>`;
     

//   }
  
// }
// headerLogoMarkup();

