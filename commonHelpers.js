import{t as B,c as E,f as C,a as D,b as $,d as b,i as L}from"./assets/symbol-defs-f960c6ce.js";import{N as M}from"./assets/vendor-77e6b4aa.js";const q=document.querySelector(".section-product"),h=document.querySelector(".mask");v();async function v(){h.classList.remove("none");const e=await B();for(let t=0;t<e.length;t+=1){const o=e.map(n=>`<div class="thomb-book-section">
       <h2 class="sections-title">${n.list_name}</h2>
       <div class="section-book">
       
       ${u(n.books)}
       
       </div>
       <button class="section-book-btn" data-id="${n.list_name}">see more</button>
       </div>`).join(" ");h.classList.add("none"),q.innerHTML=`<h2 class="title">Best Sellers 
<span class="title__accent">Books</span>
</h2> ${o}`}}function u(e){return e.map(({book_image:o,title:n,author:a,_id:T})=>`<div class="book-card">
<a class="link" href="#">
    <div class="card__thumb">
    <img class="book-card-photo" data-id="${T}" src="${o}" alt="" loading="lazy">
    <p class="card-text">quick view</p>
    </div>

    <h3 class="book-card-title">${n}</h3>
    <h4>${a}</h4>
     
</a>
    
</div>`).join(" ")}const A=document.querySelector(".categories-list");async function H(){try{const t=(await E()).map(({list_name:o})=>`<li class="categories-item">${o}</li>`).join("");A.insertAdjacentHTML("beforeend",t)}catch{M.Notify.failure('Щось пішло не так в "markupCategories"')}}H();const I=300,k=document.getElementById("back-to-top-holder");function x(){if(document.documentElement.scrollTop>I){k.classList.add("page--back-to-top_visible");return}k.classList.remove("page--back-to-top_visible")}window.addEventListener("scroll",x);const O=document.getElementById("back-to-top-button");O.addEventListener("click",_);function _(){window.scrollTo({top:0,behavior:"smooth"})}const N=document.querySelector(".modal__content");async function j(e){try{const t=await C(e),o=`
      
      <div class="modal__data">
      <img class="modal__data-img" src="${t.book_image}" alt="${t.title}" width="192" hight="281">
      <div class="modal__data-text-all"><div class="modal__data-text-content"><h3 class="modal__data-title">${t.title}</h3>
        <p class="modal__data-author">${t.author}</p></div>
        <p class="modal__data-description">${t.description}</p>
        <ul class="modal__data-list-amazon">
          <li><a href="${t.amazon_product_url}"><img class="data-amazon" src="${D}" alt=""></a></li>
          <li><a href="${t.book_uri}"><img class="data-amazon-book" src="${$}" alt=""></a></li>
        </ul></div>
      
      </div>`;N.innerHTML=o}catch(t){console.error(t)}}const z={backDrop:document.querySelector(".modal"),btnClose:document.querySelector(".modal__body-close"),imgs:document.querySelector(".section-product"),btnToChangeStatusOfBook:document.querySelector(".modal__body-btn-status"),apiContent:document.querySelector(".modal__content"),congratulation:document.querySelector(".modal__congratulation")},{backDrop:i,btnClose:K,imgs:J,btnToChangeStatusOfBook:m,apiContent:V,congratulation:f}=z;J.addEventListener("click",G);K.addEventListener("click",g);m.addEventListener("click",W);document.addEventListener("keydown",R);i.addEventListener("click",Y);const c=[],r="An_array_of_ID_books";function G(e){if(e.preventDefault(),e.target.nodeName!=="IMG")return;const t=e.target.dataset.id;i.classList.add("hiden"),document.body.classList.add("modal-open"),i.classList.remove("closing"),j(t),c.push(t),p()}function R(e){e.key==="Escape"&&g()}function g(){i.classList.remove("hiden"),document.body.classList.remove("modal-open"),i.classList.add("closing"),U(),p()}function U(){V.innerHTML=""}function W(){const e=c[c.length-1],t=JSON.parse(localStorage.getItem(r))||[];if(t.includes(e)){const n=t.filter(a=>a!==e);localStorage.setItem(r,JSON.stringify(n))}else t.push(e),localStorage.setItem(r,JSON.stringify(t));p()}function p(){const e=c[c.length-1];(JSON.parse(localStorage.getItem(r))||[]).includes(e)?(m.textContent="remove from the shopping list",f.classList.remove("congratulation")):(m.textContent="add to shopping list",f.classList.add("congratulation"))}function Y(e){e.target===i&&g()}const l=document.querySelector(".title-thumb"),s=document.querySelector(".section-product"),F=document.querySelector(".categories"),d=document.querySelector(".mask");s.addEventListener("click",async e=>{if(e.target.tagName!=="BUTTON")return;d.classList.remove("none"),l.innerHTML="",console.dir(e.target.parentElement.firstElementChild.textContent);const t=e.target.parentElement.firstElementChild.textContent,o=await b(t);s.classList.add("js-choose-category"),d.classList.add("none"),s.innerHTML=u(o),S(t),_()});F.addEventListener("click",async e=>{if(e.target.tagName!=="LI")return;if(e.target.textContent==="All categories"){l.innerHTML="",s.innerHTML="",s.classList.remove("js-choose-category"),v();return}d.classList.remove("none"),l.innerHTML="";const t=e.target.textContent,o=await b(t);s.classList.add("js-choose-category"),d.classList.add("none"),s.innerHTML=u(o),S(t)});function S(e){const t=e,o=t.split(" "),n=o[o.length-1],a=document.createElement("h2");a.classList.add("title"),a.textContent=t,a.innerHTML=a.innerHTML.replace(n,'<span class="title__accent">'+n+"</span>"),a.classList.add("c-title"),console.log(a),l.prepend(a)}const P=[{id:"01",name:"Anna Radchenko",git:"https://github.com/AmmelyStar",liin:"https://www.linkedin.com/in/anna--radchenko/"},{id:"02",name:"Dima Sudenkov",git:"https://github.com/DimaSudenkov",liin:"https://ua.linkedin.com/in/dima-sudenkov"},{id:"03",name:"Denys Maksymchuk",git:"https://github.com/Denys90",liin:"https://www.linkedin.com/in/denys-maksymchuk-57273726a/"},{id:"04",name:"Olga Tenison",git:"https://github.com/olgatenison",liin:"https://www.linkedin.com/in/olga-tenison/"},{id:"05",name:"Oleksii Katsal",git:"https://github.com/alkatsalex",liin:"https://www.linkedin.com/in/oleksii-katsal-b58a51299/"},{id:"06",name:"Oleksandr Kravchuk",git:"https://github.com/oleksandrkravcuk",liin:"https://www.linkedin.com/in/%D0%BE%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80-%D0%BA%D1%80%D0%B0%D0%B2%D1%87%D1%83%D0%BA-73654729a/",role:"teamlead"},{id:"07",name:"Kateryna Slatina",git:"https://github.com/KaterynaSlatina",liin:"https://www.linkedin.com/in/kateryna-slatina-28a9811a2/",role:"scram master"},{id:"08",name:"Valentyna Hotsa",git:"https://github.com/ValentinaHotsa",liin:"https://www.linkedin.com/in/valentyna-hotsa-56613829b/"},{id:"09",name:"Volodymyr Mikhnov",git:"https://github.com/Vova445",liin:"https://www.linkedin.com/in/volodymyr-mikhnov-474969274"}],y=document.querySelector(".team-list");function Q(e){if(!y){console.error('Element with class "team-list" not found.');return}const t=e.map(({name:o,git:n,liin:a})=>`<li class="team-item">
      <a href="${n}" rel="noopener noreferrer" class='team-item-link-git'>
       
      </a>
      <a href="${a}" rel="noopener noreferrer" class='team-item-link-liin'>
       
      </a>
      <a href="${n}" rel="noopener noreferrer" class="team-name">${o}</a>
    </li>`).join("");y.innerHTML+=t}Q(P);const X=document.querySelectorAll(".team-item-link-git"),Z=document.querySelectorAll(".team-item-link-liin");function tt(e){X.forEach(t=>{t.insertAdjacentHTML("afterbegin",`<svg class="git-ico" width="32" height="32">
        <use href='${e}#icon-github'></use>
      </svg>`)})}function et(e){Z.forEach(t=>{t.insertAdjacentHTML("afterbegin",`<svg class="in-ico" width="32" height="32">
        <use href="${e}#icon-linkedin"></use>
      </svg>`)})}tt(L);et(L);const ot={burger:document.querySelector(".burger"),menu:document.querySelector(".menu-container")},{burger:w,menu:nt}=ot;w.addEventListener("click",at);function at(){w.classList.toggle("open"),nt.classList.toggle("open")}
//# sourceMappingURL=commonHelpers.js.map