import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Series from "../../containers/Series";

const Main = props => (
    <Switch>
        <Route exact path="/" component={Series} />
    </Switch>
);

export default Main;
