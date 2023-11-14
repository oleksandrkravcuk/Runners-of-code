import { fetchIdBook } from './fetch-api'
import Notiflix from 'notiflix';
// import amazon from './../img/png/amazon.png';
// import book from './../img/png/book.png';
// import book_shadow from './../img/png/book_shadow.png';
// import amazon_shadow from './../img/png/amazon_shadow.png';

import amazon from '../img/png/amazon.png';
import book from '../img/png/book.png';

const card = document.querySelector('.books-card');
// const btnDelete = document.querySelector('.btn');
let id = null;
let bookCard;



async function markup() {
  const savedBooks = JSON.parse(localStorage.getItem("An_array_of_ID_books"));

  if (savedBooks && savedBooks.length > 0) {
    for (const id of savedBooks) {
      try {
        const data = await fetchIdBook(id);
        console.log(data);

        const bookCard = `
          <div class="wrrap">
            <div class="img-container">
              <img class="book-img" src="${data.book_image}" alt="${data.title}">
            </div>
            <div class="text-container">
              <h3 class="book-name">${data.title}</h3>
              <p class="list-name">${data.list_name}</p>
              <div class="description-container">
                ${data.description}
              </div>
              <div class="link-wrap">
                <p class="author">${data.author}</p>
                <ul class="link-container">
                  <li class="amazon-item">
                    <a class="link-amazon data-amazon" href="${data.amazon_product_url}">
                      <img class="link-amazon" src="${amazon}" alt="" width="32" height="11">
                    </a>
                  </li>
                  <li class="book-item">
                    <a href="${data.buy_links[1].url}">
                      <img class="link-book" src="${book}" alt="" width="16" height="16">
                    </a>
                  </li>
                </ul>
              </div>
              <div class="btn-container">
                <button class="btn">
                  <svg class="icon-trash" width="16" height="16">
                    <use href="./img/symbol-defs.svg#icon-trash"></use>
                  </svg>
                </button>
              </div>
            </div>
          </div>`;

        card.insertAdjacentHTML('beforeend', bookCard);
      } catch (error) {
        console.error(error);
      }
    }
  } else {
    Notiflix.Notify.failure("This page is empty, add some books and proceed to order.");
  }
}

markup();

card.addEventListener('click', async (e) => {
  const btn = e.target.closest('.btn');
  if (btn) {
    const cardToRemove = btn.closest('.wrrap');
    const idToRemove = cardToRemove.getAttribute('data-book-id');
    
  
    cardToRemove.remove();
    
    
    
    const updatedBookIds = JSON.parse(localStorage.getItem("An_array_of_ID_books")).filter(id => id !== idToRemove);
     localStorage.setItem("An_array_of_ID_books", JSON.stringify(updatedBookIds));
    
  }
});