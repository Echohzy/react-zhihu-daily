import { combineReducers } from 'redux';
import { RECEIVED_LATEST_NEWS, RECEIVED_HOT_NEWS, RECEIVED_THEMES, CLEAN_DATA, ListAction} from '../actions/news_action';


function latestNews(state:object = {}, action: ListAction<object|string>){
  switch(action.type){
    case RECEIVED_LATEST_NEWS:
      return action.data;
    case CLEAN_DATA:
      if(action.data === "homeReducer"){
        return {};
      }
      return state;
    default:
      return state;
  }
}

function hotNews(state: object[] = [], action: ListAction<object[]|string>){
  switch(action.type){
    case RECEIVED_HOT_NEWS:
      return action.data;
    case CLEAN_DATA:
      if(action.data === "homeReducer"){
        return [];
      }
      return state;
    default:
      return state;
  }
}

function themes(state: object[] = [], action: ListAction<object[]|string>){
  switch(action.type){
    case RECEIVED_THEMES:
      return action.data;
    case CLEAN_DATA:
      if(action.data === "homeReducer"){
        return [];
      }
      return state;
    default:
      return state;
  }
}

export default combineReducers({
  latestNews: latestNews,
  hotNews: hotNews,
  themes: themes
});