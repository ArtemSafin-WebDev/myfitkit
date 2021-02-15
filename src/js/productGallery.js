
import { Swiper, Navigation, EffectFade, Thumbs  } from 'swiper';

Swiper.use([Navigation, EffectFade, Thumbs ]);


export default function productGallery() {
    const elements = Array.from(document.querySelectorAll('.js-product-gallery'));

    elements.forEach(element => {
        const thumbsContainer = element.querySelector('.product__gallery-thumbs-slider .swiper-container');

        const mainContainer = element.querySelector('.product__gallery-main-slider .swiper-container');

        const mainSliderOptions = {
            watchOverflow: true,
            effect: 'fade',
            speed: 400,
            threshold: 5,
            fadeEffect: {
                crossFade: true
            },
            thumbs: {}
        }

        mainSliderOptions.thumbs.swiper  = new Swiper(thumbsContainer, {
            watchOverflow: true,
            spaceBetween: 20,
            slidesPerView: 'auto',
            threshold: 10,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            direction: 'vertical',
            centerInsufficientSlides: true,
            // centeredSlides: true,
            // centeredSlidesBounds: true
        })

        new Swiper(mainContainer, mainSliderOptions);
    })
}