import React from 'react';

import { Redirect, Route } from 'react-router';
import CircularProgress from '@mui/material/CircularProgress';
import Useauth from '../../../hooks/useauth';




const Adminroute = ({children,...rest}) => {
    const {user,isLoading,admin} = Useauth()

    if(isLoading){
        return     <CircularProgress />
    }
    return (
        <div className="private-main">
 


      <Route
      
      {...rest}
      render={({ location }) =>
       user?.email && admin[0]?.roll==="admin" ? (
             children
           ) : (
             <Redirect
               to={{
                 pathname: "/",
                 state: { from: location }
               }}
             />
           )
         }
      >
      
      </Route>

      </div>
    );
};

export default Adminroute;