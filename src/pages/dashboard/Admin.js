import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Useauth from '../../hooks/useauth';


const Admin = () => {
    const [email,setemail] = useState('')
    const {token} = Useauth()
 


console.log(email);
    const handlechange = e =>{
       setemail(e.target.value)
    }

    const handleadmin = e =>{

const user = {email}
        fetch(`https://fast-caverns-10880.herokuapp.com/adduser/admin`,{
        
            method:'PUT',
            headers:{
                "authorization": `Bearer ${token}`,
                "content-type":'application/json'
            },
        body:JSON.stringify(user)
        })
        .then(res =>res.json())
        .then(data => {
            console.log(data);
        })

        e.preventDefault()
    }
    return (
        <div>
            <h1>this is admin pannel</h1>
            <form action="" onSubmit={handleadmin}>
            <TextField
            onBlur={handlechange}
          label="email"
          id="outlined-size-small"
     type="email"
          size="small"
          
        />
               <input className="book-btn" type="submit" value="add admin" />

            </form>
        </div>
    );
};

export default Admin;