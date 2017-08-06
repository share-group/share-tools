import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './app';

ReactDOM.render(<BrowserRouter>
  <Route exact path="/" component={App} />
</BrowserRouter>, document.getElementById('app'));
