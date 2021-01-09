import React from 'react';
import { FaHeadphonesIcon } from '../components/Icon';
export default {
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
  controllerTitle: /*#__PURE__*/React.createElement(FaHeadphonesIcon, null),
  emptyLyricText: 'No hay letra'
};