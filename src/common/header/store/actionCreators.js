import * as constants from './constants';

export const setCurrent = (key) => ({
  type: constants.CURRENT_KEY,
  value: key
});