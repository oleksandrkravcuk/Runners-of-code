import createMarkup from './pop_up_markup';
// ---------------------------------------------------------------------------->
const refs = {
  popUpOpen: document.querySelector('.pop_up'),
  btnClose: document.querySelector('.pop_up__body-close'),
  imgs: document.querySelector('.section-product'),
  // popUpBody: document.querySelector('.pop_up__body'),
  textBtn: document.querySelector('.pop_up__body-btn-text'),
  btnToChangeStatusOfBook: document.querySelector('.pop_up__body-btn-status'),
  popUpDate: document.querySelector('.pop_up__content'),
};
// ---------------------------------------------------------------------------->
refs.imgs.addEventListener('click', openModal);
refs.btnClose.addEventListener('click', onToClose);
refs.btnToChangeStatusOfBook.addEventListener('click', onAddBook);
window.addEventListener('keydown', onEscapeClose);

// ---------------------------------------------------------------------------->
const OBJ_KEYS = [];
const NAME_LCS_KEY = 'An_array_of_ID_books';
// ---------------------------------------------------------------------------->
function openModal(e) {
  e.preventDefault();
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    let id = e.target.dataset.id;
    refs.popUpOpen.classList.add('hiden');
    console.log('Denys', id);
    createMarkup(id);
    OBJ_KEYS.push(id);
    onCheckStorge();
  }
}
// ---------------------------------------------------------------------------->
function onEscapeClose(e) {
  onToClose();
}
// ---------------------------------------------------------------------------->
function onToClose() {
  refs.popUpOpen.classList.remove('hiden');
  clearModalBody();
}
// ---------------------------------------------------------------------------->
function clearModalBody() {
  refs.popUpDate.innerHTML = '';
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

  updateButtonState();
}
// ---------------------------------------------------------------------------->
function onCheckStorge() {
  const id = OBJ_KEYS[OBJ_KEYS.length - 1];
  const storgeArray = JSON.parse(localStorage.getItem(NAME_LCS_KEY)) || [];
  const isIdStorge = storgeArray.includes(id);

  if (isIdStorge) {
    refs.textBtn.textContent = 'remove from the shopping list';
  } else {
    refs.textBtn.textContent = 'add to shopping list';
  }
}
// ---------------------------------------------------------------------------->
function updateButtonState() {
  onCheckStorge();
}

onCheckStorge();
updateButtonState();
