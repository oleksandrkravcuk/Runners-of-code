const mobileMenu = document.querySelector('.js-menu-container');
const openMenuBtn = document.querySelector('.js-open-menu');
const closeMenuBtn = document.querySelector('.js-close-menu');

const buttonSignUp = document.querySelector('.mobile-button-signUp');
const buttonLogOut = document.querySelector('.mobile-button-link');
const linkShopList = document.querySelector('.mobile-header-shopping');
const buttonHome = document.querySelector('.mobile-header-button-home');
buttonLogOut.style.display = 'none';
linkShopList.style.display = 'none';
buttonHome.style.display = 'none';

const toggleMenu = event => {
  event.stopImmediatePropagation();
  const isMenuOpen =
    openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');

  const scrollLockMethod = !isMenuOpen
    ? 'disableBodyScroll'
    : 'enableBodyScroll';
  bodyScrollLock[scrollLockMethod](document.body);
};

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);

window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
  if (!e.matches) return;
  mobileMenu.classList.remove('is-open');
  openMenuBtn.setAttribute('aria-expanded', false);
  bodyScrollLock.enableBodyScroll(document.body);
});

buttonSignUp.addEventListener('click', () => {
  buttonSignUp.classList.add('hidden');
  //   buttonLogOut.style.display = 'block';
  //   linkShopList.style.display = 'block';
  //   buttonHome.style.display = 'block';
});
document.addEventListener('DOMContentLoaded', function () {
  const openModalButton = document.getElementById('mobileOpenModalButton');
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
