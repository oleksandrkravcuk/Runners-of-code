import { fetchIdBook } from './fetch-api';
const popUpBody = document.querySelector('.pop_up__body');

async function createMarkup(id) {
  try {
    const data = await fetchIdBook(id);
    console.log('resp', data);
    const resData = `
      <div>
        <img src="${data.book_image}" alt="${data.title}">
      </div>
      <div>
        <h3>${data.title}</h3>
        <p>${data.list_name}</p>
        <p>${data.description}</p>
        <p>${data.author}</p>
        <ul>
          <li><a href="${data.amazon_product_url}"></a></li>
          <li><a href="${data.book_uri}"></a></li>
        </ul>
        <div>
          <button>svg</button>
        </div>
      </div>`;

    popUpBody.insertAdjacentHTML('beforeend', resData);
  } catch (error) {
    console.error(error);
  }
}

export default createMarkup;
