import { combineReducers } from 'redux';
import { RECEIVED_ARTICLE, RECEIVED_ARTICLE_COMMENT, DetailAction } from '../actions/news_action';

function article(state: object={},action: DetailAction){
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