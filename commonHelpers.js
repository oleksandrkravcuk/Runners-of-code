import{t as T,c as C,f as E,a as B,b as D,d as L,i as v}from"./assets/burger-199eafc6.js";import{N as $}from"./assets/vendor-77e6b4aa.js";const M=document.querySelector(".section-product"),p=document.querySelector(".mask");b();async function b(){p.classList.remove("none");const t=await T();for(let e=0;e<t.length;e+=1){const o=t.map(n=>`<div class="thomb-book-section">
       <h2 class="sections-title">${n.list_name}</h2>
       <div class="section-book">
       
       ${u(n.books)}
       
       </div>
       <button class="section-book-btn" data-id="${n.list_name}">see more</button>
       </div>`).join(" ");p.classList.add("none"),M.innerHTML=`<h2 class="title">Best Sellers 
<span class="title__accent">Books</span>
</h2> ${o}`}}function u(t){return t.map(({book_image:o,title:n,author:a,_id:w})=>`<div class="book-card">
<a class="link" href="#">
    <div class="card__thumb">
    <img class="book-card-photo" data-id="${w}" src="${o}" alt="" loading="lazy">
    <p class="card-text">quick view</p>
    </div>

    <h3 class="book-card-title">${n}</h3>
    <h4>${a}</h4>
     
</a>
    
</div>`).join(" ")}const A=document.querySelector(".categories-list");async function q(){try{const e=(await C()).map(({list_name:n})=>`<li class="categories-item">${n}</li>`).join("");A.insertAdjacentHTML("beforeend",e);const o=document.querySelectorAll(".categories-item");o.forEach(n=>{n.addEventListener("click",I)}),o[0].classList.add("checked")}catch{$.Notify.failure('Щось пішло не так в "markupCategories"')}}function I(t){document.querySelectorAll(".categories-item").forEach(n=>{n.classList.remove("checked")}),t.currentTarget.classList.add("checked")}q();const H=300,k=document.getElementById("back-to-top-holder");function x(){if(document.documentElement.scrollTop>H){k.classList.add("page--back-to-top_visible");return}k.classList.remove("page--back-to-top_visible")}window.addEventListener("scroll",x);const N=document.getElementById("back-to-top-button");N.addEventListener("click",_);function _(){window.scrollTo({top:0,behavior:"smooth"})}const O=document.querySelector(".modal__content");async function j(t){try{const e=await E(t),o=`
      
      <div class="modal__data">
      <img class="modal__data-img" src="${e.book_image}" alt="${e.title}" width="192" hight="281">
      <div class="modal__data-text-all"><div class="modal__data-text-content"><h3 class="modal__data-title">${e.title}</h3>
        <p class="modal__data-author">${e.author}</p></div>
        <p class="modal__data-description">${e.description}</p>
        <ul class="modal__data-list-amazon">
          <li><a href="${e.amazon_product_url}"><img class="data-amazon" src="${B}" alt=""></a></li>
          <li><a href="${e.book_uri}"><img class="data-amazon-book" src="${D}" alt=""></a></li>
        </ul></div>
      
      </div>`;O.innerHTML=o}catch(e){console.error(e)}}const z={backDrop:document.querySelector(".modal"),btnClose:document.querySelector(".modal__body-close"),imgs:document.querySelector(".section-product"),btnToChangeStatusOfBook:document.querySelector(".modal__body-btn-status"),apiContent:document.querySelector(".modal__content"),congratulation:document.querySelector(".modal__congratulation")},{backDrop:i,btnClose:K,imgs:J,btnToChangeStatusOfBook:m,apiContent:V,congratulation:y}=z;J.addEventListener("click",G);K.addEventListener("click",g);m.addEventListener("click",W);document.addEventListener("keydown",R);i.addEventListener("click",Y);const c=[],r="An_array_of_ID_books";function G(t){if(t.preventDefault(),t.target.nodeName!=="IMG")return;const e=t.target.dataset.id;i.classList.add("hiden"),document.body.classList.add("modal-open"),i.classList.remove("closing"),j(e),c.push(e),h()}function R(t){t.key==="Escape"&&g()}function g(){i.classList.remove("hiden"),document.body.classList.remove("modal-open"),i.classList.add("closing"),U(),h()}function U(){V.innerHTML=""}function W(){const t=c[c.length-1],e=JSON.parse(localStorage.getItem(r))||[];if(e.includes(t)){const n=e.filter(a=>a!==t);localStorage.setItem(r,JSON.stringify(n))}else e.push(t),localStorage.setItem(r,JSON.stringify(e));h()}function h(){const t=c[c.length-1];(JSON.parse(localStorage.getItem(r))||[]).includes(t)?(m.textContent="remove from the shopping list",y.classList.remove("congratulation")):(m.textContent="add to shopping list",y.classList.add("congratulation"))}function Y(t){t.target===i&&g()}const l=document.querySelector(".title-thumb"),s=document.querySelector(".section-product"),F=document.querySelector(".categories"),d=document.querySelector(".mask");s.addEventListener("click",async t=>{if(t.target.tagName!=="BUTTON")return;d.classList.remove("none"),l.innerHTML="",console.dir(t.target.parentElement.firstElementChild.textContent);const e=t.target.parentElement.firstElementChild.textContent,o=await L(e);s.classList.add("js-choose-category"),d.classList.add("none"),s.innerHTML=u(o),S(e),_()});F.addEventListener("click",async t=>{if(t.target.tagName!=="LI")return;if(t.target.textContent==="All categories"){l.innerHTML="",s.innerHTML="",s.classList.remove("js-choose-category"),b();return}d.classList.remove("none"),l.innerHTML="";const e=t.target.textContent,o=await L(e);s.classList.add("js-choose-category"),d.classList.add("none"),s.innerHTML=u(o),S(e)});function S(t){const e=t,o=e.split(" "),n=o[o.length-1],a=document.createElement("h2");a.classList.add("title"),a.textContent=e,a.innerHTML=a.innerHTML.replace(n,'<span class="title__accent">'+n+"</span>"),a.classList.add("c-title"),console.log(a),l.prepend(a)}const P=[{id:"01",name:"Anna Radchenko",git:"https://github.com/AmmelyStar",liin:"https://www.linkedin.com/in/anna--radchenko/"},{id:"02",name:"Dima Sudenkov",git:"https://github.com/DimaSudenkov",liin:"https://ua.linkedin.com/in/dima-sudenkov"},{id:"03",name:"Denys Maksymchuk",git:"https://github.com/Denys90",liin:"https://www.linkedin.com/in/denys-maksymchuk-57273726a/"},{id:"04",name:"Olga Tenison",git:"https://github.com/olgatenison",liin:"https://www.linkedin.com/in/olga-tenison/"},{id:"05",name:"Oleksii Katsal",git:"https://github.com/alkatsalex",liin:"https://www.linkedin.com/in/oleksii-katsal-b58a51299/"},{id:"06",name:"Oleksandr Kravchuk",git:"https://github.com/oleksandrkravcuk",liin:"https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BA%D1%80%D0%B0%D0%B2%D1%87%D1%83%D0%BA-73654729a/",role:"teamlead"},{id:"07",name:"Kateryna Slatina",git:"https://github.com/KaterynaSlatina",liin:"https://www.linkedin.com/in/kateryna-slatina-28a9811a2/",role:"scram master"},{id:"08",name:"Valentyna Hotsa",git:"https://github.com/ValentinaHotsa",liin:"https://www.linkedin.com/in/valentyna-hotsa-56613829b/"},{id:"09",name:"Volodymyr Mikhnov",git:"https://github.com/Vova445",liin:"https://www.linkedin.com/in/volodymyr-mikhnov-474969274"}],f=document.querySelector(".team-list");function Q(t){if(!f){console.error('Element with class "team-list" not found.');return}const e=t.map(({name:o,git:n,liin:a})=>`<li class="team-item">
      <a href="${n}" rel="noopener noreferrer" class='team-item-link-git'>
       
      </a>
      <a href="${a}" rel="noopener noreferrer" class='team-item-link-liin'>
       
      </a>
      <a href="${n}" rel="noopener noreferrer" class="team-name">${o}</a>
    </li>`).join("");f.innerHTML+=e}Q(P);const X=document.querySelectorAll(".team-item-link-git"),Z=document.querySelectorAll(".team-item-link-liin");function tt(t){X.forEach(e=>{e.insertAdjacentHTML("afterbegin",`<svg class="git-ico" width="32" height="32">
        <use href='${t}#icon-github'></use>
      </svg>`)})}function et(t){Z.forEach(e=>{e.insertAdjacentHTML("afterbegin",`<svg class="in-ico" width="32" height="32">
        <use href="${t}#icon-linkedin"></use>
      </svg>`)})}tt(v);et(v);
//# sourceMappingURL=commonHelpers.js.map
