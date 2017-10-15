import * as React from 'react';
import Header from './header';
import '../../stylesheets/article.scss';

interface ArticleProps {
  article: any;
  fetchArticle: any;
  location: any;
  match: any;
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
  componentDidMount(){
    this.props.fetchArticle(this.props.match.params.id);
  }
  render(){
    const { article } = this.props;
    return (
      <div className="article-container">
        <Header title={"文章"} backButton={<button className="back-button" onClick={()=>this.props.goBack()}><i className="fa fa-angle-left" /></button>}/>
        <div className="article-content">
          <div className="article-title-block">
            <img src={article.image} />
            <div className="article-title">
              <p className="title">{article.title}</p>
              <p className="source">{"图片来源："+article.image_source}</p>
            </div>
          </div>
          <div className="article-body" dangerouslySetInnerHTML={{__html: article.body}}></div>
        </div>
      </div>
    );
  }
};