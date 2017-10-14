import * as React from 'react';
import { connect } from 'react-redux';
import { fetchLatestNews, fetchHotNews, fetchThemes } from '../actions/news_action';
import HomeComponent from '../components/home_component';
import { routerActions } from 'react-router-redux';

function mapStateToProps(state: any){
  return {
    latestNews: state.homeReducer.latestNews,
    hotNews: state.homeReducer.hotNews,
    themes: state.homeReducer.themes
  };
}

export default connect(mapStateToProps, {fetchLatestNews, fetchHotNews, fetchThemes})(connect(null, routerActions)(HomeComponent));



