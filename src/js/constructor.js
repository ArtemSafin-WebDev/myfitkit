import { lockScroll, unlockScroll } from './scrollBlocker';

export default function constructor() {
    const elements = Array.from(document.querySelectorAll('.js-constructor'));

    elements.forEach(element => {
        let selectedProductIndex = 0;
        const products = Array.from(element.querySelectorAll('.constructor__checkbox-input'));
        const tabItems = Array.from(element.querySelectorAll('.constructor__tabs-item'));
        const popups = Array.from(element.querySelectorAll('.constructor__popup'));
        const buttons = Array.from(element.querySelectorAll('.constructor__main-card-submit'));
        const popupCloseBtns = Array.from(element.querySelectorAll('.js-constructor-popup-close'));
        let popupOpen = false;
        const editBtns = Array.from(element.querySelectorAll('.constructor__main-card-edit-btn'));
        const caloriesLinks = Array.from(element.querySelectorAll('.constructor__popup-cookies-card-details-link'));
        const detailsCloseLinks = Array.from(element.querySelectorAll('.constructor__popup-cookies-card-details-close'));
        const detailsDropdowns = Array.from(element.querySelectorAll('.constructor__popup-cookies-card-details-dropdown'));
        const mobileCloseBtns = Array.from(element.querySelectorAll('.constructor__popup-mobile-close-btn'));
        const addToCartMobileBtn = document.querySelector('.mobile-nav__add-to-cart-btn-wrapper')
        const productsData = products.map(() => {
            return {
                choosenQuantity: 0,
                requiredQuantity: 24
            };
        });

        products.forEach(product => (product.checked = false));
        products[selectedProductIndex].checked = true;

        const openPopup = () => {
            if (popupOpen) return;
            const popup = popups[selectedProductIndex];
            popup.classList.add('active');
            lockScroll(popup);
            popupOpen = true;
        };

        const closePopup = () => {
            if (!popupOpen) return;
            const popup = popups[selectedProductIndex];
            popup.classList.remove('active');
            unlockScroll();
            popupOpen = false;
        };

        if (window.matchMedia('(max-width:640px)').matches) {
            caloriesLinks.forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    link.parentElement.classList.add('active');
                });
            });

            detailsCloseLinks.forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    link.closest('.constructor__popup-cookies-card-details').classList.remove('active')
                })
            })
            

            detailsDropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', (event) => {
                    if (event.target === dropdown) {
                        dropdown.closest('.constructor__popup-cookies-card-details').classList.remove('active')
                    }
                })
            });

            mobileCloseBtns.forEach(btn => {
                btn.addEventListener('click', event => {
                    event.preventDefault();
                    closePopup();
                })
            })
        }

       

        const setActiveProduct = () => {
            let activeIndex = products.findIndex(product => product.checked);
            if (activeIndex === -1) {
                console.error('Product index not found');
                return;
            }

            selectedProductIndex = activeIndex;

            console.log('Selected product index', selectedProductIndex);

            tabItems.forEach(item => item.classList.remove('active'));
            tabItems[selectedProductIndex].classList.add('active');
        };

        setActiveProduct();

        products.forEach(product => {
            product.addEventListener('change', () => {
                setActiveProduct();
            });
        });

        buttons.forEach(btn => {
            btn.addEventListener('click', event => {
                if (productsData[selectedProductIndex].choosenQuantity !== productsData[selectedProductIndex].requiredQuantity) {
                    openPopup();
                }
            });
        });

        editBtns.forEach(btn => {
            btn.addEventListener('click', event => {
                event.preventDefault();

                openPopup();
            });
        });

        popupCloseBtns.forEach(btn =>
            btn.addEventListener('click', event => {
                event.preventDefault();
                closePopup();
            })
        );

        popups.forEach((popup, popupIndex) => {
            const inputs = Array.from(popup.querySelectorAll('.cart__item-quantity-input'));

            const productData = productsData[popupIndex];
            const popupSelectedCountText = popup.querySelector('.constructor__popup-selected-count');
            const cardButton = tabItems[popupIndex].querySelector('.constructor__main-card-submit');
            const plusBtns = Array.from(popup.querySelectorAll('.cart__item-quantity-block-btn--plus'));
            const resetBtn = popup.querySelector('.constructor__popup-reset');
            const titleCount = tabItems[popupIndex].querySelector('.constructor__main-card-title-count');
            const titleText = tabItems[popupIndex].querySelector('.constructor__main-card-title-text');
            const editBtn = editBtns[popupIndex];
            const originalTitleText = titleText.textContent;
            const boxCompletedMessage = document.querySelector('.constructor__popup-box-completed');
            const handleSelectedCount = () => {
                const sum = inputs.reduce((accumulator, input) => {
                    return accumulator + Number(input.value);
                }, 0);
                productData.choosenQuantity = sum;

                if (sum < productData.requiredQuantity - 1) {
                    cardButton.textContent = `Добавьте ${productData.requiredQuantity - sum} шт.`;
                    cardButton.setAttribute('type', 'button');
                    cardButton.classList.remove('filled');

                    popupSelectedCountText.innerHTML = `Добавьте <strong>${productData.requiredQuantity - sum}</strong> печенья`;

                    plusBtns.forEach(btn => {
                        btn.removeAttribute('disabled');
                    });
                    titleText.textContent = originalTitleText;
                    editBtn.classList.remove('shown');
                    boxCompletedMessage.classList.remove('active');
                    if (addToCartMobileBtn) {
                        addToCartMobileBtn.classList.add('hidden');  
                    }
                } else if (sum === productData.requiredQuantity - 1) {
                    cardButton.textContent = 'Добавьте еще 1 шт.';
                    cardButton.setAttribute('type', 'button');
                    cardButton.classList.remove('filled');

                    popupSelectedCountText.innerHTML = `Выбрано <strong>${sum}</strong> печенья. Добавьте еще <strong>1</strong> шт.`;

                    plusBtns.forEach(btn => {
                        btn.removeAttribute('disabled');
                    });

                    titleText.textContent = originalTitleText;
                    editBtn.classList.remove('shown');
                    boxCompletedMessage.classList.remove('active');
                    if (addToCartMobileBtn) {
                        addToCartMobileBtn.classList.add('hidden');  
                    }
                } else {
                    cardButton.textContent = 'В корзину';
                    cardButton.setAttribute('type', 'submit');
                    cardButton.classList.add('filled');
                    popupSelectedCountText.innerHTML = `Выбрано <strong>${sum}</strong> печенья. Бокс собран! `;

                    plusBtns.forEach(btn => {
                        btn.setAttribute('disabled', '');
                    });

                    titleText.textContent = originalTitleText + ' собран';
                    editBtn.classList.add('shown');
                    boxCompletedMessage.classList.add('active');
                    if (addToCartMobileBtn) {
                        addToCartMobileBtn.classList.remove('hidden');  
                    }

                    setTimeout(() => {
                        boxCompletedMessage.classList.remove('active');
                    }, 2500)
                }
                titleCount.textContent = `${sum} шт.`;

                if (sum >= 1 && sum < productData.requiredQuantity) {
                    titleCount.classList.add('shown');
                } else {
                    titleCount.classList.remove('shown');
                }

                if (sum > 0) {
                    resetBtn.classList.add('shown');
                } else {
                    resetBtn.classList.remove('shown');
                }
            };

            handleSelectedCount();

            popup.addEventListener('click', event => {
                if (event.target === popup) {
                    closePopup();
                }
            });

            inputs.forEach(input => {
                input.addEventListener('quantitychange', () => {
                    console.log('Quantitychange happenned');

                    handleSelectedCount();
                });
            });

            resetBtn.addEventListener('click', () => {
                inputs.forEach(input => {
                    const quantityResetEvent = new CustomEvent('quantityreset');
                    input.dispatchEvent(quantityResetEvent);
                    input.value = 0;
                });
                handleSelectedCount();
            });
        });
    });
}
