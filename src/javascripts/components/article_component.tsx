import * as React from 'react';
import Header from './header';
import '../stylesheets/article.scss';

interface ArticleProps {
  article: object;
  fetchArticle: any;
  location: any;
  push: any;
  replace: any;
  go: any;
  goBack: any;
  goForward: any;
}

export default class ArticleComponent extends React.Component<ArticleProps, any> {
  constructor(props: ArticleProps){
    super(props);
  }
  render(){
    return (
      <div className="article-container">
        <Header title={"文章"} backButton={<button className="back-button" onClick={()=>this.props.goBack()}><i className="fa fa-angle-left" /></button>}/>
        <div className="article-content">
          
        </div>
      </div>
    );
  }
};