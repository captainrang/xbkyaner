import * as constants from './constants';
import { fromJS } from 'immutable'; 

// 把js对象转为immutable对象
const defaultState = fromJS({
  current: 'search'
});

export default (state = defaultState, action) =>{
  if(action.type === constants.CURRENT_KEY){
    // 返回一个全新的immutable对象
    return state.set('current', action.value)
  }
  return state;
}