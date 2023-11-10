import { categoryList } from './fetch-api';
console.log(4);
async function markupCategories() {
  const data = await categoryList().then(data =>
    console.log('categoryListOlya:', data)
  );
  try {
    // const bookCard = `
    // // <div class = "img-container">
    // //   <img class = "book-img" src="${data.book_image}" alt="${data.title}">
    // // </div>
    // // <div class = "text-container">
    // //   <h3 class = "book-name">${data.title}</h3>
    // //   <p>${data.list_name}</p>
    // //   <p>${data.description}</p>
    // //   <p>${data.author}</p>
    // //   <ul class = "link-container">
    // //     <li><a href="${data.amazon_product_url}"></a></li>
    // //     <li><a href="${data.book_uri}"></a></li>
    // //   </ul>
    // //   <div>
    // //     <button>svg</button>
    // //   </div>
    // // </div>`;
    // card.insertAdjacentHTML('beforeend', bookCard);
  } catch (error) {
    console.error(error);
  }
}

markup();
