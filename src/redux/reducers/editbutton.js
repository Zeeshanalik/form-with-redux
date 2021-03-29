export const editButtonReducer = (x = false, action) => {
  if (action.type === 'SET_EDITBUTTON') {
    return action.payload;
  } else return x;
};
