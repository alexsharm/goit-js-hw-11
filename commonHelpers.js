import{S as l,i as d}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const c=document.querySelector(".search-form");document.querySelector(".search-btn");const u=document.querySelector(".search-input"),i=document.querySelector(".gallery"),f=new l(".gallery a",{captionsData:"alt"});c.addEventListener("submit",h);function h(a){a.preventDefault(),i.innerHTML="",i.insertAdjacentHTML("beforebegin",'<span class="loader"></span>');const o=new URLSearchParams({key:"41849912-0888eabd10c40a0c420151dd5",q:`${u.value}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(c.reset(),document.querySelector(".loader").remove(),r.hits.length===0)d.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight"});else{const s=r.hits.map(e=>`
        <li class="gallery-item">
         <a href="${e.largeImageURL}">
             <img class='gallery-image' src="${e.webformatURL}" alt="${e.tags}">
         </a>
        <div class="info-cont">
          <div class="info-item">
            <h4><b>Likes</b></h4>
            <p>${e.likes}</p>
          </div>
          <div class="info-item">
            <h4><b>Views</b></h4>
            <p>${e.views}</p>
          </div>
          <div class="info-item">
            <h4><b>Comments</b></h4>
            <p>${e.comments}</p>
          </div>
          <div class="info-item">
            <h4><b>Downloads</b></h4>
            <p>${e.downloads}</p>
          </div>
        </div>
        </li>
              `).join("");i.insertAdjacentHTML("afterbegin",s),f.refresh()}}).catch(r=>{alert("An error occured")})}
//# sourceMappingURL=commonHelpers.js.map
