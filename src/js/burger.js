const refs = {
  burger: document.querySelector('.burger'),
  menu: document.querySelector('.menu-container'),
};
const { burger, menu } = refs;

burger.addEventListener('click', onOpenBurger);
function onOpenBurger() {
  burger.classList.toggle('open');
  menu.classList.toggle('open');
}
