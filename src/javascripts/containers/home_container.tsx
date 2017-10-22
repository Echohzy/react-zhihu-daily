import * as React from 'react';
import { connect } from 'react-redux';
import { fetchLatestNews, fetchHotNews, fetchThemes, cleanData } from '../actions/news_action';
import HomeComponent from '../components/home_component';
import { routerActions } from 'react-router-redux';

function mapStateToProps(state: any){
  return {
    latestNews: state.homeReducer.latestNews,
    hotNews: state.homeReducer.hotNews,
    themes: state.homeReducer.themes
  };
}

export default connect(mapStateToProps, {fetchLatestNews, fetchHotNews, fetchThemes, cleanData})(connect(null, routerActions)(HomeComponent));



