/* eslint-disable camelcase */
import LOCALE from '../config/locale'
import en_US from './en_US'
import zh_CN from './zh_CN'
import es_ES from './es_ES'

const locale = {
  [LOCALE.en_US]: en_US,
  [LOCALE.zh_CN]: zh_CN,
  [LOCALE.es_ES]: es_ES,
}

export default locale
