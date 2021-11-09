// import React from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import Usefirebase from '../../../hooks/Usefirebase';
import Useauth from '../../../hooks/useauth'

const Headers = () => {
  const {user,Signout} = Useauth()
    return (
       
            <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Link to="/appoitment">
        <Button color="inherit">appoitment</Button>
        </Link>
        {user?.email ? <button onClick={Signout}>logout</button> : <Link to="/login">
        <Button color="inherit">Login</Button>

        </Link>
        
        }
      {
        user?.email &&   <Link to="/dashboard"><p>dashboad</p></Link>
      }
{
  user?.email ? <p>{user?.displayName}</p> : ''
}
        
        </Toolbar>
      </AppBar>
    </Box>
     
    );
};

export default Headers;