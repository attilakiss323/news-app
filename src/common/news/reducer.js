import { GET_NEWS, GET_NEWS_LIST } from './actions';

const initialState = {
  news: [],
  newsList: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: action.payload
      };
    case GET_NEWS_LIST:
      return {
        ...state,
        newsList: action.payload
      };
    default:
      throw new Error('Unexpected action');
  }
};

export { initialState, reducer };
