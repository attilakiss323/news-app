const api = ({ id, params } = {}) => ({
  topNews: `https://newsapi.org/v2/top-headlines?${Object.keys(params).reduce(
    (acc, key) => (acc = (acc ? `${acc}&` : '') + `${key}=${params[key]}`),
    ''
  )}`
});

export default api;
