export const nameReducer = (x = '', action) => {
  if (action.type === 'SET_NAME') {
    return action.payload;
  } else return x;
};
