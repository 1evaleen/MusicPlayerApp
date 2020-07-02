/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports) {

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
const currSong = document.querySelector('#curr-song');
const audio = document.querySelector('audio');
const recentSong = document.querySelectorAll('.rec-song');
let recentlyPlayed = document.querySelector('.recently-played-songs');
let paused = true;
let shuffled = false;
let updateTimer;
let shuffledMusicData = [];
let originalMusicData = musicData.slice();
let LOCALSTORAGE_KEY = 'musicApp';
init();

function init() {
  renderRecentlyPlayedSongs();
  renderPlaylist(musicData);
  evtHandlers();
  onPageLoadSelectFirstSong();
  shuffleBtn.style.backgroundImage = `url('${'./icons/shuffleBtn.svg'}')`;
}

function evtHandlers() {
  document.querySelectorAll('.recently-played-songs__song-element').forEach(song => {
    song.addEventListener('click', openModal);
  });
  document.querySelectorAll('.playlist__song__element').forEach(song => {
    song.addEventListener('click', openModal);
  });
  modalCloseBtn.addEventListener('click', closeModal);
  modalPlayBtn.addEventListener('click', playNewSong);
  playPauseBtn.addEventListener('click', togglePlayPause);
  playNextBtn.addEventListener('click', playNextSong);
  volumeBtn.addEventListener('click', showVolumeSlider);
  audio.addEventListener('ended', playNextSong);
  shuffleBtn.addEventListener('click', toggleShuffleBtn);
}

function openModal(evt) {
  let id = evt.target.parentElement.dataset.id;
  let imgEl = document.querySelector('.modal__image-wrapper__img');
  let titleEl = document.querySelector('.modal__title');
  let artistEl = document.querySelector('.modal__artist');
  modal.classList.remove('hide');
  musicData.forEach(s => {
    if (s.id === id) {
      imgEl.style.backgroundImage = `url('${s.image}')`;
      titleEl.innerHTML = `${s.title}`;
      artistEl.innerHTML = `${s.artist}`;
      modalPlayBtn.dataset.song = `${s.song}`;
      modalPlayBtn.dataset.id = `${s.id}`;
    }

    ;
  });
}

function closeModal() {
  modal.classList.add('hide');
}

function buildRecentlyPlayedSongItem(id, title, artist, song, image) {
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

function buildPlaylistSongItem(id, title, artist, song, image) {
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

function renderRecentlyPlayedSongs() {
  let LsData = getData(LOCALSTORAGE_KEY);
  let playlist = LsData.recentlyPlayedMusicData || [];
  recentlyPlayed.innerHTML = '';
  playlist.forEach(s => {
    recentlyPlayed.appendChild(buildRecentlyPlayedSongItem(s.id, s.title, s.artist, s.song, s.image));
  });
  recentSong.forEach(s => {
    addEventListener('click', openModal);
  });
}

function renderPlaylist(musicData) {
  musicData.forEach(s => {
    playlistWrapperEl.appendChild(buildPlaylistSongItem(s.id, s.title, s.artist, s.song, s.image));
  });
}

function renderPlayBar(songId) {
  let playImg = document.querySelector('.playbar__img');
  let playTitle = document.querySelector('.playbar__title');
  let playArtist = document.querySelector('.playbar__artist');
  musicData.forEach(s => {
    if (s.id === songId) {
      playImg.style.backgroundImage = `url('${s.image}')`;
      playTitle.innerHTML = `${s.title}`;
      playArtist.innerHTML = `${s.artist}`;
      playbar.dataset.id = `${s.id}`;
      playbar.dataset.song = `${s.song}`;
    }
  });
}

function onPageLoadSelectFirstSong() {
  let firstSong = musicData[0];
  let firstSongId = musicData[0].id;
  renderPlayBar(firstSongId);
  playPauseBtn.style.backgroundImage = `url('${'./icons/playBtn.svg'}')`;
  audio.src = musicData[0].song;
  audio.volume = .5;
}

function playSong(song, Id) {
  audio.src = song;
  audio.play();
  addCurrSongToRecentPlaylist(Id);
  renderRecentlyPlayedSongs();
  updateTimer = setInterval(updateSongProgressTime, 500);
  paused = false;
}

function togglePlayPause() {
  if (paused) {
    audio.play();
    updateTimer = setInterval(updateSongProgressTime, 500);
    paused = false;
    playPauseBtn.style.backgroundImage = `url('${'./icons/pauseBtn.svg'}')`;
  } else {
    audio.pause();
    clearUpdateTimer(updateTimer);
    paused = true;
    playPauseBtn.style.backgroundImage = `url('${'./icons/playBtn.svg'}')`;
  }
}

function clearUpdateTimer(interval) {
  clearInterval(interval);
}

function playNextSong(evt) {
  let currSongId = evt.target.parentElement.dataset.id;
  playPauseBtn.style.backgroundImage = `url('${'./icons/pauseBtn.svg'}')`;

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

function playNewSong(evt) {
  let newSong = evt.target.dataset.song;
  let newSongId = evt.target.dataset.id;
  clearUpdateTimer(updateTimer);
  playSong(newSong, newSongId);
  renderPlayBar(newSongId);
  playPauseBtn.style.backgroundImage = `url('${'./icons/pauseBtn.svg'}')`;
  closeModal();
}

function formatSongLengthTime(seconds) {
  let min = Math.floor(seconds / 60);
  let sec = Math.floor(seconds - min * 60);

  if (sec < 10) {
    sec = `0${sec}`;
  }

  ;
  return `${min}:${sec}`;
}

function updateSongProgressTime() {
  progressBar.max = currSong.duration;
  progressBar.value = currSong.currentTime;
  document.querySelector('.playbar__song-curr-time').innerHTML = formatSongLengthTime(currSong.currentTime);
  document.querySelector('.playbar__song-total-time').innerHTML = formatSongLengthTime(currSong.duration);
}

function changeSongProgressBar() {
  currSong.currentTime = progressBar.value;
}

function formatVolumeValues(number) {
  let volume = number / 100;
  return volume;
}

function changeVolume() {
  let newVolume = volumeSlider.value;
  newVolume = formatVolumeValues(newVolume);
  audio.volume = newVolume;
}

function showVolumeSlider() {
  volumeSliderBox.classList.remove('hide');
  volumeSlider.classList.remove('hide');
  setTimeout(hideVolumeSlider, 5000);
}

function hideVolumeSlider() {
  volumeSliderBox.classList.add('hide');
  volumeSlider.classList.add('hide');
}

function shuffleMusic() {
  shuffledMusicData = [];

  for (let i = musicData.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [musicData[i], musicData[j]] = [musicData[j], musicData[i]];
    shuffledMusicData.push(musicData[i]);
  }
}

function toggleShuffleBtn() {
  if (shuffled) {
    shuffleBtn.style.backgroundImage = `url('${'./icons/shuffleBtn.svg'}')`;
    shuffled = false;
  } else {
    shuffleBtn.style.backgroundImage = `url('${'./icons/shuffleGrey.svg'}')`;
    shuffled = true;
    shuffleMusic();
  }
}

function addCurrSongToRecentPlaylist(songId) {
  let LsData = getData(LOCALSTORAGE_KEY);
  let playlist = LsData.recentlyPlayedMusicData || [];
  musicData.forEach(s => {
    if (s.id === songId) {
      playlist.unshift(s);
    }
  });

  if (playlist.length > 9) {
    playlist.splice(9, 1);
  }

  LsData.recentlyPlayedMusicData = playlist;
  saveData(LsData, LOCALSTORAGE_KEY);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5qcyJdLCJuYW1lcyI6WyJwbGF5bGlzdFdyYXBwZXJFbCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInBsYXliYXIiLCJwbGF5UGF1c2VCdG4iLCJwbGF5TmV4dEJ0biIsInByb2dyZXNzQmFyIiwidm9sdW1lQnRuIiwidm9sdW1lU2xpZGVyQm94Iiwidm9sdW1lU2xpZGVyIiwic2h1ZmZsZUJ0biIsIm1vZGFsIiwibW9kYWxQbGF5QnRuIiwibW9kYWxDbG9zZUJ0biIsImN1cnJTb25nIiwiYXVkaW8iLCJyZWNlbnRTb25nIiwicXVlcnlTZWxlY3RvckFsbCIsInJlY2VudGx5UGxheWVkIiwicGF1c2VkIiwic2h1ZmZsZWQiLCJ1cGRhdGVUaW1lciIsInNodWZmbGVkTXVzaWNEYXRhIiwib3JpZ2luYWxNdXNpY0RhdGEiLCJtdXNpY0RhdGEiLCJzbGljZSIsIkxPQ0FMU1RPUkFHRV9LRVkiLCJpbml0IiwicmVuZGVyUmVjZW50bHlQbGF5ZWRTb25ncyIsInJlbmRlclBsYXlsaXN0IiwiZXZ0SGFuZGxlcnMiLCJvblBhZ2VMb2FkU2VsZWN0Rmlyc3RTb25nIiwic3R5bGUiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJmb3JFYWNoIiwic29uZyIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicGxheU5ld1NvbmciLCJ0b2dnbGVQbGF5UGF1c2UiLCJwbGF5TmV4dFNvbmciLCJzaG93Vm9sdW1lU2xpZGVyIiwidG9nZ2xlU2h1ZmZsZUJ0biIsImV2dCIsImlkIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsImRhdGFzZXQiLCJpbWdFbCIsInRpdGxlRWwiLCJhcnRpc3RFbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsInMiLCJpbWFnZSIsImlubmVySFRNTCIsInRpdGxlIiwiYXJ0aXN0IiwiYWRkIiwiYnVpbGRSZWNlbnRseVBsYXllZFNvbmdJdGVtIiwicmVjZW50U29uZ0VsIiwiY3JlYXRlRWxlbWVudCIsInJlY0ltZ0VsIiwicmVjVGl0bGVFbCIsInJlY1RpdGxlIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWNBcnRFbCIsInJlY0FydGlzdCIsInNyYyIsImFwcGVuZENoaWxkIiwiYnVpbGRQbGF5bGlzdFNvbmdJdGVtIiwicGxheWxpc3RTb25nRWwiLCJzb25nSW1nRWwiLCJzb25nVGl0bGVFbCIsInNvbmdUaXRsZSIsInNvbmdBcnRFbCIsInNvbmdBcnRpc3QiLCJMc0RhdGEiLCJnZXREYXRhIiwicGxheWxpc3QiLCJyZWNlbnRseVBsYXllZE11c2ljRGF0YSIsInJlbmRlclBsYXlCYXIiLCJzb25nSWQiLCJwbGF5SW1nIiwicGxheVRpdGxlIiwicGxheUFydGlzdCIsImZpcnN0U29uZyIsImZpcnN0U29uZ0lkIiwidm9sdW1lIiwicGxheVNvbmciLCJJZCIsInBsYXkiLCJhZGRDdXJyU29uZ1RvUmVjZW50UGxheWxpc3QiLCJzZXRJbnRlcnZhbCIsInVwZGF0ZVNvbmdQcm9ncmVzc1RpbWUiLCJwYXVzZSIsImNsZWFyVXBkYXRlVGltZXIiLCJpbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJjdXJyU29uZ0lkIiwiaSIsImxlbmd0aCIsIm5leHRTb25nSW5kZXgiLCJuZXh0U29uZyIsIm5leHRTb25nSWQiLCJuZXdTb25nIiwibmV3U29uZ0lkIiwiZm9ybWF0U29uZ0xlbmd0aFRpbWUiLCJzZWNvbmRzIiwibWluIiwiTWF0aCIsImZsb29yIiwic2VjIiwibWF4IiwiZHVyYXRpb24iLCJ2YWx1ZSIsImN1cnJlbnRUaW1lIiwiY2hhbmdlU29uZ1Byb2dyZXNzQmFyIiwiZm9ybWF0Vm9sdW1lVmFsdWVzIiwibnVtYmVyIiwiY2hhbmdlVm9sdW1lIiwibmV3Vm9sdW1lIiwic2V0VGltZW91dCIsImhpZGVWb2x1bWVTbGlkZXIiLCJzaHVmZmxlTXVzaWMiLCJqIiwicmFuZG9tIiwicHVzaCIsInVuc2hpZnQiLCJzcGxpY2UiLCJzYXZlRGF0YSJdLCJt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Q2Y7QUFDSjs7QUFDRCxTQUFTaEMsMkJBQVQsQ0FBc0NWLE1BQXRDLEVBQThDO0FBQzFDLE1BQUlMLE1BQU0sR0FBR0MsT0FBTyxDQUFDckQsZ0JBQUQsQ0FBcEI7QUFDQSxNQUFJc0QsUUFBUSxHQUFHRixNQUFNLENBQUNHLHVCQUFQLElBQWtDLEVBQWpEO0FBQ0F6RCxXQUFTLENBQUNVLE9BQVYsQ0FBa0JvQixDQUFDLElBQUk7QUFDbkIsUUFBR0EsQ0FBQyxDQUFDVCxFQUFGLEtBQVNzQyxNQUFaLEVBQW9CO0FBQ2hCSCxjQUFRLENBQUNpRCxPQUFULENBQWlCM0UsQ0FBakI7QUFDSDtBQUNKLEdBSkQ7O0FBS0EsTUFBRzBCLFFBQVEsQ0FBQ3NCLE1BQVQsR0FBa0IsQ0FBckIsRUFBd0I7QUFDcEJ0QixZQUFRLENBQUNrRCxNQUFULENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBQ0g7O0FBQ0RwRCxRQUFNLENBQUNHLHVCQUFQLEdBQWlDRCxRQUFqQztBQUNBbUQsVUFBUSxDQUFDckQsTUFBRCxFQUFTcEQsZ0JBQVQsQ0FBUjtBQUNILEMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbWFpbi5qc1wiKTtcbiIsImNvbnN0IHBsYXlsaXN0V3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlsaXN0Jyk7XHJcbmNvbnN0IHBsYXliYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcicpO1xyXG5jb25zdCBwbGF5UGF1c2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fcGxheS1wYXVzZS1idG4nKTtcclxuY29uc3QgcGxheU5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fcGxheS1uZXh0LWJ0bicpO1xyXG5jb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19zb25nLXByb2dyZXNzLWJhcicpO1xyXG5jb25zdCB2b2x1bWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fdm9sdW1lLWJ0bicpO1xyXG5jb25zdCB2b2x1bWVTbGlkZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fdm9sdW1lLXNsaWRlci1ib3gnKTtcclxuY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3ZvbHVtZS1zbGlkZXItYm94X19zbGlkZXInKTtcclxuY29uc3Qgc2h1ZmZsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19zaHVmZmxlLWJ0bicpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBtb2RhbFBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlLXdyYXBwZXJfX2ltZ19fcGxheS1idG4nKTtcclxuY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UtYnRuJyk7XHJcbmNvbnN0IGN1cnJTb25nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnItc29uZycpXHJcbmNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKTtcclxuY29uc3QgcmVjZW50U29uZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWMtc29uZycpO1xyXG5sZXQgcmVjZW50bHlQbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZW50bHktcGxheWVkLXNvbmdzJyk7XHJcbmxldCBwYXVzZWQgPSB0cnVlO1xyXG5sZXQgc2h1ZmZsZWQgPSBmYWxzZTtcclxubGV0IHVwZGF0ZVRpbWVyO1xyXG5sZXQgc2h1ZmZsZWRNdXNpY0RhdGEgPSBbXTtcclxubGV0IG9yaWdpbmFsTXVzaWNEYXRhID0gbXVzaWNEYXRhLnNsaWNlKCk7XHJcbmxldCBMT0NBTFNUT1JBR0VfS0VZID0gJ211c2ljQXBwJztcclxuXHJcbmluaXQoKTtcclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICByZW5kZXJSZWNlbnRseVBsYXllZFNvbmdzKCk7XHJcbiAgICByZW5kZXJQbGF5bGlzdChtdXNpY0RhdGEpO1xyXG4gICAgZXZ0SGFuZGxlcnMoKTtcclxuICAgIG9uUGFnZUxvYWRTZWxlY3RGaXJzdFNvbmcoKTtcclxuICAgIHNodWZmbGVCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHsnLi9pY29ucy9zaHVmZmxlQnRuLnN2Zyd9JylgXHJcbn1cclxuZnVuY3Rpb24gZXZ0SGFuZGxlcnMgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50JykuZm9yRWFjaChzb25nID0+IHtcclxuICAgICAgICBzb25nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWxpc3RfX3NvbmdfX2VsZW1lbnQnKS5mb3JFYWNoKHNvbmcgPT4ge1xyXG4gICAgICAgIHNvbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbiAgICB9KTtcclxuICAgIG1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgIG1vZGFsUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlOZXdTb25nKTtcclxuICAgIHBsYXlQYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBsYXlQYXVzZSk7XHJcbiAgICBwbGF5TmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlOZXh0U29uZyk7XHJcbiAgICB2b2x1bWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Vm9sdW1lU2xpZGVyKTtcclxuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRTb25nKTtcclxuICAgIHNodWZmbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaHVmZmxlQnRuKTtcclxufVxyXG5mdW5jdGlvbiBvcGVuTW9kYWwgKGV2dCkge1xyXG4gICAgbGV0IGlkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWRcclxuICAgIGxldCBpbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1hZ2Utd3JhcHBlcl9faW1nJyk7XHJcbiAgICBsZXQgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKTtcclxuICAgIGxldCBhcnRpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYXJ0aXN0Jyk7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBtdXNpY0RhdGEuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBpZihzLmlkID09PSBpZCkge1xyXG4gICAgICAgICAgICBpbWdFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3MuaW1hZ2V9JylgO1xyXG4gICAgICAgICAgICB0aXRsZUVsLmlubmVySFRNTCA9IGAke3MudGl0bGV9YDtcclxuICAgICAgICAgICAgYXJ0aXN0RWwuaW5uZXJIVE1MID0gYCR7cy5hcnRpc3R9YDtcclxuICAgICAgICAgICAgbW9kYWxQbGF5QnRuLmRhdGFzZXQuc29uZyA9IGAke3Muc29uZ31gO1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlCdG4uZGF0YXNldC5pZCA9IGAke3MuaWR9YFxyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkUmVjZW50bHlQbGF5ZWRTb25nSXRlbSAoaWQsIHRpdGxlLCBhcnRpc3QsIHNvbmcsIGltYWdlKSB7XHJcbiAgICBsZXQgcmVjZW50U29uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmVjSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByZWNUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmVjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XHJcbiAgICBsZXQgcmVjQXJ0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByZWNBcnRpc3QgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnRpc3QpO1xyXG4gICAgcmVjZW50U29uZ0VsLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgIHJlY2VudFNvbmdFbC5kYXRhc2V0LnNyYyA9IGB1cmwoJyR7c29uZ30nKWA7XHJcbiAgICByZWNJbWdFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcclxuICAgIHJlY2VudFNvbmdFbC5jbGFzc0xpc3QuYWRkKCdyZWNlbnRseS1wbGF5ZWQtc29uZ3NfX3NvbmctZWxlbWVudCcpO1xyXG4gICAgcmVjSW1nRWwuY2xhc3NMaXN0LmFkZCgncmVjZW50bHktcGxheWVkLXNvbmdzX19zb25nLWVsZW1lbnRfX2ltZycpO1xyXG4gICAgcmVjVGl0bGVFbC5jbGFzc0xpc3QuYWRkKCdyZWNlbnRseS1wbGF5ZWQtc29uZ3NfX3NvbmctZWxlbWVudF9fdGl0bGUnKTtcclxuICAgIHJlY0FydEVsLmNsYXNzTGlzdC5hZGQoJ3JlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50X19hcnRpc3QnKTtcclxuICAgIHJlY0FydEVsLmFwcGVuZENoaWxkKHJlY0FydGlzdCk7XHJcbiAgICByZWNUaXRsZUVsLmFwcGVuZENoaWxkKHJlY1RpdGxlKTtcclxuICAgIHJlY2VudFNvbmdFbC5hcHBlbmRDaGlsZChyZWNJbWdFbCk7XHJcbiAgICByZWNlbnRTb25nRWwuYXBwZW5kQ2hpbGQocmVjVGl0bGVFbCk7XHJcbiAgICByZWNlbnRTb25nRWwuYXBwZW5kQ2hpbGQocmVjQXJ0RWwpO1xyXG4gICAgcmV0dXJuIHJlY2VudFNvbmdFbDtcclxufVxyXG5mdW5jdGlvbiBidWlsZFBsYXlsaXN0U29uZ0l0ZW0gKGlkLCB0aXRsZSwgYXJ0aXN0LCBzb25nLCBpbWFnZSkge1xyXG4gICAgbGV0IHBsYXlsaXN0U29uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ0ltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ1RpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBzb25nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XHJcbiAgICBsZXQgc29uZ0FydEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ0FydGlzdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFydGlzdCk7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5kYXRhc2V0LnNyYyA9IGB1cmwoJyR7c29uZ30nKWA7XHJcbiAgICBzb25nSW1nRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZX0nKWA7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5jbGFzc0xpc3QuYWRkKCdwbGF5bGlzdF9fc29uZ19fZWxlbWVudCcpO1xyXG4gICAgc29uZ0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50X19pbWcnKTtcclxuICAgIHNvbmdUaXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50X190aXRsZScpO1xyXG4gICAgc29uZ0FydEVsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50X19hcnRpc3QnKTtcclxuICAgIHNvbmdBcnRFbC5hcHBlbmRDaGlsZChzb25nQXJ0aXN0KTtcclxuICAgIHNvbmdUaXRsZUVsLmFwcGVuZENoaWxkKHNvbmdUaXRsZSk7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5hcHBlbmRDaGlsZChzb25nSW1nRWwpO1xyXG4gICAgcGxheWxpc3RTb25nRWwuYXBwZW5kQ2hpbGQoc29uZ1RpdGxlRWwpO1xyXG4gICAgcGxheWxpc3RTb25nRWwuYXBwZW5kQ2hpbGQoc29uZ0FydEVsKTtcclxuICAgIHJldHVybiBwbGF5bGlzdFNvbmdFbDtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJSZWNlbnRseVBsYXllZFNvbmdzICgpIHtcclxuICAgIGxldCBMc0RhdGEgPSBnZXREYXRhKExPQ0FMU1RPUkFHRV9LRVkpO1xyXG4gICAgbGV0IHBsYXlsaXN0ID0gTHNEYXRhLnJlY2VudGx5UGxheWVkTXVzaWNEYXRhIHx8IFtdO1xyXG4gICAgcmVjZW50bHlQbGF5ZWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwbGF5bGlzdC5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIHJlY2VudGx5UGxheWVkLmFwcGVuZENoaWxkKGJ1aWxkUmVjZW50bHlQbGF5ZWRTb25nSXRlbShzLmlkLCBzLnRpdGxlLCBzLmFydGlzdCwgcy5zb25nLCBzLmltYWdlKSk7XHJcbiAgICB9KTtcclxuICAgIHJlY2VudFNvbmcuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclBsYXlsaXN0IChtdXNpY0RhdGEpIHtcclxuICAgIG11c2ljRGF0YS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIHBsYXlsaXN0V3JhcHBlckVsLmFwcGVuZENoaWxkKGJ1aWxkUGxheWxpc3RTb25nSXRlbShzLmlkLCBzLnRpdGxlLCBzLmFydGlzdCwgcy5zb25nLCBzLmltYWdlKSlcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUGxheUJhciAoc29uZ0lkKSB7XHJcbiAgICBsZXQgcGxheUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19pbWcnKTtcclxuICAgIGxldCBwbGF5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fdGl0bGUnKTtcclxuICAgIGxldCBwbGF5QXJ0aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX2FydGlzdCcpO1xyXG4gICAgbXVzaWNEYXRhLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgaWYocy5pZCA9PT0gc29uZ0lkKSB7XHJcbiAgICAgICAgICAgIHBsYXlJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzLmltYWdlfScpYDtcclxuICAgICAgICAgICAgcGxheVRpdGxlLmlubmVySFRNTCA9IGAke3MudGl0bGV9YDtcclxuICAgICAgICAgICAgcGxheUFydGlzdC5pbm5lckhUTUwgPSBgJHtzLmFydGlzdH1gO1xyXG4gICAgICAgICAgICBwbGF5YmFyLmRhdGFzZXQuaWQgPSBgJHtzLmlkfWA7XHJcbiAgICAgICAgICAgIHBsYXliYXIuZGF0YXNldC5zb25nID0gYCR7cy5zb25nfWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIG9uUGFnZUxvYWRTZWxlY3RGaXJzdFNvbmcgKCkge1xyXG4gICAgbGV0IGZpcnN0U29uZyA9IG11c2ljRGF0YVswXTtcclxuICAgIGxldCBmaXJzdFNvbmdJZCA9IG11c2ljRGF0YVswXS5pZDtcclxuICAgIHJlbmRlclBsYXlCYXIoZmlyc3RTb25nSWQpO1xyXG4gICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Jy4vaWNvbnMvcGxheUJ0bi5zdmcnfScpYFxyXG4gICAgYXVkaW8uc3JjID0gbXVzaWNEYXRhWzBdLnNvbmc7XHJcbiAgICBhdWRpby52b2x1bWUgPSAuNTtcclxufVxyXG5mdW5jdGlvbiBwbGF5U29uZyAoc29uZywgSWQpIHtcclxuICAgIGF1ZGlvLnNyYyA9IHNvbmc7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgICBhZGRDdXJyU29uZ1RvUmVjZW50UGxheWxpc3QoSWQpO1xyXG4gICAgcmVuZGVyUmVjZW50bHlQbGF5ZWRTb25ncygpO1xyXG4gICAgdXBkYXRlVGltZXIgPSBzZXRJbnRlcnZhbCh1cGRhdGVTb25nUHJvZ3Jlc3NUaW1lLCA1MDApO1xyXG4gICAgcGF1c2VkID0gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlUGxheVBhdXNlICgpIHtcclxuICAgIGlmKHBhdXNlZCkge1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB1cGRhdGVUaW1lciA9IHNldEludGVydmFsKHVwZGF0ZVNvbmdQcm9ncmVzc1RpbWUsIDUwMCk7XHJcbiAgICAgICAgcGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Jy4vaWNvbnMvcGF1c2VCdG4uc3ZnJ30nKWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICBwYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCckeycuL2ljb25zL3BsYXlCdG4uc3ZnJ30nKWBcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjbGVhclVwZGF0ZVRpbWVyIChpbnRlcnZhbCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbn1cclxuZnVuY3Rpb24gcGxheU5leHRTb25nIChldnQpIHtcclxuICAgIGxldCBjdXJyU29uZ0lkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQ7XHJcbiAgICBwbGF5UGF1c2VCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHsnLi9pY29ucy9wYXVzZUJ0bi5zdmcnfScpYDtcclxuICAgIGlmIChzaHVmZmxlZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2h1ZmZsZWRNdXNpY0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNodWZmbGVkTXVzaWNEYXRhW2ldLmlkID09PSBjdXJyU29uZ0lkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc2h1ZmZsZWRNdXNpY0RhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmcgPSBzaHVmZmxlZE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5zb25nO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0lkID0gc2h1ZmZsZWRNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheVNvbmcobmV4dFNvbmcsIG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlCYXIobmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0luZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nID0gc2h1ZmZsZWRNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uc29uZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJZCA9IHNodWZmbGVkTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlTb25nKG5leHRTb25nLCBuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5QmFyKG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsTXVzaWNEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbE11c2ljRGF0YVtpXS5pZCA9PT0gY3VyclNvbmdJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IG9yaWdpbmFsTXVzaWNEYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nID0gb3JpZ2luYWxNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uc29uZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJZCA9IG9yaWdpbmFsTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlTb25nKG5leHRTb25nLCBuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5QmFyKG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZyA9IG9yaWdpbmFsTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLnNvbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSWQgPSBvcmlnaW5hbE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5U29uZyhuZXh0U29uZywgbmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheUJhcihuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwbGF5TmV3U29uZyAoZXZ0KSB7XHJcbiAgICBsZXQgbmV3U29uZyA9IGV2dC50YXJnZXQuZGF0YXNldC5zb25nO1xyXG4gICAgbGV0IG5ld1NvbmdJZCA9IGV2dC50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgcGxheVNvbmcobmV3U29uZywgbmV3U29uZ0lkKTtcclxuICAgIHJlbmRlclBsYXlCYXIobmV3U29uZ0lkKTtcclxuICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCckeycuL2ljb25zL3BhdXNlQnRuLnN2Zyd9JylgXHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0U29uZ0xlbmd0aFRpbWUoc2Vjb25kcykge1xyXG4gICAgbGV0IG1pbiA9IE1hdGguZmxvb3IoKHNlY29uZHMgLyA2MCkpO1xyXG4gICAgbGV0IHNlYyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAtIChtaW4gKiA2MCkpO1xyXG4gICAgaWYgKHNlYyA8IDEwKXsgXHJcbiAgICAgICAgc2VjICA9IGAwJHtzZWN9YDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYCR7bWlufToke3NlY31gO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVNvbmdQcm9ncmVzc1RpbWUgKCkge1xyXG4gICAgcHJvZ3Jlc3NCYXIubWF4ID0gY3VyclNvbmcuZHVyYXRpb247XHJcbiAgICBwcm9ncmVzc0Jhci52YWx1ZSA9IGN1cnJTb25nLmN1cnJlbnRUaW1lO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3NvbmctY3Vyci10aW1lJykuaW5uZXJIVE1MID0gZm9ybWF0U29uZ0xlbmd0aFRpbWUoY3VyclNvbmcuY3VycmVudFRpbWUpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3NvbmctdG90YWwtdGltZScpLmlubmVySFRNTCA9IGZvcm1hdFNvbmdMZW5ndGhUaW1lKGN1cnJTb25nLmR1cmF0aW9uKTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VTb25nUHJvZ3Jlc3NCYXIgKCkge1xyXG4gICAgY3VyclNvbmcuY3VycmVudFRpbWUgPSBwcm9ncmVzc0Jhci52YWx1ZTtcclxufVxyXG5mdW5jdGlvbiBmb3JtYXRWb2x1bWVWYWx1ZXMgKG51bWJlcikge1xyXG4gICAgbGV0IHZvbHVtZSA9IG51bWJlci8xMDA7XHJcbiAgICByZXR1cm4gdm9sdW1lO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVZvbHVtZSgpIHtcclxuICAgIGxldCBuZXdWb2x1bWUgPSB2b2x1bWVTbGlkZXIudmFsdWU7XHJcbiAgICBuZXdWb2x1bWUgPSBmb3JtYXRWb2x1bWVWYWx1ZXMobmV3Vm9sdW1lKTtcclxuICAgIGF1ZGlvLnZvbHVtZSA9IG5ld1ZvbHVtZTtcclxufVxyXG5mdW5jdGlvbiBzaG93Vm9sdW1lU2xpZGVyICgpIHtcclxuICAgIHZvbHVtZVNsaWRlckJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICB2b2x1bWVTbGlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgc2V0VGltZW91dChoaWRlVm9sdW1lU2xpZGVyLCA1MDAwKTtcclxufVxyXG5mdW5jdGlvbiBoaWRlVm9sdW1lU2xpZGVyICgpIHtcclxuICAgIHZvbHVtZVNsaWRlckJveC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICB2b2x1bWVTbGlkZXIuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcbmZ1bmN0aW9uIHNodWZmbGVNdXNpYyAoKSB7XHJcbiAgICBzaHVmZmxlZE11c2ljRGF0YSA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IG11c2ljRGF0YS5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xyXG4gICAgICAgIFttdXNpY0RhdGFbaV0sIG11c2ljRGF0YVtqXV0gPSBbbXVzaWNEYXRhW2pdLCBtdXNpY0RhdGFbaV1dO1xyXG4gICAgICAgIHNodWZmbGVkTXVzaWNEYXRhLnB1c2gobXVzaWNEYXRhW2ldKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB0b2dnbGVTaHVmZmxlQnRuICgpIHtcclxuICAgIGlmIChzaHVmZmxlZCkge1xyXG4gICAgICAgIHNodWZmbGVCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHsnLi9pY29ucy9zaHVmZmxlQnRuLnN2Zyd9JylgO1xyXG4gICAgICAgIHNodWZmbGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNodWZmbGVCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHsnLi9pY29ucy9zaHVmZmxlR3JleS5zdmcnfScpYDtcclxuICAgICAgICBzaHVmZmxlZCA9IHRydWU7XHJcbiAgICAgICAgc2h1ZmZsZU11c2ljKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQ3VyclNvbmdUb1JlY2VudFBsYXlsaXN0IChzb25nSWQpIHtcclxuICAgIGxldCBMc0RhdGEgPSBnZXREYXRhKExPQ0FMU1RPUkFHRV9LRVkpO1xyXG4gICAgbGV0IHBsYXlsaXN0ID0gTHNEYXRhLnJlY2VudGx5UGxheWVkTXVzaWNEYXRhIHx8IFtdO1xyXG4gICAgbXVzaWNEYXRhLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgaWYocy5pZCA9PT0gc29uZ0lkKSB7XHJcbiAgICAgICAgICAgIHBsYXlsaXN0LnVuc2hpZnQocyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBpZihwbGF5bGlzdC5sZW5ndGggPiA5KSB7XHJcbiAgICAgICAgcGxheWxpc3Quc3BsaWNlKDksIDEpO1xyXG4gICAgfVxyXG4gICAgTHNEYXRhLnJlY2VudGx5UGxheWVkTXVzaWNEYXRhID0gcGxheWxpc3Q7XHJcbiAgICBzYXZlRGF0YShMc0RhdGEsIExPQ0FMU1RPUkFHRV9LRVkpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==