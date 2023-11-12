import { categoryList } from './fetch-api';
import Notiflix from 'notiflix';

// ul in categories.html
const categoriesList = document.querySelector('.categories-list');

// Функція дозволяє відображати список категорій у списку All categories на веб-сайті, щоб користувачі могли обрати стиль книги, за якою вони бажають отримати інформацію.

async function markupCategories() {
  try {
    const data = await categoryList();
    const items = data
      .map(({ list_name }) => {
        return `<li class="categories-item">${list_name}</li>`;
      })
      .join('');

    //вставляю розмітку перед кінцем, бо зверху ще в самому html є All Categories
    categoriesList.insertAdjacentHTML('beforeend', items);
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "markupCategories"');
  }
}

markupCategories();
