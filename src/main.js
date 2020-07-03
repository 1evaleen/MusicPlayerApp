import musicData from '../data';

const playlistWrapperEl = document.querySelector('.playlist');
const playbar = document.querySelector('.playbar');
const playPauseBtn = document.querySelector('.playbar__play-pause-btn');
const playNextBtn = document.querySelector('.playbar__play-next-btn');
const progressBar = document.querySelector('.playbar__song-progress-bar');
const volumeBtn = document.querySelector('.playbar__volume-btn');
const volumeSliderBox = document.querySelector('.playbar__volume-slider-box');
const volumeSlider = document.querySelector('.playbar__volume-slider-box__slider');
const shuffleBtn = document.querySelector('.playbar__shuffle-btn');
const modal = document.querySelector('.modal');
const modalPlayBtn = document.querySelector('.modal__image-wrapper__img__play-btn');
const modalCloseBtn = document.querySelector('.modal__close-btn');
const currSong = document.querySelector('#curr-song')
const audio = document.querySelector('audio');
const recentSong = document.querySelectorAll('.rec-song');
let recentlyPlayed = document.querySelector('.recently-played-songs');
let paused = true;
let shuffled = false;
let updateTimer;
let shuffledMusicData = [];
let originalMusicData = musicData.slice();
let LOCALSTORAGE_KEY = 'musicApp';
const iconsPath = '../icons';

init();
function init () {
    renderRecentlyPlayedSongs();
    renderPlaylist(musicData);
    evtHandlers();
    onPageLoadSelectFirstSong();
    shuffleBtn.style.backgroundImage = `url('${iconsPath + '/shuffleBtn.svg'}')`
}
function evtHandlers () {
    document.querySelectorAll('.recently-played-songs__song-element').forEach(song => {
        song.addEventListener('click', openModal)
    });
    document.querySelectorAll('.playlist__song__element').forEach(song => {
        song.addEventListener('click', openModal)
    });
    modalCloseBtn.addEventListener('click', closeModal);
    modalPlayBtn.addEventListener('click', playNewSong);
    playPauseBtn.addEventListener('click', togglePlayPause);
    playNextBtn.addEventListener('click', playNextSong);
    volumeBtn.addEventListener('click', showVolumeSlider);
    audio.addEventListener('ended', playNextSong);
    shuffleBtn.addEventListener('click', toggleShuffleBtn);
}
function openModal (evt) {
    let id = evt.target.parentElement.dataset.id
    let imgEl = document.querySelector('.modal__image-wrapper__img');
    let titleEl = document.querySelector('.modal__title');
    let artistEl = document.querySelector('.modal__artist');
    modal.classList.remove('hide');
    musicData.forEach(s => {
        if(s.id === id) {
            imgEl.style.backgroundImage = `url('${s.image}')`;
            titleEl.innerHTML = `${s.title}`;
            artistEl.innerHTML = `${s.artist}`;
            modalPlayBtn.dataset.song = `${s.song}`;
            modalPlayBtn.dataset.id = `${s.id}`
        };
    })
}
function closeModal () {
    modal.classList.add('hide');
}
function buildRecentlyPlayedSongItem (id, title, artist, song, image) {
    let recentSongEl = document.createElement('div');
    let recImgEl = document.createElement('div');
    let recTitleEl = document.createElement('div');
    let recTitle = document.createTextNode(title);
    let recArtEl = document.createElement('div');
    let recArtist = document.createTextNode(artist);
    recentSongEl.dataset.id = id;
    recentSongEl.dataset.src = `url('${song}')`;
    recImgEl.style.backgroundImage = `url('${image}')`;
    recentSongEl.classList.add('recently-played-songs__song-element');
    recImgEl.classList.add('recently-played-songs__song-element__img');
    recTitleEl.classList.add('recently-played-songs__song-element__title');
    recArtEl.classList.add('recently-played-songs__song-element__artist');
    recArtEl.appendChild(recArtist);
    recTitleEl.appendChild(recTitle);
    recentSongEl.appendChild(recImgEl);
    recentSongEl.appendChild(recTitleEl);
    recentSongEl.appendChild(recArtEl);
    return recentSongEl;
}
function buildPlaylistSongItem (id, title, artist, song, image) {
    let playlistSongEl = document.createElement('div');
    let songImgEl = document.createElement('div');
    let songTitleEl = document.createElement('div');
    let songTitle = document.createTextNode(title);
    let songArtEl = document.createElement('div');
    let songArtist = document.createTextNode(artist);
    playlistSongEl.dataset.id = id;
    playlistSongEl.dataset.src = `url('${song}')`;
    songImgEl.style.backgroundImage = `url('${image}')`;
    playlistSongEl.classList.add('playlist__song__element');
    songImgEl.classList.add('playlist__song__element__img');
    songTitleEl.classList.add('playlist__song__element__title');
    songArtEl.classList.add('playlist__song__element__artist');
    songArtEl.appendChild(songArtist);
    songTitleEl.appendChild(songTitle);
    playlistSongEl.appendChild(songImgEl);
    playlistSongEl.appendChild(songTitleEl);
    playlistSongEl.appendChild(songArtEl);
    return playlistSongEl;
}
function renderRecentlyPlayedSongs () {
    let LsData = getData(LOCALSTORAGE_KEY);
    let playlist = LsData.recentlyPlayedMusicData || [];
    recentlyPlayed.innerHTML = '';
    playlist.forEach(s => {
        recentlyPlayed.appendChild(buildRecentlyPlayedSongItem(s.id, s.title, s.artist, s.song, s.image));
    });
    recentSong.forEach(s => {
        addEventListener('click', openModal)
    });
}
function renderPlaylist (musicData) {
    musicData.forEach(s => {
        playlistWrapperEl.appendChild(buildPlaylistSongItem(s.id, s.title, s.artist, s.song, s.image))
    })
}
function renderPlayBar (songId) {
    let playImg = document.querySelector('.playbar__img');
    let playTitle = document.querySelector('.playbar__title');
    let playArtist = document.querySelector('.playbar__artist');
    musicData.forEach(s => {
        if(s.id === songId) {
            playImg.style.backgroundImage = `url('${s.image}')`;
            playTitle.innerHTML = `${s.title}`;
            playArtist.innerHTML = `${s.artist}`;
            playbar.dataset.id = `${s.id}`;
            playbar.dataset.song = `${s.song}`
        }
    })
}
function onPageLoadSelectFirstSong () {
    let firstSong = musicData[0];
    let firstSongId = musicData[0].id;
    renderPlayBar(firstSongId);
    playPauseBtn.style.backgroundImage = `url('${iconsPath + '/playBtn.svg'}')`
    audio.src = musicData[0].song;
    audio.volume = .5;
}
function playSong (song, Id) {
    audio.src = song;
    audio.play();
    addCurrSongToRecentPlaylist(Id);
    renderRecentlyPlayedSongs();
    updateTimer = setInterval(updateSongProgressTime, 500);
    paused = false;
}
function togglePlayPause () {
    if(paused) {
        audio.play();
        updateTimer = setInterval(updateSongProgressTime, 500);
        paused = false;
        playPauseBtn.style.backgroundImage = `url('${iconsPath + '/pauseBtn.svg'}')`
    } else {
        audio.pause();
        clearUpdateTimer(updateTimer);
        paused = true;
        playPauseBtn.style.backgroundImage = `url('${iconsPath + '/playBtn.svg'}')`
    }
}
function clearUpdateTimer (interval) {
    clearInterval(interval);
}
function playNextSong (evt) {
    let currSongId = evt.target.parentElement.dataset.id;
    playPauseBtn.style.backgroundImage = `url('${iconsPath + '/pauseBtn.svg'}')`;
    if (shuffled) {
        for (var i = 0; i < shuffledMusicData.length; i++) {
            if (shuffledMusicData[i].id === currSongId) {
                if (i === shuffledMusicData.length - 1) {
                    let nextSongIndex = 0;
                    let nextSong = shuffledMusicData[nextSongIndex].song;
                    let nextSongId = shuffledMusicData[nextSongIndex].id;
                    clearUpdateTimer(updateTimer);
                    playSong(nextSong, nextSongId);
                    renderPlayBar(nextSongId);
                } else {
                    let nextSongIndex = i + 1;
                    let nextSong = shuffledMusicData[nextSongIndex].song;
                    let nextSongId = shuffledMusicData[nextSongIndex].id;
                    clearUpdateTimer(updateTimer);
                    playSong(nextSong, nextSongId);
                    renderPlayBar(nextSongId);
                }
            }
        }
    } else {
        for (var i = 0; i < originalMusicData.length; i++) {
            if (originalMusicData[i].id === currSongId) {
                if (i === originalMusicData.length - 1) {
                    let nextSongIndex = 0;
                    let nextSong = originalMusicData[nextSongIndex].song;
                    let nextSongId = originalMusicData[nextSongIndex].id;
                    clearUpdateTimer(updateTimer);
                    playSong(nextSong, nextSongId);
                    renderPlayBar(nextSongId);
                } else {
                    let nextSongIndex = i + 1;
                    let nextSong = originalMusicData[nextSongIndex].song;
                    let nextSongId = originalMusicData[nextSongIndex].id;
                    clearUpdateTimer(updateTimer);
                    playSong(nextSong, nextSongId);
                    renderPlayBar(nextSongId);
                }
            }
        }
    }
}
function playNewSong (evt) {
    let newSong = evt.target.dataset.song;
    let newSongId = evt.target.dataset.id;
    clearUpdateTimer(updateTimer);
    playSong(newSong, newSongId);
    renderPlayBar(newSongId);
    playPauseBtn.style.backgroundImage = `url('${iconsPath + '/pauseBtn.svg'}')`
    closeModal();
}
function formatSongLengthTime(seconds) {
    let min = Math.floor((seconds / 60));
    let sec = Math.floor(seconds - (min * 60));
    if (sec < 10){ 
        sec  = `0${sec}`;
    };
    return `${min}:${sec}`;
}
function updateSongProgressTime () {
    progressBar.max = currSong.duration;
    progressBar.value = currSong.currentTime;
    document.querySelector('.playbar__song-curr-time').innerHTML = formatSongLengthTime(currSong.currentTime);
    document.querySelector('.playbar__song-total-time').innerHTML = formatSongLengthTime(currSong.duration);
}
function changeSongProgressBar () {
    currSong.currentTime = progressBar.value;
}
function formatVolumeValues (number) {
    let volume = number/100;
    return volume;
}
function changeVolume() {
    let newVolume = volumeSlider.value;
    newVolume = formatVolumeValues(newVolume);
    audio.volume = newVolume;
}
function showVolumeSlider () {
    volumeSliderBox.classList.remove('hide');
    volumeSlider.classList.remove('hide');
    setTimeout(hideVolumeSlider, 5000);
}
function hideVolumeSlider () {
    volumeSliderBox.classList.add('hide');
    volumeSlider.classList.add('hide');
}
function shuffleMusic () {
    shuffledMusicData = [];
    for (let i = musicData.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [musicData[i], musicData[j]] = [musicData[j], musicData[i]];
        shuffledMusicData.push(musicData[i]);
    }
}
function toggleShuffleBtn () {
    if (shuffled) {
        shuffleBtn.style.backgroundImage = `url('${iconsPath + '/shuffleBtn.svg'}')`;
        shuffled = false;
    } else {
        shuffleBtn.style.backgroundImage = `url('${iconsPath + '/shuffleGrey.svg'}')`;
        shuffled = true;
        shuffleMusic();
    }
}
function addCurrSongToRecentPlaylist (songId) {
    let LsData = getData(LOCALSTORAGE_KEY);
    let playlist = LsData.recentlyPlayedMusicData || [];
    musicData.forEach(s => {
        if(s.id === songId) {
            playlist.unshift(s);
        }
    });
    if(playlist.length > 9) {
        playlist.splice(9, 1);
    }
    LsData.recentlyPlayedMusicData = playlist;
    saveData(LsData, LOCALSTORAGE_KEY);
}