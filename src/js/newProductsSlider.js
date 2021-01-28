import { Swiper } from 'swiper';

export default function newProductsSlider() {
    if (!window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.js-new-products-slider'));


    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 20
        })
    })
}