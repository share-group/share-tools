import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './business/menu';

require('../node_modules/antd/dist/antd.css');
require('./style/style.css');

ReactDOM.render(<Menu />, document.getElementById('app'));
