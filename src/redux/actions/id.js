const SET_ID = 'SET_ID';
export const setId = (x) => {
  return {
    type: SET_ID,
    payload: x,
  };
};
