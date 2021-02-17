export default function resetForm() {
    const elements = Array.from(document.querySelectorAll('.js-reset-form'));

    elements.forEach(element => {
        element.addEventListener('click', event => {
            event.preventDefault();

            const form = element.closest('form');

            if (form) {
                form.reset();
            }
        })
    })
}