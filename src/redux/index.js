import { combineReducers } from 'redux';
import { idReducer } from './reducers/id';
import { nameReducer } from './reducers/name';
import { fatherNameReducer } from './reducers/fatherName';
import { ageReducer } from './reducers/age';
import { addressReducer } from './reducers/address';
import { dataReducer } from './reducers/data';
import { editButtonReducer } from './reducers/editbutton';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  id: idReducer,
  name: nameReducer,
  fatherName: fatherNameReducer,
  age: ageReducer,
  address: addressReducer,
  data: dataReducer,
  editButton: editButtonReducer,
});

const store = createStore(rootReducer);
export default store;
