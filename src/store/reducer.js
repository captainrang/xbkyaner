import { combineReducers } from 'redux-immutable';
import { reducer as headerReducer } from '../common/header/store';
import { reducer as provinceReducer } from '../components/proviceSelector/store';
import { reducer as adjustReducer } from '../pages/adjust/store';

export default combineReducers({
  header: headerReducer,
  province: provinceReducer,
  adjust: adjustReducer
});