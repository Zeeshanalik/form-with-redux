export const dataReducer = (x = [], action) => {
  if (action.type === 'SET_DATA') {
    return action.payload;
  } else return x;
};
