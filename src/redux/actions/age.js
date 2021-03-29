const SET_AGE = 'SET_AGE';
export const setAge = (x) => {
  return {
    type: SET_AGE,
    payload: x,
  };
};
