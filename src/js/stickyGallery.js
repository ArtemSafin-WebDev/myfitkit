import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);


export default function stickyGallery() {
    ScrollTrigger.matchMedia({
        '(min-width: 1025px)': () => {
            ScrollTrigger.create({
                trigger: '.js-sticky-gallery',
                start: 'top-=50px top',
                endTrigger: '.product__right-col',
                end: 'bottom bottom',
                pin: true,
                pinSpacing: true
            });
        }
    });
}