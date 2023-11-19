import{f as b,a as k,b as h,i as c}from"./assets/burger-9686c883.js";import"./assets/vendor-77e6b4aa.js";const i="/Runners-of-code/assets/books-102aefcf.png",r=document.querySelector(".books-card"),l=document.querySelector(".book-massage"),p=document.querySelector(".header-shopping"),u=document.querySelector(".header-home"),s=JSON.parse(localStorage.getItem("An_array_of_ID_books"));let n=s.length;u.classList.remove("active-button");p.classList.add("active-button");async function v(){if(s&&s.length>0)for(const a of s)try{const o=await b(a);console.log(o);const t=`
          <div class="wrrap" data-book-id="${a}">
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
                    <a class="link-amazon" href="${o.amazon_product_url}" target = "_blank">
                      <img class="link-amazon data-amazon-shopping" src="${k}" alt="" width="32" height="11">
                    </a>
                  </li>
                  <li class="book-item">
                    <a href="${o.buy_links[1].url}" target = "_blank">
                      <img class="link-book" src="${h}" alt="" width="16" height="16">
                    </a>
                  </li>
                </ul>
              </div>
              <div class="btn-container">
                <button class="btn-svg">
                 ${d(c)}                 
                </button>
              </div>
            </div>
          </div>`;r.insertAdjacentHTML("beforeend",t)}catch(o){console.error(o)}if(!s.length){const a=`
    <div class="book-masage">
      <p class="text-masage">This page is empty, add some books and proceed to order.</p>
        <img class="img-book-masage" src="${i}" alt="">
    </div>`;l.innerHTML=a}}v();const f=document.querySelectorAll(".btn-svg");function d(a){return`<svg class="icon-trash" width="16" height="16">
            <use href='${a}#icon-trash'></use>
          </svg>`}f.forEach(a=>{a.insertAdjacentHTML("afterbegin",d(c))});r.addEventListener("click",async a=>{n-=1;const o=a.target.closest(".btn-svg");if(o){const t=o.closest(".wrrap"),g=t.getAttribute("data-book-id");if(t.remove(),n===0){const e=`
      <div class="book-masage">
        <p class="text-masage">This page is empty, add some books and proceed to order.</p>
          <img class="img-book-masage" src="${i}" alt="">
      </div>`;l.innerHTML=e}const m=JSON.parse(localStorage.getItem("An_array_of_ID_books")).filter(e=>e!==g);localStorage.setItem("An_array_of_ID_books",JSON.stringify(m))}});
//# sourceMappingURL=commonHelpers2.js.map
