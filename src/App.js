import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/index';
import Form from './components/Form';
import FormTable from './components/FormTable';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Form />
        <FormTable />
      </div>
    </Provider>
  );
};

export default App;
