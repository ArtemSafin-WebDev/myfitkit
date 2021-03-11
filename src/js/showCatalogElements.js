
import gsap from 'gsap';

function revealElements(elements) {
    gsap.fromTo(elements, {
        autoAlpha: 0,
        y: 30
    }, {
        autoAlpha: 1,
        duration: 0.6,
        stagger: 0.2,
        y: 0,
        clearProps: 'all'
    })
}

export default function showCatalogElements() {
    window.revealElements = revealElements;
}