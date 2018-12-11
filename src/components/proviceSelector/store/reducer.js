import * as constants from './constants';
import { fromJS } from  'immutable';

const defaultState = fromJS({
  provinceData:[],
});

export default (state = defaultState, action) => {
  if(action.type === constants.PROVINCE){
    return state.set("provinceData", action.data);
  }
  return state;
}