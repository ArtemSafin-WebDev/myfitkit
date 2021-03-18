import { debounce } from 'lodash';

export default function onlyNumeric() {
    const onlyNumericInputs = Array.from(document.querySelectorAll('.js-numeric-input'));

    onlyNumericInputs.forEach(input => {
        input.addEventListener('input', () => {
            const value = input.value;
            const newCleanedValue = parseInt(value.replace(/[^\d]+/g, ''), 10);
            if (isNaN(newCleanedValue)) {
                input.value = '';
            } else {
                input.value = newCleanedValue;
            }
        });

        if (input.hasAttribute('data-max-value')) {
            const maxValue = Number(input.getAttribute('data-max-value'));
            input.addEventListener('input', debounce(() => {
                if (input.value > maxValue) {
                    input.value = maxValue;
                }
            }, 300))
        }

      
    });
}
