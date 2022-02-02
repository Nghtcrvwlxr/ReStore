import React from "react";
import {Route, Switch} from "react-router-dom";

import ShopHeader from "../shop-header";
import {CartPage, HomePage} from "../pages";

import './app.css';

const App = () => {
    return (
        <div className='app'>
            <ShopHeader numItems={5} total={210}/>
            <main role='main' className='container'>
                <Switch>
                    <Route path='/' exact component={HomePage}/>

                    <Route path='/cart' exact component={CartPage}/>

                    <Route render={() => <h2>This page does not exist</h2>}/>
                </Switch>
            </main>
        </div>
    );
};

export default App;
