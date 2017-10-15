import { combineReducers } from 'redux';
import { RECEIVED_ARTICLE, RECEIVED_ARTICLE_COMMENTS, CLEAN_DATA, ListAction } from '../actions/news_action';

function article(state: object={},action: ListAction<object[]|string>){
  switch(action.type){
    case RECEIVED_ARTICLE:
      return action.data;
    case CLEAN_DATA:
      if(action.data === "articleReducer"){
        return {};
      }
      return state;
    default:
      return state;
  }
}

function comments(state: object[]=[], action: ListAction<object[]|string>){
  switch(action.type){
    case RECEIVED_ARTICLE_COMMENTS:
      return action.data;
    case CLEAN_DATA:
      if(action.data === "articleReducer"){
        return [];
      }
      return state;
    default:
      return state;
  }
}



export default combineReducers({
  article: article,
  comments: comments
});