export const ageReducer = (x = '', action) => {
  if (action.type === 'SET_AGE') {
    return action.payload;
  } else return x;
};
