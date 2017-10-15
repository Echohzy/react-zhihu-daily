import { combineReducers } from 'redux';
import { RECEIVED_LATEST_NEWS, RECEIVED_HOT_NEWS, RECEIVED_THEMES, ListAction} from '../actions/news_action';


function latestNews(state:object = {}, action: ListAction<object>){
  switch(action.type){
    case RECEIVED_LATEST_NEWS:
      return action.data;
    default:
      return state;
  }
}

function hotNews(state: object[] = [], action: ListAction<object[]>){
  switch(action.type){
    case RECEIVED_HOT_NEWS:
      return action.data;
    default:
      return state;
  }
}

function themes(state: object[] = [], action: ListAction<object[]>){
  switch(action.type){
    case RECEIVED_THEMES:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  latestNews: latestNews,
  hotNews: hotNews,
  themes: themes
});