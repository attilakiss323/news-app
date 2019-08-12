export const GET_NEWS = '@cards/GET_NEWS';
export const GET_NEWS_LIST = '@cards/GET_NEWS_LIST';

export const useActions = (state, dispatch) => {
  function getNews(payload) {
    dispatch({ type: GET_NEWS, payload });
  }

  function getNewsList(payload) {
    dispatch({ type: GET_NEWS_LIST, payload });
  }

  return {
    getNews,
    getNewsList
  };
};
