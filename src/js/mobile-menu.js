const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),

  buttonSignUp: document.querySelector('.mobile-button-signUp'),
  buttonLogOut: document.querySelector('.mobile-button-link'),
  linkShopList: document.querySelector('.mobile-header-shopping'),
  buttonHome: document.querySelector('.mobile-header-button-home'),
};

const {
  mobileMenu,
  openMenuBtn,
  closeMenuBtn,
  buttonSignUp,
  buttonLogOut,
  linkShopList,
  buttonHome,
} = refs;

// ----------------------------------------------------------------------->
function toggleMenu(e) {
  e.stopImmediatePropagation();
  console.log('Є клік!!', openMenuBtn);
  const { ariaExpanded: isMenuOpen } = openMenuBtn;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
}
// ----------------------------------------------------------------------->

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
