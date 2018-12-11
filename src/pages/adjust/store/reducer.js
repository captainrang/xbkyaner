import * as constants from './constants';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  adjustData:[],
  loading: true,
  queryParams: {}
});

export default (state = defaultState, action) => {
  if(action.type === constants.ADJUST_DATA){
    return state.set("adjustData", action.data)
                .set("loading", action.loading);
  }
  return state;
}