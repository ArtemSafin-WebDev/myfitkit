import Choices from 'choices.js';
import detectIt from 'detect-it';

function initializeCustomSelect(element) {
    const parentElement = element.parentElement;
    const instance = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
        position: 'bottom'
    });

    if (detectIt.hasTouch) {
        return;
    }

    if (element.classList.contains('js-open-on-hover')) {
        parentElement.addEventListener('mouseenter', event => {
            instance.showDropdown();
        });

        parentElement.addEventListener('mouseleave', () => {
            instance.hideDropdown();
        });

        console.log('Parent element', parentElement);
    }
}

function initializeCustomSelects() {
    const selects = Array.from(document.querySelectorAll('.js-custom-select'));

    selects.forEach(element => initializeCustomSelect(element));
}


window.customSelects = {};
window.customSelects.initializeCustomSelect = initializeCustomSelect;
window.customSelects.initializeCustomSelects = initializeCustomSelects;

export default function customSelects() {
    initializeCustomSelects();
}
