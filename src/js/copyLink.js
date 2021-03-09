const copyToClipboard = str => {
    const el = document.createElement('textarea');
    el.value = str;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
};

export default function copyLink() {
    const elements = Array.from(document.querySelectorAll('.js-copy-link'));

    elements.forEach(element => {
        const text = element.querySelector('.js-copy-link-text').textContent;
        const btn = element.querySelector('.js-copy-link-btn');

        btn.addEventListener('click', event => {
            event.preventDefault();
            copyToClipboard(text);
            if (window.showMessage) {
                console.log('Showing message')
                window.showMessage('#link-copied');
            }
        })

       
    });
}
