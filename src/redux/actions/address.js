const SET_ADDRESS = 'SET_ADDRESS';
export const setAddress = (x) => {
  return {
    type: SET_ADDRESS,
    payload: x,
  };
};
