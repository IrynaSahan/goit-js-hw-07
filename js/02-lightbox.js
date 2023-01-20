import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const paletteContainer = document.querySelector(".gallery");
const itemsMarkup = createPicturesCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createPicturesCardsMarkup (galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `<a class="gallery__link" href='${original}'>
            <img class="gallery__image"
            src="${preview}"
            data-source='${original}'
            alt="${description}"
            />
            </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
        captions: true,
        captionsData: 'alt',
        cationDelay: '250ms', });