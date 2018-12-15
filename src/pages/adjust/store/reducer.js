import * as constants from './constants';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  adjustData:[],
  loading: true,
  current: 1,
  queryParams: {}
});

export default (state = defaultState, action) => {
  if(action.type === constants.ADJUST_DATA){
    return state.set("adjustData", action.data)
                .set("loading", action.loading)
                .set("current", action.current)
                .set("queryParams", action.queryParams);
  }
  return state;
}