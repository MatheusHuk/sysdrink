import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as Pages from './pages';

export default function Routes({ initiate }){

    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" render={(props) => <Pages.Inicio initiate={initiate} />} exact />
                <Route path="/login" render={(props) => <Pages.Login initiate={initiate} /> } exact />
            </Switch>
        </BrowserRouter>
    );
}