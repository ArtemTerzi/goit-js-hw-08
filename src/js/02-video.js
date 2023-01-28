import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const vimeoPlayer = document.querySelector('#vimeo-player');
const player = new Player(vimeoPlayer);

player.on(
  'timeupdate',
  throttle(value => {
    localStorage.setItem('videoplayer-current-time', JSON.stringify(value));
  }, 1000)
);

const curTime = JSON.parse(localStorage.getItem('videoplayer-current-time'));
if (curTime !== null) player.setCurrentTime(curTime.seconds);
