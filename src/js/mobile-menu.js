const refs = {
  mobileMenu: document.querySelector('.js-menu-container'),
  openMenuBtn: document.querySelector('.js-open-menu'),
  closeMenuBtn: document.querySelector('.js-close-menu'),

  buttonSignUp: document.querySelector('.mobile-button-signUp'),
  buttonLogOut: document.querySelector('.mobile-button-link'),
  linkShopList: document.querySelector('.btn-shopping'),
  buttonHome: document.querySelector('.btn-home'),
  mobileOpenModalButton: document.getElementById('mobileOpenModalButton'),
};

const {
  mobileMenu,
  openMenuBtn,
  closeMenuBtn,
  buttonSignUp,
  buttonLogOut,
  linkShopList,
  buttonHome,
  mobileOpenModalButton,
} = refs;

// ----------------------------------------------------------------------->

openMenuBtn.addEventListener('click', toggleMenu);
closeMenuBtn.addEventListener('click', toggleMenu);
buttonHome.addEventListener('click', onClickHome);
linkShopList.addEventListener('click', onClickShopping);
mobileOpenModalButton.addEventListener('click', openModal);

// ----------------------------------------------------------------------->
function toggleMenu(e) {
  e.stopImmediatePropagation();
  console.log('Є клік!!', openMenuBtn);
  const { ariaExpanded: isMenuOpen } = openMenuBtn;
  openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
  mobileMenu.classList.toggle('is-open');
}
// ----------------------------------------------------------------------->
function activeBtn() {
  if (window.location.pathname === '/index.html') {
    buttonHome.classList.add('active-button');
  } else if (window.location.pathname === '/shopping.html') {
    linkShopList.classList.add('active-button');
  }
}

function onClickHome() {
  window.location.href = '/index.html';
  linkShopList.classList.remove('active-button');
  buttonHome.classList.add('active-button');
}

function onClickShopping() {
  window.location.href = '/shopping.html';
  linkShopList.classList.add('active-button');
  buttonHome.classList.remove('active-button');
}
// ----------------------------------------------------------------------->

function openModal() {
  modal.style.display = 'block';
  body.classList.add('modal-open');
}

// ----------------------------------------------------------------------->
activeBtn();
