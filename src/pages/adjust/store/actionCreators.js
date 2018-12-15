import * as constants from './constants';

export const getAdjustData = (res) => ({
  type: constants.ADJUST_DATA,
  data: res.data,
  loading: res.loading,
  current: res.current, //当前第多少页
  queryParams: res.queryParams
});

