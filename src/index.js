import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import data from './assets/data';
import 'reset-css';
import 'font-awesome/css/font-awesome.min.css';
import './index.css';

ReactDOM.render(<App data={data} />, document.getElementById('root'));
