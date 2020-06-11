export const CHANGE_INTERVAL = "CHANGE_INTERVAL";

// action creators
export const changeInterval = (value) => {
  return {
    type: CHANGE_INTERVAL,
    payload: value,
  };
};