import * as React from "react";

export default class Article extends React.Component {
  constructor(props: any){
    super(props);
    this.state = {
      article: {}
    };
  }
  render(){
    return (
      <div className="article-container">
      </div>
    );
  }
}