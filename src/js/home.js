import {topBooks} from './fetch-api'


const product = document.querySelector('.section-product')


toDoMarkup(topBooks)


function toDoMarkup(arr) {

for (let i = 0; i < arr.length; i += 1) {
    const element = arr[i];
    console.log(element.books);

   const mp = arr.map((e)=>{
       return `
       <div class="thomb-book-section">
       <h2 class="sections-title">${e.list_name}</h2>
       <div class="section-book">
       
       ${makeCard(e)}

       
       </div>
       <button class="section-book-btn">see more</button>
       </div>
        `
    }).join(" ")
console.log(mp);
product.innerHTML = mp
}
  
}
function makeCard(cards) {

  const markup = cards.books.map(({ book_image, title, author }) => {
return `<div class="book-card">

    <img class="book-card-photo" src="${book_image}" alt="" loading="lazy">
    <h3 class="book-card-title" >${title}</h3>
    <h4>${author}</h4>
</div>`
    }).join(" ")

    return markup 
}