import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { fetchArticle } from '../actions/news_action';
import { routerActions } from 'react-router-redux';
import ArticleComponent from '../components/article_component';

function mapStateToProps(state: any){
  return {
    article: state.articleReducer.article
  };
}

export default connect(mapStateToProps, {...routerActions, fetchArticle})(ArticleComponent);