
const color = document.querySelector('.header-switch');
color.addEventListener('click', onClickBtnTheme);


function initialState(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}
initialState('light-theme');

function toggleTheme() {
  if (localStorage.getItem('theme') == 'dark-theme') {
    initialState('light-theme');
  } else {
    initialState('dark-theme');
  }
}

function onClickBtnTheme(e) {
    e.preventDefault();
    toggleTheme();
}