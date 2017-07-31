import React from 'react';
import ReactDOM from 'react-dom';
import App from './business/app';

require('../node_modules/antd/dist/antd.css');
require('./style/style.css');

ReactDOM.render(<App />, document.getElementById('app'));
