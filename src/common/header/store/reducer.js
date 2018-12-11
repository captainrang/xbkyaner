import * as constants from './constants';
import { fromJS } from 'immutable'; 

// 把js对象转为immutable对象
const defaultState = fromJS({
  current: 'home',
  loginVisible: false,
});

export default (state = defaultState, action) =>{
  if(action.type === constants.CURRENT_KEY){
    // 返回一个全新的immutable对象
    return state.set('current', action.value)
  }else if(action.type === constants.LOGIN_VISIBLE){
    return state.set('loginVisible', action.value);
  }else if(action.type === constants.LOGIN_INVISIBLE){
    return state.set('loginVisible', action.value);
  }
  return state;
}