import * as React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class LatestList extends React.Component {
  constructor(props: object){
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
      </div>
    );
  }
}