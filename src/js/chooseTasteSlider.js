import { Swiper, Navigation, EffectFade } from 'swiper';

Swiper.use([Navigation, EffectFade]);

export default function chooseTasteSlider() {
    const elements = Array.from(document.querySelectorAll('.js-choose-taste-slider'));

    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        const handleProgress = (swiper) => {
            element.classList.remove('is-end');
            element.classList.remove('is-beginning');
            if (swiper.isBeginning) {
                element.classList.add('is-beginning');
                console.log('is beginning')
            }

            if (swiper.isEnd) {
                element.classList.add('is-end');
                console.log('is end')
            }
        }
        const instance = new Swiper(container, {
            slidesPerView: 6,
            spaceBetween: 20,
            watchOverflow: true,
            threshold: 5,
            speed: 300,
            navigation: {
                nextEl: element.querySelector('.product__choose-taste-slider-arrow--next'),
                prevEl: element.querySelector('.product__choose-taste-slider-arrow--prev'),
            },
            init: false,
            on: {
                init: handleProgress,
                slideChange: handleProgress
            }
        });



        instance.init();
    })
}