import { lockScroll, unlockScroll } from './scrollBlocker';

export default function editBoxes() {
    const editBoxes = document.querySelector('.edit-boxes');

    if (!editBoxes) return;
    const links = Array.from(document.querySelectorAll('.js-edit-box'));

    const popups = Array.from(editBoxes.querySelectorAll('.constructor__popup'));
    const closeBtns = Array.from(
        editBoxes.querySelectorAll('.constructor__popup-close, .constructor__popup-mobile-close-btn, .constructor__cancel-btn')
    );

    let popupOpen = false;

    const openPopup = index => {
        if (popupOpen) return;
        popups.forEach(popup => popup.classList.remove('active'));
        const popup = popups[index];
        popup.classList.add('active');
        lockScroll(popup);
        popupOpen = true;
    };

    const closePopup = () => {
        if (!popupOpen) return;
        popups.forEach(popup => popup.classList.remove('active'));
        unlockScroll();
        popupOpen = false;
    };

    links.forEach((link, linkIndex) => {
        link.addEventListener('click', event => {
            event.preventDefault();
            openPopup(linkIndex);
        });
    });

    closeBtns.forEach(btn => {
        btn.addEventListener('click', event => {
            event.preventDefault();
            closePopup();
        });
    });

    popups.forEach(popup => {
        popup.addEventListener('click', event => {
            if (event.target === popup) {
                closePopup();
            }
        });
        const popupSelectedCountText = popup.querySelector('.constructor__popup-selected-count');
        const inputs = Array.from(popup.querySelectorAll('.cart__item-quantity-input'));
        const plusBtns = Array.from(popup.querySelectorAll('.cart__item-quantity-block-btn--plus'));
        const cancelBtns = Array.from(popup.querySelectorAll('.constructor__cancel-btn'));

        const detailsCloseLinks = Array.from(popup.querySelectorAll('.constructor__popup-cookies-card-details-close'));
        const detailsDropdowns = Array.from(popup.querySelectorAll('.constructor__popup-cookies-card-details-dropdown'));
        const caloriesLinks = Array.from(popup.querySelectorAll('.constructor__popup-cookies-card-details-link'));

        console.log('Cancel btns', cancelBtns);
        const form = popup;
        const handleSelectedCount = () => {
            const sum = inputs.reduce((accumulator, input) => {
                return accumulator + Number(input.value);
            }, 0);
            const requiredQuantity = 24;

            if (sum < requiredQuantity - 1) {
                popupSelectedCountText.innerHTML = `Добавьте <strong>${requiredQuantity - sum}</strong> печенья`;

                plusBtns.forEach(btn => {
                    btn.removeAttribute('disabled');
                });
            } else if (sum === requiredQuantity - 1) {
                popupSelectedCountText.innerHTML = `Выбрано <strong>${sum}</strong> печенья. Добавьте еще <strong>1</strong> шт.`;

                plusBtns.forEach(btn => {
                    btn.removeAttribute('disabled');
                });
            } else {
                popupSelectedCountText.innerHTML = `Выбрано <strong>${sum}</strong> печенья. Бокс собран! `;

                plusBtns.forEach(btn => {
                    btn.setAttribute('disabled', '');
                });
            }
        };

        handleSelectedCount();

        inputs.forEach(input => {
            input.addEventListener('quantitychange', () => {
                handleSelectedCount();
            });
        });

        cancelBtns.forEach(cancelBtn => {
            cancelBtn.addEventListener('click', event => {
                event.preventDefault();
                console.log('Canceling');
                form.reset();

                inputs.forEach(input => {
                    const quantityResetEvent = new CustomEvent('quantityreset');
                    input.dispatchEvent(quantityResetEvent);
                });
                handleSelectedCount();
            });
        });

        if (window.matchMedia('(max-width:640px)').matches) {
            caloriesLinks.forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    link.parentElement.classList.add('active');
                    popup.classList.add('calories-dropdown-open');
                });
            });

            detailsCloseLinks.forEach(link => {
                link.addEventListener('click', event => {
                    event.preventDefault();
                    link.closest('.constructor__popup-cookies-card-details').classList.remove('active');
                    popup.classList.remove('calories-dropdown-open');
                });
            });

            detailsDropdowns.forEach(dropdown => {
                dropdown.addEventListener('click', event => {
                    if (event.target === dropdown) {
                        dropdown.closest('.constructor__popup-cookies-card-details').classList.remove('active');
                        popup.classList.remove('calories-dropdown-open');
                    }
                });
            });
        }
    });
}
