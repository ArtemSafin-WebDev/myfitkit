import { Swiper, Navigation } from 'swiper';

Swiper.use([Navigation]);

export default function productsVideoSlider() {
    const elements = Array.from(document.querySelectorAll('.js-products-video-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 30,
            watchOverflow: true,
            threshold: 5,
            centerInsufficientSlides: true,
            speed: 600,
            navigation: {
                nextEl: element.querySelector('.product__videos-slider-arrow--next'),
                prevEl: element.querySelector('.product__videos-slider-arrow--prev')
            }
        });
    });
}
