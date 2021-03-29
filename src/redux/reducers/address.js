export const addressReducer = (x = '', action) => {
  if (action.type === 'SET_ADDRESS') {
    return action.payload;
  } else return x;
};
