import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './assets/data';
import 'reset-css';
import './index.css';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
