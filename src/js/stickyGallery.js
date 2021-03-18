import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export default function stickyGallery() {
    const productRightCol = document.querySelector('.product__right-col');
    const stickyGallery = document.querySelector('.js-sticky-gallery');

    if (!productRightCol || !stickyGallery) return;
    ScrollTrigger.matchMedia({
        '(min-width: 1025px)': () => {
            ScrollTrigger.create({
                trigger: stickyGallery,
                start: 'top top+=20%',
                end: () => `+=${productRightCol.offsetHeight - stickyGallery.offsetHeight}`,
                pin: true,
                pinSpacing: true
            });


            
        }
    });
}