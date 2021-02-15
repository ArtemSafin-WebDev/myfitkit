import { Swiper, Navigation, EffectFade, Thumbs, Pagination } from 'swiper';

Swiper.use([Navigation, EffectFade, Thumbs, Pagination]);

export default function productGallery() {
    const elements = Array.from(document.querySelectorAll('.js-product-gallery'));

    elements.forEach(element => {
        const thumbsContainer = element.querySelector('.product__gallery-thumbs-slider .swiper-container');

        const mainContainer = element.querySelector('.product__gallery-main-slider .swiper-container');
        const popupGalleryOnTablet = element.classList.contains('product__gallery--inside-modal') && window.matchMedia('(max-width: 768px)').matches;

        const mainSliderOptions = {
            watchOverflow: true,
            effect: 'fade',
            speed: 400,
            threshold: 5,
            fadeEffect: {
                crossFade: true
            },
            thumbs: {},
            pagination: {
                el: element.querySelector('.product__gallery-main-slider-pagination'),
                type: 'bullets',
                clickable: true
            }
        };

        mainSliderOptions.thumbs.swiper = new Swiper(thumbsContainer, {
            watchOverflow: true,
            spaceBetween: 10,
            slidesPerView: 4,
            threshold: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: popupGalleryOnTablet ? 'horizontal' : 'vertical',
            centerInsufficientSlides: true,
            breakpoints: {
                641: {
                    spaceBetween: 20,
                    slidesPerView: 'auto',
                }
            }
        });

        new Swiper(mainContainer, mainSliderOptions);
    });
}
