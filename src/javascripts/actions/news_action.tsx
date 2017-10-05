import axios from "axios";

export const RECEIVED_LATEST_NEWS = "RECEIVED_LATEST_NEWS";
export const RECEIVED_HOT_NEWS = "RECEIVED_HOT_NEWS";
export const RECEIVED_THEMES = "RECEIVED_THEMES";

export interface Action {
  type: string,
  data: ReadonlyArray<object>
}

function receivedLatestNews(data: object[]): Action{
  return {
    type: RECEIVED_LATEST_NEWS,
    data: data
  };
}

function receivedHotNews(data: object[]): Action{
  return {
    type: RECEIVED_HOT_NEWS,
    data: data
  }
}

function receivedThemes(data: object[]): Action{
  return {
    type: RECEIVED_THEMES,
    data: data
  }
}

export function fetchLatestNews(){
  return (dispatch: any, getState: object)=>{
    return axios.get("/api?uri=https://news-at.zhihu.com/api/4/news/latest").then((response)=>{
      return response.data;
    }).then((data)=>{
      if(data.status==="success"){
        dispatch(receivedLatestNews(data.data));
      }
    }).catch(()=>{
      
    })
  }
}