import createMarkup from './modal_markup';
// ---------------------------------------------------------------------------->
const refs = {
  backDrop: document.querySelector('.modal'),
  btnClose: document.querySelector('.modal__body-close'),
  imgs: document.querySelector('.section-product'),
  btnToChangeStatusOfBook: document.querySelector('.modal__body-btn-status'),
  apiContent: document.querySelector('.modal__content'),
  congratulation: document.querySelector('.modal__congratulation'),
};
// ---------------------------------------------------------------------------->
const {
  backDrop,
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
backDrop.addEventListener('click', onClickBackdrop);
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
  backDrop.classList.add('hiden');
  document.body.classList.add('modal-open');
  backDrop.classList.remove('closing');

  createMarkup(id);
  OBJ_KEYS.push(id);
  onCheckStatusBtn();
}
// ---------------------------------------------------------------------------->
function onEscapeClose(e) {
  if (e.key === 'Escape') onToClose();
}
// ---------------------------------------------------------------------------->
function onToClose() {
  backDrop.classList.remove('hiden');
  document.body.classList.remove('modal-open');
  backDrop.classList.add('closing');
  clearModalBody();
  onCheckStatusBtn();
}
// ---------------------------------------------------------------------------->
function clearModalBody() {
  apiContent.innerHTML = '';
}
// ---------------------------------------------------------------------------->
function onAddBook() {
  const id = OBJ_KEYS[OBJ_KEYS.length - 1];
  const storgeArray = JSON.parse(localStorage.getItem(NAME_LCS_KEY)) || [];
  const isIdStorge = storgeArray.includes(id);

  if (isIdStorge) {
    const filteredArray = storgeArray.filter(item => item !== id);
    localStorage.setItem(NAME_LCS_KEY, JSON.stringify(filteredArray));
  } else {
    storgeArray.push(id);
    localStorage.setItem(NAME_LCS_KEY, JSON.stringify(storgeArray));
  }

  onCheckStatusBtn();
}
// ---------------------------------------------------------------------------->
function onCheckStatusBtn() {
  const id = OBJ_KEYS[OBJ_KEYS.length - 1];
  const storgeArray = JSON.parse(localStorage.getItem(NAME_LCS_KEY)) || [];
  const isIdStorge = storgeArray.includes(id);

  if (isIdStorge) {
    btnToChangeStatusOfBook.textContent = 'remove from the shopping list';
    congratulation.classList.remove('congratulation');
  } else {
    btnToChangeStatusOfBook.textContent = 'add to shopping list';
    congratulation.classList.add('congratulation');
  }
}
// ---------------------------------------------------------------------------->
function onClickBackdrop(e) {
  if (e.target === backDrop) {
    onToClose();
  }
}
