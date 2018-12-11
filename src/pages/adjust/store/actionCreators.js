import * as constants from './constants';

export const getAdjustData = (res) => ({
  type: constants.ADJUST_DATA,
  data: res.data,
  loading: res.loading
});

