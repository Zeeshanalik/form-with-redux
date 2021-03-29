const SET_DATA = 'SET_DATA';
export const setData = (x) => {
  return {
    type: SET_DATA,
    payload: x,
  };
};
