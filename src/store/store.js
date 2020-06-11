import { changeIntervalReducer } from "../reducers/reducers";

const createStore = (reducer, state) => {
  let currentState = state;
  const listeners = [];

  const getState = () => currentState;
  const dispatch = (action) => {
    currentState = reducer(currentState, action);
    listeners.forEach((listener) => listener());
  };

  const subscribe = (listener) => listeners.push(listener);

  const unsubscribe = (listener) => listeners.splice(listener, 1);

  return { getState, dispatch, subscribe, unsubscribe };
};

const store = createStore(changeIntervalReducer, { currentInterval: 0 });

export default store;
