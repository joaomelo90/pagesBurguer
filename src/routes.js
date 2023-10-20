import React from 'react';
import { BrowserRouter as Router , Switch, Route} from 'react-router-dom';

import Home from './Pages/home';
import Users from './Pages/users';

function Routes(){

    return (
        <Router>
       <Switch>
       <Route exact path="/" component={Home} />
        <Route exact path="/pedidos" component={Users} />
        </Switch>
       </Router>
    );
}

export default Routes;