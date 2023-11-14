import { fetchIdBook } from './fetch-api';
const popUpContent = document.querySelector('.pop_up__content');
import amazon from '../img/png/amazon.png';
import book from '../img/png/book.png';

async function createMarkup(id) {
  try {
    const data = await fetchIdBook(id);
    console.log('resp', data);
    const resData = `
      
      <div class="pop_up__data">
      <img class="pop_up__data-img" src="${data.book_image}" alt="${data.title}" width="192" hight="281">
      <div class="pop_up__data-text-all"><div class="pop_up__data-text-content"><h3 class="pop_up__data-title">${data.title}</h3>
        <p class="pop_up__data-author">${data.author}</p></div>
        <p class="pop_up__data-description">${data.description}</p>
        <ul class="pop_up__data-list-amazon">
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
