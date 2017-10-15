import * as React from 'react';
import { connect } from 'react-redux';
import { fetchSingleTheme, cleanData } from "../actions/news_action";
import { routerActions } from 'react-router-redux';
import ThemeComponent from '../components/theme_component';

function mapStateToProps(state: any){
  return {
    theme: state.themeReducer.theme
  };
}

export default connect(mapStateToProps, {...routerActions, fetchSingleTheme, cleanData})(ThemeComponent);