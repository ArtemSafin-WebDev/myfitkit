import { Swiper, Pagination, Navigation, EffectFade } from 'swiper';

Swiper.use([Pagination, Navigation, EffectFade]);

export default function homeSlider() {
    const elements = Array.from(document.querySelectorAll('.js-home-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            watchOverflow: true,
            effect: 'fade',
            speed: 600,
            longSwipesRatio: 0.25,
            fadeEffect: {
                crossFade: true
            },
            navigation: {
                nextEl: element.querySelector('.home-slider__arrow--next'),
                prevEl: element.querySelector('.home-slider__arrow--prev')
            },
            pagination: {
                el: element.querySelector('.home-slider__pagination'),
                type: 'bullets',
                clickable: true,
                renderBullet: function(index, className) {
                    return `
                        <span class="home-slider__pagination-bullet ${className}">
                            ${index + 1}
                        </span>
                        <span class="home-slider__pagination-bullet-divider">
                            <svg width="12" height="16" aria-hidden="true" class="icon-bullet-divider">
                                <use xlink:href="#bullet-divider"></use>
                            </svg>
                        </span>
                    `;
                }
            }
        });
    });
}