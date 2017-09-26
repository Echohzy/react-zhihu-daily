import * as React from "react";
import axios from 'axios';

interface ArticleProps {
  match: {
    params: {
      id: number
    }
  }
};
export default class Article extends React.Component<ArticleProps, any> {
  constructor(props: ArticleProps){
    super(props);
    this.state = {
      article: {}
    };
  }
  componentDidMount(){
    const { match } = this.props;
    axios.get("/api?uri=https://news-at.zhihu.com/api/4/news/"+match.params.id)
    .then((res)=>{
      return res;
    }).then((res)=>{
      this.setState({article: res});
    }).catch(function(){
      
    });
  }
  render(){
    return (
      <div className="article-container">
      </div>
    );
  }
}