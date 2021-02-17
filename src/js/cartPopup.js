import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function cartPopup() {
    const cartPopup = document.querySelector('.js-cart-popup');
    const cartOpenBtns = Array.from(document.querySelectorAll('.js-cart-open'));
    const cartCloseBtns = Array.from(document.querySelectorAll('.js-cart-close'));
    

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

    cartOpenBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            openCartModal();
        })
    })
    cartCloseBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            closeCartModal();
        })
    })


    cartPopup.addEventListener('click', event => {
        if (event.target === cartPopup) {
            closeCartModal();
        }
    })
}