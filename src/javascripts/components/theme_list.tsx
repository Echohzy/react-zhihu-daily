import * as React from 'react';
import { Link } from 'react-router-dom';

export interface Theme{
  id: number;
  name: string;
  thumbnail: string;
  description: string;
}
interface ThemeListProps {
  themes: Array<Theme>
}
export default class ThemeList extends React.Component<ThemeListProps, any> {
  constructor(props: ThemeListProps){
    super(props);
  }
  render(){
    return (
      <div className="list-container">
        {
          this.props.themes.map((theme: Theme)=>{
            return (
              <Link key={theme.id} to={{pathname: "/themes/"+theme.id}}>
                <div className="theme-block">
                  <img src={theme.thumbnail} />
                  <div className="title">
                    <h1 title={theme.name}>{theme.name}</h1>
                    <p title={theme.description}>{theme.description}</p>
                  </div>
                </div>
              </Link>
            );
          })
        }
      </div>
    );
  }
}