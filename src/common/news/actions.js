export const GET_NEWS = '@cards/GET_NEWS';
export const GET_NEWS_LIST = '@cards/GET_NEWS_LIST';
export const SET_NEWS_ERROR = '@cards/SET_NEWS_ERROR';
export const SET_LANGUAGE = '@cards/SET_LANGUAGE';

export const useActions = (state, dispatch) => {
  function getNews(payload) {
    dispatch({ type: GET_NEWS, payload });
  }

  function getNewsList(payload) {
    dispatch({ type: GET_NEWS_LIST, payload });
  }

  function setNewsError(payload) {
    dispatch({ type: SET_NEWS_ERROR, payload });
  }

  function setLanguage(payload) {
    dispatch({ type: SET_LANGUAGE, payload });
  }

  return {
    getNews,
    getNewsList,
    setNewsError,
    setLanguage
  };
};
