// --------------------------------ACTION TO SET ID----------------------------------------

const SET_ID = 'SET_ID';
const setId = (id) => {
  return {
    type: SET_ID,
    payload: id,
  };
};

// --------------------------------ACTION TO SET  NAME----------------------------------------

const SET_NAME = 'SET_NAME';
const setName = (name) => {
  return {
    type: SET_NAME,
    payload: name,
  };
};

// --------------------------------ACTION TO SET FATHER NAME----------------------------------------

const SET_FATHERNAME = 'SET_FATHERNAME';
const setFatherName = (fatherName) => {
  return {
    type: SET_FATHERNAME,
    payload: fatherName,
  };
};

// --------------------------------ACTION TO SET AGE----------------------------------------

const SET_AGE = 'SET_AGE';
const setAge = (age) => {
  return {
    type: SET_AGE,
    payload: age,
  };
};

// --------------------------------ACTION TO SET ADDRESS----------------------------------------

const SET_ADDRESS = 'SET_ADDRESS';
const setAddress = (address) => {
  return {
    type: SET_ADDRESS,
    payload: address,
  };
};

// --------------------------------ACTION TO SET EDIT BUTTON ----------------------------------------

const SET_EDITBUTTON = 'SET_EDITBUTTON';
const setEditButton = (editButton) => {
  return {
    type: SET_EDITBUTTON,
    payload: editButton,
  };
};

// --------------------------------ACTION TO SET DATA IN AN ARRAY ----------------------------------------

const SET_DATA = 'SET_DATA';
const setData = (data) => {
  return {
    type: SET_DATA,
    payload: data,
  };
};

// --------------------------------EXPORTING ACTIONS ----------------------------------------

export {
  setId,
  setName,
  setFatherName,
  setAge,
  setAddress,
  setEditButton,
  setData,
};
