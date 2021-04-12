import galleryItems from './gallery-items.js';


const makeGalleryCard = (({ original, preview, description }) => {
    const itemEl = document.createElement('li');
    itemEl.classList.add('gallery__item');

    const linkEl = document.createElement('a');
    linkEl.classList.add('gallery__link');
    linkEl.href = original;

    const imageEl = document.createElement('img');
    imageEl.classList.add('gallery__image');
    imageEl.src = preview;
    imageEl.dataset.source = original;
    imageEl.alt = description;

    linkEl.appendChild(imageEl);
    itemEl.appendChild(linkEl);
    return itemEl;
})
    
const galleryEl = document.querySelector('.js-gallery');
const modalEl = document.querySelector('.js-lightbox');
const lightboxImageEl = document.querySelector('.lightbox__image');
const lightboxButtonEl = document.querySelector('.lightbox__button');
const lightboxOverlayEl = document.querySelector('.lightbox__overlay');


const cards = galleryItems.map(makeGalleryCard);
galleryEl.append(...cards);

    
galleryEl.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return
    }
    modalEl.classList.add('is-open');

    lightboxImageEl.src = e.target.dataset.source;
    lightboxImageEl.alt = e.target.alt; 
})
    

const onButtonClose=(() => {
    
    modalEl.classList.remove('is-open');

    lightboxImageEl.src = '';
    lightboxImageEl.alt = ''; 
})

lightboxButtonEl.addEventListener('click', onButtonClose);
lightboxOverlayEl.addEventListener('click', onButtonClose);


window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        onButtonClose();
    }
})












// window.addEventListener('keydown', (e) => {
//     if (modalEl && e.key === 'ArrowRight') {
//         console.log('right')
 
//     } else if (e.key === 'ArrowLeft') {
//         console.log('left')
//     } else {
//         return
//     }

// })