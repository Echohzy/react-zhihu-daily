import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../../stylesheets/latest_news.scss";

interface LatestListProps {
  latestNews: {
    stories?: object[];
    date?: string;
    top_stories?: object[];
  };
};

interface StoryProps {
  images: string[],
  title: string,
  id: number
}

export default class LatestList extends React.Component<LatestListProps, any> {
  constructor(props: LatestListProps){
    super(props);
  }
  render(){
    return (
      <div className="list-container">
        {
          this.props.latestNews.stories&&this.props.latestNews.stories.map((story: StoryProps)=>{
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