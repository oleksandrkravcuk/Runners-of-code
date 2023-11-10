import {topBooks} from './fetch-api'

const product = document.querySelector('.section-product')


toDoMarkup()


async function toDoMarkup() {
    const response = await topBooks()
console.log("resp", response);

for (let i = 0; i < response.length; i += 1) {

   const mp = response.map((e)=>{
       return `<div class="thomb-book-section">
       <h2 class="sections-title">${e.list_name}</h2>
       <div class="section-book">
       
       ${makeCard(e)}
       
       </div>
       <button class="section-book-btn">see more</button>
       </div>`
    }).join(" ")

product.innerHTML = mp
}
  
}
function makeCard(cards) {

  const markup = cards.books.map(({ book_image, title, author }) => {
return `<div class="book-card">
<a href="#">
    <img class="book-card-photo" src="${book_image}" alt="" loading="lazy">

    <h3 class="book-card-title" >${title}</h3>
    <h4>${author}</h4>
    
</a>
    
</div>`
    }).join(" ")

    return markup 
}