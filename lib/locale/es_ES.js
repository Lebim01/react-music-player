"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../components/Icon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  playModeText: {
    order: 'Reproducción en orden',
    orderLoop: 'List loop',
    singleLoop: 'Bucle',
    shufflePlay: 'Aleatorio'
  },
  openText: 'Open',
  closeText: 'Close',
  emptyText: 'No music',
  clickToPlayText: 'Click to play',
  clickToPauseText: 'Click to pause',
  nextTrackText: 'Next track',
  previousTrackText: 'Previous track',
  reloadText: 'Reload',
  volumeText: 'Volume',
  playListsText: 'Playlists',
  toggleLyricText: 'Alternan letra',
  toggleMiniModeText: 'Minimize',
  destroyText: 'Destroy',
  downloadText: 'Download',
  lightThemeText: 'L',
  darkThemeText: 'D',
  switchThemeText: 'Dark/Light mode',
  removeAudioListsText: 'Delete audio lists',
  clickToDeleteText: function clickToDeleteText(name) {
    return "Click to delete ".concat(name);
  },
  controllerTitle: /*#__PURE__*/_react["default"].createElement(_Icon.FaHeadphonesIcon, null),
  emptyLyricText: 'No hay letra'
};
exports["default"] = _default;