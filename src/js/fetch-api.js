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
// Код що нижче, не використовуємо, це просто перевірка запиту!
categoryList().then(data => console.log('categoryList:', data));
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
// Код що нижче, не використовуємо, це просто перевірка запиту!
topBooks().then(data => console.log('topBooks:', data));
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
// // Код що нижче, не використовуємо, це просто перевірка запиту!
let category = null;
async function fetchCategoryTest() {
  category = 'Advice%20How-To%20and%20Miscellaneous';
  try {
    const responce = await fetchCategory(category);
    console.log('fetchCategory', responce);
    return responce;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchCategoryTest"');
  }
}
fetchCategoryTest();
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
// Код що нижче, не використовуємо, це просто перевірка запиту!
let id = null;
async function fetchIdBookTest1() {
  id = '643282b1e85766588626a0b2';
  try {
    const resBookId = await fetchIdBook(id);
    console.log('fetchIdBook', resBookId);
    return resBookId;
  } catch (error) {
    Notiflix.Notify.failure('Щось пішло не так в "fetchIdBookTest1"');
  }
}
fetchIdBookTest1();
//<------------------------------------------------------------
