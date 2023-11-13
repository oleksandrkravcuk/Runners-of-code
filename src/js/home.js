import {topBooks} from './fetch-api'

const product = document.querySelector('.section-product')

toDoMarkup()

export async function toDoMarkup() {
    const response = await topBooks()


for (let i = 0; i < response.length; i += 1) {

   const mp = response.map((e)=>{
       return `<div class="thomb-book-section">
       <h2 class="sections-title">${e.list_name}</h2>
       <div class="section-book">
       
       ${makeCard(e.books)}
       
       </div>
       <button class="section-book-btn" data-id="${e.list_name}">see more</button>
       </div>`
    }).join(" ")

product.innerHTML =  `<h2 class="title">Best Sellers 
<span class="title__accent">Books</span>
</h2> ${mp}`
}
  
}
export function makeCard(cards) {

 const markup = cards.map(({ book_image, title, author, _id }) => {
return `<div class="book-card">
<a class="link" href="#">
    <div class="card__thumb">
    <img class="book-card-photo" data-id="${_id}" src="${book_image}" alt="" loading="lazy">
    <p class="card-text">quick view</p>
    </div>

    <h3 class="book-card-title">${title}</h3>
    <h4>${author}</h4>
     
</a>
    
</div>`
    }).join(" ")

    return markup 
}