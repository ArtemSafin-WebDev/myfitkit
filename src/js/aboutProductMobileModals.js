export default function aboutProductMobileModals() {
    if (!window.matchMedia('(max-width: 640px)').matches) return;

    const modals = Array.from(document.querySelectorAll('.blog-detail__about-product-advantages-modal'));

    modals.forEach(modal => {
        modal.addEventListener('click', event => {
            event.preventDefault();

            modals.forEach(modal => modal.classList.remove('active'));
            modal.classList.add('active');
        });
    });

    document.addEventListener('click', event => {
        const insideCloseBtn =
            event.target.matches('.blog-detail__about-product-advantages-modal-inner-close') ||
            event.target.closest('.blog-detail__about-product-advantages-modal-inner-close');

        const insideModal =
            event.target.matches('.blog-detail__about-product-advantages-modal') ||
            event.target.closest('.blog-detail__about-product-advantages-modal');

        if (insideCloseBtn || !insideModal) {
            modals.forEach(modal => modal.classList.remove('active'))
        }
    });
}
