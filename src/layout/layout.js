import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Auth from '../auth/auth'

const layout=(props)=>{
    return(
        <Switch>
            <Route path='/auth' component={Auth} />
        </Switch>
    )
}

export default layout