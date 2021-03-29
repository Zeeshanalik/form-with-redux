// -------------------------------------REDUCER FOR ID -------------------------------------------------

const id = (id = '', action) => {
  if (action.type === 'SET_ID') {
    return action.payload;
  } else return id;
};
// -------------------------------------REDUCER FOR NAME -------------------------------------------------

const name = (name = '', action) => {
  if (action.type === 'SET_NAME') {
    return action.payload;
  } else return name;
};

// -------------------------------------REDUCER FOR FATHER NAME -------------------------------------------------

const fatherName = (fatherName = '', action) => {
  if (action.type === 'SET_FATHERNAME') {
    return action.payload;
  } else return fatherName;
};
// -------------------------------------REDUCER FOR AGE -------------------------------------------------

const age = (age = '', action) => {
  if (action.type === 'SET_AGE') {
    return action.payload;
  } else return age;
};
// -------------------------------------REDUCER FOR ADDRESS -------------------------------------------------

const address = (address = '', action) => {
  if (action.type === 'SET_ADDRESS') {
    return action.payload;
  } else return address;
};

// -------------------------------------REDUCER FOR EDIT BUTTON -------------------------------------------------

const editButton = (editButton = false, action) => {
  if (action.type === 'SET_EDITBUTTON') {
    return action.payload;
  } else return editButton;
};

// -------------------------------------REDUCER FOR SETTING DATA IN AN ARRAY -------------------------------------------------

const data = (data = [], action) => {
  if (action.type === 'SET_DATA') {
    return action.payload;
  } else return data;
};

// -------------------------------------EXPORTING REDUCERS -------------------------------------------------

export { id, name, fatherName, age, address, editButton, data };
