
import { lockScroll, unlockScroll } from './scrollBlocker';

export default function addedToCart() {
    const addedToCart = document.querySelector('.added-to-cart');
    const openBtn = document.querySelector('.js-added-to-cart-open');
    const closeBtn = document.querySelector('.js-added-to-cart-close');
    let menuOpen = false;

   

    const open = () => {
        if (menuOpen) return;
        addedToCart.classList.add('active');
        lockScroll(addedToCart);
        menuOpen = true;
        console.log('Added to cart opened')
    };

    const close = () => {
        if (!menuOpen) return;
        addedToCart.classList.remove('active');
        unlockScroll();
        menuOpen = false;
    };

    if (addedToCart) {
        openBtn.addEventListener('click', event => {
            event.preventDefault();
            console.log('Clicked on added to cart')
            open();
        });

        closeBtn.addEventListener('click', event => {
            event.preventDefault();
            console.log('Clicked on added to cart close')
            close();
        });

        addedToCart.addEventListener('click', event => {
            if (event.target === addedToCart) {
                close();
            }
        })
    }
}
