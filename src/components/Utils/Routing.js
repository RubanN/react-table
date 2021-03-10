import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Task from '../pages/Task';
import Home from '../Home';
import PageNotFound from '../PageNotFound'

export default class Routing extends Component {
    render() {
        return (
            <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/task" component={Task} exact/>
                <Route path="*" component={PageNotFound} />
            </Switch>
            </BrowserRouter>
        )
    }
}


