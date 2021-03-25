import Plyr from 'plyr';

export default function media() {
    const videoPlayers = Array.from(document.querySelectorAll('.js-video-player'));

    videoPlayers.forEach(player => {
        const instance = new Plyr(player);

        const insideModal = player.closest('.js-modal');

        if (insideModal) {
            document.addEventListener('openmodal', () => {
                if (insideModal.classList.contains('active')) {
                    instance.play();
                } else {
                    console.log('Not inside modal', insideModal)
                }
            })
            document.addEventListener('closemodal', () => {
                instance.pause();
            })
        }
    })
}