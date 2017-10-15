import { combineReducers } from 'redux';
import { RECEIVED_ARTICLE, RECEIVED_ARTICLE_COMMENT, ListAction } from '../actions/news_action';

function article(state: object={},action: ListAction<object>){
  switch(action.type){
    case RECEIVED_ARTICLE:
      return action.data;
    default:
      return state;
  }
}

export default combineReducers({
  article: article
});