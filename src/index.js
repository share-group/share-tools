import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import ReactDOM from 'react-dom';
import App from './business/app';

import '../node_modules/antd/dist/antd.css';
import './style/style.css';

ReactDOM.render(<Router history={browserHistory}>
  <Route path="/" component={App} />
</Router>, document.getElementById('app'));
