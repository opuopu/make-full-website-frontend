import {React ,useState} from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import login from '../../images/login.png'
import { spacing } from '@mui/system';
import TextField from '@mui/material/TextField';
import Button from '@restart/ui/esm/Button';
import { Link,useLocation,useHistory } from 'react-router-dom';
import Usefirebase from '../../hooks/Usefirebase';
import Useauth from '../../hooks/useauth';
import CircularProgress from '@mui/material/CircularProgress';

const Login = () => {
    const {user,googlesign,isLoading,signinuser} = Useauth()
// const [loginData,setLoginData] = usestate({})
const [ data,setdata] = useState({})
const location = useLocation()
const history = useHistory()

console.log(data);
    const handleonchange = (e) =>{
const field =  e.target.name 
const value = e.target.value
const newdata = {...data}
newdata[field] = value

 setdata(newdata)


    } 


    const handlelogin = (e) =>{


        signinuser(data?.email,data?.password,location,history)


        e.preventDefault()
    }
    return (
     <Container>
         <Grid sx={{ alignItems: 'center' ,mt:2 }}  container spacing={2}>
        <Grid item xs={8}>
                      <div>
               
               
                      <Paper elevation={0} />

                   <p>login</p>
                   {isLoading &&  <CircularProgress />}
 <form action="" onSubmit={handlelogin}>
<TextField name='email' onChange={handleonchange} style={{width:'30%'}} id="standard-basic" label="email" variant="standard" /> <br />
<TextField onChange={handleonchange} name="password"  style={{width:'30%'}} id="standard-basic" label="password" type='password' variant="standard" /> <br />

<input type="submit"  className="app-btn" value="log in here" />

</form>

<Paper />


                      </div>
                   <Link to='/register'>
                   <p>are you new here?  <span>sign up</span> </p>
                    </Link>
       <button  className="app-btn" onClick={()=>googlesign(location,history)}>google log here</button>
        </Grid>
        <Grid item xs={4}>
        <img style={{width:'90%'}} src={login} alt="" />
        </Grid>
      
        
      </Grid>
     </Container>
    );
};

export default Login;