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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsiaW1hZ2VzUGF0aCIsImF1ZGlvUGF0aCIsIm11c2ljRGF0YSIsImlkIiwidGl0bGUiLCJhcnRpc3QiLCJzb25nIiwiaW1hZ2UiLCJkZXRhaWxzIiwicGxheWxpc3RXcmFwcGVyRWwiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJwbGF5YmFyIiwicGxheVBhdXNlQnRuIiwicGxheU5leHRCdG4iLCJwcm9ncmVzc0JhciIsInZvbHVtZUJ0biIsInZvbHVtZVNsaWRlckJveCIsInZvbHVtZVNsaWRlciIsInNodWZmbGVCdG4iLCJtb2RhbCIsIm1vZGFsUGxheUJ0biIsIm1vZGFsQ2xvc2VCdG4iLCJjdXJyU29uZyIsImF1ZGlvIiwicmVjZW50U29uZyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZWNlbnRseVBsYXllZCIsInBhdXNlZCIsInNodWZmbGVkIiwidXBkYXRlVGltZXIiLCJzaHVmZmxlZE11c2ljRGF0YSIsIm9yaWdpbmFsTXVzaWNEYXRhIiwic2xpY2UiLCJMT0NBTFNUT1JBR0VfS0VZIiwiaWNvbnNQYXRoIiwiaW5pdCIsInJlbmRlclJlY2VudGx5UGxheWVkU29uZ3MiLCJyZW5kZXJQbGF5bGlzdCIsImV2dEhhbmRsZXJzIiwib25QYWdlTG9hZFNlbGVjdEZpcnN0U29uZyIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwiZm9yRWFjaCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvcGVuTW9kYWwiLCJjbG9zZU1vZGFsIiwicGxheU5ld1NvbmciLCJ0b2dnbGVQbGF5UGF1c2UiLCJwbGF5TmV4dFNvbmciLCJzaG93Vm9sdW1lU2xpZGVyIiwidG9nZ2xlU2h1ZmZsZUJ0biIsImV2dCIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJkYXRhc2V0IiwiaW1nRWwiLCJ0aXRsZUVsIiwiYXJ0aXN0RWwiLCJkZXRhaWxzRWwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzIiwiaW5uZXJIVE1MIiwiYWRkIiwiYnVpbGRSZWNlbnRseVBsYXllZFNvbmdJdGVtIiwicmVjZW50U29uZ0VsIiwiY3JlYXRlRWxlbWVudCIsInJlY0ltZ0VsIiwicmVjVGl0bGVFbCIsInJlY1RpdGxlIiwiY3JlYXRlVGV4dE5vZGUiLCJyZWNBcnRFbCIsInJlY0FydGlzdCIsInNyYyIsImFwcGVuZENoaWxkIiwiYnVpbGRQbGF5bGlzdFNvbmdJdGVtIiwicGxheWxpc3RTb25nRWwiLCJzb25nSW1nRWwiLCJzb25nVGl0bGVFbCIsInNvbmdUaXRsZSIsInNvbmdBcnRFbCIsInNvbmdBcnRpc3QiLCJMc0RhdGEiLCJsb2NhbENhY2hlIiwiZ2V0RGF0YSIsInBsYXlsaXN0IiwicmVjZW50bHlQbGF5ZWRNdXNpY0RhdGEiLCJyZW5kZXJQbGF5QmFyIiwic29uZ0lkIiwicGxheUltZyIsInBsYXlUaXRsZSIsInBsYXlBcnRpc3QiLCJmaXJzdFNvbmciLCJmaXJzdFNvbmdJZCIsInZvbHVtZSIsInBsYXlTb25nIiwiSWQiLCJwbGF5IiwiYWRkQ3VyclNvbmdUb1JlY2VudFBsYXlsaXN0Iiwic2V0SW50ZXJ2YWwiLCJ1cGRhdGVTb25nUHJvZ3Jlc3NUaW1lIiwicGF1c2UiLCJjbGVhclVwZGF0ZVRpbWVyIiwiaW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwiY3VyclNvbmdJZCIsImkiLCJsZW5ndGgiLCJuZXh0U29uZ0luZGV4IiwibmV4dFNvbmciLCJuZXh0U29uZ0lkIiwibmV3U29uZyIsIm5ld1NvbmdJZCIsImZvcm1hdFNvbmdMZW5ndGhUaW1lIiwic2Vjb25kcyIsIm1pbiIsIk1hdGgiLCJmbG9vciIsInNlYyIsIm1heCIsImR1cmF0aW9uIiwidmFsdWUiLCJjdXJyZW50VGltZSIsImNoYW5nZVNvbmdQcm9ncmVzc0JhciIsImZvcm1hdFZvbHVtZVZhbHVlcyIsIm51bWJlciIsImNoYW5nZVZvbHVtZSIsIm5ld1ZvbHVtZSIsInNldFRpbWVvdXQiLCJoaWRlVm9sdW1lU2xpZGVyIiwic2h1ZmZsZU11c2ljIiwiaiIsInJhbmRvbSIsInB1c2giLCJ1bnNoaWZ0Iiwic3BsaWNlIiwic2F2ZURhdGEiLCJMb2NhbENhY2hlIiwia2V5IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwiZ2V0SXRlbSIsInBhcnNlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUEsTUFBTUEsVUFBVSxHQUFHLGdCQUFuQjtBQUNBLE1BQU1DLFNBQVMsR0FBRyxlQUFsQjtBQUdBLE1BQU1DLFNBQVMsR0FBRyxDQUNkO0FBQ0lDLElBQUUsRUFBRSxHQURSO0FBRUlDLE9BQUssRUFBRSxlQUZYO0FBR0lDLFFBQU0sRUFBRSxlQUhaO0FBSUlDLE1BQUksRUFBRyxHQUFFTCxTQUFVLGtD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QUFDSDs7QUFDRHJELFFBQU0sQ0FBQ0ksdUJBQVAsR0FBaUNELFFBQWpDO0FBQ0FGLG9EQUFVLENBQUNxRCxRQUFYLENBQW9CdEQsTUFBcEIsRUFBNEJqRCxnQkFBNUI7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUN2U0Q7QUFBQSxNQUFNd0csVUFBTixDQUFpQjtBQUNiLFNBQU9ELFFBQVAsQ0FBaUJuRCxRQUFqQixFQUEyQnFELEdBQTNCLEVBQWdDO0FBQzVCQyxnQkFBWSxDQUFDQyxPQUFiLENBQXFCRixHQUFyQixFQUEwQkcsSUFBSSxDQUFDQyxTQUFMLENBQWV6RCxRQUFmLENBQTFCO0FBQ0g7O0FBQ0QsU0FBT0QsT0FBUCxDQUFnQnNELEdBQWhCLEVBQXFCO0FBQ2pCLFVBQU1LLElBQUksR0FBR0osWUFBWSxDQUFDSyxPQUFiLENBQXFCTixHQUFyQixDQUFiOztBQUNBLFFBQUlLLElBQUosRUFBVTtBQUNOLGFBQU9GLElBQUksQ0FBQ0ksS0FBTCxDQUFXRixJQUFYLENBQVA7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFPLEVBQVA7QUFDSDtBQUNKOztBQVhZOztBQWNGTix5RUFBZixFIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9tYWluLmpzXCIpO1xuIiwiY29uc3QgaW1hZ2VzUGF0aCA9ICcuLi9kYXRhL2ltYWdlcyc7XHJcbmNvbnN0IGF1ZGlvUGF0aCA9ICcuLi9kYXRhL2F1ZGlvJztcclxuXHJcblxyXG5jb25zdCBtdXNpY0RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdhJyxcclxuICAgICAgICB0aXRsZTogJ0JhY2sgVG8gQmxhY2snLFxyXG4gICAgICAgIGFydGlzdDogJ0FteSBXaW5laG91c2UnLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vQW15LVdpbmVob3VzZS1CYWNrLVRvLUJsYWNrLm1wM2AsXHJcbiAgICAgICAgaW1hZ2U6IGAke2ltYWdlc1BhdGh9L2JhY2stdG8tYmxhY2suamZpZmAsXHJcbiAgICAgICAgZGV0YWlsczogJ2RldGFpbHMgYWJvdXQgdGhlIHNvbmcgdG8gYmUgYWRkZWQgaGVyZSAtIHBlcmhhcHMgYSBzdW1tYXJ5IG9yIGRldGFpbHMgYWJvdXQgdGhlIGFydGlzdCBhbmQgdmVyc2lvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdiJyxcclxuICAgICAgICB0aXRsZTogJ0JlbGxhIENpYW8nLFxyXG4gICAgICAgIGFydGlzdDogJ09yaWdpbmFsJyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L0JlbGxhLUNpYW8tT1JJR0lOQUxFLm1wM2AsXHJcbiAgICAgICAgaW1hZ2U6IGAke2ltYWdlc1BhdGh9L01vbmV5LUhlaXN0LU1hc2suanBnYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2MnLFxyXG4gICAgICAgIHRpdGxlOiAnSG91bmQgRG9nJyxcclxuICAgICAgICBhcnRpc3Q6ICdFbHZpcyBQcmVzbGV5JyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L0VsdmlzLVByZXNsZXktaG91bmQtZG9nLm1wM2AsXHJcbiAgICAgICAgaW1hZ2U6IGAke2ltYWdlc1BhdGh9L2hvdW5kLWRvZy5qcGdgLFxyXG4gICAgICAgIGRldGFpbHM6ICdkZXRhaWxzIGFib3V0IHRoZSBzb25nIHRvIGJlIGFkZGVkIGhlcmUgLSBwZXJoYXBzIGEgc3VtbWFyeSBvciBkZXRhaWxzIGFib3V0IHRoZSBhcnRpc3QgYW5kIHZlcnNpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnZCcsXHJcbiAgICAgICAgdGl0bGU6ICdQb2tlciBGYWNlJyxcclxuICAgICAgICBhcnRpc3Q6ICdMYWR5IEdhZ2EnLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vbGFkeS1nYWdhLXBva2VyLWZhY2UubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vcG9rZXItZmFjZS5wbmdgLFxyXG4gICAgICAgIGRldGFpbHM6ICdkZXRhaWxzIGFib3V0IHRoZSBzb25nIHRvIGJlIGFkZGVkIGhlcmUgLSBwZXJoYXBzIGEgc3VtbWFyeSBvciBkZXRhaWxzIGFib3V0IHRoZSBhcnRpc3QgYW5kIHZlcnNpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnZScsXHJcbiAgICAgICAgdGl0bGU6ICdKb2xlbmUnLFxyXG4gICAgICAgIGFydGlzdDogJ01pbGV5IEN5cnVzJyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L01pbGV5Q3lydXNKb2xlbmUubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vam9sZW5lLmpmaWZgLFxyXG4gICAgICAgIGRldGFpbHM6ICdkZXRhaWxzIGFib3V0IHRoZSBzb25nIHRvIGJlIGFkZGVkIGhlcmUgLSBwZXJoYXBzIGEgc3VtbWFyeSBvciBkZXRhaWxzIGFib3V0IHRoZSBhcnRpc3QgYW5kIHZlcnNpb24nXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAnZicsXHJcbiAgICAgICAgdGl0bGU6ICdQcmV0dHkgV29tYW4nLFxyXG4gICAgICAgIGFydGlzdDogJ1JveSBPcmJpc29uJyxcclxuICAgICAgICBzb25nOiBgJHthdWRpb1BhdGh9L3JveS1vcmJpc29uLXByZXR0eS13b21hbi5tcDNgLFxyXG4gICAgICAgIGltYWdlOiBgJHtpbWFnZXNQYXRofS9yb3lfb3JiaXNvbl9wcmV0dHlfd29tYW4uanBnYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2cnLFxyXG4gICAgICAgIHRpdGxlOiAnV2luZCBvZiBDaGFuZ2UnLFxyXG4gICAgICAgIGFydGlzdDogJ1Njb3JwaW9ucycsXHJcbiAgICAgICAgc29uZzogYCR7YXVkaW9QYXRofS9zY29ycGlvbnMtd2luZC1vZi1jaGFuZ2UubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vU2NvcnBpb25zLXdpbmQtdmlkZW8uanBnYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2gnLFxyXG4gICAgICAgIHRpdGxlOiAnU2hhbGxvdycsXHJcbiAgICAgICAgYXJ0aXN0OiAnQSBTdGFyIGlzIEJvcm4nLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vU2hhbGxvdy1mcm9tQVN0YXJJc0Jvcm4ubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vc2hhbGxvdy5qZmlmYCxcclxuICAgICAgICBkZXRhaWxzOiAnZGV0YWlscyBhYm91dCB0aGUgc29uZyB0byBiZSBhZGRlZCBoZXJlIC0gcGVyaGFwcyBhIHN1bW1hcnkgb3IgZGV0YWlscyBhYm91dCB0aGUgYXJ0aXN0IGFuZCB2ZXJzaW9uJ1xyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogJ2knLFxyXG4gICAgICAgIHRpdGxlOiAnU291bmQgb2YgU2lsZW5jZScsXHJcbiAgICAgICAgYXJ0aXN0OiAnU2ltb24gYW5kIEdhcmZ1bmtlbCcsXHJcbiAgICAgICAgc29uZzogYCR7YXVkaW9QYXRofS9zaW1vbi1nYXJmdW5rZWwtc291bmQtb2Ytc2lsZW5jZS5tcDNgLFxyXG4gICAgICAgIGltYWdlOiBgJHtpbWFnZXNQYXRofS9zaW1vbi1hbmQtZ2FyZnVua2VsLmpwZ2AsXHJcbiAgICAgICAgZGV0YWlsczogJ2RldGFpbHMgYWJvdXQgdGhlIHNvbmcgdG8gYmUgYWRkZWQgaGVyZSAtIHBlcmhhcHMgYSBzdW1tYXJ5IG9yIGRldGFpbHMgYWJvdXQgdGhlIGFydGlzdCBhbmQgdmVyc2lvbidcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdqJyxcclxuICAgICAgICB0aXRsZTogJ1N0cmVzc2VkIE91dCcsXHJcbiAgICAgICAgYXJ0aXN0OiAnVHdlbnR5IE9uZSBQaWxvdHMnLFxyXG4gICAgICAgIHNvbmc6IGAke2F1ZGlvUGF0aH0vdHdlbnR5b25lcGlsb3RzU3RyZXNzZWRPdXQubXAzYCxcclxuICAgICAgICBpbWFnZTogYCR7aW1hZ2VzUGF0aH0vc3RyZXNzZWQtb3V0LnBuZ2AsXHJcbiAgICAgICAgZGV0YWlsczogJ2RldGFpbHMgYWJvdXQgdGhlIHNvbmcgdG8gYmUgYWRkZWQgaGVyZSAtIHBlcmhhcHMgYSBzdW1tYXJ5IG9yIGRldGFpbHMgYWJvdXQgdGhlIGFydGlzdCBhbmQgdmVyc2lvbidcclxuICAgIH0sXHJcbiAgICBcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbXVzaWNEYXRhOyIsImltcG9ydCBtdXNpY0RhdGEgZnJvbSAnLi4vZGF0YS9pbmRleCc7XHJcbmltcG9ydCBsb2NhbENhY2hlIGZyb20gJy4uL3NyYy91dGlscyc7XHJcblxyXG5jb25zdCBwbGF5bGlzdFdyYXBwZXJFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5bGlzdCcpO1xyXG5jb25zdCBwbGF5YmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXInKTtcclxuY29uc3QgcGxheVBhdXNlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3BsYXktcGF1c2UtYnRuJyk7XHJcbmNvbnN0IHBsYXlOZXh0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3BsYXktbmV4dC1idG4nKTtcclxuY29uc3QgcHJvZ3Jlc3NCYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fc29uZy1wcm9ncmVzcy1iYXInKTtcclxuY29uc3Qgdm9sdW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3ZvbHVtZS1idG4nKTtcclxuY29uc3Qgdm9sdW1lU2xpZGVyQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3ZvbHVtZS1zbGlkZXItYm94Jyk7XHJcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX192b2x1bWUtc2xpZGVyLWJveF9fc2xpZGVyJyk7XHJcbmNvbnN0IHNodWZmbGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fc2h1ZmZsZS1idG4nKTtcclxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwnKTtcclxuY29uc3QgbW9kYWxQbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZS13cmFwcGVyX19pbWdfX3BsYXktYnRuJyk7XHJcbmNvbnN0IG1vZGFsQ2xvc2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2Nsb3NlLWJ0bicpO1xyXG5jb25zdCBjdXJyU29uZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXJyLXNvbmcnKVxyXG5jb25zdCBhdWRpbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2F1ZGlvJyk7XHJcbmNvbnN0IHJlY2VudFNvbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjLXNvbmcnKTtcclxubGV0IHJlY2VudGx5UGxheWVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlY2VudGx5LXBsYXllZC1zb25ncycpO1xyXG5sZXQgcGF1c2VkID0gdHJ1ZTtcclxubGV0IHNodWZmbGVkID0gZmFsc2U7XHJcbmxldCB1cGRhdGVUaW1lcjtcclxubGV0IHNodWZmbGVkTXVzaWNEYXRhID0gW107XHJcbmxldCBvcmlnaW5hbE11c2ljRGF0YSA9IG11c2ljRGF0YS5zbGljZSgpO1xyXG5sZXQgTE9DQUxTVE9SQUdFX0tFWSA9ICdtdXNpY0FwcCc7XHJcbmNvbnN0IGljb25zUGF0aCA9ICcuLi9pY29ucyc7XHJcblxyXG5pbml0KCk7XHJcbmZ1bmN0aW9uIGluaXQgKCkge1xyXG4gICAgcmVuZGVyUmVjZW50bHlQbGF5ZWRTb25ncygpO1xyXG4gICAgcmVuZGVyUGxheWxpc3QobXVzaWNEYXRhKTtcclxuICAgIGV2dEhhbmRsZXJzKCk7XHJcbiAgICBvblBhZ2VMb2FkU2VsZWN0Rmlyc3RTb25nKCk7XHJcbiAgICBzaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9zaHVmZmxlQnRuLnN2Zyd9JylgXHJcbn1cclxuZnVuY3Rpb24gZXZ0SGFuZGxlcnMgKCkge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnJlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50JykuZm9yRWFjaChzb25nID0+IHtcclxuICAgICAgICBzb25nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3Blbk1vZGFsKVxyXG4gICAgfSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucGxheWxpc3RfX3NvbmdfX2VsZW1lbnQnKS5mb3JFYWNoKHNvbmcgPT4ge1xyXG4gICAgICAgIHNvbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbiAgICB9KTtcclxuICAgIG1vZGFsQ2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZU1vZGFsKTtcclxuICAgIG1vZGFsUGxheUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlOZXdTb25nKTtcclxuICAgIHBsYXlQYXVzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVBsYXlQYXVzZSk7XHJcbiAgICBwbGF5TmV4dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHBsYXlOZXh0U29uZyk7XHJcbiAgICB2b2x1bWVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Vm9sdW1lU2xpZGVyKTtcclxuICAgIGF1ZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2VuZGVkJywgcGxheU5leHRTb25nKTtcclxuICAgIHNodWZmbGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVTaHVmZmxlQnRuKTtcclxufVxyXG5mdW5jdGlvbiBvcGVuTW9kYWwgKGV2dCkge1xyXG4gICAgbGV0IGlkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWRcclxuICAgIGxldCBpbWdFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9faW1hZ2Utd3JhcHBlcl9faW1nJyk7XHJcbiAgICBsZXQgdGl0bGVFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGl0bGUnKTtcclxuICAgIGxldCBhcnRpc3RFbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fYXJ0aXN0Jyk7XHJcbiAgICBsZXQgZGV0YWlsc0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19zb25nLWRldGFpbHMnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIG11c2ljRGF0YS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGlmKHMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGltZ0VsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cy5pbWFnZX0nKWA7XHJcbiAgICAgICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gYCR7cy50aXRsZX1gO1xyXG4gICAgICAgICAgICBhcnRpc3RFbC5pbm5lckhUTUwgPSBgJHtzLmFydGlzdH1gO1xyXG4gICAgICAgICAgICBkZXRhaWxzRWwuaW5uZXJIVE1MID0gYCR7cy5kZXRhaWxzfWA7XHJcbiAgICAgICAgICAgIG1vZGFsUGxheUJ0bi5kYXRhc2V0LnNvbmcgPSBgJHtzLnNvbmd9YDtcclxuICAgICAgICAgICAgbW9kYWxQbGF5QnRuLmRhdGFzZXQuaWQgPSBgJHtzLmlkfWBcclxuICAgICAgICB9O1xyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsICgpIHtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxufVxyXG5mdW5jdGlvbiBidWlsZFJlY2VudGx5UGxheWVkU29uZ0l0ZW0gKGlkLCB0aXRsZSwgYXJ0aXN0LCBzb25nLCBpbWFnZSkge1xyXG4gICAgbGV0IHJlY2VudFNvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJlY0ltZ0VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmVjVGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJlY1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xyXG4gICAgbGV0IHJlY0FydEVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgcmVjQXJ0aXN0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJ0aXN0KTtcclxuICAgIHJlY2VudFNvbmdFbC5kYXRhc2V0LmlkID0gaWQ7XHJcbiAgICByZWNlbnRTb25nRWwuZGF0YXNldC5zcmMgPSBgdXJsKCcke3Nvbmd9JylgO1xyXG4gICAgcmVjSW1nRWwuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZX0nKWA7XHJcbiAgICByZWNlbnRTb25nRWwuY2xhc3NMaXN0LmFkZCgncmVjZW50bHktcGxheWVkLXNvbmdzX19zb25nLWVsZW1lbnQnKTtcclxuICAgIHJlY0ltZ0VsLmNsYXNzTGlzdC5hZGQoJ3JlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50X19pbWcnKTtcclxuICAgIHJlY1RpdGxlRWwuY2xhc3NMaXN0LmFkZCgncmVjZW50bHktcGxheWVkLXNvbmdzX19zb25nLWVsZW1lbnRfX3RpdGxlJyk7XHJcbiAgICByZWNBcnRFbC5jbGFzc0xpc3QuYWRkKCdyZWNlbnRseS1wbGF5ZWQtc29uZ3NfX3NvbmctZWxlbWVudF9fYXJ0aXN0Jyk7XHJcbiAgICByZWNBcnRFbC5hcHBlbmRDaGlsZChyZWNBcnRpc3QpO1xyXG4gICAgcmVjVGl0bGVFbC5hcHBlbmRDaGlsZChyZWNUaXRsZSk7XHJcbiAgICByZWNlbnRTb25nRWwuYXBwZW5kQ2hpbGQocmVjSW1nRWwpO1xyXG4gICAgcmVjZW50U29uZ0VsLmFwcGVuZENoaWxkKHJlY1RpdGxlRWwpO1xyXG4gICAgcmVjZW50U29uZ0VsLmFwcGVuZENoaWxkKHJlY0FydEVsKTtcclxuICAgIHJldHVybiByZWNlbnRTb25nRWw7XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRQbGF5bGlzdFNvbmdJdGVtIChpZCwgdGl0bGUsIGFydGlzdCwgc29uZywgaW1hZ2UpIHtcclxuICAgIGxldCBwbGF5bGlzdFNvbmdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHNvbmdJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHNvbmdUaXRsZUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgc29uZ1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGl0bGUpO1xyXG4gICAgbGV0IHNvbmdBcnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHNvbmdBcnRpc3QgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShhcnRpc3QpO1xyXG4gICAgcGxheWxpc3RTb25nRWwuZGF0YXNldC5pZCA9IGlkO1xyXG4gICAgcGxheWxpc3RTb25nRWwuZGF0YXNldC5zcmMgPSBgdXJsKCcke3Nvbmd9JylgO1xyXG4gICAgc29uZ0ltZ0VsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2V9JylgO1xyXG4gICAgcGxheWxpc3RTb25nRWwuY2xhc3NMaXN0LmFkZCgncGxheWxpc3RfX3NvbmdfX2VsZW1lbnQnKTtcclxuICAgIHNvbmdJbWdFbC5jbGFzc0xpc3QuYWRkKCdwbGF5bGlzdF9fc29uZ19fZWxlbWVudF9faW1nJyk7XHJcbiAgICBzb25nVGl0bGVFbC5jbGFzc0xpc3QuYWRkKCdwbGF5bGlzdF9fc29uZ19fZWxlbWVudF9fdGl0bGUnKTtcclxuICAgIHNvbmdBcnRFbC5jbGFzc0xpc3QuYWRkKCdwbGF5bGlzdF9fc29uZ19fZWxlbWVudF9fYXJ0aXN0Jyk7XHJcbiAgICBzb25nQXJ0RWwuYXBwZW5kQ2hpbGQoc29uZ0FydGlzdCk7XHJcbiAgICBzb25nVGl0bGVFbC5hcHBlbmRDaGlsZChzb25nVGl0bGUpO1xyXG4gICAgcGxheWxpc3RTb25nRWwuYXBwZW5kQ2hpbGQoc29uZ0ltZ0VsKTtcclxuICAgIHBsYXlsaXN0U29uZ0VsLmFwcGVuZENoaWxkKHNvbmdUaXRsZUVsKTtcclxuICAgIHBsYXlsaXN0U29uZ0VsLmFwcGVuZENoaWxkKHNvbmdBcnRFbCk7XHJcbiAgICByZXR1cm4gcGxheWxpc3RTb25nRWw7XHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUmVjZW50bHlQbGF5ZWRTb25ncyAoKSB7XHJcbiAgICBsZXQgTHNEYXRhID0gbG9jYWxDYWNoZS5nZXREYXRhKExPQ0FMU1RPUkFHRV9LRVkpO1xyXG4gICAgbGV0IHBsYXlsaXN0ID0gTHNEYXRhLnJlY2VudGx5UGxheWVkTXVzaWNEYXRhIHx8IFtdO1xyXG4gICAgcmVjZW50bHlQbGF5ZWQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICBwbGF5bGlzdC5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIHJlY2VudGx5UGxheWVkLmFwcGVuZENoaWxkKGJ1aWxkUmVjZW50bHlQbGF5ZWRTb25nSXRlbShzLmlkLCBzLnRpdGxlLCBzLmFydGlzdCwgcy5zb25nLCBzLmltYWdlKSk7XHJcbiAgICB9KTtcclxuICAgIHJlY2VudFNvbmcuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclBsYXlsaXN0IChtdXNpY0RhdGEpIHtcclxuICAgIG11c2ljRGF0YS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIHBsYXlsaXN0V3JhcHBlckVsLmFwcGVuZENoaWxkKGJ1aWxkUGxheWxpc3RTb25nSXRlbShzLmlkLCBzLnRpdGxlLCBzLmFydGlzdCwgcy5zb25nLCBzLmltYWdlKSlcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gcmVuZGVyUGxheUJhciAoc29uZ0lkKSB7XHJcbiAgICBsZXQgcGxheUltZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19pbWcnKTtcclxuICAgIGxldCBwbGF5VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fdGl0bGUnKTtcclxuICAgIGxldCBwbGF5QXJ0aXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX2FydGlzdCcpO1xyXG4gICAgbXVzaWNEYXRhLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgaWYocy5pZCA9PT0gc29uZ0lkKSB7XHJcbiAgICAgICAgICAgIHBsYXlJbWcuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtzLmltYWdlfScpYDtcclxuICAgICAgICAgICAgcGxheVRpdGxlLmlubmVySFRNTCA9IGAke3MudGl0bGV9YDtcclxuICAgICAgICAgICAgcGxheUFydGlzdC5pbm5lckhUTUwgPSBgJHtzLmFydGlzdH1gO1xyXG4gICAgICAgICAgICBwbGF5YmFyLmRhdGFzZXQuaWQgPSBgJHtzLmlkfWA7XHJcbiAgICAgICAgICAgIHBsYXliYXIuZGF0YXNldC5zb25nID0gYCR7cy5zb25nfWBcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIG9uUGFnZUxvYWRTZWxlY3RGaXJzdFNvbmcgKCkge1xyXG4gICAgbGV0IGZpcnN0U29uZyA9IG11c2ljRGF0YVswXTtcclxuICAgIGxldCBmaXJzdFNvbmdJZCA9IG11c2ljRGF0YVswXS5pZDtcclxuICAgIHJlbmRlclBsYXlCYXIoZmlyc3RTb25nSWQpO1xyXG4gICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9wbGF5QnRuLnN2Zyd9JylgXHJcbiAgICBhdWRpby5zcmMgPSBtdXNpY0RhdGFbMF0uc29uZztcclxuICAgIGF1ZGlvLnZvbHVtZSA9IC41O1xyXG59XHJcbmZ1bmN0aW9uIHBsYXlTb25nIChzb25nLCBJZCkge1xyXG4gICAgYXVkaW8uc3JjID0gc29uZztcclxuICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgIGFkZEN1cnJTb25nVG9SZWNlbnRQbGF5bGlzdChJZCk7XHJcbiAgICByZW5kZXJSZWNlbnRseVBsYXllZFNvbmdzKCk7XHJcbiAgICB1cGRhdGVUaW1lciA9IHNldEludGVydmFsKHVwZGF0ZVNvbmdQcm9ncmVzc1RpbWUsIDUwMCk7XHJcbiAgICBwYXVzZWQgPSBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiB0b2dnbGVQbGF5UGF1c2UgKCkge1xyXG4gICAgaWYocGF1c2VkKSB7XHJcbiAgICAgICAgYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZVRpbWVyID0gc2V0SW50ZXJ2YWwodXBkYXRlU29uZ1Byb2dyZXNzVGltZSwgNTAwKTtcclxuICAgICAgICBwYXVzZWQgPSBmYWxzZTtcclxuICAgICAgICBwbGF5UGF1c2VCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3BhdXNlQnRuLnN2Zyd9JylgXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XHJcbiAgICAgICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICAgICAgcGF1c2VkID0gdHJ1ZTtcclxuICAgICAgICBwbGF5UGF1c2VCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3BsYXlCdG4uc3ZnJ30nKWBcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBjbGVhclVwZGF0ZVRpbWVyIChpbnRlcnZhbCkge1xyXG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbn1cclxuZnVuY3Rpb24gcGxheU5leHRTb25nIChldnQpIHtcclxuICAgIGxldCBjdXJyU29uZ0lkID0gZXZ0LnRhcmdldC5wYXJlbnRFbGVtZW50LmRhdGFzZXQuaWQ7XHJcbiAgICBwbGF5UGF1c2VCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3BhdXNlQnRuLnN2Zyd9JylgO1xyXG4gICAgaWYgKHNodWZmbGVkKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaHVmZmxlZE11c2ljRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoc2h1ZmZsZWRNdXNpY0RhdGFbaV0uaWQgPT09IGN1cnJTb25nSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpID09PSBzaHVmZmxlZE11c2ljRGF0YS5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZyA9IHNodWZmbGVkTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLnNvbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSWQgPSBzaHVmZmxlZE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5U29uZyhuZXh0U29uZywgbmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheUJhcihuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSW5kZXggPSBpICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmcgPSBzaHVmZmxlZE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5zb25nO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0lkID0gc2h1ZmZsZWRNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheVNvbmcobmV4dFNvbmcsIG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlCYXIobmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb3JpZ2luYWxNdXNpY0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsTXVzaWNEYXRhW2ldLmlkID09PSBjdXJyU29uZ0lkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gb3JpZ2luYWxNdXNpY0RhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmcgPSBvcmlnaW5hbE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5zb25nO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0lkID0gb3JpZ2luYWxNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheVNvbmcobmV4dFNvbmcsIG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlCYXIobmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0luZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nID0gb3JpZ2luYWxNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uc29uZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJZCA9IG9yaWdpbmFsTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlTb25nKG5leHRTb25nLCBuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5QmFyKG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHBsYXlOZXdTb25nIChldnQpIHtcclxuICAgIGxldCBuZXdTb25nID0gZXZ0LnRhcmdldC5kYXRhc2V0LnNvbmc7XHJcbiAgICBsZXQgbmV3U29uZ0lkID0gZXZ0LnRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICBwbGF5U29uZyhuZXdTb25nLCBuZXdTb25nSWQpO1xyXG4gICAgcmVuZGVyUGxheUJhcihuZXdTb25nSWQpO1xyXG4gICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9wYXVzZUJ0bi5zdmcnfScpYFxyXG4gICAgY2xvc2VNb2RhbCgpO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdFNvbmdMZW5ndGhUaW1lKHNlY29uZHMpIHtcclxuICAgIGxldCBtaW4gPSBNYXRoLmZsb29yKChzZWNvbmRzIC8gNjApKTtcclxuICAgIGxldCBzZWMgPSBNYXRoLmZsb29yKHNlY29uZHMgLSAobWluICogNjApKTtcclxuICAgIGlmIChzZWMgPCAxMCl7IFxyXG4gICAgICAgIHNlYyAgPSBgMCR7c2VjfWA7XHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIGAke21pbn06JHtzZWN9YDtcclxufVxyXG5mdW5jdGlvbiB1cGRhdGVTb25nUHJvZ3Jlc3NUaW1lICgpIHtcclxuICAgIHByb2dyZXNzQmFyLm1heCA9IGN1cnJTb25nLmR1cmF0aW9uO1xyXG4gICAgcHJvZ3Jlc3NCYXIudmFsdWUgPSBjdXJyU29uZy5jdXJyZW50VGltZTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19zb25nLWN1cnItdGltZScpLmlubmVySFRNTCA9IGZvcm1hdFNvbmdMZW5ndGhUaW1lKGN1cnJTb25nLmN1cnJlbnRUaW1lKTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19zb25nLXRvdGFsLXRpbWUnKS5pbm5lckhUTUwgPSBmb3JtYXRTb25nTGVuZ3RoVGltZShjdXJyU29uZy5kdXJhdGlvbik7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlU29uZ1Byb2dyZXNzQmFyICgpIHtcclxuICAgIGN1cnJTb25nLmN1cnJlbnRUaW1lID0gcHJvZ3Jlc3NCYXIudmFsdWU7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0Vm9sdW1lVmFsdWVzIChudW1iZXIpIHtcclxuICAgIGxldCB2b2x1bWUgPSBudW1iZXIvMTAwO1xyXG4gICAgcmV0dXJuIHZvbHVtZTtcclxufVxyXG5mdW5jdGlvbiBjaGFuZ2VWb2x1bWUoKSB7XHJcbiAgICBsZXQgbmV3Vm9sdW1lID0gdm9sdW1lU2xpZGVyLnZhbHVlO1xyXG4gICAgbmV3Vm9sdW1lID0gZm9ybWF0Vm9sdW1lVmFsdWVzKG5ld1ZvbHVtZSk7XHJcbiAgICBhdWRpby52b2x1bWUgPSBuZXdWb2x1bWU7XHJcbn1cclxuZnVuY3Rpb24gc2hvd1ZvbHVtZVNsaWRlciAoKSB7XHJcbiAgICB2b2x1bWVTbGlkZXJCb3guY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgdm9sdW1lU2xpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIHNldFRpbWVvdXQoaGlkZVZvbHVtZVNsaWRlciwgNTAwMCk7XHJcbn1cclxuZnVuY3Rpb24gaGlkZVZvbHVtZVNsaWRlciAoKSB7XHJcbiAgICB2b2x1bWVTbGlkZXJCb3guY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgdm9sdW1lU2xpZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxufVxyXG5mdW5jdGlvbiBzaHVmZmxlTXVzaWMgKCkge1xyXG4gICAgc2h1ZmZsZWRNdXNpY0RhdGEgPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSBtdXNpY0RhdGEubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcclxuICAgICAgICBbbXVzaWNEYXRhW2ldLCBtdXNpY0RhdGFbal1dID0gW211c2ljRGF0YVtqXSwgbXVzaWNEYXRhW2ldXTtcclxuICAgICAgICBzaHVmZmxlZE11c2ljRGF0YS5wdXNoKG11c2ljRGF0YVtpXSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlU2h1ZmZsZUJ0biAoKSB7XHJcbiAgICBpZiAoc2h1ZmZsZWQpIHtcclxuICAgICAgICBzaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9zaHVmZmxlQnRuLnN2Zyd9JylgO1xyXG4gICAgICAgIHNodWZmbGVkID0gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNodWZmbGVCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3NodWZmbGVHcmV5LnN2Zyd9JylgO1xyXG4gICAgICAgIHNodWZmbGVkID0gdHJ1ZTtcclxuICAgICAgICBzaHVmZmxlTXVzaWMoKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRDdXJyU29uZ1RvUmVjZW50UGxheWxpc3QgKHNvbmdJZCkge1xyXG4gICAgbGV0IExzRGF0YSA9IGxvY2FsQ2FjaGUuZ2V0RGF0YShMT0NBTFNUT1JBR0VfS0VZKTtcclxuICAgIGxldCBwbGF5bGlzdCA9IExzRGF0YS5yZWNlbnRseVBsYXllZE11c2ljRGF0YSB8fCBbXTtcclxuICAgIG11c2ljRGF0YS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGlmKHMuaWQgPT09IHNvbmdJZCkge1xyXG4gICAgICAgICAgICBwbGF5bGlzdC51bnNoaWZ0KHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaWYocGxheWxpc3QubGVuZ3RoID4gOSkge1xyXG4gICAgICAgIHBsYXlsaXN0LnNwbGljZSg5LCAxKTtcclxuICAgIH1cclxuICAgIExzRGF0YS5yZWNlbnRseVBsYXllZE11c2ljRGF0YSA9IHBsYXlsaXN0O1xyXG4gICAgbG9jYWxDYWNoZS5zYXZlRGF0YShMc0RhdGEsIExPQ0FMU1RPUkFHRV9LRVkpO1xyXG59IiwiY2xhc3MgTG9jYWxDYWNoZSB7XHJcbiAgICBzdGF0aWMgc2F2ZURhdGEgKHBsYXlsaXN0LCBrZXkpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHBsYXlsaXN0KSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXREYXRhIChrZXkpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShkYXRhKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NhbENhY2hlOyJdLCJzb3VyY2VSb290IjoiIn0=