import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import gsap from 'gsap';

export default function selectType() {
    const elements = Array.from(document.querySelectorAll('.js-select-type'));

    elements.forEach(element => {
        const btn = element.querySelector('.catalog__select-type-btn');
        const closeSelectType = element.querySelector('.js-close-select-type');
        const dropdown = element.querySelector('.catalog__select-type-dropdown')
        const dropdownInner = element.querySelector('.catalog__select-type-dropdown-inner')
        let dropdownOpen = false;

        const open = () => {
            if (dropdownOpen) return;
            element.classList.add('active');

            if (window.matchMedia("(max-width: 640px)").matches) {
                disableBodyScroll(dropdown);
            } else {
                const tl = gsap.timeline();
                tl.fromTo(dropdown, {
                    height: 0,
                    autoAlpha: 0,
                }, {
                    height: 'auto', duration: 0.4, autoAlpha: 1, ease: "power3.out"
                })
                
                
            }
            dropdownOpen = true;
        }

        const close = () => {
            if (!dropdownOpen) return;
            element.classList.remove('active');
            if (window.matchMedia("(max-width: 640px)").matches) {
                enableBodyScroll(dropdown);
            } else {
                const tl = gsap.timeline();
                tl.to(dropdown, {
                    height: 0, duration: 0.4, autoAlpha: 0
                })
            }
            dropdownOpen = false;
        }

        btn.addEventListener('click', event => {
            event.preventDefault();

            if (dropdownOpen) {
                close();
            } else {
                open();
            }

            
        })

        closeSelectType.addEventListener('click', event => {
            event.preventDefault();
            close();
        })

        document.addEventListener('click', event => {
            const insideTypeMenu = event.target.matches('.js-select-type') || event.target.closest('.js-select-type')
            if (!insideTypeMenu) {
                elements.forEach(element => {
                    element.classList.remove('active');
                })
            }
    
            if (event.target.matches('.catalog__select-type-dropdown') && window.matchMedia("(max-width: 640px)").matches) {
                close();
            }
        })
    })



    
}