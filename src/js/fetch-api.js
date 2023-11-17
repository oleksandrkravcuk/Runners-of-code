import axios from 'axios';
import Notiflix from 'notiflix';

//<------------------------------------------------------------
// Цей запит повертає перелік категорій книг!
export async function categoryList() {
  const URL = 'https://books-backend.p.goit.global/books/category-list';

  try {
    const responce = await axios.get(`${URL}`);

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "categoryList"');
  }
}

//<------------------------------------------------------------
// Цей запит повертає топ 5 книг для кожної категорії!
export async function topBooks() {
  const URL = 'https://books-backend.p.goit.global/books/top-books';

  try {
    const responce = await axios.get(`${URL}`);

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "topBooks"');
  }
}

//<------------------------------------------------------------
// Цей запит повертає 20 книг з вибраної категорії!
export async function fetchCategory(category) {
  const URL = `https://books-backend.p.goit.global/books/category?category=${category}`;

  try {
    const responce = await axios.get(`${URL}`);

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchCategory"');
  }
}
//<------------------------------------------------------------
// Цей запит повертає інформацію що до книги по ID!
export async function fetchIdBook(id) {
  const URL = `https://books-backend.p.goit.global/books/${id}`;

  try {
    const responce = await axios.get(`${URL}`);

    return responce.data;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchIdBook"');
  }
}

//<------------------------------------------------------------
