import {fetchCategory} from './fetch-api'
import { toDoMarkup } from './home'
import {makeCard} from './home'


const placeForTitle = document.querySelector('.title-thumb')
const topBookCategories = document.querySelector(".section-product")
const categoriesList = document.querySelector(".categories")



// //////////////////////////////

topBookCategories.addEventListener('click' ,async (e) => {

if(e.target.tagName !== "BUTTON"){
    return
}
placeForTitle.innerHTML = ""

console.dir(e.target.parentElement.firstElementChild.textContent);
const categoriesId = e.target.parentElement.firstElementChild.textContent
// title(categoriesId)
const response = await fetchCategory(categoriesId)
topBookCategories.classList.add('js-choose-category')

topBookCategories.innerHTML = makeCard(response);
title(categoriesId)
}
)

// //////////////////////////////////

categoriesList.addEventListener('click', async (e)=>{
    if(e.target.tagName !== "LI"){
        return
    } else if (e.target.textContent === "All categories") {
        placeForTitle.innerHTML = ""
        topBookCategories.innerHTML = ""
        topBookCategories.classList.remove('js-choose-category')
        toDoMarkup()
        return
    }

    placeForTitle.innerHTML = ""
    
const categoriesId = e.target.textContent
const response = await fetchCategory(categoriesId)
topBookCategories.classList.add('js-choose-category')

topBookCategories.innerHTML = makeCard(response);
title(categoriesId)
})


function title(e) {
    
    const name = e;
    
    const words = name.split(" ");
    
    const lastWord = words[words.length - 1];
    
    const textElement = document.createElement("h2");
    textElement.classList.add('title')
    // const sectionTitle = name
    textElement.textContent = name;
  
    textElement.innerHTML = textElement.innerHTML.replace(lastWord, '<span class="title__accent">' + lastWord + '</span>');
    textElement.classList.add('c-title')
        console.log(textElement);
        placeForTitle.prepend(textElement);
            // topBookCategories.insertAdjacentHTML("afterbegin", textElement);
}