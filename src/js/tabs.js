export default function tabs() {
    const elements = Array.from(document.querySelectorAll('.js-tabs'));

    elements.forEach(element => {
        const btns = Array.from(element.querySelectorAll('.tabs-nav__link'));
        const items = Array.from(element.querySelectorAll('.tabs-items__item'));
        const checkboxes = Array.from(element.querySelectorAll('.tabs-nav__checkbox-input'));

        if (btns.length && btns.length !== items.length) {
            console.error('Not equal amount of elements');

            return;
        }
        if (checkboxes.length && checkboxes.length !== items.length) {
            console.error('Not equal amount of elements');

            return;
        }

        const setActiveTab = index => {
            btns.forEach(btn => btn.classList.remove('active'));
            items.forEach(item => item.classList.remove('active'));
            checkboxes.forEach(checkbox => (checkbox.checked = false));

            if (btns[index]) {
                btns[index].classList.add('active');
            }

            if (checkboxes[index]) {
                checkboxes[index].checked = true;
                console.log('Setting active checkbox', checkboxes[index])
            }

            items[index].classList.add('active');
        };

        setActiveTab(0);

        btns.forEach((btn, btnIndex) => {
            btn.addEventListener('click', event => {
                event.preventDefault();
                setActiveTab(btnIndex);
            });
        });

        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                const index = checkboxes.findIndex(box => box.checked);
                setActiveTab(index);
            });
        });
    });
}
