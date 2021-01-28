import { Swiper } from 'swiper';

export default function ourBlogSlider() {
    if (!window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.js-our-blog-slider'));


    elements.forEach(element => {
        const container = element.querySelector('.swiper-container');

        new Swiper(container, {
            slidesPerView: 'auto',
            watchOverflow: true,
            spaceBetween: 20
        })
    })
}