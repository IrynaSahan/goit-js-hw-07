import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const paletteContainer = document.querySelector("div.gallery");
const itemsMarkup = createPicturesCardsMarkup(galleryItems);
paletteContainer.insertAdjacentHTML('beforeend', itemsMarkup);

function createPicturesCardsMarkup (galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
        return `
        <div class="gallery__item">
         <a class="gallery__link" href='${original}'>
            <img
         class="gallery__image"
            src="${preview}"
            data-source='${original}'
         alt="${description}"
            />
            </a>
            </div>`;
    })
    .join('');
}

paletteContainer.addEventListener('click', onClick);

function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== 'IMG') {
        return;
    };

    // openModal(evt);

        const instance = basicLightbox.create(`
        <img src="${evt.target.dataset.source}" width="800" height="600"> `);
        instance.show();
    
}

// function openModal(evt) {

//  instance = basicLightbox.create(`
//    <img src="${evt.target.dataset.source}" width="800" height="600"/>`,
//     {
//       onShow: instance => {
//         window.addEventListener('keydown', closeModal);    
//       },
//       onClose: instance => {
//         window.removeEventListener('keydown', closeModal);
//       },
//     },
//   );
//   instance.show();

// }

// const closeModal = (evt) => {
//   if (evt.code === 'Escape')  {
//     instance.close();
//   }
 
// }
