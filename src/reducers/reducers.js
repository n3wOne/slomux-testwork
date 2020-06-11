import { CHANGE_INTERVAL } from "../actions/actions";

const initialState = { currentInterval: 0 };

export const changeIntervalReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INTERVAL:
      return {
        ...state,
        currentInterval: state.currentInterval + action.payload,
      };
    default:
      return state;
  }
};
