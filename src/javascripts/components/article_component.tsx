import * as React from 'react';
import Header from './header';
import '../../stylesheets/article.scss';


interface Comment {
  author: string;
  content: string;
  avatar: string;
  time: number;
  id: number;
  likes: string;
  reply_to?: any;
}

interface ArticleProps {
  article: any;
  comments: Array<Comment>;
  fetchArticle: any;
  fetchShortComments: any;
  cleanData: any;
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
    this.props.fetchShortComments(this.props.match.params.id);
  }
  getDate(time: number){
    let date = new Date(time*1000);
    return date.getFullYear() + "-" + (date.getMonth()+1) + "-" + date.getDate();
  }
  componentWillUnmount(){
    this.props.cleanData("articleReducer");
  }
  render(){
    const { article, comments } = this.props;
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
          <div className="article-comments">
            <h1 className="title">评论</h1>
            {
              comments.map((comment: Comment)=>{
                return (
                  <div className="comment-block" key={comment.id}>
                    <img src={comment.avatar} />
                    <div className="comment-content">
                      <h1>
                        {comment.author}
                        {comment.reply_to?" 回复 ":""}
                        {comment.reply_to?comment.author:""}
                      </h1>
                      <p className="content">{comment.content}</p>
                      <div className="info">
                        <span><i className="fa fa-heart-o" />{comment.likes}</span>
                        <span>{this.getDate(comment.time)}</span>
                      </div>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
};