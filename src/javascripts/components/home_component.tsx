import * as React from "react";
import Tabs, { TabItem } from './Tabs';
import { Link } from 'react-router-dom';
import LatestList from './latest_list';
import HotList, { HotNew } from './hot_list';
import ThemeList, {Theme} from './theme_list';
import "../../stylesheets/home.scss";

interface HomeProps {
  latestNews: {
    stories: object[]
  };
  hotNews: Array<HotNew>;
  themes: Array<Theme>;
  location: any;
  fetchLatestNews: any;
  fetchHotNews: any;
  fetchThemes: any;
  cleanData: any;
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
  componentWillMount(){
    let root = document.getElementById("container");
    root.scrollTop = 0;
  }
  componentDidMount(){
    let searchType = this.getNewsType(this.props.location.search)||"new";
    this.fetchData(searchType);
  }
  fetchData(type: string){
    switch(type){
      case "new":
        this.props.fetchLatestNews();
        break;
      case "hot":
        this.props.fetchHotNews();
        break;
      case "theme":
        this.props.fetchThemes();
        break;
      default:
        return;
    }
  }
  componentWillReceiveProps(nextProps: HomeProps){
    const {location} = this.props;
    let nextSearchType=this.getNewsType(nextProps.location.search);
    if(this.getNewsType(location.search)!==nextSearchType){
      if((nextSearchType==="new"&&!nextProps.latestNews.stories)||(nextSearchType==="hot"&&nextProps.hotNews.length===0)||(nextSearchType==="theme"&&nextProps.themes.length===0)){
        this.fetchData(nextSearchType);
      }
    }
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
  componentWillUnmount(){
    this.props.cleanData("homeReducer");
  }
  render(){
    const {location} = this.props;
    return (
      <div className="home-container">
        <Tabs activeKey={this.getNewsType(location.search)||"new"}>
          <TabItem itemKey="new" title={<Link to={{pathname:"/home", search:"?type=new" }}>最新</Link>}>
            <LatestList latestNews={this.props.latestNews} />
          </TabItem>
          <TabItem itemKey="hot" title={<Link to={{pathname:"/home", search:"?type=hot"}}>最热</Link>}>
            <HotList hotNews={this.props.hotNews} />
          </TabItem>
          <TabItem itemKey="theme" title={<Link to={{pathname:"/home", search:"?type=theme"}}>主题</Link>}>
            <ThemeList themes={this.props.themes}/>
          </TabItem>
        </Tabs>
      </div>
    );
  }
}