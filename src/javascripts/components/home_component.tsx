import * as React from "react";
import Tabs, { TabItem } from './Tabs';
import { Link } from 'react-router-dom';
import LatestList from './latest_list';
import "../../stylesheets/home.scss";

interface HomeProps {
  latestNews: object;
  location: any;
  getLatestNews: any;
  push: any;
  replace: any;
  go: any;
  goBack: any;
  goForward: any;
}
export default class HomeComponent extends React.Component <HomeProps, any>{
  constructor(props: HomeProps){
    super(props);
  }
  componentDidMount(){
    this.props.getLatestNews();
  }
  getNewsType(search: string){
    search = search.substring(1);
    let params: string[] = search.split("&"),
      match;
    for(var i=0,len=params.length;i<len;i++){
      if(match = params[i].match(/type=(\w+)/)){
        return match[1];
      }
    }
  }
  render(){
    const {location} = this.props;
    console.log(this.getNewsType(location.search));
    return (
      <div className="home-container">
        <Tabs activeKey={this.getNewsType(location.search)||"new"}>
          <TabItem itemKey="new" title={<Link to={{pathname:"/home", search:"?type=new" }}>最新</Link>}>
            <LatestList latestNews={this.props.latestNews} />
          </TabItem>
          <TabItem itemKey="hot" title={<Link to={{pathname:"/home", search:"?type=hot"}}>最热</Link>}>
            <div />
          </TabItem>
          <TabItem itemKey="theme" title={<Link to={{pathname:"/home", search:"?type=theme"}}>主题</Link>}>
            <div />
          </TabItem>
        </Tabs>
      </div>
    );
  }
}