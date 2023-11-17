import { fetchIdBook } from './fetch-api';
import amazon from '../img/png/amazon.png';
import book from '../img/png/book.png';
import ico from './../img/symbol-defs.svg';
import booksIcon from './../img/png/books.png'

const card = document.querySelector('.books-card');
const noBook = document.querySelector('.book-massage');
const shopping = document.querySelector('.header-shopping');
const home = document.querySelector('.header-home');
let id = null;
let bookCard;

const savedBooks = JSON.parse(localStorage.getItem("An_array_of_ID_books"));
let caunter = savedBooks.length

home.classList.remove('active-button');
shopping.classList.add('active-button');

async function markup() { 
  if (savedBooks && savedBooks.length > 0) {
    for (const id of savedBooks) {
      try {
        const data = await fetchIdBook(id);
        console.log(data);

        const bookCard = `
          <div class="wrrap" data-book-id="${id}">
            <div class="img-container">
              <img class="book-img" src="${data.book_image}" alt="${data.title}">
            </div>
            <div class="text-container">
              <h3 class="book-name">${data.title}</h3>
              <p class="list-name">${data.list_name}</p>
              <div class="description-container">
                ${data.description}
              </div>
              
                <p class="author">${data.author}</p>
                <div class="link-wrap">
                <ul class="link-container">
                  <li class="amazon-item">
                    <a class="link-amazon" href="${data.amazon_product_url}">
                      <img class="link-amazon data-amazon-shopping" src="${amazon}" alt="" width="32" height="11">
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
                <button class="btn-svg">
                 ${createSvg(ico)}                 
                </button>
              </div>
            </div>
          </div>`;

        card.insertAdjacentHTML('beforeend', bookCard);
      } catch (error) {
        console.error(error);
      }
    }
  } if (!savedBooks.length) {
    const bookMassage = `
    <div class="book-masage">
      <p class="text-masage">This page is empty, add some books and proceed to order.</p>
        <img class="img-book-masage" src="${booksIcon}" alt="">
    </div>`;
   noBook.innerHTML = bookMassage;
  }
}

markup();

const btnSvgCollection = document.querySelectorAll('.btn-svg');

function createSvg(ico) {
  return `<svg class="icon-trash" width="16" height="16">
            <use href='${ico}#icon-trash'></use>
          </svg>`;
}

btnSvgCollection.forEach(btnSvg => {
  btnSvg.insertAdjacentHTML('afterbegin', createSvg(ico));
});
createSvg(ico);

card.addEventListener('click', async (e) => {
  caunter -= 1
  const btn = e.target.closest('.btn-svg');
  if (btn) {
    const cardToRemove = btn.closest('.wrrap');
    const idToRemove = cardToRemove.getAttribute('data-book-id');

    cardToRemove.remove();

    if (caunter === 0) {
      const bookMassage = `
      <div class="book-masage">
        <p class="text-masage">This page is empty, add some books and proceed to order.</p>
          <img class="img-book-masage" src="${booksIcon}" alt="">
      </div>`;
     noBook.innerHTML = bookMassage;
    }
    
    const updatedBookIds = JSON.parse(localStorage.getItem("An_array_of_ID_books")).filter(id => id !== idToRemove);
    localStorage.setItem("An_array_of_ID_books", JSON.stringify(updatedBookIds));
    
    
  }
});