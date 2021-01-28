

function initializeCartItem(item) {
    const input = item.querySelector('.cart__item-quantity-input');
    const plus = item.querySelector('.cart__item-quantity-block-btn--plus');
    const minus = item.querySelector('.cart__item-quantity-block-btn--minus');


    const handleBtns = () => {
        if (input.value <= 1) {
            minus.setAttribute('disabled', '');
        } else {
            minus.removeAttribute('disabled');
        }
    }

    handleBtns();

    plus.addEventListener('click', event => {
        event.preventDefault();
        input.value = ++input.value;
        handleBtns();
    })
    minus.addEventListener('click', event => {
        event.preventDefault();
        input.value = --input.value;
        handleBtns();
    })
}

export default function cartItems() {
    const elements = Array.from(document.querySelectorAll('.js-cart-item'));

    elements.forEach(element => {
        initializeCartItem(element);
    })

}