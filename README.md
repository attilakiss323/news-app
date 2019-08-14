## News App

### Start app

- yarn
- set REACT_APP_NEWS_APP_KEY to api key
- yarn start

### Pages

- News - all top news
- Categories - 5 top news for each category (business, entertainment, general, health, science, sports, technology)
- Search
- Category - all top news for the given category
- Article

### Features

- React hooks
- Context provider for storing global state
- useDebounce - handles debouncing user input in the search field
- dimensionsHOC - higher order component that adds an event listener on window resize and passes down `window.innerWidth` and `window.innerHeight` to its child
- usePersist - persists values to localStorage for the given whitelist (note: only works for one level nested keys)
- useHydrate - rehydretes state with values from localStorage on app refresh (note: only works for one level nested keys)
