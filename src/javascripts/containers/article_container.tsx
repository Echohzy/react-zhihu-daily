import * as React from 'react';
import { connect } from 'react-redux';
import { fetchArticle, fetchShortComments, cleanData } from '../actions/news_action';
import { routerActions } from 'react-router-redux';
import ArticleComponent from '../components/article_component';

function mapStateToProps(state: any){
  return {
    article: state.articleReducer.article,
    comments: state.articleReducer.comments
  };
}

export default connect(mapStateToProps, {...routerActions, fetchArticle, fetchShortComments, cleanData})(ArticleComponent);