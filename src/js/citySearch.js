export default function citySearch() {
    const elements = Array.from(document.querySelectorAll('.js-city-search'));

    elements.forEach(element => {
        const input = element.querySelector('input[type="search"]');

        const items = Array.from(element.querySelectorAll('.modals__modal-city-results-list-item'));


        const filterItems = (value) => {
            const filteredItems = items.filter(item => {
                const link = item.querySelector('.modals__modal-city-results-card');

                if (!link.textContent.trim().toLocaleLowerCase().includes(value.trim().toLocaleLowerCase())) {
                    return true;
                } else {
                    return false;
                }
            });

            items.forEach(item => item.classList.remove('hidden'));
            filteredItems.forEach(item => item.classList.add('hidden'))


            console.log('Filtered items', filteredItems)
        }

        input.addEventListener('input', () => {
            filterItems(input.value)
        })
    })
}