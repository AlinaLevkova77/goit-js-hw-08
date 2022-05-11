
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line0

import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarcup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);
galleryContainer.addEventListener('click', onOpenImgClick);

function createGalleryMarcup(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return ` 
     <a class="gallery__item" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}' 
      alt='${description}'
      title = '${description}'
    />
  </a>
    </div>`
        }).join('');
};

function onOpenImgClick(evt) {
    evt.preventDefault();
    const isGalleryImg = evt.target.classList.contains('gallery__image');
   
    if (!isGalleryImg ) {
        return;
    } 
  
    const lightbox = new SimpleLightbox('.gallery a', { 
	captionDelay:250,
   }); 
    console.log(lightbox);

}


console.log(galleryItems);
