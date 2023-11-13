import {fetchCategory} from './fetch-api'
import { toDoMarkup } from './home'
import {makeCard} from './home'


const placeForTitle = document.querySelector('.title-thumb')
const topBookCategories = document.querySelector(".section-product")
const categoriesList = document.querySelector(".categories")





topBookCategories.addEventListener('click' ,async (e) => {

if(e.target.tagName !== "BUTTON"){
    return
}
placeForTitle.innerHTML = ""
console.dir(e.target.parentElement.firstElementChild.textContent);
const categoriesId = e.target.parentElement.firstElementChild.textContent

const response = await fetchCategory(categoriesId)
topBookCategories.classList.add('js-choose-category')

topBookCategories.innerHTML = makeCard(response);
}
)










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
})

















        // return console.log(textElement);

// for (let i = 0; i < words.length; i++) {
//     const wordElement = document.createElement("span");
//     wordElement.textContent = words[i];
//     if (words[i] === lastWord) {
//         wordElement.classList.add('title__accent'); 
//     }
//   plasefortitle.appendChild(wordElement);

//     if (i < words.length - 1) {
//         plasefortitle.appendChild(document.createTextNode(" "));
//     }
// }
}




