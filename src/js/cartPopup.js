import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function cartPopup() {
    const cartPopup = document.querySelector('.js-cart-popup');
    const cartOpenBtn = document.querySelector('.js-cart-open');
    const cartCloseBtn = document.querySelector('.js-cart-close');

    let cartModalOpen = false;
    const openCartModal = () => {
        if (!cartModalOpen) {
            cartPopup.classList.add('active');
            lockScroll(cartPopup);
            cartModalOpen = true;
        }
    }

    const closeCartModal = () => {
        if (cartModalOpen) {
            cartPopup.classList.remove('active');
            unlockScroll();
            cartModalOpen = false;
        }
    }


    cartOpenBtn.addEventListener('click', event => {
        event.preventDefault();
        openCartModal();
    })

    cartCloseBtn.addEventListener('click', event => {
        event.preventDefault();
        closeCartModal();
    });

    cartPopup.addEventListener('click', event => {
        if (event.target === cartPopup) {
            closeCartModal();
        }
    })
}