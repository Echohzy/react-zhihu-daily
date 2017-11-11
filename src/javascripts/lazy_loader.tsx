import * as React from 'react';
import { Link } from 'react-router-dom';
import * as action from './actions/news_action';
console.log(action);
export default function lazyLoader (importComponent: any) {
  class AsyncComponent extends React.Component<any, any> {
    constructor(props: any){
      super(props);
      this.state = {
        Component: null
      }
    }
    async componentDidMount () {
      const { default: Component } = await importComponent();
      this.setState({
        Component: Component
      });
    }
    render () {
      const Component = this.state.Component;
      return Component
        ? <Component {...this.props} />
        : null;
    }
  }
  return AsyncComponent;
};