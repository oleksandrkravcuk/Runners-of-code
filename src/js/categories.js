import { categoryList } from './fetch-api';
import Notiflix from 'notiflix';

// ul in categories.html
const categoriesList = document.querySelector('.categories-list');

// Функція дозволяє відображати список категорій у списку All categories на веб-сайті, щоб користувачі могли обрати стиль книги, за якою вони бажають отримати інформацію.

// Функція дозволяє відображати список категорій у списку All categories на веб-сайті, щоб користувачі могли обрати стиль книги, за якою вони бажають отримати інформацію.

async function markupCategories() {
  try {
    const data = await categoryList();
    const items = data
      .map(({ list_name }) => {
        return `<li class="categories-item">${list_name}</li>`;
      })
      .join('');

    // вставляю розмітку перед кінцем, бо зверху ще в самому html є All Categories
    categoriesList.insertAdjacentHTML('beforeend', items);

    // добавляем обработчик событий для каждой категории
    const categoryItems = document.querySelectorAll('.categories-item');
    categoryItems.forEach(item => {
      item.addEventListener('click', handleCategoryClick);
    });

    // Устанавливаем класс "checked" для "ALL CATEGORIES" при первой загрузке
    categoryItems[0].classList.add('checked');
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "markupCategories"');
  }
}

function handleCategoryClick(event) {
  // удаляем класс checked у всех категорий
  const categoryItems = document.querySelectorAll('.categories-item');
  categoryItems.forEach(item => {
    item.classList.remove('checked');
  });

  // добавляем класс checked выбранной категории
  const selectedCategory = event.currentTarget;
  selectedCategory.classList.add('checked');
}

markupCategories();
