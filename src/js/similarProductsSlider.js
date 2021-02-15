import { Swiper } from 'swiper';

export default function similarProductsSlider() {
    if (window.matchMedia('(min-width: 641px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.js-similar-products'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            spaceBetween: 20,
            watchOverflow: true
        });
    });
}
