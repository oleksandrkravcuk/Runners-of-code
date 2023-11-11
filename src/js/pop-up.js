import createMarkup from './pop-up-markup';
// ==========================================================>
const refs = {
  pop_up: document.querySelector('.pop_up'),
  btnClose: document.querySelector('.pop_up__close'),
  imgs: document.querySelector('.section-product'),
  dataId: document.querySelector('.book-card-photo'),
};
// ==========================================================>
refs.imgs.addEventListener('click', openModal);
refs.btnClose.addEventListener('click', onToClose);
// ==========================================================>
document.addEventListener('DOMContentLoaded', function () {
  // ваш код тут
});
function openModal(e) {
  if (e.target.nodeName !== 'IMG') {
    return;
  } else {
    let id = e.target.dataset.id;
    refs.pop_up.classList.remove('hiden');
    console.log(id);
    createMarkup(id);
  }
}
function onToClose() {
  refs.pop_up.classList.add('hiden');
}
// ==========================================================>
