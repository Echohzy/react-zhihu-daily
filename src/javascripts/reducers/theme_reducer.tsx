import { combineReducers } from 'redux';
import { RECEIVED_SINGLE_THEME, CLEAN_DATA, ListAction} from '../actions/news_action';

function theme(state: object={}, action: ListAction<string|object>){
  switch(action.type){
    case RECEIVED_SINGLE_THEME:
      return action.data;
    case CLEAN_DATA:
      if(action.data === "ThemeReducer"){
        return {};
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({theme: theme});