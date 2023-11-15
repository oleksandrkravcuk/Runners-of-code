import createMarkup from './pop_up_markup';
// ---------------------------------------------------------------------------->
const refs = {
  popUpOpen: document.querySelector('.pop_up'),
  btnClose: document.querySelector('.pop_up__body-close'),
  imgs: document.querySelector('.section-product'),
  btnToChangeStatusOfBook: document.querySelector('.pop_up__body-btn-status'),
  apiContent: document.querySelector('.pop_up__content'),
  congratulation: document.querySelector('.pop_up__congratulation'),
};
// ---------------------------------------------------------------------------->
const {
  popUpOpen,
  btnClose,
  imgs,
  btnToChangeStatusOfBook,
  apiContent,
  congratulation,
} = refs;
// ---------------------------------------------------------------------------->
imgs.addEventListener('click', openModal);
btnClose.addEventListener('click', onToClose);
btnToChangeStatusOfBook.addEventListener('click', onAddBook);
document.addEventListener('keydown', onEscapeClose);
// ---------------------------------------------------------------------------->
const OBJ_KEYS = [];
const NAME_LCS_KEY = 'An_array_of_ID_books';
// ---------------------------------------------------------------------------->
function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const id = e.target.dataset.id;
  popUpOpen.classList.add('hiden');
  document.body.classList.add('modal-open');

  createMarkup(id);
  OBJ_KEYS.push(id);
  onCheckStorge();
}
// ---------------------------------------------------------------------------->
function onEscapeClose(e) {
  if (e.key === 'Escape') onToClose();
}
// ---------------------------------------------------------------------------->
function onToClose() {
  popUpOpen.classList.remove('hiden');
  document.body.classList.remove('modal-open');
  popUpOpen.classList.add('pop_up-closing');
  clearModalBody();
}
// ---------------------------------------------------------------------------->
function clearModalBody() {
  apiContent.innerHTML = '';
  onCheckStorge();
}
// ---------------------------------------------------------------------------->
function onAddBook() {
  const id = OBJ_KEYS[OBJ_KEYS.length - 1];
  const storgeArray = JSON.parse(localStorage.getItem(NAME_LCS_KEY)) || [];

  if (storgeArray.includes(id)) {
    const filteredArray = storgeArray.filter(item => item !== id);
    localStorage.setItem(NAME_LCS_KEY, JSON.stringify(filteredArray));
  } else {
    storgeArray.push(id);
    localStorage.setItem(NAME_LCS_KEY, JSON.stringify(storgeArray));
  }
  onCheckStatusBtn();
  updateButtonState();
}
// ---------------------------------------------------------------------------->
function onCheckStorge() {
  const id = OBJ_KEYS[OBJ_KEYS.length - 1];
  const storgeArray = JSON.parse(localStorage.getItem(NAME_LCS_KEY)) || [];
  const isIdStorge = storgeArray.includes(id);

  btnToChangeStatusOfBook.textContent = isIdStorge
    ? 'remove from the shopping list'
    : 'add to shopping list';
}
// ---------------------------------------------------------------------------->
function updateButtonState() {
  onCheckStorge();
}
// ---------------------------------------------------------------------------->

function onCheckStatusBtn() {
  const id = OBJ_KEYS[OBJ_KEYS.length - 1];
  const storgeArray = JSON.parse(localStorage.getItem(NAME_LCS_KEY)) || [];
  const isIdStorge = storgeArray.includes(id);

  if (!isIdStorge) {
    congratulation.classList.add('congratulation');
  } else {
    congratulation.classList.remove('congratulation');
  }
}
