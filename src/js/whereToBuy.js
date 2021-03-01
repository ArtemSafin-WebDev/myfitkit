export default function whereToBuy() {
    if (!window.matchMedia("(max-width: 640px)").matches) { 
        return;
    }
    const elements = Array.from(document.querySelectorAll('.js-where-to-buy'));

    elements.forEach(element => {
       const btns = Array.from(element.querySelectorAll('.where-to-buy__toggle-btn'));
       const tabs = [element.querySelector('.where-to-buy__left-col'), element.querySelector('.where-to-buy__right-col')];
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