import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Main from './Main';
import AppWrapper from './AppWrapper';
import registerServiceWorker from './registerServiceWorker';
//import Photo from './Photo';

ReactDOM.render(<AppWrapper />, document.getElementById('root'));
registerServiceWorker();
