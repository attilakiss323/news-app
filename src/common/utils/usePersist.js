import isObject from 'crocks/predicates/isObject';
import getProp from 'crocks/Maybe/getProp';
import safe from 'crocks/Maybe/safe';
import Maybe from 'crocks/Maybe';
import setProp from 'crocks/helpers/setProp';

export function usePersist(state, whitelist) {
  whitelist.map(key => {
    const value = safe(isObject, state)
      .chain(getProp(key))
      .option(null);
    if (value) {
      window.localStorage.setItem(key, value);
    }
  });

  return state;
}

export function useHydrate(state, whitelist) {
  return whitelist.reduce((acc, key) => {
    const value = Maybe(window)
      .chain(getProp('localStorage'))
      .chain(getProp(key))
      .option(null);

    if (value) {
      acc = { ...acc, ...setProp(key, value, state) };
      return acc;
    }

    return acc;
  }, state);
}
