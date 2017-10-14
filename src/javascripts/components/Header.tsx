import * as React from "react";
import * as PropTypes from 'prop-types';
import '../../stylesheets/header.scss';

interface Props{
  title: string,
  backButton?: object
};

export default class Header extends React.Component<Props> {
  static propTypes = {
    title: PropTypes.string,
    backButton: PropTypes.node
  };
  
  constructor(props: Props){
    super(props);
  }
  render(){
    const { title, backButton } = this.props;
    return (
      <div className="header-container">
        {backButton}
        <p className="title">{title}</p>
      </div>
    );
  }
}