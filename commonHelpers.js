import{S as u,i}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const d=document.querySelector(".search-form"),l=document.querySelector(".search-btn"),f=document.querySelector(".search-input"),a=document.querySelector(".gallery"),h=new u(".gallery a",{captionsData:"alt"});d.addEventListener("submit",m);function m(c){c.preventDefault(),a.innerHTML="",a.insertAdjacentHTML("beforebegin",'<span class="loader"></span>');const o=new URLSearchParams({key:"41849912-0888eabd10c40a0c420151dd5",q:`${f.value}`,image_type:"photo",orientation:"horizontal",safesearch:"true"});fetch(`https://pixabay.com/api/?${o}`).then(r=>{if(!r.ok)throw new Error(r.status);return r.json()}).then(r=>{if(d.reset(),document.querySelector(".loader").remove(),r.hits.length===0)i.error({message:"Sorry, there are no images matching <br> your search query. Please try again!",position:"topRight",class:"error-alert",onOpened:function(){l.addEventListener("click",()=>{i.destroy()})},onClosed:function(){l.removeEventListener("click",()=>{i.destroy()})}});else{const n=r.hits.map(e=>`
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
              `).join("");a.insertAdjacentHTML("afterbegin",n),h.refresh()}}).catch(r=>{alert("An error occured"),console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
