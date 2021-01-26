export default function selectType() {
    const elements = Array.from(document.querySelectorAll('.js-select-type'));

    elements.forEach(element => {
        const btn = element.querySelector('.catalog__select-type-btn');

        btn.addEventListener('click', event => {
            event.preventDefault();

            element.classList.toggle('active');
        })
    })



    document.addEventListener('click', event => {
        const insideTypeMenu = event.target.matches('.js-select-type') || event.target.closest('.js-select-type')
        if (!insideTypeMenu) {
            elements.forEach(element => {
                element.classList.remove('active');
            })
        }
    })
}