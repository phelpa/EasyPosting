import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './reducers';
import App from './App';


class AppWrapper extends Component {
  render() {
    return (
      
     <Provider store={store}>
        <App/> 
     </Provider>
      
      
    );
  }
}

export default AppWrapper;




