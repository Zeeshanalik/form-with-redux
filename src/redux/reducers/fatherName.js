export const fatherNameReducer = (x = '', action) => {
  if (action.type === 'SET_FATHERNAME') {
    return action.payload;
  } else return x;
};
