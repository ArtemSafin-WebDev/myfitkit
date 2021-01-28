export default function tabletBurger() {
    const btn = document.querySelector('.js-tablet-burger-btn');
    const menu = document.querySelector('.page-header__tablet-burger-dropdown')
    if (btn && menu) {
        btn.addEventListener('click', event => {
            event.preventDefault();

            btn.classList.toggle('active');
            menu.classList.toggle('active');
        });

        document.addEventListener('click', event => {
            const clickInsideMenu = event.target.matches('.page-header__tablet-burger-dropdown') || event.target.closest('.page-header__tablet-burger-dropdown');
            const insideBtnClick = event.target.matches('.js-tablet-burger-btn') || event.target.closest('.js-tablet-burger-btn');

            if (insideBtnClick) return;

            if (!clickInsideMenu) {
                btn.classList.remove('active');
                menu.classList.remove('active');
            }
        })
    } else {
        console.log('Tablet burger not initialized')
    }
}