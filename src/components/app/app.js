import React from "react";
import {Route, Switch} from "react-router-dom";

import {CartPage, HomePage} from "../pages";

import './app.css';

const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route path='/' exact component={HomePage}/>

                <Route path='/cart' exact component={CartPage}/>

                <Route render={() => <h2>This page does not exist</h2>}/>
            </Switch>
        </div>
    );
};

export default App;
