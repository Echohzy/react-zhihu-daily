import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../../stylesheets/latest_news.scss";

interface LatestListProps {
  location: object
};

interface StoryProps {
  images: string[],
  title: string,
  id: number
}

export default class LatestList extends React.Component<LatestListProps, any> {
  constructor(props: LatestListProps){
    super(props);
    this.state={
      news: {}
    }
  }
  componentDidMount(){
    axios.get("/api?uri=https://news-at.zhihu.com/api/4/news/latest").then((res)=>{
      return res.data;
    }).then((res)=>{
      if(res.status==="success"){
        this.setState({news: res.data});
      }
    }).catch(function(){
      
    })
  }
  render(){
    return (
      <div className="list-container">
        {
          this.state.news.stories&&this.state.news.stories.map((story: StoryProps)=>{
            return (
              <Link className="new-block" to={{pathname: "/news/"+story.id}} key={story.id}>
                <div className="image-wrapper"><img src={story.images[0]} /></div>
                <p>{story.title}</p>
              </Link>
            );
          })
        }
      </div>
    );
  }
}