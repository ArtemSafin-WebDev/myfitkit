export default function scrollToActiveMenuItem() {

    if (!window.matchMedia('(max-width: 640px)').matches) return;
    const elements = Array.from(document.querySelectorAll('.account__nav--compact-on-mobile'));

    elements.forEach(element => {
        const items = Array.from(element.querySelectorAll('.account__nav-list-item'));
        const activeItem = items.find(element => element.classList.contains('active'));
        const list = element.querySelector('.account__nav-list');
        

        if (!activeItem) return;
        const mlLeft = parseInt(window.getComputedStyle(items[0]).marginRight, 10)
      

        list.scrollLeft = activeItem.offsetLeft - mlLeft;
    })
}