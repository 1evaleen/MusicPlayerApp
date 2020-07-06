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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data/index.js":
/*!***********************!*\
  !*** ./data/index.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const imagesPath = '../data/images';
const audioPath = '../data/audio';
const musicData = [{
  id: 'a',
  title: 'Back To Black',
  artist: 'Amy Winehouse',
  song: `${audioPath}/Amy-Winehouse-Back-To-Black.mp3`,
  image: `${imagesPath}/back-to-black.jfif`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'b',
  title: 'Bella Ciao',
  artist: 'Original',
  song: `${audioPath}/Bella-Ciao-ORIGINALE.mp3`,
  image: `${imagesPath}/Money-Heist-Mask.jpg`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'c',
  title: 'Hound Dog',
  artist: 'Elvis Presley',
  song: `${audioPath}/Elvis-Presley-hound-dog.mp3`,
  image: `${imagesPath}/hound-dog.jpg`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'd',
  title: 'Poker Face',
  artist: 'Lady Gaga',
  song: `${audioPath}/lady-gaga-poker-face.mp3`,
  image: `${imagesPath}/poker-face.png`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'e',
  title: 'Jolene',
  artist: 'Miley Cyrus',
  song: `${audioPath}/MileyCyrusJolene.mp3`,
  image: `${imagesPath}/jolene.jfif`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'f',
  title: 'Pretty Woman',
  artist: 'Roy Orbison',
  song: `${audioPath}/roy-orbison-pretty-woman.mp3`,
  image: `${imagesPath}/roy_orbison_pretty_woman.jpg`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'g',
  title: 'Wind of Change',
  artist: 'Scorpions',
  song: `${audioPath}/scorpions-wind-of-change.mp3`,
  image: `${imagesPath}/Scorpions-wind-video.jpg`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'h',
  title: 'Shallow',
  artist: 'A Star is Born',
  song: `${audioPath}/Shallow-fromAStarIsBorn.mp3`,
  image: `${imagesPath}/shallow.jfif`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'i',
  title: 'Sound of Silence',
  artist: 'Simon and Garfunkel',
  song: `${audioPath}/simon-garfunkel-sound-of-silence.mp3`,
  image: `${imagesPath}/simon-and-garfunkel.jpg`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}, {
  id: 'j',
  title: 'Stressed Out',
  artist: 'Twenty One Pilots',
  song: `${audioPath}/twentyonepilotsStressedOut.mp3`,
  image: `${imagesPath}/stressed-out.png`,
  details: 'details about the song to be added here - perhaps a summary or details about the artist and version'
}];
/* harmony default export */ __webpack_exports__["default"] = (musicData);

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data/index */ "./data/index.js");
/* harmony import */ var _src_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/utils */ "./src/utils.js");


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
let originalMusicData = _data_index__WEBPACK_IMPORTED_MODULE_0__["default"].slice();
let LOCALSTORAGE_KEY = 'musicApp';
const iconsPath = '../icons';
init();

function init() {
  renderRecentlyPlayedSongs();
  renderPlaylist(_data_index__WEBPACK_IMPORTED_MODULE_0__["default"]);
  evtHandlers();
  onPageLoadSelectFirstSong();
  shuffleBtn.style.backgroundImage = `url('${iconsPath + '/shuffleBtn.svg'}')`;
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
  progressBar.addEventListener('change', () => currSong.currentTime = progressBar.value);
  volumeSlider.addEventListener('change', () => {
    audio.volume = formatVolumeValues(volumeSlider.value);
  });
}

function openModal(evt) {
  let id = evt.target.parentElement.dataset.id;
  let imgEl = document.querySelector('.modal__image-wrapper__img');
  let titleEl = document.querySelector('.modal__title');
  let artistEl = document.querySelector('.modal__artist');
  let detailsEl = document.querySelector('.modal__song-details');
  modal.classList.remove('hide');
  _data_index__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(s => {
    if (s.id === id) {
      imgEl.style.backgroundImage = `url('${s.image}')`;
      titleEl.innerHTML = `${s.title}`;
      artistEl.innerHTML = `${s.artist}`;
      detailsEl.innerHTML = `${s.details}`;
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
  let LsData = _src_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getData(LOCALSTORAGE_KEY);
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
  _data_index__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(s => {
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
  let firstSong = _data_index__WEBPACK_IMPORTED_MODULE_0__["default"][0];
  let firstSongId = _data_index__WEBPACK_IMPORTED_MODULE_0__["default"][0].id;
  renderPlayBar(firstSongId);
  playPauseBtn.style.backgroundImage = `url('${iconsPath + '/playBtn.svg'}')`;
  audio.src = _data_index__WEBPACK_IMPORTED_MODULE_0__["default"][0].song;
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
    playPauseBtn.style.backgroundImage = `url('${iconsPath + '/pauseBtn.svg'}')`;
  } else {
    audio.pause();
    clearUpdateTimer(updateTimer);
    paused = true;
    playPauseBtn.style.backgroundImage = `url('${iconsPath + '/playBtn.svg'}')`;
  }
}

function clearUpdateTimer(interval) {
  clearInterval(interval);
}

function playNextSong(evt) {
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

function playNewSong(evt) {
  let newSong = evt.target.dataset.song;
  let newSongId = evt.target.dataset.id;
  clearUpdateTimer(updateTimer);
  playSong(newSong, newSongId);
  renderPlayBar(newSongId);
  playPauseBtn.style.backgroundImage = `url('${iconsPath + '/pauseBtn.svg'}')`;
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

function formatVolumeValues(number) {
  let volume = number / 100;
  return volume;
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

  for (let i = _data_index__WEBPACK_IMPORTED_MODULE_0__["default"].length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [_data_index__WEBPACK_IMPORTED_MODULE_0__["default"][i], _data_index__WEBPACK_IMPORTED_MODULE_0__["default"][j]] = [_data_index__WEBPACK_IMPORTED_MODULE_0__["default"][j], _data_index__WEBPACK_IMPORTED_MODULE_0__["default"][i]];
    shuffledMusicData.push(_data_index__WEBPACK_IMPORTED_MODULE_0__["default"][i]);
  }
}

function toggleShuffleBtn() {
  if (shuffled) {
    shuffleBtn.style.backgroundImage = `url('${iconsPath + '/shuffleBtn.svg'}')`;
    shuffled = false;
  } else {
    shuffleBtn.style.backgroundImage = `url('${iconsPath + '/shuffleGrey.svg'}')`;
    shuffled = true;
    shuffleMusic();
  }
}

function addCurrSongToRecentPlaylist(songId) {
  let LsData = _src_utils__WEBPACK_IMPORTED_MODULE_1__["default"].getData(LOCALSTORAGE_KEY);
  let playlist = LsData.recentlyPlayedMusicData || [];
  _data_index__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(s => {
    if (s.id === songId) {
      playlist.unshift(s);
    }
  });

  if (playlist.length > 9) {
    playlist.splice(9, 1);
  }

  LsData.recentlyPlayedMusicData = playlist;
  _src_utils__WEBPACK_IMPORTED_MODULE_1__["default"].saveData(LsData, LOCALSTORAGE_KEY);
}

/***/ }),

/***/ "./src/utils.js":
/*!**********************!*\
  !*** ./src/utils.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class LocalCache {
  static saveData(playlist, key) {
    localStorage.setItem(key, JSON.stringify(playlist));
  }

  static getData(key) {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    } else {
      return {};
    }
  }

}

/* harmony default export */ __webpack_exports__["default"] = (LocalCache);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiaW1hZ2VzUGF0aCIsImF1ZGlvUGF0aCIsIm11c2ljRGF0YSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJzb25nIiwiaW1hZ2UiLCJkZXRhaWxzIiwicGxheWxpc3RXcmFwcGVyRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5YmFyIiwicGxheVBhdXNlQnRuIiwicGxheU5leHRCdG4iLCJwcm9ncmVzc0JhciIsInZvbHVtZUJ0biIsInZvbHVtZVNsaWRlckJveCIsInZvbHVtZVNsaWRlciIsInNodWZmbGVCdG4iLCJtb2RhbCIsIm1vZGFsUGxheUJ0biIsIm1vZGFsQ2xvc2VCdG4iLCJjdXJyU29uZyIsImF1ZGlvIiwicmVjZW50U29uZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWNlbnRseVBsYXllZCIsInBhdXNlZCIsInNodWZmbGVkIiwidXBkYXRlVGltZXIiLCJzaHVmZmxlZE11c2ljRGF0YSIsIm9yaWdpbmFsTXVzaWNEYXRhIiwic2xpY2UiLCJMT0NBTFNUT1JBR0VfS0VZIiwiaWNvbnNQYXRoIiwiaW5pdCIsInJlbmRlclJlY2VudGx5UGxheWVkU29uZ3MiLCJyZW5kZXJQbGF5bGlzdCIsImV2dEhhbmRsZXJzIiwib25QYWdlTG9hZFNlbGVjdEZpcnN0U29uZyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicGxheU5ld1NvbmciLCJ0b2dnbGVQbGF5UGF1c2UiLCJwbGF5TmV4dFNvbmciLCJzaG93Vm9sdW1lU2xpZGVyIiwidG9nZ2xlU2h1ZmZsZUJ0biIsImN1cnJlbnRUaW1lIiwidmFsdWUiLCJ2b2x1bWUiLCJmb3JtYXRWb2x1bWVWYWx1ZXMiLCJldnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZGF0YXNldCIsImltZ0VsIiwidGl0bGVFbCIsImFydGlzdEVsIiwiZGV0YWlsc0VsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicyIsImlubmVySFRNTCIsImFkZCIsImJ1aWxkUmVjZW50bHlQbGF5ZWRTb25nSXRlbSIsInJlY2VudFNvbmdFbCIsImNyZWF0ZUVsZW1lbnQiLCJyZWNJbWdFbCIsInJlY1RpdGxlRWwiLCJyZWNUaXRsZSIsImNyZWF0ZVRleHROb2RlIiwicmVjQXJ0RWwiLCJyZWNBcnRpc3QiLCJzcmMiLCJhcHBlbmRDaGlsZCIsImJ1aWxkUGxheWxpc3RTb25nSXRlbSIsInBsYXlsaXN0U29uZ0VsIiwic29uZ0ltZ0VsIiwic29uZ1RpdGxlRWwiLCJzb25nVGl0bGUiLCJzb25nQXJ0RWwiLCJzb25nQXJ0aXN0IiwiTHNEYXRhIiwibG9jYWxDYWNoZSIsImdldERhdGEiLCJwbGF5bGlzdCIsInJlY2VudGx5UGxheWVkTXVzaWNEYXRhIiwicmVuZGVyUGxheUJhciIsInNvbmdJZCIsInBsYXlJbWciLCJwbGF5VGl0bGUiLCJwbGF5QXJ0aXN0IiwiZmlyc3RTb25nIiwiZmlyc3RTb25nSWQiLCJwbGF5U29uZyIsIklkIiwicGxheSIsImFkZEN1cnJTb25nVG9SZWNlbnRQbGF5bGlzdCIsInNldEludGVydmFsIiwidXBkYXRlU29uZ1Byb2dyZXNzVGltZSIsInBhdXNlIiwiY2xlYXJVcGRhdGVUaW1lciIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImN1cnJTb25nSWQiLCJpIiwibGVuZ3RoIiwibmV4dFNvbmdJbmRleCIsIm5leHRTb25nIiwibmV4dFNvbmdJZCIsIm5ld1NvbmciLCJuZXdTb25nSWQiLCJmb3JtYXRTb25nTGVuZ3RoVGltZSIsInNlY29uZHMiLCJtaW4iLCJNYXRoIiwiZmxvb3IiLCJzZWMiLCJtYXgiLCJkdXJhdGlvbiIsIm51bWJlciIsInNldFRpbWVvdXQiLCJoaWRlVm9sdW1lU2xpZGVyIiwic2h1ZmZsZU11c2ljIiwiaiIsInJhbmRvbSIsInB1c2giLCJ1bnNoaWZ0Iiwic3BsaWNlIiwic2F2ZURhdGEiLCJMb2NhbENhY2hlIiwia2V5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsTUFBTUEsVUFBVSxHQUFHLGdCQUFuQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxlQUFsQjtBQUdBLE1BQU1DLFNBQVMsR0FBRyxDQUNkO0FBQ0lDLElBQUUsRUFBRSxHQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFFBQU0sRUFBRSxlQUhaO0FBSUlDLE1BQUksRUFBRyxHQUFFTCxTQUFVLGtDQUp2QjtBQUtJTSxPQUFLLEVBQUcsR0FBRVAsVUFBVyxxQkFMekI7QUFNSVEsU0FBTyxF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QUM4QyxRQUFYLENBQW9CL0MsTUFBcEIsRUFBNEJyRCxnQkFBNUI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNqU0Q7QUFBQSxNQUFNcUcsVUFBTixDQUFpQjtBQUNiLFNBQU9ELFFBQVAsQ0FBaUI1QyxRQUFqQixFQUEyQjhDLEdBQTNCLEVBQWdDO0FBQzVCQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCRixHQUFyQixFQUEwQkcsSUFBSSxDQUFDQyxTQUFMLENBQWVsRCxRQUFmLENBQTFCO0FBQ0g7O0FBQ0QsU0FBT0QsT0FBUCxDQUFnQitDLEdBQWhCLEVBQXFCO0FBQ2pCLFVBQU1LLElBQUksR0FBR0osWUFBWSxDQUFDSyxPQUFiLENBQXFCTixHQUFyQixDQUFiOztBQUNBLFFBQUlLLElBQUosRUFBVTtBQUNOLGFBQU9GLElBQUksQ0FBQ0ksS0FBTCxDQUFXRixJQUFYLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLEVBQVA7QUFDSDtBQUNKOztBQVhZOztBQWNGTix5RUFBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiY29uc3QgaW1hZ2VzUGF0aCA9ICcuLi9kYXRhL2ltYWdlcyc7XHJcbmNvbnN0IGF1ZGlvUGF0aCA9ICcuLi9kYXRhL2F1ZGlvJztcclxuXHJcblxyXG5jb25zdCBtdXNpY0RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdhJyxcclxuICAgICAgICB0aXRsZTogJ0JhY2sgVG8gQmxhY2snLFxyXG4gICAgICAgIGFydGlzdDogJ0FteSBXaW5laG91c2UnLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vQW15LVdpbmVob3VzZS1CYWNrLVRvLUJsYWNrLm1wM2AsXHJcbiAgICAgICAgaW1hZ2U6IGAke2ltYWdlc1BhdGh9L2JhY2stdG8tYmxhY2suamZpZmAsXHJcbiAgICAgICAgZGV0YWlsczogJ2RldGFpbHMgYWJvdXQgdGhlIHNvbmcgdG8gYmUgYWRkZWQgaGVyZSAtIHBlcmhhcHMgYSBzdW1tYXJ5IG9yIGRldGFpbHMgYWJvdXQgdGhlIGFydGlzdCBhbmQgdmVyc2lvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdiJyxcclxuICAgICAgICB0aXRsZTogJ0JlbGxhIENpYW8nLFxyXG4gICAgICAgIGFydGlzdDogJ09yaWdpbmFsJyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L0JlbGxhLUNpYW8tT1JJR0lOQUxFLm1wM2AsXHJcbiAgICAgICAgaW1hZ2U6IGAke2ltYWdlc1BhdGh9L01vbmV5LUhlaXN0LU1hc2suanBnYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2MnLFxyXG4gICAgICAgIHRpdGxlOiAnSG91bmQgRG9nJyxcclxuICAgICAgICBhcnRpc3Q6ICdFbHZpcyBQcmVzbGV5JyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L0VsdmlzLVByZXNsZXktaG91bmQtZG9nLm1wM2AsXHJcbiAgICAgICAgaW1hZ2U6IGAke2ltYWdlc1BhdGh9L2hvdW5kLWRvZy5qcGdgLFxyXG4gICAgICAgIGRldGFpbHM6ICdkZXRhaWxzIGFib3V0IHRoZSBzb25nIHRvIGJlIGFkZGVkIGhlcmUgLSBwZXJoYXBzIGEgc3VtbWFyeSBvciBkZXRhaWxzIGFib3V0IHRoZSBhcnRpc3QgYW5kIHZlcnNpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnZCcsXHJcbiAgICAgICAgdGl0bGU6ICdQb2tlciBGYWNlJyxcclxuICAgICAgICBhcnRpc3Q6ICdMYWR5IEdhZ2EnLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vbGFkeS1nYWdhLXBva2VyLWZhY2UubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vcG9rZXItZmFjZS5wbmdgLFxyXG4gICAgICAgIGRldGFpbHM6ICdkZXRhaWxzIGFib3V0IHRoZSBzb25nIHRvIGJlIGFkZGVkIGhlcmUgLSBwZXJoYXBzIGEgc3VtbWFyeSBvciBkZXRhaWxzIGFib3V0IHRoZSBhcnRpc3QgYW5kIHZlcnNpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnZScsXHJcbiAgICAgICAgdGl0bGU6ICdKb2xlbmUnLFxyXG4gICAgICAgIGFydGlzdDogJ01pbGV5IEN5cnVzJyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L01pbGV5Q3lydXNKb2xlbmUubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vam9sZW5lLmpmaWZgLFxyXG4gICAgICAgIGRldGFpbHM6ICdkZXRhaWxzIGFib3V0IHRoZSBzb25nIHRvIGJlIGFkZGVkIGhlcmUgLSBwZXJoYXBzIGEgc3VtbWFyeSBvciBkZXRhaWxzIGFib3V0IHRoZSBhcnRpc3QgYW5kIHZlcnNpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnZicsXHJcbiAgICAgICAgdGl0bGU6ICdQcmV0dHkgV29tYW4nLFxyXG4gICAgICAgIGFydGlzdDogJ1JveSBPcmJpc29uJyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L3JveS1vcmJpc29uLXByZXR0eS13b21hbi5tcDNgLFxyXG4gICAgICAgIGltYWdlOiBgJHtpbWFnZXNQYXRofS9yb3lfb3JiaXNvbl9wcmV0dHlfd29tYW4uanBnYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2cnLFxyXG4gICAgICAgIHRpdGxlOiAnV2luZCBvZiBDaGFuZ2UnLFxyXG4gICAgICAgIGFydGlzdDogJ1Njb3JwaW9ucycsXHJcbiAgICAgICAgc29uZzogYCR7YXVkaW9QYXRofS9zY29ycGlvbnMtd2luZC1vZi1jaGFuZ2UubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vU2NvcnBpb25zLXdpbmQtdmlkZW8uanBnYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2gnLFxyXG4gICAgICAgIHRpdGxlOiAnU2hhbGxvdycsXHJcbiAgICAgICAgYXJ0aXN0OiAnQSBTdGFyIGlzIEJvcm4nLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vU2hhbGxvdy1mcm9tQVN0YXJJc0Jvcm4ubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vc2hhbGxvdy5qZmlmYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2knLFxyXG4gICAgICAgIHRpdGxlOiAnU291bmQgb2YgU2lsZW5jZScsXHJcbiAgICAgICAgYXJ0aXN0OiAnU2ltb24gYW5kIEdhcmZ1bmtlbCcsXHJcbiAgICAgICAgc29uZzogYCR7YXVkaW9QYXRofS9zaW1vbi1nYXJmdW5rZWwtc291bmQtb2Ytc2lsZW5jZS5tcDNgLFxyXG4gICAgICAgIGltYWdlOiBgJHtpbWFnZXNQYXRofS9zaW1vbi1hbmQtZ2FyZnVua2VsLmpwZ2AsXHJcbiAgICAgICAgZGV0YWlsczogJ2RldGFpbHMgYWJvdXQgdGhlIHNvbmcgdG8gYmUgYWRkZWQgaGVyZSAtIHBlcmhhcHMgYSBzdW1tYXJ5IG9yIGRldGFpbHMgYWJvdXQgdGhlIGFydGlzdCBhbmQgdmVyc2lvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdqJyxcclxuICAgICAgICB0aXRsZTogJ1N0cmVzc2VkIE91dCcsXHJcbiAgICAgICAgYXJ0aXN0OiAnVHdlbnR5IE9uZSBQaWxvdHMnLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vdHdlbnR5b25lcGlsb3RzU3RyZXNzZWRPdXQubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vc3RyZXNzZWQtb3V0LnBuZ2AsXHJcbiAgICAgICAgZGV0YWlsczogJ2RldGFpbHMgYWJvdXQgdGhlIHNvbmcgdG8gYmUgYWRkZWQgaGVyZSAtIHBlcmhhcHMgYSBzdW1tYXJ5IG9yIGRldGFpbHMgYWJvdXQgdGhlIGFydGlzdCBhbmQgdmVyc2lvbidcclxuICAgIH0sXHJcbiAgICBcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXVzaWNEYXRhOyIsImltcG9ydCBtdXNpY0RhdGEgZnJvbSAnLi4vZGF0YS9pbmRleCc7XHJcbmltcG9ydCBsb2NhbENhY2hlIGZyb20gJy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBwbGF5bGlzdFdyYXBwZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5bGlzdCcpO1xyXG5jb25zdCBwbGF5YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXInKTtcclxuY29uc3QgcGxheVBhdXNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3BsYXktcGF1c2UtYnRuJyk7XHJcbmNvbnN0IHBsYXlOZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3BsYXktbmV4dC1idG4nKTtcclxuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fc29uZy1wcm9ncmVzcy1iYXInKTtcclxuY29uc3Qgdm9sdW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3ZvbHVtZS1idG4nKTtcclxuY29uc3Qgdm9sdW1lU2xpZGVyQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3ZvbHVtZS1zbGlkZXItYm94Jyk7XHJcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX192b2x1bWUtc2xpZGVyLWJveF9fc2xpZGVyJyk7XHJcbmNvbnN0IHNodWZmbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fc2h1ZmZsZS1idG4nKTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgbW9kYWxQbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZS13cmFwcGVyX19pbWdfX3BsYXktYnRuJyk7XHJcbmNvbnN0IG1vZGFsQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlLWJ0bicpO1xyXG5jb25zdCBjdXJyU29uZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyLXNvbmcnKVxyXG5jb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2F1ZGlvJyk7XHJcbmNvbnN0IHJlY2VudFNvbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjLXNvbmcnKTtcclxubGV0IHJlY2VudGx5UGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VudGx5LXBsYXllZC1zb25ncycpO1xyXG5sZXQgcGF1c2VkID0gdHJ1ZTtcclxubGV0IHNodWZmbGVkID0gZmFsc2U7XHJcbmxldCB1cGRhdGVUaW1lcjtcclxubGV0IHNodWZmbGVkTXVzaWNEYXRhID0gW107XHJcbmxldCBvcmlnaW5hbE11c2ljRGF0YSA9IG11c2ljRGF0YS5zbGljZSgpO1xyXG5sZXQgTE9DQUxTVE9SQUdFX0tFWSA9ICdtdXNpY0FwcCc7XHJcbmNvbnN0IGljb25zUGF0aCA9ICcuLi9pY29ucyc7XHJcblxyXG5pbml0KCk7XHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgcmVuZGVyUmVjZW50bHlQbGF5ZWRTb25ncygpO1xyXG4gICAgcmVuZGVyUGxheWxpc3QobXVzaWNEYXRhKTtcclxuICAgIGV2dEhhbmRsZXJzKCk7XHJcbiAgICBvblBhZ2VMb2FkU2VsZWN0Rmlyc3RTb25nKCk7XHJcbiAgICBzaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9zaHVmZmxlQnRuLnN2Zyd9JylgXHJcbn1cclxuZnVuY3Rpb24gZXZ0SGFuZGxlcnMgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50JykuZm9yRWFjaChzb25nID0+IHtcclxuICAgICAgICBzb25nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWxpc3RfX3NvbmdfX2VsZW1lbnQnKS5mb3JFYWNoKHNvbmcgPT4ge1xyXG4gICAgICAgIHNvbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbiAgICB9KTtcclxuICAgIG1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgIG1vZGFsUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlOZXdTb25nKTtcclxuICAgIHBsYXlQYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBsYXlQYXVzZSk7XHJcbiAgICBwbGF5TmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlOZXh0U29uZyk7XHJcbiAgICB2b2x1bWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Vm9sdW1lU2xpZGVyKTtcclxuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRTb25nKTtcclxuICAgIHNodWZmbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaHVmZmxlQnRuKTtcclxuICAgIHByb2dyZXNzQmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IGN1cnJTb25nLmN1cnJlbnRUaW1lID0gcHJvZ3Jlc3NCYXIudmFsdWUpO1xyXG4gICAgdm9sdW1lU2xpZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHsgYXVkaW8udm9sdW1lID0gZm9ybWF0Vm9sdW1lVmFsdWVzKHZvbHVtZVNsaWRlci52YWx1ZSl9KVxyXG59XHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbCAoZXZ0KSB7XHJcbiAgICBsZXQgaWQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZFxyXG4gICAgbGV0IGltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZS13cmFwcGVyX19pbWcnKTtcclxuICAgIGxldCB0aXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpO1xyXG4gICAgbGV0IGFydGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hcnRpc3QnKTtcclxuICAgIGxldCBkZXRhaWxzRWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3NvbmctZGV0YWlscycpO1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgbXVzaWNEYXRhLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgaWYocy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgaW1nRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzLmltYWdlfScpYDtcclxuICAgICAgICAgICAgdGl0bGVFbC5pbm5lckhUTUwgPSBgJHtzLnRpdGxlfWA7XHJcbiAgICAgICAgICAgIGFydGlzdEVsLmlubmVySFRNTCA9IGAke3MuYXJ0aXN0fWA7XHJcbiAgICAgICAgICAgIGRldGFpbHNFbC5pbm5lckhUTUwgPSBgJHtzLmRldGFpbHN9YDtcclxuICAgICAgICAgICAgbW9kYWxQbGF5QnRuLmRhdGFzZXQuc29uZyA9IGAke3Muc29uZ31gO1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlCdG4uZGF0YXNldC5pZCA9IGAke3MuaWR9YFxyXG4gICAgICAgIH07XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIGNsb3NlTW9kYWwgKCkge1xyXG4gICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkUmVjZW50bHlQbGF5ZWRTb25nSXRlbSAoaWQsIHRpdGxlLCBhcnRpc3QsIHNvbmcsIGltYWdlKSB7XHJcbiAgICBsZXQgcmVjZW50U29uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmVjSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByZWNUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmVjVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XHJcbiAgICBsZXQgcmVjQXJ0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByZWNBcnRpc3QgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnRpc3QpO1xyXG4gICAgcmVjZW50U29uZ0VsLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgIHJlY2VudFNvbmdFbC5kYXRhc2V0LnNyYyA9IGB1cmwoJyR7c29uZ30nKWA7XHJcbiAgICByZWNJbWdFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcclxuICAgIHJlY2VudFNvbmdFbC5jbGFzc0xpc3QuYWRkKCdyZWNlbnRseS1wbGF5ZWQtc29uZ3NfX3NvbmctZWxlbWVudCcpO1xyXG4gICAgcmVjSW1nRWwuY2xhc3NMaXN0LmFkZCgncmVjZW50bHktcGxheWVkLXNvbmdzX19zb25nLWVsZW1lbnRfX2ltZycpO1xyXG4gICAgcmVjVGl0bGVFbC5jbGFzc0xpc3QuYWRkKCdyZWNlbnRseS1wbGF5ZWQtc29uZ3NfX3NvbmctZWxlbWVudF9fdGl0bGUnKTtcclxuICAgIHJlY0FydEVsLmNsYXNzTGlzdC5hZGQoJ3JlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50X19hcnRpc3QnKTtcclxuICAgIHJlY0FydEVsLmFwcGVuZENoaWxkKHJlY0FydGlzdCk7XHJcbiAgICByZWNUaXRsZUVsLmFwcGVuZENoaWxkKHJlY1RpdGxlKTtcclxuICAgIHJlY2VudFNvbmdFbC5hcHBlbmRDaGlsZChyZWNJbWdFbCk7XHJcbiAgICByZWNlbnRTb25nRWwuYXBwZW5kQ2hpbGQocmVjVGl0bGVFbCk7XHJcbiAgICByZWNlbnRTb25nRWwuYXBwZW5kQ2hpbGQocmVjQXJ0RWwpO1xyXG4gICAgcmV0dXJuIHJlY2VudFNvbmdFbDtcclxufVxyXG5mdW5jdGlvbiBidWlsZFBsYXlsaXN0U29uZ0l0ZW0gKGlkLCB0aXRsZSwgYXJ0aXN0LCBzb25nLCBpbWFnZSkge1xyXG4gICAgbGV0IHBsYXlsaXN0U29uZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ0ltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ1RpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBzb25nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0aXRsZSk7XHJcbiAgICBsZXQgc29uZ0FydEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ0FydGlzdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFydGlzdCk7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5kYXRhc2V0LnNyYyA9IGB1cmwoJyR7c29uZ30nKWA7XHJcbiAgICBzb25nSW1nRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZX0nKWA7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5jbGFzc0xpc3QuYWRkKCdwbGF5bGlzdF9fc29uZ19fZWxlbWVudCcpO1xyXG4gICAgc29uZ0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50X19pbWcnKTtcclxuICAgIHNvbmdUaXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50X190aXRsZScpO1xyXG4gICAgc29uZ0FydEVsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50X19hcnRpc3QnKTtcclxuICAgIHNvbmdBcnRFbC5hcHBlbmRDaGlsZChzb25nQXJ0aXN0KTtcclxuICAgIHNvbmdUaXRsZUVsLmFwcGVuZENoaWxkKHNvbmdUaXRsZSk7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5hcHBlbmRDaGlsZChzb25nSW1nRWwpO1xyXG4gICAgcGxheWxpc3RTb25nRWwuYXBwZW5kQ2hpbGQoc29uZ1RpdGxlRWwpO1xyXG4gICAgcGxheWxpc3RTb25nRWwuYXBwZW5kQ2hpbGQoc29uZ0FydEVsKTtcclxuICAgIHJldHVybiBwbGF5bGlzdFNvbmdFbDtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJSZWNlbnRseVBsYXllZFNvbmdzICgpIHtcclxuICAgIGxldCBMc0RhdGEgPSBsb2NhbENhY2hlLmdldERhdGEoTE9DQUxTVE9SQUdFX0tFWSk7XHJcbiAgICBsZXQgcGxheWxpc3QgPSBMc0RhdGEucmVjZW50bHlQbGF5ZWRNdXNpY0RhdGEgfHwgW107XHJcbiAgICByZWNlbnRseVBsYXllZC5pbm5lckhUTUwgPSAnJztcclxuICAgIHBsYXlsaXN0LmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgcmVjZW50bHlQbGF5ZWQuYXBwZW5kQ2hpbGQoYnVpbGRSZWNlbnRseVBsYXllZFNvbmdJdGVtKHMuaWQsIHMudGl0bGUsIHMuYXJ0aXN0LCBzLnNvbmcsIHMuaW1hZ2UpKTtcclxuICAgIH0pO1xyXG4gICAgcmVjZW50U29uZy5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUGxheWxpc3QgKG11c2ljRGF0YSkge1xyXG4gICAgbXVzaWNEYXRhLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgcGxheWxpc3RXcmFwcGVyRWwuYXBwZW5kQ2hpbGQoYnVpbGRQbGF5bGlzdFNvbmdJdGVtKHMuaWQsIHMudGl0bGUsIHMuYXJ0aXN0LCBzLnNvbmcsIHMuaW1hZ2UpKVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiByZW5kZXJQbGF5QmFyIChzb25nSWQpIHtcclxuICAgIGxldCBwbGF5SW1nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX2ltZycpO1xyXG4gICAgbGV0IHBsYXlUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX190aXRsZScpO1xyXG4gICAgbGV0IHBsYXlBcnRpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fYXJ0aXN0Jyk7XHJcbiAgICBtdXNpY0RhdGEuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBpZihzLmlkID09PSBzb25nSWQpIHtcclxuICAgICAgICAgICAgcGxheUltZy5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke3MuaW1hZ2V9JylgO1xyXG4gICAgICAgICAgICBwbGF5VGl0bGUuaW5uZXJIVE1MID0gYCR7cy50aXRsZX1gO1xyXG4gICAgICAgICAgICBwbGF5QXJ0aXN0LmlubmVySFRNTCA9IGAke3MuYXJ0aXN0fWA7XHJcbiAgICAgICAgICAgIHBsYXliYXIuZGF0YXNldC5pZCA9IGAke3MuaWR9YDtcclxuICAgICAgICAgICAgcGxheWJhci5kYXRhc2V0LnNvbmcgPSBgJHtzLnNvbmd9YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gb25QYWdlTG9hZFNlbGVjdEZpcnN0U29uZyAoKSB7XHJcbiAgICBsZXQgZmlyc3RTb25nID0gbXVzaWNEYXRhWzBdO1xyXG4gICAgbGV0IGZpcnN0U29uZ0lkID0gbXVzaWNEYXRhWzBdLmlkO1xyXG4gICAgcmVuZGVyUGxheUJhcihmaXJzdFNvbmdJZCk7XHJcbiAgICBwbGF5UGF1c2VCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3BsYXlCdG4uc3ZnJ30nKWBcclxuICAgIGF1ZGlvLnNyYyA9IG11c2ljRGF0YVswXS5zb25nO1xyXG4gICAgYXVkaW8udm9sdW1lID0gLjU7XHJcbn1cclxuZnVuY3Rpb24gcGxheVNvbmcgKHNvbmcsIElkKSB7XHJcbiAgICBhdWRpby5zcmMgPSBzb25nO1xyXG4gICAgYXVkaW8ucGxheSgpO1xyXG4gICAgYWRkQ3VyclNvbmdUb1JlY2VudFBsYXlsaXN0KElkKTtcclxuICAgIHJlbmRlclJlY2VudGx5UGxheWVkU29uZ3MoKTtcclxuICAgIHVwZGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwodXBkYXRlU29uZ1Byb2dyZXNzVGltZSwgNTAwKTtcclxuICAgIHBhdXNlZCA9IGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVBsYXlQYXVzZSAoKSB7XHJcbiAgICBpZihwYXVzZWQpIHtcclxuICAgICAgICBhdWRpby5wbGF5KCk7XHJcbiAgICAgICAgdXBkYXRlVGltZXIgPSBzZXRJbnRlcnZhbCh1cGRhdGVTb25nUHJvZ3Jlc3NUaW1lLCA1MDApO1xyXG4gICAgICAgIHBhdXNlZCA9IGZhbHNlO1xyXG4gICAgICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvcGF1c2VCdG4uc3ZnJ30nKWBcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICBwYXVzZWQgPSB0cnVlO1xyXG4gICAgICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvcGxheUJ0bi5zdmcnfScpYFxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNsZWFyVXBkYXRlVGltZXIgKGludGVydmFsKSB7XHJcbiAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxufVxyXG5mdW5jdGlvbiBwbGF5TmV4dFNvbmcgKGV2dCkge1xyXG4gICAgbGV0IGN1cnJTb25nSWQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZDtcclxuICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvcGF1c2VCdG4uc3ZnJ30nKWA7XHJcbiAgICBpZiAoc2h1ZmZsZWQpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNodWZmbGVkTXVzaWNEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChzaHVmZmxlZE11c2ljRGF0YVtpXS5pZCA9PT0gY3VyclNvbmdJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IHNodWZmbGVkTXVzaWNEYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nID0gc2h1ZmZsZWRNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uc29uZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJZCA9IHNodWZmbGVkTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlTb25nKG5leHRTb25nLCBuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5QmFyKG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZyA9IHNodWZmbGVkTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLnNvbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSWQgPSBzaHVmZmxlZE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5U29uZyhuZXh0U29uZywgbmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheUJhcihuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvcmlnaW5hbE11c2ljRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAob3JpZ2luYWxNdXNpY0RhdGFbaV0uaWQgPT09IGN1cnJTb25nSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSBvcmlnaW5hbE11c2ljRGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZyA9IG9yaWdpbmFsTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLnNvbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSWQgPSBvcmlnaW5hbE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5U29uZyhuZXh0U29uZywgbmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheUJhcihuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSW5kZXggPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmcgPSBvcmlnaW5hbE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5zb25nO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0lkID0gb3JpZ2luYWxNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheVNvbmcobmV4dFNvbmcsIG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlCYXIobmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcGxheU5ld1NvbmcgKGV2dCkge1xyXG4gICAgbGV0IG5ld1NvbmcgPSBldnQudGFyZ2V0LmRhdGFzZXQuc29uZztcclxuICAgIGxldCBuZXdTb25nSWQgPSBldnQudGFyZ2V0LmRhdGFzZXQuaWQ7XHJcbiAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgIHBsYXlTb25nKG5ld1NvbmcsIG5ld1NvbmdJZCk7XHJcbiAgICByZW5kZXJQbGF5QmFyKG5ld1NvbmdJZCk7XHJcbiAgICBwbGF5UGF1c2VCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3BhdXNlQnRuLnN2Zyd9JylgXHJcbiAgICBjbG9zZU1vZGFsKCk7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0U29uZ0xlbmd0aFRpbWUoc2Vjb25kcykge1xyXG4gICAgbGV0IG1pbiA9IE1hdGguZmxvb3IoKHNlY29uZHMgLyA2MCkpO1xyXG4gICAgbGV0IHNlYyA9IE1hdGguZmxvb3Ioc2Vjb25kcyAtIChtaW4gKiA2MCkpO1xyXG4gICAgaWYgKHNlYyA8IDEwKXsgXHJcbiAgICAgICAgc2VjICA9IGAwJHtzZWN9YDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gYCR7bWlufToke3NlY31gO1xyXG59XHJcbmZ1bmN0aW9uIHVwZGF0ZVNvbmdQcm9ncmVzc1RpbWUgKCkge1xyXG4gICAgcHJvZ3Jlc3NCYXIubWF4ID0gY3VyclNvbmcuZHVyYXRpb247XHJcbiAgICBwcm9ncmVzc0Jhci52YWx1ZSA9IGN1cnJTb25nLmN1cnJlbnRUaW1lO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3NvbmctY3Vyci10aW1lJykuaW5uZXJIVE1MID0gZm9ybWF0U29uZ0xlbmd0aFRpbWUoY3VyclNvbmcuY3VycmVudFRpbWUpO1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3NvbmctdG90YWwtdGltZScpLmlubmVySFRNTCA9IGZvcm1hdFNvbmdMZW5ndGhUaW1lKGN1cnJTb25nLmR1cmF0aW9uKTtcclxufVxyXG5mdW5jdGlvbiBmb3JtYXRWb2x1bWVWYWx1ZXMgKG51bWJlcikge1xyXG4gICAgbGV0IHZvbHVtZSA9IG51bWJlci8xMDA7XHJcbiAgICByZXR1cm4gdm9sdW1lO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dWb2x1bWVTbGlkZXIgKCkge1xyXG4gICAgdm9sdW1lU2xpZGVyQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIHZvbHVtZVNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBzZXRUaW1lb3V0KGhpZGVWb2x1bWVTbGlkZXIsIDUwMDApO1xyXG59XHJcbmZ1bmN0aW9uIGhpZGVWb2x1bWVTbGlkZXIgKCkge1xyXG4gICAgdm9sdW1lU2xpZGVyQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIHZvbHVtZVNsaWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuZnVuY3Rpb24gc2h1ZmZsZU11c2ljICgpIHtcclxuICAgIHNodWZmbGVkTXVzaWNEYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gbXVzaWNEYXRhLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgW211c2ljRGF0YVtpXSwgbXVzaWNEYXRhW2pdXSA9IFttdXNpY0RhdGFbal0sIG11c2ljRGF0YVtpXV07XHJcbiAgICAgICAgc2h1ZmZsZWRNdXNpY0RhdGEucHVzaChtdXNpY0RhdGFbaV0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVNodWZmbGVCdG4gKCkge1xyXG4gICAgaWYgKHNodWZmbGVkKSB7XHJcbiAgICAgICAgc2h1ZmZsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvc2h1ZmZsZUJ0bi5zdmcnfScpYDtcclxuICAgICAgICBzaHVmZmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9zaHVmZmxlR3JleS5zdmcnfScpYDtcclxuICAgICAgICBzaHVmZmxlZCA9IHRydWU7XHJcbiAgICAgICAgc2h1ZmZsZU11c2ljKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQ3VyclNvbmdUb1JlY2VudFBsYXlsaXN0IChzb25nSWQpIHtcclxuICAgIGxldCBMc0RhdGEgPSBsb2NhbENhY2hlLmdldERhdGEoTE9DQUxTVE9SQUdFX0tFWSk7XHJcbiAgICBsZXQgcGxheWxpc3QgPSBMc0RhdGEucmVjZW50bHlQbGF5ZWRNdXNpY0RhdGEgfHwgW107XHJcbiAgICBtdXNpY0RhdGEuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBpZihzLmlkID09PSBzb25nSWQpIHtcclxuICAgICAgICAgICAgcGxheWxpc3QudW5zaGlmdChzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKHBsYXlsaXN0Lmxlbmd0aCA+IDkpIHtcclxuICAgICAgICBwbGF5bGlzdC5zcGxpY2UoOSwgMSk7XHJcbiAgICB9XHJcbiAgICBMc0RhdGEucmVjZW50bHlQbGF5ZWRNdXNpY0RhdGEgPSBwbGF5bGlzdDtcclxuICAgIGxvY2FsQ2FjaGUuc2F2ZURhdGEoTHNEYXRhLCBMT0NBTFNUT1JBR0VfS0VZKTtcclxufSIsImNsYXNzIExvY2FsQ2FjaGUge1xyXG4gICAgc3RhdGljIHNhdmVEYXRhIChwbGF5bGlzdCwga2V5KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShwbGF5bGlzdCkpXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RGF0YSAoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDYWNoZTsiXSwic291cmNlUm9vdCI6IiJ9