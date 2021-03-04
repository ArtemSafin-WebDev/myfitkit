import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import gsap from 'gsap';

function initializeSelectType(element) {
    if (element.classList.contains('initialized')) {
        console.warn('Element already initialized', element);
        return;
    }
    element.classList.add('initialized');
    const btn = element.querySelector('.catalog__select-type-btn');
    const closeSelectType = element.querySelector('.js-close-select-type');
    const dropdown = element.querySelector('.catalog__select-type-dropdown');
    const fadeWrapper = element.querySelector('.catalog__select-type-dropdown-fade-wrapper');
    const buttonContent = element.querySelector('.catalog__select-type-btn-content');
    let dropdownOpen = false;

    const open = () => {
        if (dropdownOpen) return;
        element.classList.add('active');

        if (window.matchMedia('(max-width: 640px)').matches) {
            disableBodyScroll(dropdown);
        } else {
            buttonContent.classList.add('filled');
            const tl = gsap.timeline({});
            tl.to(
                dropdown,
                {
                    height: 'auto',
                    duration: 0.4,
                    autoAlpha: 1,
                    ease: 'power3.out'
                },
                '<'
            ).to(
                fadeWrapper,
                {
                    autoAlpha: 1,
                    duration: 0.2
                },
                '<0.3'
            );
        }
        dropdownOpen = true;
    };

    const close = () => {
        if (!dropdownOpen) return;
        element.classList.remove('active');
        if (window.matchMedia('(max-width: 640px)').matches) {
            enableBodyScroll(dropdown);
        } else {
            const tl = gsap.timeline({
                onComplete: () => {
                    buttonContent.classList.remove('filled');
                }
            });
            tl.to(fadeWrapper, {
                autoAlpha: 0,
                duration: 0.3
            });
            tl.to(dropdown, {
                height: 0,
                duration: 0.4
            });
        }
        dropdownOpen = false;
    };

    btn.addEventListener('click', event => {
        event.preventDefault();

        if (dropdownOpen) {
            close();
        } else {
            open();
        }
    });

    closeSelectType.addEventListener('click', event => {
        event.preventDefault();
        close();
    });

    document.addEventListener('click', event => {
        const insideTypeMenu = event.target.matches('.js-select-type') || event.target.closest('.js-select-type');
        if (!insideTypeMenu) {
            close();
        }

        if (event.target.matches('.catalog__select-type-dropdown') && window.matchMedia('(max-width: 640px)').matches) {
            close();
        }
    });
}

function initializeSelectTypes() {
    const elements = Array.from(document.querySelectorAll('.js-select-type'));

    elements.forEach(element => initializeSelectType(element));
}

window.selectType = {};
window.selectType.initializeSelectTypes = initializeSelectTypes;
window.selectType.initializeSelectType = initializeSelectType;

export default function selectType() {
    initializeSelectTypes();
}
