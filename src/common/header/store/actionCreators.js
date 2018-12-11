import * as constants from './constants';

export const setCurrent = (key) => ({
  type: constants.CURRENT_KEY,
  value: key
});

export const showLoginModal = () => ({
  type: constants.LOGIN_VISIBLE,
  value: true
});
export const hideLoginModal = () => ({
  type: constants.LOGIN_INVISIBLE,
  value: false
});