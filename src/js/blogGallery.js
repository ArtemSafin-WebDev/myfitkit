import { Swiper, Pagination, EffectFade } from 'swiper';

Swiper.use([Pagination, EffectFade]);

export default function blogGallery() {
    const elements = Array.from(document.querySelectorAll('.js-blog-gallery'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');
        new Swiper(container, {
            watchOverflow: true,
            speed: 600,

            pagination: {
                el: element.querySelector('.blog-detail__gallery-slider-pagination'),
                type: 'bullets',
                clickable: true
            },
            navigation: {
                nextEl: element.querySelector('.blog-detail__gallery-slider-arrow--next'),
                prevEl: element.querySelector('.blog-detail__gallery-slider-arrow--prev'),
            }
        });
    });
}
