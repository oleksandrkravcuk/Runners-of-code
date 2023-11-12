import {fetchCategory} from './fetch-api'
import { toDoMarkup } from './home'
import {makeCard} from './home'



const topBookCategories = document.querySelector(".section-product")
const categoriesList = document.querySelector(".categories")



topBookCategories.addEventListener('click' ,async (e) => {

if(e.target.tagName !== "BUTTON"){
    return
}
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
        topBookCategories.innerHTML = ""
        topBookCategories.classList.remove('js-choose-category')
        toDoMarkup()
        return
    }


const categoriesId = e.target.textContent
const response = await fetchCategory(categoriesId)
topBookCategories.classList.add('js-choose-category')

topBookCategories.innerHTML = makeCard(response);
})
