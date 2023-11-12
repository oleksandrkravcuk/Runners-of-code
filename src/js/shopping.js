import { fetchIdBook } from './fetch-api'
// import Notiflix from 'notiflix';

const card = document.querySelector('.books-card');
const btnDelete = document.querySelector('.btn');
let id = null;
let bookCard;

async function markup() {
    id = '643282b1e85766588626a0b2';
  try {
    const data = await fetchIdBook(id);
    console.log(data);

       bookCard = `
     <div class = "wrrap">
        <div class = "img-container">
            <img class = "book-img" src="${data.book_image}" alt="${data.title}">
        </div>
        <div class = "text-container">
            <h3 class = "book-name">${data.title}</h3>
            <p class = "list-name">${data.list_name}</p>
            <div class = "description-container">
              ${data.description}
            </div>
            <div class = "link-wrap">
                <p class = "author"> ${data.author}</p>
                <ul class = "link-container">
                <li class = "amazon-item"><a href="${data.amazon_product_url}">
                <img class = "link-amazon" src="./img/png/amazon.png" alt="" width="32" height="11">
                </a></li>
                <li class = "book-item"><a href="${data.buy_links}}">
                <img class = "link-book" src="./img/png/book.png" alt="" width="16" height="16">
                </a></li>
                </ul>
            </div>
            
        </div>
      </div>`;

    card.insertAdjacentHTML('beforeend', bookCard);

  } catch (error) {
    console.error(error);
  }
}

markup();



btnDelete.addEventListener('click', deleteBook);
 
function deleteBook(event) {  
  const deleteCard = event.target;
  console.log(deleteCard);
  if (deleteCard) {
     card.remove();
  }
}