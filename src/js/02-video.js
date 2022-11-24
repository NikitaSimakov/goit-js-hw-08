import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

// console.log(Player);

const iframe = document.querySelector('iframe', throttle(onPlay, 1000));
const player = new Player(iframe);

function onPlay({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
    
}
// console.log(localStorage.getItem('videoplayer-current-time'));

player.on('timeupdate', throttle(onPlay, 1000));

// player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
player.setCurrentTime(localStorage.getItem('videoplayer-current-time') || 0);