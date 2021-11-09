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
import { Link } from 'react-router-dom';
import Usefirebase from '../../hooks/Usefirebase';
import CircularProgress from '@mui/material/CircularProgress';



const Register = () => {
    const {registerUser,isLoading,user} = Usefirebase()
    console.log(user);
// const [loginData,setLoginData] = usestate({})
const [ data,setdata] = useState({})
console.log(data)
const [error,seterror] = useState('')
console.log(data);
    const handleonchange = (e) =>{
const field =  e.target.name 
const value = e.target.value
const newdata = {...data}
newdata[field] = value
console.log(newdata);
 setdata(newdata)


    } 


    const handleregister = () =>{



if(data.password !== data.reTypepassword){
seterror('password does not matched')
return

}

registerUser(data?.email, data?.password,data?.name)


     
    }
    return (
     <Container>
         <Grid sx={{ alignItems: 'center' ,mt:2 }}  container spacing={2}>
        <Grid item xs={8}>
                      <div>
               
               
                      <Paper elevation={0} />

{isLoading  &&   <CircularProgress />} <br /> <br />

{!isLoading && <div>
    <TextField name='name' type='name' onChange={handleonchange} style={{width:'30%'}} id="standard-basic" label="name" variant="standard" /> <br />
<TextField name='email' type='email' onChange={handleonchange} style={{width:'30%'}} id="standard-basic" label="email" variant="standard" /> <br />
<TextField onChange={handleonchange} name="password"  style={{width:'30%'}} id="standard-basic" label="password" type='password' variant="standard" /> <br />
<TextField onChange={handleonchange} name="reTypepassword"  style={{width:'30%'}} id="standard-basic" label="password" type='password' variant="standard" /> <br />
<Button  type='submit' onClick={handleregister}  className="app-btn" >sign up here</Button>
<p>{error}</p>

</div>}


<Paper />


                      </div>
   <Link to="/login">already login? </Link>

        </Grid>
        <Grid item xs={4}>
        <img style={{width:'90%'}} src={login} alt="" />
        </Grid>
      
        
      </Grid>
     </Container>
    );
};

export default Register;