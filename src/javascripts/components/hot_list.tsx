import * as React from 'react';
import { Link } from 'react-router-dom';

export interface HotNew {
  title: string;
  news_id: number;
  url: string;
  thumbnail: string;
}

interface HotListProps {
  hotNews: Array<HotNew>;
}


export default class HotList extends React.Component<HotListProps, any> {
  constructor(props:HotListProps){
    super(props);
  }
  render(){
    return (
      <div className="list-container">
      {
        this.props.hotNews.map((item: HotNew)=>{
          return (
            <Link className="new-block" to={{pathname: "/news/"+item.news_id}} key={item.news_id}>
              <div className="image-wrapper"><img src={item.thumbnail} /></div>
              <p>{item.title}</p>
            </Link>
          );
        })
      }
      </div>
    );
  }
}