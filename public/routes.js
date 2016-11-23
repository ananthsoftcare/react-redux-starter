import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Home from './components/Home';
import Metrics from './components/Metrics';
import App from './containers/App';
export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="home" component={Home} />
        <Route path="metrics" component={Metrics} />
    </Route>
)