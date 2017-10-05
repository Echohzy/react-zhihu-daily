import { combineReducers } from 'redux';
import { RECEIVED_LATEST_NEWS, RECEIVED_HOT_NEWS, RECEIVED_THEMES, Action} from '../actions/news_action';


function latestNews(state:object = {}, action: Action){
  switch(action.type){
    case RECEIVED_LATEST_NEWS:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  latestNews: latestNews
});