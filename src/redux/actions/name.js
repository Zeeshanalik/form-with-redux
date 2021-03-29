const SET_NAME = 'SET_NAME';
export const setName = (x) => {
  return {
    type: SET_NAME,
    payload: x,
  };
};
