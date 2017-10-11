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
          this.props.themes.map((item: Theme)=>{
            
          })
        }
      </div>
    );
  }
}