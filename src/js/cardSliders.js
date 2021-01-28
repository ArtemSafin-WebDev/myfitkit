import { Swiper, Pagination, EffectFade } from 'swiper';

Swiper.use([Pagination, EffectFade]);

function initializeCardSlider(card) {
    const container = card.querySelector('.swiper-container');
    const DEBUG = false;
    if (!container) {
        console.error('No swiper container in card', card);
        return;
    }

    let trackingCursor = false;
    let currentSlideIndex;

    const instance = new Swiper(container, {
        watchOverflow: true,
        effect: 'fade',
        speed: 600,
        longSwipesRatio: 0.25,
        // nested: window.matchMedia('(max-width: 640px)').matches ? true : false,
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: card.querySelector('.card__gallery-pagination'),
            type: 'bullets',
            clickable: true
        }
    });

    const slidesCount = instance.slides.length;

    container.addEventListener('mouseenter', () => {
        trackingCursor = true;
    });
    container.addEventListener('mouseleave', () => {
        trackingCursor = false;
        instance.slideTo(0);
    });

    container.addEventListener('mousemove', e => {
        if (!trackingCursor) return;
        e.stopPropagation();

        const rect = e.currentTarget.getBoundingClientRect();
        const offsetX = parseInt(e.clientX - rect.left, 10);

        const width = e.currentTarget.offsetWidth;

        const progress = Math.ceil((offsetX / width) * slidesCount);
        let activeSlideIndex = progress - 1;

        if (DEBUG) {
            console.log({
                activeSlideIndex,
                progress,
                offsetX
            });
        }

        if (activeSlideIndex !== currentSlideIndex) {
            instance.slideTo(activeSlideIndex);
        }
    });
}

window.initializeCardSlider = initializeCardSlider;

export function cardSliders() {
    if (window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.card'));

    elements.forEach(card => {
        initializeCardSlider(card);
    });
}
