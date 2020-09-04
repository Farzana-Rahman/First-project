import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Home from './Home';
import About from './About';
import Analytics from './Analytics'
import Details from './Details';
import Prevention from './Prevention'

class Routing extends Component {
    render() {

        return (
            <div>
                <Route exact path="/" component={Home}></Route>
                <Route path="/analytics" component={Analytics}></Route>
                <Route path="/details" component={Details}></Route>
                <Route path="/prevention" component={Prevention}></Route>
                <Route path="/about" component={About}></Route>
                

            </div>
        );
    }
}

export default Routing;