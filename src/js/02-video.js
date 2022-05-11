import throttle from 'lodash.throttle';

   const iframe = document.querySelector('iframe');
   const player = new Vimeo.Player(iframe);
   const LOCALSTORAGE_KEY = 'videoplayer - current - time';

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

player.on('timeupdate', throttle(onPlay, 1000));
player.on('loaded', saveTime);

function onPlay(data) {
    console.log(
        {
            duration: 61.857,
            percent: 0.049,
            seconds: 3.034,
        })
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.parse(data.seconds));

};

function saveTime(data) {
    console.log(
        {
            id: 76979871
        });
    
    const seconds = localStorage.getItem(LOCALSTORAGE_KEY, JSON.parse(data.id));
    
    if (seconds) {
        player.setCurrentTime(seconds);
    }

}