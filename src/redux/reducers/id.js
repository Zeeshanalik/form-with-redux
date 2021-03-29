export const idReducer = (x = '', action) => {
  if (action.type === 'SET_ID') {
    return action.payload;
  } else return x;
};
