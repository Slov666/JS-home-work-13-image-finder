import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import 'imagesloaded/imagesloaded'
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css'
import as from './observer'
import './styles.css';
import service from './serviceAPI';

const galleryRef = document.querySelector('.gallery');
const searchFormRef = document.querySelector('.search-form');
const bthNextRenderRef = document.querySelector('.bth__loda-more');





searchFormRef.addEventListener('submit', handlerInput);
bthNextRenderRef.addEventListener('click', loadMore);
galleryRef.addEventListener('click', basicLB)

function basicLB(event) {
  if (event.target.nodeName === "IMG") {
    const currentURL = event.target.dataset.action;
    basicLightbox.create(`
    <img src="${currentURL}"/>
`, {
      closable: true,
    }).show()
  }
}

function loadMore() {
  service.getImages(onDataCome);
  window.scrollTo({
    top: window.pageYOffset + window.innerHeight,
    left: 0,
    behavior: 'smooth',
  });
}

function handlerInput(event) {
  event.preventDefault();
  const input = searchFormRef.elements.query;
  if (input.value === '') {
    return;
  }
  service.searchQuery = input.value;
  galleryRef.innerHTML = '';
  service.resetPage();
  service.getImages(onDataCome);
  input.value = '';
}


function onDataCome(data) {
  const nextToHTML = data
    .map(el => {
      const {
        webformatURL,
        likes,
        views,
        comments,
        downloads,
        largeImageURL
      } = el;


      return `<li>
  <div class="photo-card">
  <img src="${webformatURL}" data-action="${largeImageURL}" alt="" />
  <div class="stats">
    <p class="stats-item">
      <i class="material-icons">thumb_up</i>
      ${likes}
    </p>
    <p class="stats-item">
      <i class="material-icons">visibility</i>
      ${views}
    </p>
    <p class="stats-item">
      <i class="material-icons">comment</i>
      ${comments}
    </p>
    <p class="stats-item">
      <i class="material-icons">cloud_download</i>
      ${downloads}
    </p>
  </div>
</div>
</li>`;
    })
    .join(' ');
  galleryRef.insertAdjacentHTML('beforeend', nextToHTML);
}
