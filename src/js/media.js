import Plyr from 'plyr';



export default function media() {
    const videoPlayers = Array.from(document.querySelectorAll('.js-video-player'));

    videoPlayers.forEach(player => {
        new Plyr(player);
    })
}