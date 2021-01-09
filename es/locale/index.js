var _locale;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable camelcase */
import LOCALE from '../config/locale';
import en_US from './en_US';
import zh_CN from './zh_CN';
import es_ES from './es_ES';
var locale = (_locale = {}, _defineProperty(_locale, LOCALE.en_US, en_US), _defineProperty(_locale, LOCALE.zh_CN, zh_CN), _defineProperty(_locale, LOCALE.es_ES, es_ES), _locale);
export default locale;