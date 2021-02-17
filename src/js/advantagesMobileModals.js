export default function advantagesMobileModals() {
    if (!window.matchMedia('(max-width: 640px)').matches) return;

    const modals = Array.from(document.querySelectorAll('.advantages__card'));

    modals.forEach(modal => {
        modal.addEventListener('click', event => {
            event.preventDefault();

            modals.forEach(modal => modal.classList.remove('active'));
            modal.classList.add('active');
        });
    });

    document.addEventListener('click', event => {
        const insideCloseBtn =
            event.target.matches('.advantages__card-dropdown-close') ||
            event.target.closest('.advantages__card-dropdown-close');

        const insideModal =
            event.target.matches('.advantages__card') ||
            event.target.closest('.advantages__card');

        if (insideCloseBtn || !insideModal) {
            modals.forEach(modal => modal.classList.remove('active'))
        }
    });
}
