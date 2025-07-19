/* empty css                      */import{i as l,a as $,S as I}from"./assets/vendor-D8_O3--j.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&t(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function t(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const q="48286639-c5b13cd121e9f124dcf0b461d",B="https://pixabay.com/api/";let m,c=1,d="",f=0;const u=40,h=document.querySelector(".gallery"),y=document.querySelector(".searchForm"),L=document.getElementById("loaderOverlay"),w=document.getElementById("loader"),O=document.querySelector(".load-btn-container"),i=document.createElement("button");i.textContent="Load more";i.classList.add("load-btn");O.appendChild(i);function b(){L.classList.add("active"),w.classList.remove("loader-hidden")}function p(){L.classList.remove("active"),w.classList.add("loader-hidden")}function g(){i.style.display="none"}function R(){i.style.display="block"}function x(){const o=document.querySelector(".gallery-item");if(!o)return;const n=o.getBoundingClientRect().height;window.scrollBy({top:n*2,behavior:"smooth"})}async function v(o,n){const a=new URLSearchParams({key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:u,page:n});try{return(await $.get(`${B}?${a}`)).data}catch(t){throw new Error(t.message)}}function S(o){const n=o.map(({webformatURL:a,largeImageURL:t,tags:e,likes:r,views:s,comments:E,downloads:P})=>`<li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${a}"
          alt="${e}"
          title="${e}"
        />
        <ul class="img-information">
          <li>
            <span class="img-information-title">Likes</span>
            <span class="img-information-content">${r}</span>
          </li>
          <li>
            <span class="img-information-title">View</span>
            <span class="img-information-content">${s}</span>
          </li>
          <li>
            <span class="img-information-title">Comments</span>
            <span class="img-information-content">${E}</span>
          </li>
          <li>
            <span class="img-information-title">Downloads</span>
            <span class="img-information-content">${P}</span>
          </li>
        </ul>
      </a>
    </li>`).join("");h.insertAdjacentHTML("beforeend",n),m?m.refresh():m=new I(".gallery a",{captions:!0,captionSelector:"img",captionType:"attr",captionsData:"title",captionPosition:"bottom",captionDelay:250,closeText:"×",navText:["&larr;","&rarr;"],overlayOpacity:.9,spinner:!0,alertError:!1})}async function C(o){o.preventDefault(),b(),g();const a=document.querySelector(".search-input").value.trim();if(!a){p(),l.warning({message:"Please enter a search term",position:"topRight"});return}h.innerHTML="",d=a,c=1;try{const t=await v(d,c);if(f=t.totalHits,t.hits.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}S(t.hits),t.totalHits>u&&R()}catch(t){l.error({title:"Error",message:`Something went wrong: ${t.message}`,position:"topRight"})}finally{p(),y.reset()}}async function T(){b(),c++;try{const o=await v(d,c);S(o.hits),c*u>=f&&(g(),l.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})),x()}catch(o){l.error({title:"Error",message:`Something went wrong: ${o.message}`,position:"topRight"})}finally{p()}}y.addEventListener("submit",C);i.addEventListener("click",T);g();
//# sourceMappingURL=index.js.map
