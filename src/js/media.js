import Plyr from 'plyr';

export default function media() {
    const videoPlayers = Array.from(document.querySelectorAll('.js-video-player'));

    videoPlayers.forEach(player => {
        const instance = new Plyr(player);

        const insideModal = player.closest('.js-modal');

        if (insideModal) {
            document.addEventListener('openmodal', () => {
                instance.play();
            })
            document.addEventListener('closemodal', () => {
                instance.pause();
            })
        }
    })
}