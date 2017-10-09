import * as React from 'react';
import { connect } from 'react-redux';
import { fetchLatestNews } from '../actions/news_action';
import HomeComponent from '../components/home_component';
import { routerActions } from 'react-router-redux';

function mapStateToProps(state: any){
  return {
    latestNews: state.homeReducer.latestNews
  };
}

function mapDispatchToProps(dispatch: any, getState: any){
  return {
    getLatestNews: function(){
      return dispatch(fetchLatestNews());
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(connect(null, routerActions)(HomeComponent));



