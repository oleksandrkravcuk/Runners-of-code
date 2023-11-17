import {fetchCategory} from './fetch-api'
import { toDoMarkup } from './home'
import {makeCard} from './home'
import {handleButtonBackToTopClick} from './scrollUp'


const placeForTitle = document.querySelector('.title-thumb')
const topBookCategories = document.querySelector(".section-product")
const categoriesList = document.querySelector(".categories")
const mask = document.querySelector('.mask')



// //////////////////////////////

topBookCategories.addEventListener('click' ,async (e) => {

if(e.target.tagName !== "BUTTON"){
    return
}
mask.classList.remove('none')
placeForTitle.innerHTML = ""

console.dir(e.target.parentElement.firstElementChild.textContent);
const categoriesId = e.target.parentElement.firstElementChild.textContent

const response = await fetchCategory(categoriesId)
topBookCategories.classList.add('js-choose-category')
mask.classList.add('none')
topBookCategories.innerHTML = makeCard(response);
title(categoriesId)
handleButtonBackToTopClick()
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
    mask.classList.remove('none')
    placeForTitle.innerHTML = ""
    
const categoriesId = e.target.textContent
const response = await fetchCategory(categoriesId)
topBookCategories.classList.add('js-choose-category')
mask.classList.add('none')
topBookCategories.innerHTML = makeCard(response);
title(categoriesId)
})


function title(e) {
    
    const name = e;
    
    const words = name.split(" ");
    
    const lastWord = words[words.length - 1];
    
    const textElement = document.createElement("h2");
    textElement.classList.add('title')

    textElement.textContent = name;
  
    textElement.innerHTML = textElement.innerHTML.replace(lastWord, '<span class="title__accent">' + lastWord + '</span>');
    textElement.classList.add('c-title')
        console.log(textElement);
        placeForTitle.prepend(textElement);

}