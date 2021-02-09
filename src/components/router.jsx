import React from 'react';
import { Switch, Route } from 'react-router';
 
export default (
    // Switch is added in v4 react-router
    <Switch>
        <Route path='/' exact />
        <Route path='/about' exact />
        <Route path='/events' exact />
        <Route path='/livestreams' exact />
        <Route /> {/* No-match case */} 
    </Switch>
);