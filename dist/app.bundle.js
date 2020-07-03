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
// const imagesPath = './images';
const musicData = [{
  id: 'a',
  title: 'Back To Black',
  artist: 'Amy Winehouse',
  song: '../data/audio/Amy-Winehouse-Back-To-Black.mp3',
  image: '../data/images/back-to-black.jfif'
} // {
//     id: 'b',
//     title: 'Bella Ciao',
//     artist: 'Original',
//     song: 'Playlist/Bella-Ciao-ORIGINALE.mp3',
//     image: './Playlist/images/Money-Heist-Mask.jpg'
// },
// {
//     id: 'c',
//     title: 'Jolene',
//     artist: 'Miley Cyrus',
//     song: 'Playlist/MileyCyrusJolene.mp3',
//     image: 'Playlist/images/jolene.jfif'
// },
// {
//     id: 'd',
//     title: 'Stressed Out',
//     artist: 'Twenty One Pilots',
//     song: 'Playlist/twentyonepilotsStressedOut.mp3',
//     image: 'Playlist/images/stressed-out.png'
// },
// {
//     id: 'e',
//     title: 'Shallow',
//     artist: 'A Star Is Born',
//     song: 'Playlist/Shallow-fromAStarIsBorn.mp3',
//     image: 'Playlist/images/shallow.jfif'
// },
];
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
  modal.classList.remove('hide');
  _data_index__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(s => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGF0YS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMuanMiXSwibmFtZXMiOlsibXVzaWNEYXRhIiwiaWQiLCJ0aXRsZSIsImFydGlzdCIsInNvbmciLCJpbWFnZSIsInBsYXlsaXN0V3JhcHBlckVsIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGxheWJhciIsInBsYXlQYXVzZUJ0biIsInBsYXlOZXh0QnRuIiwicHJvZ3Jlc3NCYXIiLCJ2b2x1bWVCdG4iLCJ2b2x1bWVTbGlkZXJCb3giLCJ2b2x1bWVTbGlkZXIiLCJzaHVmZmxlQnRuIiwibW9kYWwiLCJtb2RhbFBsYXlCdG4iLCJtb2RhbENsb3NlQnRuIiwiY3VyclNvbmciLCJhdWRpbyIsInJlY2VudFNvbmciLCJxdWVyeVNlbGVjdG9yQWxsIiwicmVjZW50bHlQbGF5ZWQiLCJwYXVzZWQiLCJzaHVmZmxlZCIsInVwZGF0ZVRpbWVyIiwic2h1ZmZsZWRNdXNpY0RhdGEiLCJvcmlnaW5hbE11c2ljRGF0YSIsInNsaWNlIiwiTE9DQUxTVE9SQUdFX0tFWSIsImljb25zUGF0aCIsImluaXQiLCJyZW5kZXJSZWNlbnRseVBsYXllZFNvbmdzIiwicmVuZGVyUGxheWxpc3QiLCJldnRIYW5kbGVycyIsIm9uUGFnZUxvYWRTZWxlY3RGaXJzdFNvbmciLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImZvckVhY2giLCJhZGRFdmVudExpc3RlbmVyIiwib3Blbk1vZGFsIiwiY2xvc2VNb2RhbCIsInBsYXlOZXdTb25nIiwidG9nZ2xlUGxheVBhdXNlIiwicGxheU5leHRTb25nIiwic2hvd1ZvbHVtZVNsaWRlciIsInRvZ2dsZVNodWZmbGVCdG4iLCJldnQiLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiZGF0YXNldCIsImltZ0VsIiwidGl0bGVFbCIsImFydGlzdEVsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwicyIsImlubmVySFRNTCIsImFkZCIsImJ1aWxkUmVjZW50bHlQbGF5ZWRTb25nSXRlbSIsInJlY2VudFNvbmdFbCIsImNyZWF0ZUVsZW1lbnQiLCJyZWNJbWdFbCIsInJlY1RpdGxlRWwiLCJyZWNUaXRsZSIsImNyZWF0ZVRleHROb2RlIiwicmVjQXJ0RWwiLCJyZWNBcnRpc3QiLCJzcmMiLCJhcHBlbmRDaGlsZCIsImJ1aWxkUGxheWxpc3RTb25nSXRlbSIsInBsYXlsaXN0U29uZ0VsIiwic29uZ0ltZ0VsIiwic29uZ1RpdGxlRWwiLCJzb25nVGl0bGUiLCJzb25nQXJ0RWwiLCJzb25nQXJ0aXN0IiwiTHNEYXRhIiwibG9jYWxDYWNoZSIsImdldERhdGEiLCJwbGF5bGlzdCIsInJlY2VudGx5UGxheWVkTXVzaWNEYXRhIiwicmVuZGVyUGxheUJhciIsInNvbmdJZCIsInBsYXlJbWciLCJwbGF5VGl0bGUiLCJwbGF5QXJ0aXN0IiwiZmlyc3RTb25nIiwiZmlyc3RTb25nSWQiLCJ2b2x1bWUiLCJwbGF5U29uZyIsIklkIiwicGxheSIsImFkZEN1cnJTb25nVG9SZWNlbnRQbGF5bGlzdCIsInNldEludGVydmFsIiwidXBkYXRlU29uZ1Byb2dyZXNzVGltZSIsInBhdXNlIiwiY2xlYXJVcGRhdGVUaW1lciIsImludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsImN1cnJTb25nSWQiLCJpIiwibGVuZ3RoIiwibmV4dFNvbmdJbmRleCIsIm5leHRTb25nIiwibmV4dFNvbmdJZCIsIm5ld1NvbmciLCJuZXdTb25nSWQiLCJmb3JtYXRTb25nTGVuZ3RoVGltZSIsInNlY29uZHMiLCJtaW4iLCJNYXRoIiwiZmxvb3IiLCJzZWMiLCJtYXgiLCJkdXJhdGlvbiIsInZhbHVlIiwiY3VycmVudFRpbWUiLCJjaGFuZ2VTb25nUHJvZ3Jlc3NCYXIiLCJmb3JtYXRWb2x1bWVWYWx1ZXMiLCJudW1iZXIiLCJjaGFuZ2VWb2x1bWUiLCJuZXdWb2x1bWUiLCJzZXRUaW1lb3V0IiwiaGlkZVZvbHVtZVNsaWRlciIsInNodWZmbGVNdXNpYyIsImoiLCJyYW5kb20iLCJwdXNoIiwidW5zaGlmdCIsInNwbGljZSIsInNhdmVEYXRhIiwiTG9jYWxDYWNoZSIsImtleSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsImdldEl0ZW0iLCJwYXJzZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBR0EsTUFBTUEsU0FBUyxHQUFHLENBQ2Q7QUFDSUMsSUFBRSxFQUFFLEdBRFI7QUFFSUMsT0FBSyxFQUFFLGVBRlg7QUFHSUMsUUFBTSxFQUFFLGVBSFo7QUFJSUMsTUFBSSxFQUFFLCtDQUpWO0FBS0lDLE9BQUssRUFBRTtBQUxYLENBRGMsQ0FRZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QixDQUFDLElBQUk7QUFDbkIsUUFBR0EsQ0FBQyxDQUFDekQsRUFBRixLQUFTb0YsTUFBWixFQUFvQjtBQUNoQkgsY0FBUSxDQUFDaUQsT0FBVCxDQUFpQnpFLENBQWpCO0FBQ0g7QUFDSixHQUpEOztBQUtBLE1BQUd3QixRQUFRLENBQUNzQixNQUFULEdBQWtCLENBQXJCLEVBQXdCO0FBQ3BCdEIsWUFBUSxDQUFDa0QsTUFBVCxDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNIOztBQUNEckQsUUFBTSxDQUFDSSx1QkFBUCxHQUFpQ0QsUUFBakM7QUFDQUYsb0RBQVUsQ0FBQ3FELFFBQVgsQ0FBb0J0RCxNQUFwQixFQUE0QmhELGdCQUE1QjtBQUNILEM7Ozs7Ozs7Ozs7OztBQ3JTRDtBQUFBLE1BQU11RyxVQUFOLENBQWlCO0FBQ2IsU0FBT0QsUUFBUCxDQUFpQm5ELFFBQWpCLEVBQTJCcUQsR0FBM0IsRUFBZ0M7QUFDNUJDLGdCQUFZLENBQUNDLE9BQWIsQ0FBcUJGLEdBQXJCLEVBQTBCRyxJQUFJLENBQUNDLFNBQUwsQ0FBZXpELFFBQWYsQ0FBMUI7QUFDSDs7QUFDRCxTQUFPRCxPQUFQLENBQWdCc0QsR0FBaEIsRUFBcUI7QUFDakIsVUFBTUssSUFBSSxHQUFHSixZQUFZLENBQUNLLE9BQWIsQ0FBcUJOLEdBQXJCLENBQWI7O0FBQ0EsUUFBSUssSUFBSixFQUFVO0FBQ04sYUFBT0YsSUFBSSxDQUFDSSxLQUFMLENBQVdGLElBQVgsQ0FBUDtBQUNILEtBRkQsTUFFTztBQUNILGFBQU8sRUFBUDtBQUNIO0FBQ0o7O0FBWFk7O0FBY0ZOLHlFQUFmLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL21haW4uanNcIik7XG4iLCIvLyBjb25zdCBpbWFnZXNQYXRoID0gJy4vaW1hZ2VzJztcclxuXHJcblxyXG5jb25zdCBtdXNpY0RhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6ICdhJyxcclxuICAgICAgICB0aXRsZTogJ0JhY2sgVG8gQmxhY2snLFxyXG4gICAgICAgIGFydGlzdDogJ0FteSBXaW5laG91c2UnLFxyXG4gICAgICAgIHNvbmc6ICcuLi9kYXRhL2F1ZGlvL0FteS1XaW5laG91c2UtQmFjay1Uby1CbGFjay5tcDMnLFxyXG4gICAgICAgIGltYWdlOiAnLi4vZGF0YS9pbWFnZXMvYmFjay10by1ibGFjay5qZmlmJ1xyXG4gICAgfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBpZDogJ2InLFxyXG4gICAgLy8gICAgIHRpdGxlOiAnQmVsbGEgQ2lhbycsXHJcbiAgICAvLyAgICAgYXJ0aXN0OiAnT3JpZ2luYWwnLFxyXG4gICAgLy8gICAgIHNvbmc6ICdQbGF5bGlzdC9CZWxsYS1DaWFvLU9SSUdJTkFMRS5tcDMnLFxyXG4gICAgLy8gICAgIGltYWdlOiAnLi9QbGF5bGlzdC9pbWFnZXMvTW9uZXktSGVpc3QtTWFzay5qcGcnXHJcbiAgICAvLyB9LFxyXG4gICAgLy8ge1xyXG4gICAgLy8gICAgIGlkOiAnYycsXHJcbiAgICAvLyAgICAgdGl0bGU6ICdKb2xlbmUnLFxyXG4gICAgLy8gICAgIGFydGlzdDogJ01pbGV5IEN5cnVzJyxcclxuICAgIC8vICAgICBzb25nOiAnUGxheWxpc3QvTWlsZXlDeXJ1c0pvbGVuZS5tcDMnLFxyXG4gICAgLy8gICAgIGltYWdlOiAnUGxheWxpc3QvaW1hZ2VzL2pvbGVuZS5qZmlmJ1xyXG4gICAgLy8gfSxcclxuICAgIC8vIHtcclxuICAgIC8vICAgICBpZDogJ2QnLFxyXG4gICAgLy8gICAgIHRpdGxlOiAnU3RyZXNzZWQgT3V0JyxcclxuICAgIC8vICAgICBhcnRpc3Q6ICdUd2VudHkgT25lIFBpbG90cycsXHJcbiAgICAvLyAgICAgc29uZzogJ1BsYXlsaXN0L3R3ZW50eW9uZXBpbG90c1N0cmVzc2VkT3V0Lm1wMycsXHJcbiAgICAvLyAgICAgaW1hZ2U6ICdQbGF5bGlzdC9pbWFnZXMvc3RyZXNzZWQtb3V0LnBuZydcclxuICAgIC8vIH0sXHJcbiAgICAvLyB7XHJcbiAgICAvLyAgICAgaWQ6ICdlJyxcclxuICAgIC8vICAgICB0aXRsZTogJ1NoYWxsb3cnLFxyXG4gICAgLy8gICAgIGFydGlzdDogJ0EgU3RhciBJcyBCb3JuJyxcclxuICAgIC8vICAgICBzb25nOiAnUGxheWxpc3QvU2hhbGxvdy1mcm9tQVN0YXJJc0Jvcm4ubXAzJyxcclxuICAgIC8vICAgICBpbWFnZTogJ1BsYXlsaXN0L2ltYWdlcy9zaGFsbG93LmpmaWYnXHJcbiAgICAvLyB9LFxyXG5cclxuICAgIFxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBtdXNpY0RhdGE7IiwiaW1wb3J0IG11c2ljRGF0YSBmcm9tICcuLi9kYXRhL2luZGV4JztcclxuaW1wb3J0IGxvY2FsQ2FjaGUgZnJvbSAnLi4vc3JjL3V0aWxzJztcclxuXHJcbmNvbnN0IHBsYXlsaXN0V3JhcHBlckVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXlsaXN0Jyk7XHJcbmNvbnN0IHBsYXliYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcicpO1xyXG5jb25zdCBwbGF5UGF1c2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fcGxheS1wYXVzZS1idG4nKTtcclxuY29uc3QgcGxheU5leHRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fcGxheS1uZXh0LWJ0bicpO1xyXG5jb25zdCBwcm9ncmVzc0JhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19zb25nLXByb2dyZXNzLWJhcicpO1xyXG5jb25zdCB2b2x1bWVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fdm9sdW1lLWJ0bicpO1xyXG5jb25zdCB2b2x1bWVTbGlkZXJCb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fdm9sdW1lLXNsaWRlci1ib3gnKTtcclxuY29uc3Qgdm9sdW1lU2xpZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3ZvbHVtZS1zbGlkZXItYm94X19zbGlkZXInKTtcclxuY29uc3Qgc2h1ZmZsZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19zaHVmZmxlLWJ0bicpO1xyXG5jb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG5jb25zdCBtb2RhbFBsYXlCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX2ltYWdlLXdyYXBwZXJfX2ltZ19fcGxheS1idG4nKTtcclxuY29uc3QgbW9kYWxDbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fY2xvc2UtYnRuJyk7XHJcbmNvbnN0IGN1cnJTb25nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1cnItc29uZycpXHJcbmNvbnN0IGF1ZGlvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXVkaW8nKTtcclxuY29uc3QgcmVjZW50U29uZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZWMtc29uZycpO1xyXG5sZXQgcmVjZW50bHlQbGF5ZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVjZW50bHktcGxheWVkLXNvbmdzJyk7XHJcbmxldCBwYXVzZWQgPSB0cnVlO1xyXG5sZXQgc2h1ZmZsZWQgPSBmYWxzZTtcclxubGV0IHVwZGF0ZVRpbWVyO1xyXG5sZXQgc2h1ZmZsZWRNdXNpY0RhdGEgPSBbXTtcclxubGV0IG9yaWdpbmFsTXVzaWNEYXRhID0gbXVzaWNEYXRhLnNsaWNlKCk7XHJcbmxldCBMT0NBTFNUT1JBR0VfS0VZID0gJ211c2ljQXBwJztcclxuY29uc3QgaWNvbnNQYXRoID0gJy4uL2ljb25zJztcclxuXHJcbmluaXQoKTtcclxuZnVuY3Rpb24gaW5pdCAoKSB7XHJcbiAgICByZW5kZXJSZWNlbnRseVBsYXllZFNvbmdzKCk7XHJcbiAgICByZW5kZXJQbGF5bGlzdChtdXNpY0RhdGEpO1xyXG4gICAgZXZ0SGFuZGxlcnMoKTtcclxuICAgIG9uUGFnZUxvYWRTZWxlY3RGaXJzdFNvbmcoKTtcclxuICAgIHNodWZmbGVCdG4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpY29uc1BhdGggKyAnL3NodWZmbGVCdG4uc3ZnJ30nKWBcclxufVxyXG5mdW5jdGlvbiBldnRIYW5kbGVycyAoKSB7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucmVjZW50bHktcGxheWVkLXNvbmdzX19zb25nLWVsZW1lbnQnKS5mb3JFYWNoKHNvbmcgPT4ge1xyXG4gICAgICAgIHNvbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbiAgICB9KTtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5bGlzdF9fc29uZ19fZWxlbWVudCcpLmZvckVhY2goc29uZyA9PiB7XHJcbiAgICAgICAgc29uZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9wZW5Nb2RhbClcclxuICAgIH0pO1xyXG4gICAgbW9kYWxDbG9zZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlTW9kYWwpO1xyXG4gICAgbW9kYWxQbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheU5ld1NvbmcpO1xyXG4gICAgcGxheVBhdXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlUGxheVBhdXNlKTtcclxuICAgIHBsYXlOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheU5leHRTb25nKTtcclxuICAgIHZvbHVtZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dWb2x1bWVTbGlkZXIpO1xyXG4gICAgYXVkaW8uYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBwbGF5TmV4dFNvbmcpO1xyXG4gICAgc2h1ZmZsZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZVNodWZmbGVCdG4pO1xyXG59XHJcbmZ1bmN0aW9uIG9wZW5Nb2RhbCAoZXZ0KSB7XHJcbiAgICBsZXQgaWQgPSBldnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuZGF0YXNldC5pZFxyXG4gICAgbGV0IGltZ0VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19pbWFnZS13cmFwcGVyX19pbWcnKTtcclxuICAgIGxldCB0aXRsZUVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX190aXRsZScpO1xyXG4gICAgbGV0IGFydGlzdEVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX19hcnRpc3QnKTtcclxuICAgIG1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIG11c2ljRGF0YS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGlmKHMuaWQgPT09IGlkKSB7XHJcbiAgICAgICAgICAgIGltZ0VsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cy5pbWFnZX0nKWA7XHJcbiAgICAgICAgICAgIHRpdGxlRWwuaW5uZXJIVE1MID0gYCR7cy50aXRsZX1gO1xyXG4gICAgICAgICAgICBhcnRpc3RFbC5pbm5lckhUTUwgPSBgJHtzLmFydGlzdH1gO1xyXG4gICAgICAgICAgICBtb2RhbFBsYXlCdG4uZGF0YXNldC5zb25nID0gYCR7cy5zb25nfWA7XHJcbiAgICAgICAgICAgIG1vZGFsUGxheUJ0bi5kYXRhc2V0LmlkID0gYCR7cy5pZH1gXHJcbiAgICAgICAgfTtcclxuICAgIH0pXHJcbn1cclxuZnVuY3Rpb24gY2xvc2VNb2RhbCAoKSB7XHJcbiAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuZnVuY3Rpb24gYnVpbGRSZWNlbnRseVBsYXllZFNvbmdJdGVtIChpZCwgdGl0bGUsIGFydGlzdCwgc29uZywgaW1hZ2UpIHtcclxuICAgIGxldCByZWNlbnRTb25nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByZWNJbWdFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJlY1RpdGxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCByZWNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcclxuICAgIGxldCByZWNBcnRFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHJlY0FydGlzdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGFydGlzdCk7XHJcbiAgICByZWNlbnRTb25nRWwuZGF0YXNldC5pZCA9IGlkO1xyXG4gICAgcmVjZW50U29uZ0VsLmRhdGFzZXQuc3JjID0gYHVybCgnJHtzb25nfScpYDtcclxuICAgIHJlY0ltZ0VsLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aW1hZ2V9JylgO1xyXG4gICAgcmVjZW50U29uZ0VsLmNsYXNzTGlzdC5hZGQoJ3JlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50Jyk7XHJcbiAgICByZWNJbWdFbC5jbGFzc0xpc3QuYWRkKCdyZWNlbnRseS1wbGF5ZWQtc29uZ3NfX3NvbmctZWxlbWVudF9faW1nJyk7XHJcbiAgICByZWNUaXRsZUVsLmNsYXNzTGlzdC5hZGQoJ3JlY2VudGx5LXBsYXllZC1zb25nc19fc29uZy1lbGVtZW50X190aXRsZScpO1xyXG4gICAgcmVjQXJ0RWwuY2xhc3NMaXN0LmFkZCgncmVjZW50bHktcGxheWVkLXNvbmdzX19zb25nLWVsZW1lbnRfX2FydGlzdCcpO1xyXG4gICAgcmVjQXJ0RWwuYXBwZW5kQ2hpbGQocmVjQXJ0aXN0KTtcclxuICAgIHJlY1RpdGxlRWwuYXBwZW5kQ2hpbGQocmVjVGl0bGUpO1xyXG4gICAgcmVjZW50U29uZ0VsLmFwcGVuZENoaWxkKHJlY0ltZ0VsKTtcclxuICAgIHJlY2VudFNvbmdFbC5hcHBlbmRDaGlsZChyZWNUaXRsZUVsKTtcclxuICAgIHJlY2VudFNvbmdFbC5hcHBlbmRDaGlsZChyZWNBcnRFbCk7XHJcbiAgICByZXR1cm4gcmVjZW50U29uZ0VsO1xyXG59XHJcbmZ1bmN0aW9uIGJ1aWxkUGxheWxpc3RTb25nSXRlbSAoaWQsIHRpdGxlLCBhcnRpc3QsIHNvbmcsIGltYWdlKSB7XHJcbiAgICBsZXQgcGxheWxpc3RTb25nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBzb25nSW1nRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBzb25nVGl0bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbGV0IHNvbmdUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRpdGxlKTtcclxuICAgIGxldCBzb25nQXJ0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGxldCBzb25nQXJ0aXN0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoYXJ0aXN0KTtcclxuICAgIHBsYXlsaXN0U29uZ0VsLmRhdGFzZXQuaWQgPSBpZDtcclxuICAgIHBsYXlsaXN0U29uZ0VsLmRhdGFzZXQuc3JjID0gYHVybCgnJHtzb25nfScpYDtcclxuICAgIHNvbmdJbWdFbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlfScpYDtcclxuICAgIHBsYXlsaXN0U29uZ0VsLmNsYXNzTGlzdC5hZGQoJ3BsYXlsaXN0X19zb25nX19lbGVtZW50Jyk7XHJcbiAgICBzb25nSW1nRWwuY2xhc3NMaXN0LmFkZCgncGxheWxpc3RfX3NvbmdfX2VsZW1lbnRfX2ltZycpO1xyXG4gICAgc29uZ1RpdGxlRWwuY2xhc3NMaXN0LmFkZCgncGxheWxpc3RfX3NvbmdfX2VsZW1lbnRfX3RpdGxlJyk7XHJcbiAgICBzb25nQXJ0RWwuY2xhc3NMaXN0LmFkZCgncGxheWxpc3RfX3NvbmdfX2VsZW1lbnRfX2FydGlzdCcpO1xyXG4gICAgc29uZ0FydEVsLmFwcGVuZENoaWxkKHNvbmdBcnRpc3QpO1xyXG4gICAgc29uZ1RpdGxlRWwuYXBwZW5kQ2hpbGQoc29uZ1RpdGxlKTtcclxuICAgIHBsYXlsaXN0U29uZ0VsLmFwcGVuZENoaWxkKHNvbmdJbWdFbCk7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5hcHBlbmRDaGlsZChzb25nVGl0bGVFbCk7XHJcbiAgICBwbGF5bGlzdFNvbmdFbC5hcHBlbmRDaGlsZChzb25nQXJ0RWwpO1xyXG4gICAgcmV0dXJuIHBsYXlsaXN0U29uZ0VsO1xyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclJlY2VudGx5UGxheWVkU29uZ3MgKCkge1xyXG4gICAgbGV0IExzRGF0YSA9IGxvY2FsQ2FjaGUuZ2V0RGF0YShMT0NBTFNUT1JBR0VfS0VZKTtcclxuICAgIGxldCBwbGF5bGlzdCA9IExzRGF0YS5yZWNlbnRseVBsYXllZE11c2ljRGF0YSB8fCBbXTtcclxuICAgIHJlY2VudGx5UGxheWVkLmlubmVySFRNTCA9ICcnO1xyXG4gICAgcGxheWxpc3QuZm9yRWFjaChzID0+IHtcclxuICAgICAgICByZWNlbnRseVBsYXllZC5hcHBlbmRDaGlsZChidWlsZFJlY2VudGx5UGxheWVkU29uZ0l0ZW0ocy5pZCwgcy50aXRsZSwgcy5hcnRpc3QsIHMuc29uZywgcy5pbWFnZSkpO1xyXG4gICAgfSk7XHJcbiAgICByZWNlbnRTb25nLmZvckVhY2gocyA9PiB7XHJcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcGVuTW9kYWwpXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiByZW5kZXJQbGF5bGlzdCAobXVzaWNEYXRhKSB7XHJcbiAgICBtdXNpY0RhdGEuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBwbGF5bGlzdFdyYXBwZXJFbC5hcHBlbmRDaGlsZChidWlsZFBsYXlsaXN0U29uZ0l0ZW0ocy5pZCwgcy50aXRsZSwgcy5hcnRpc3QsIHMuc29uZywgcy5pbWFnZSkpXHJcbiAgICB9KVxyXG59XHJcbmZ1bmN0aW9uIHJlbmRlclBsYXlCYXIgKHNvbmdJZCkge1xyXG4gICAgbGV0IHBsYXlJbWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9faW1nJyk7XHJcbiAgICBsZXQgcGxheVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXliYXJfX3RpdGxlJyk7XHJcbiAgICBsZXQgcGxheUFydGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5YmFyX19hcnRpc3QnKTtcclxuICAgIG11c2ljRGF0YS5mb3JFYWNoKHMgPT4ge1xyXG4gICAgICAgIGlmKHMuaWQgPT09IHNvbmdJZCkge1xyXG4gICAgICAgICAgICBwbGF5SW1nLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7cy5pbWFnZX0nKWA7XHJcbiAgICAgICAgICAgIHBsYXlUaXRsZS5pbm5lckhUTUwgPSBgJHtzLnRpdGxlfWA7XHJcbiAgICAgICAgICAgIHBsYXlBcnRpc3QuaW5uZXJIVE1MID0gYCR7cy5hcnRpc3R9YDtcclxuICAgICAgICAgICAgcGxheWJhci5kYXRhc2V0LmlkID0gYCR7cy5pZH1gO1xyXG4gICAgICAgICAgICBwbGF5YmFyLmRhdGFzZXQuc29uZyA9IGAke3Muc29uZ31gXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5mdW5jdGlvbiBvblBhZ2VMb2FkU2VsZWN0Rmlyc3RTb25nICgpIHtcclxuICAgIGxldCBmaXJzdFNvbmcgPSBtdXNpY0RhdGFbMF07XHJcbiAgICBsZXQgZmlyc3RTb25nSWQgPSBtdXNpY0RhdGFbMF0uaWQ7XHJcbiAgICByZW5kZXJQbGF5QmFyKGZpcnN0U29uZ0lkKTtcclxuICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvcGxheUJ0bi5zdmcnfScpYFxyXG4gICAgYXVkaW8uc3JjID0gbXVzaWNEYXRhWzBdLnNvbmc7XHJcbiAgICBhdWRpby52b2x1bWUgPSAuNTtcclxufVxyXG5mdW5jdGlvbiBwbGF5U29uZyAoc29uZywgSWQpIHtcclxuICAgIGF1ZGlvLnNyYyA9IHNvbmc7XHJcbiAgICBhdWRpby5wbGF5KCk7XHJcbiAgICBhZGRDdXJyU29uZ1RvUmVjZW50UGxheWxpc3QoSWQpO1xyXG4gICAgcmVuZGVyUmVjZW50bHlQbGF5ZWRTb25ncygpO1xyXG4gICAgdXBkYXRlVGltZXIgPSBzZXRJbnRlcnZhbCh1cGRhdGVTb25nUHJvZ3Jlc3NUaW1lLCA1MDApO1xyXG4gICAgcGF1c2VkID0gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gdG9nZ2xlUGxheVBhdXNlICgpIHtcclxuICAgIGlmKHBhdXNlZCkge1xyXG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB1cGRhdGVUaW1lciA9IHNldEludGVydmFsKHVwZGF0ZVNvbmdQcm9ncmVzc1RpbWUsIDUwMCk7XHJcbiAgICAgICAgcGF1c2VkID0gZmFsc2U7XHJcbiAgICAgICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9wYXVzZUJ0bi5zdmcnfScpYFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBhdWRpby5wYXVzZSgpO1xyXG4gICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgIHBhdXNlZCA9IHRydWU7XHJcbiAgICAgICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9wbGF5QnRuLnN2Zyd9JylgXHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJVcGRhdGVUaW1lciAoaW50ZXJ2YWwpIHtcclxuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWwpO1xyXG59XHJcbmZ1bmN0aW9uIHBsYXlOZXh0U29uZyAoZXZ0KSB7XHJcbiAgICBsZXQgY3VyclNvbmdJZCA9IGV2dC50YXJnZXQucGFyZW50RWxlbWVudC5kYXRhc2V0LmlkO1xyXG4gICAgcGxheVBhdXNlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9wYXVzZUJ0bi5zdmcnfScpYDtcclxuICAgIGlmIChzaHVmZmxlZCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2h1ZmZsZWRNdXNpY0RhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHNodWZmbGVkTXVzaWNEYXRhW2ldLmlkID09PSBjdXJyU29uZ0lkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gc2h1ZmZsZWRNdXNpY0RhdGEubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0luZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmcgPSBzaHVmZmxlZE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5zb25nO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0lkID0gc2h1ZmZsZWRNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJVcGRhdGVUaW1lcih1cGRhdGVUaW1lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheVNvbmcobmV4dFNvbmcsIG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbmRlclBsYXlCYXIobmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZ0luZGV4ID0gaSArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nID0gc2h1ZmZsZWRNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uc29uZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJZCA9IHNodWZmbGVkTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlTb25nKG5leHRTb25nLCBuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5QmFyKG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9yaWdpbmFsTXVzaWNEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChvcmlnaW5hbE11c2ljRGF0YVtpXS5pZCA9PT0gY3VyclNvbmdJZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGkgPT09IG9yaWdpbmFsTXVzaWNEYXRhLmxlbmd0aCAtIDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJbmRleCA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nID0gb3JpZ2luYWxNdXNpY0RhdGFbbmV4dFNvbmdJbmRleF0uc29uZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJZCA9IG9yaWdpbmFsTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXlTb25nKG5leHRTb25nLCBuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgICAgICByZW5kZXJQbGF5QmFyKG5leHRTb25nSWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV4dFNvbmdJbmRleCA9IGkgKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXh0U29uZyA9IG9yaWdpbmFsTXVzaWNEYXRhW25leHRTb25nSW5kZXhdLnNvbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHRTb25nSWQgPSBvcmlnaW5hbE11c2ljRGF0YVtuZXh0U29uZ0luZGV4XS5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclVwZGF0ZVRpbWVyKHVwZGF0ZVRpbWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5U29uZyhuZXh0U29uZywgbmV4dFNvbmdJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyUGxheUJhcihuZXh0U29uZ0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBwbGF5TmV3U29uZyAoZXZ0KSB7XHJcbiAgICBsZXQgbmV3U29uZyA9IGV2dC50YXJnZXQuZGF0YXNldC5zb25nO1xyXG4gICAgbGV0IG5ld1NvbmdJZCA9IGV2dC50YXJnZXQuZGF0YXNldC5pZDtcclxuICAgIGNsZWFyVXBkYXRlVGltZXIodXBkYXRlVGltZXIpO1xyXG4gICAgcGxheVNvbmcobmV3U29uZywgbmV3U29uZ0lkKTtcclxuICAgIHJlbmRlclBsYXlCYXIobmV3U29uZ0lkKTtcclxuICAgIHBsYXlQYXVzZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvcGF1c2VCdG4uc3ZnJ30nKWBcclxuICAgIGNsb3NlTW9kYWwoKTtcclxufVxyXG5mdW5jdGlvbiBmb3JtYXRTb25nTGVuZ3RoVGltZShzZWNvbmRzKSB7XHJcbiAgICBsZXQgbWluID0gTWF0aC5mbG9vcigoc2Vjb25kcyAvIDYwKSk7XHJcbiAgICBsZXQgc2VjID0gTWF0aC5mbG9vcihzZWNvbmRzIC0gKG1pbiAqIDYwKSk7XHJcbiAgICBpZiAoc2VjIDwgMTApeyBcclxuICAgICAgICBzZWMgID0gYDAke3NlY31gO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBgJHttaW59OiR7c2VjfWA7XHJcbn1cclxuZnVuY3Rpb24gdXBkYXRlU29uZ1Byb2dyZXNzVGltZSAoKSB7XHJcbiAgICBwcm9ncmVzc0Jhci5tYXggPSBjdXJyU29uZy5kdXJhdGlvbjtcclxuICAgIHByb2dyZXNzQmFyLnZhbHVlID0gY3VyclNvbmcuY3VycmVudFRpbWU7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fc29uZy1jdXJyLXRpbWUnKS5pbm5lckhUTUwgPSBmb3JtYXRTb25nTGVuZ3RoVGltZShjdXJyU29uZy5jdXJyZW50VGltZSk7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWJhcl9fc29uZy10b3RhbC10aW1lJykuaW5uZXJIVE1MID0gZm9ybWF0U29uZ0xlbmd0aFRpbWUoY3VyclNvbmcuZHVyYXRpb24pO1xyXG59XHJcbmZ1bmN0aW9uIGNoYW5nZVNvbmdQcm9ncmVzc0JhciAoKSB7XHJcbiAgICBjdXJyU29uZy5jdXJyZW50VGltZSA9IHByb2dyZXNzQmFyLnZhbHVlO1xyXG59XHJcbmZ1bmN0aW9uIGZvcm1hdFZvbHVtZVZhbHVlcyAobnVtYmVyKSB7XHJcbiAgICBsZXQgdm9sdW1lID0gbnVtYmVyLzEwMDtcclxuICAgIHJldHVybiB2b2x1bWU7XHJcbn1cclxuZnVuY3Rpb24gY2hhbmdlVm9sdW1lKCkge1xyXG4gICAgbGV0IG5ld1ZvbHVtZSA9IHZvbHVtZVNsaWRlci52YWx1ZTtcclxuICAgIG5ld1ZvbHVtZSA9IGZvcm1hdFZvbHVtZVZhbHVlcyhuZXdWb2x1bWUpO1xyXG4gICAgYXVkaW8udm9sdW1lID0gbmV3Vm9sdW1lO1xyXG59XHJcbmZ1bmN0aW9uIHNob3dWb2x1bWVTbGlkZXIgKCkge1xyXG4gICAgdm9sdW1lU2xpZGVyQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgIHZvbHVtZVNsaWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XHJcbiAgICBzZXRUaW1lb3V0KGhpZGVWb2x1bWVTbGlkZXIsIDUwMDApO1xyXG59XHJcbmZ1bmN0aW9uIGhpZGVWb2x1bWVTbGlkZXIgKCkge1xyXG4gICAgdm9sdW1lU2xpZGVyQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcclxuICAgIHZvbHVtZVNsaWRlci5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbn1cclxuZnVuY3Rpb24gc2h1ZmZsZU11c2ljICgpIHtcclxuICAgIHNodWZmbGVkTXVzaWNEYXRhID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gbXVzaWNEYXRhLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XHJcbiAgICAgICAgW211c2ljRGF0YVtpXSwgbXVzaWNEYXRhW2pdXSA9IFttdXNpY0RhdGFbal0sIG11c2ljRGF0YVtpXV07XHJcbiAgICAgICAgc2h1ZmZsZWRNdXNpY0RhdGEucHVzaChtdXNpY0RhdGFbaV0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZVNodWZmbGVCdG4gKCkge1xyXG4gICAgaWYgKHNodWZmbGVkKSB7XHJcbiAgICAgICAgc2h1ZmZsZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ljb25zUGF0aCArICcvc2h1ZmZsZUJ0bi5zdmcnfScpYDtcclxuICAgICAgICBzaHVmZmxlZCA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBzaHVmZmxlQnRuLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7aWNvbnNQYXRoICsgJy9zaHVmZmxlR3JleS5zdmcnfScpYDtcclxuICAgICAgICBzaHVmZmxlZCA9IHRydWU7XHJcbiAgICAgICAgc2h1ZmZsZU11c2ljKCk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQ3VyclNvbmdUb1JlY2VudFBsYXlsaXN0IChzb25nSWQpIHtcclxuICAgIGxldCBMc0RhdGEgPSBsb2NhbENhY2hlLmdldERhdGEoTE9DQUxTVE9SQUdFX0tFWSk7XHJcbiAgICBsZXQgcGxheWxpc3QgPSBMc0RhdGEucmVjZW50bHlQbGF5ZWRNdXNpY0RhdGEgfHwgW107XHJcbiAgICBtdXNpY0RhdGEuZm9yRWFjaChzID0+IHtcclxuICAgICAgICBpZihzLmlkID09PSBzb25nSWQpIHtcclxuICAgICAgICAgICAgcGxheWxpc3QudW5zaGlmdChzKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGlmKHBsYXlsaXN0Lmxlbmd0aCA+IDkpIHtcclxuICAgICAgICBwbGF5bGlzdC5zcGxpY2UoOSwgMSk7XHJcbiAgICB9XHJcbiAgICBMc0RhdGEucmVjZW50bHlQbGF5ZWRNdXNpY0RhdGEgPSBwbGF5bGlzdDtcclxuICAgIGxvY2FsQ2FjaGUuc2F2ZURhdGEoTHNEYXRhLCBMT0NBTFNUT1JBR0VfS0VZKTtcclxufSIsImNsYXNzIExvY2FsQ2FjaGUge1xyXG4gICAgc3RhdGljIHNhdmVEYXRhIChwbGF5bGlzdCwga2V5KSB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShwbGF5bGlzdCkpXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgZ2V0RGF0YSAoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jYWxDYWNoZTsiXSwic291cmNlUm9vdCI6IiJ9