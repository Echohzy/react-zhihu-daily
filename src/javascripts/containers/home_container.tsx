import * as React from 'react';
import { connect } from 'react-redux';
import { fetchLatestNews, fetchHotNews } from '../actions/news_action';
import HomeComponent from '../components/home_component';
import { routerActions } from 'react-router-redux';

function mapStateToProps(state: any){
  return {
    latestNews: state.homeReducer.latestNews,
    hotNews: state.homeReducer.hotNews
  };
}

function mapDispatchToProps(dispatch: any, getState: any){
  return {
    getLatestNews: function(){
      return dispatch(fetchLatestNews());
    },
    getHotNews: function(){
      return dispatch(fetchHotNews());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(connect(null, routerActions)(HomeComponent));



