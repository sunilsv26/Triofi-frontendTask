import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Auth from '../auth/auth';
import User from '../user/user';
import Admin from '../admin/admin'

const layout=(props)=>{
    return(
        <Switch>
            <Route path='/user' component={User} />
            <Route path='/admin' component={Admin} />
            <Route path='/' component={Auth} />
        </Switch>
    )
}

export default layout