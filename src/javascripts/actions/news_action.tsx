import axios from "axios";

export const RECEIVED_LATEST_NEWS = "RECEIVED_LATEST_NEWS";
export const RECEIVED_HOT_NEWS = "RECEIVED_HOT_NEWS";
export const RECEIVED_THEMES = "RECEIVED_THEMES";
export const RECEIVED_ARTICLE = "RECEIVED_ARTICLE";
export const RECEIVED_ARTICLE_COMMENT = "RECEIVED_ARTICLE_COMMENT";
export const CLEAN_DATA = "CLEAN_DATA";

export interface ListAction<T> {
  type: string;
  data: T
}

function receivedLatestNews(data: object[]): ListAction<object[]>{
  return {
    type: RECEIVED_LATEST_NEWS,
    data: data
  };
}

function receivedHotNews(data: object[]): ListAction<object[]>{
  return {
    type: RECEIVED_HOT_NEWS,
    data: data
  }
}

function receivedThemes(data: object[]): ListAction<object[]>{
  return {
    type: RECEIVED_THEMES,
    data: data
  }
}

function receivedArticle(data: object): ListAction<object>{
  return {
    type: RECEIVED_ARTICLE,
    data: data
  };
}

function receivedArticleComment(data: object[]): ListAction<object[]>{
  return {
    type: RECEIVED_ARTICLE_COMMENT,
    data: data
  };
}

function cleanDate(reducerName: string): ListAction<string>{
  return {
    type: CLEAN_DATA,
    data: reducerName
  };
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


export function fetchHotNews(){
  return (dispatch: any, getState: object)=>{
    return axios.get("/api?uri=https://news-at.zhihu.com/api/3/news/hot").then((response)=>{
      return response.data;
    }).then((res)=>{
      if(res.status === "success"){
        dispatch(receivedHotNews(res.data.recent));
      }
    }).catch(()=>{
      
    })
  }
}

export function fetchThemes(){
  return (dispatch: any, getState: object)=>{
    return axios.get("/api?uri=https://news-at.zhihu.com/api/4/themes").then((response)=>{
      return response.data;
    }).then((res)=>{
      if(res.status==="success"){
        dispatch(receivedThemes(res.data.others));
      }
    }).catch(()=>{
      
    })
  }
}

export function fetchArticle(id: number){
  return (dispatch: any, getState: object)=>{
    return axios.get("/api?uri=https://news-at.zhihu.com/api/4/news/"+id).then((response)=>{
      return response.data;
    }).then((res)=>{
      if(res.status==="success"){
        dispatch(receivedArticle(res.data));
      }
    }).catch(()=>{
      
    })
  }
}