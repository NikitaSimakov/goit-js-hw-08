import { galleryItems } from './gallery-items.js';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const gallery = document.querySelector('.gallery');
// gallery.addEventListener('click', onOpen);

const markup = galleryItems.reduce((acc, { preview, original, description }) => 
  acc + `<div class='gallery__item'>
  <a class='gallery__link' href='${original}'>
  <img
  class='gallery__image'
  src='${preview}'
  alt='${description}'
  />
  </a>
  </div>`, '')
gallery.insertAdjacentHTML('beforeend', markup);

  new SimpleLightbox ('.gallery a', { captionsData: 'alt', captionDelay: 300 });