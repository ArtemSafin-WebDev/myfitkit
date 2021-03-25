export default function deliveryTabs() {
    if (!window.matchMedia("(max-width: 640px)").matches) { 
        return;
    }
    const elements = Array.from(document.querySelectorAll('.js-delivery-tabs'));

    elements.forEach(element => {
       const btns = Array.from(element.querySelectorAll('.cart__checkout-point-delivery-tabs-nav-btn'));
       const tabs = Array.from(element.querySelectorAll('.cart__checkout-point-delivery-tab-item'));
       const setActiveTab = index => {
           btns.forEach(item => item.classList.remove('active'));
           btns[index].classList.add('active');
           tabs.forEach(item => item.classList.remove('active'));
           tabs[index].classList.add('active')
       }
       setActiveTab(0);

       btns.forEach((btn, btnIndex) => {
           btn.addEventListener('click', event => {
               event.preventDefault();
               setActiveTab(btnIndex)
           })
       })
    })
}