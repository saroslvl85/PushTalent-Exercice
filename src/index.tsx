//import Hello from './components/Hello';
import Button from './components/Button';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(
  <Button/>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
