import { fetchIdBook } from './fetch-api';
const popUpContent = document.querySelector('.modal__content');
import amazon from '../img/png/amazon.png';
import book from '../img/png/book.png';

async function createMarkup(id) {
  try {
    const data = await fetchIdBook(id);

    const resData = `
      
      <div class="modal__data">
      <img class="modal__data-img" src="${data.book_image}" alt="${data.title}" width="192" hight="281">
      <div class="modal__data-text-all"><div class="modal__data-text-content"><h3 class="modal__data-title">${data.title}</h3>
        <p class="modal__data-author">${data.author}</p></div>
        <p class="modal__data-description">${data.description}</p>
        <ul class="modal__data-list-amazon">
          <li><a href="${data.amazon_product_url}"><img class="data-amazon" src="${amazon}" alt=""></a></li>
          <li><a href="${data.book_uri}"><img class="data-amazon-book" src="${book}" alt=""></a></li>
        </ul></div>
      
      </div>`;

    popUpContent.innerHTML = resData;
  } catch (error) {
    console.error(error);
  }
}

export default createMarkup;
