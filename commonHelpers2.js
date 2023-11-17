import{f as b,a as k,b as h,i as n}from"./assets/symbol-defs-90362836.js";import"./assets/vendor-77e6b4aa.js";const i="/Runners-of-code/assets/books-102aefcf.png",r=document.querySelector(".books-card"),l=document.querySelector(".book-massage"),p=document.querySelector(".header-shopping"),u=document.querySelector(".header-home"),a=JSON.parse(localStorage.getItem("An_array_of_ID_books"));let c=a.length;u.classList.remove("active-button");p.classList.add("active-button");async function v(){if(a&&a.length>0)for(const s of a)try{const o=await b(s);console.log(o);const e=`
          <div class="wrrap" data-book-id="${s}">
            <div class="img-container">
              <img class="book-img" src="${o.book_image}" alt="${o.title}">
            </div>
            <div class="text-container">
              <h3 class="book-name">${o.title}</h3>
              <p class="list-name">${o.list_name}</p>
              <div class="description-container">
                ${o.description}
              </div>
              
                <p class="author">${o.author}</p>
                <div class="link-wrap">
                <ul class="link-container">
                  <li class="amazon-item">
                    <a class="link-amazon" href="${o.amazon_product_url}">
                      <img class="link-amazon data-amazon-shopping" src="${k}" alt="" width="32" height="11">
                    </a>
                  </li>
                  <li class="book-item">
                    <a href="${o.buy_links[1].url}">
                      <img class="link-book" src="${h}" alt="" width="16" height="16">
                    </a>
                  </li>
                </ul>
              </div>
              <div class="btn-container">
                <button class="btn-svg">
                 ${d(n)}                 
                </button>
              </div>
            </div>
          </div>`;r.insertAdjacentHTML("beforeend",e)}catch(o){console.error(o)}if(!a.length){const s=`
    <div class="book-masage">
      <p class="text-masage">This page is empty, add some books and proceed to order.</p>
        <img class="img-book-masage" src="${i}" alt="">
    </div>`;l.innerHTML=s}}v();const f=document.querySelectorAll(".btn-svg");function d(s){return`<svg class="icon-trash" width="16" height="16">
            <use href='${s}#icon-trash'></use>
          </svg>`}f.forEach(s=>{s.insertAdjacentHTML("afterbegin",d(n))});r.addEventListener("click",async s=>{c-=1;const o=s.target.closest(".btn-svg");if(o){const e=o.closest(".wrrap"),m=e.getAttribute("data-book-id");if(e.remove(),c===0){const t=`
      <div class="book-masage">
        <p class="text-masage">This page is empty, add some books and proceed to order.</p>
          <img class="img-book-masage" src="${i}" alt="">
      </div>`;l.innerHTML=t}const g=JSON.parse(localStorage.getItem("An_array_of_ID_books")).filter(t=>t!==m);localStorage.setItem("An_array_of_ID_books",JSON.stringify(g))}});
//# sourceMappingURL=commonHelpers2.js.map
