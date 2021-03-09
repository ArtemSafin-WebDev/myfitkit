export default function messages() {
    const MESSAGE_TIMEOUT = 3000;

    window.showMessage = (selector, timeout = MESSAGE_TIMEOUT) => {
        const message = document.querySelector(selector);

        if (!message) {
            console.warn(`No message with selector: ${selector} found`);
            return;
        }

        message.classList.add('shown');

        setTimeout(() => {
            message.classList.remove('shown');
        }, timeout);
    };
}
