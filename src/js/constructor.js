import { lockScroll, unlockScroll } from "./scrollBlocker";

export default function constructor() {
    const elements = Array.from(document.querySelectorAll('.js-constructor'));

    elements.forEach(element => {
        let selectedProductIndex = 0;
        const products = Array.from(element.querySelectorAll('.constructor__checkbox-input'));
        const tabItems = Array.from(element.querySelectorAll('.constructor__tabs-item'));
        const popups = Array.from(element.querySelectorAll('.constructor__popup'));
        const buttons = Array.from(element.querySelectorAll('.constructor__main-card-submit'))
        let popupOpen = false;


        const productsData = products.map(product => {
            return {
                choosenQuantity: 0,
                requiredQuantity: 24
            }
        })

        products.forEach(product => product.checked = false);
        products[selectedProductIndex].checked = true;

        const openPopup = () => {
            if (popupOpen) return;
            const popup = popups[selectedProductIndex];
            popup.classList.add('active');
            lockScroll(popup);
            popupOpen = true;
        }

        const closePopup = () => {
            if (!popupOpen) return;
            const popup = popups[selectedProductIndex];
            popup.classList.remove('active');
            unlockScroll();
            popupOpen = false;
        }

        const setActiveProduct = () => {
            let activeIndex = products.findIndex(product => product.checked);
            if (activeIndex === -1) {
                console.error('Product index not found');
                return;
            }

            selectedProductIndex = activeIndex;

            console.log('Selected product index', selectedProductIndex);

            tabItems.forEach(item => item.classList.remove('active'))
            tabItems[selectedProductIndex].classList.add('active');
        }


        setActiveProduct();

        products.forEach(product => {
            product.addEventListener('change', () => {
                setActiveProduct();
            })
        })
    })
}