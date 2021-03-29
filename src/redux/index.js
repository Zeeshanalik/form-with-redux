import { combineReducers } from 'redux';
import {
  id,
  name,
  fatherName,
  age,
  address,
  data,
  editButton,
} from './reducers/index';
import { createStore } from 'redux';

const rootReducer = combineReducers({
  id,
  name,
  fatherName,
  age,
  address,
  data,
  editButton,
});

const store = createStore(rootReducer);
export default store;
