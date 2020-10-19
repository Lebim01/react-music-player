import React from 'react'
import { FaPause, FaPlay } from 'react-icons/fa'

export {
  FaHeadphones as FaHeadphonesIcon,
  FaRegMinusSquare as FaMinusSquareOIcon,
  FaSpinner as LoadIcon,
  FaSyncAlt as ReloadIcon,
  FaRandom as RandomIcon
} from 'react-icons/fa'
export { BsThreeDots as DotsIcon } from 'react-icons/bs'
export { FiChevronsDown as ArrowDownIcon, FiPlus as AddIcon, FiRepeat as LoopIcon } from 'react-icons/fi'
export {
  GoMute as VolumeMuteIcon,
  GoUnmute as VolumeUnmuteIcon,
} from 'react-icons/go'
export {
  MdClose as CloseIcon,
  MdLibraryMusic as EmptyIcon,
  MdRepeat as RepeatIcon,
  MdSkipNext as NextAudioIcon,
  MdSkipPrevious as PrevAudioIcon,
  MdViewHeadline as OrderPlayIcon,
  MdTextFields as LyricIcon
} from 'react-icons/md'
export {
  RiDeleteBinLine as DeleteIcon,
  RiPlayList2Fill as PlayListsIcon,
  RiShoppingCart2Line as CartIcon
} from 'react-icons/ri'
export {
  TiArrowShuffle as ShufflePlayIcon,
  TiDownload as DownloadIcon,
} from 'react-icons/ti'

export const AnimatePlayIcon = () => (
  <FaPlay className="react-jinke-music-player-play-icon" />
)
export const AnimatePauseIcon = () => (
  <FaPause className="react-jinke-music-player-pause-icon" />
)