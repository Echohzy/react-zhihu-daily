import * as React from 'react';
import Header from './header';
import '../../stylesheets/theme.scss';
import { Link } from 'react-router-dom';

interface Editor {
  id: number;
  avatar: string;
  name: string;
};

interface Theme {
  id: number;
  title: string;
  images: string[]
}

interface ThemeProps {
  cleanData: any;
  fetchSingleTheme: any;
  theme: any;
  location: any;
  match: any;
  push: any;
  replace: any;
  go: any;
  goBack: any;
  goForward: any;
}

export default class ThemeComponent extends React.Component<ThemeProps, any>{
  constructor(props: ThemeProps){
    super(props);
  }
  componentDidMount(){
    this.props.fetchSingleTheme(this.props.match.params.id);
  }
  componentWillUnmount(){
    this.props.cleanData("themeReducer");
  }
  render(){
    const { theme } = this.props;
  
    return (
      <div className="theme-container">
        <Header title="主题" backButton={<button className="back-button" onClick={()=>this.props.goBack()}><i className="fa fa-angle-left" /></button>}/>
        <div className="theme-content">
          <div className="theme-title-block">
            <img src={theme.background} />
            <div className="theme-title">
              <h1>{theme.name}</h1>
              <p>{theme.description}</p>
            </div>
          </div>
          <div className="theme-authors">
            {
              theme.editors&&theme.editors.map((editor: Editor)=>{
                return (
                  <div className="avatar" key={editor.id}>
                    <img src={editor.avatar} />
                    <span>{editor.name}</span>
                  </div>
                );
              })
            }
          </div>
          <div className="list-container">
            {
              theme.stories&&theme.stories.map((item: Theme)=>{
                return (
                  <div className="theme-block" key={item.id}>
                    <Link to={{pathname: "/articles/"+item.id}}>
                      <img src={item.images?item.images[0]:theme.background} />
                      <div className="title">
                        <h1 title={item.title}>{item.title}</h1>
                      </div>
                    </Link>
                  </div>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}