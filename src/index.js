import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './app';

import '../node_modules/antd/dist/antd.css';
import './style/style.css';

ReactDOM.render(<BrowserRouter>
  <Route exact path="/" component={App} />
</BrowserRouter>, document.getElementById('app'));
