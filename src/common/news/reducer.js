import { GET_NEWS, GET_NEWS_LIST, SET_NEWS_ERROR } from './actions';
import Maybe from 'crocks/Maybe';

const { Just, Nothing } = Maybe;

const initialState = {
  news: Nothing(),
  newsList: Nothing(),
  error: Nothing()
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NEWS:
      return {
        ...state,
        news: Just(action.payload)
      };
    case GET_NEWS_LIST:
      return {
        ...state,
        newsList: Just(action.payload)
      };
    case SET_NEWS_ERROR:
      return {
        ...state,
        error: Just(action.payload)
      };
    default:
      throw new Error('Unexpected action');
  }
};

export { initialState, reducer };
