import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import { Box, typography } from '@mui/system';
import Button from '@restart/ui/esm/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Useauth from '../../../hooks/useauth';
const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background:'white',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
const Singleapp = (props) => {
  const {user} = Useauth()
  const {name,space,time} = props.avilable || {}

 
  // --------------------------box details intial value---------------
  const initialvalue = {name:user?.displayName,email:user?.email}
  const [info,setinfo] = useState(initialvalue)
console.log(info);



const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  // --------------------post method and push another value to state --------------
const handlesubmit = e =>{

const newinfos = {...info,
  service:name,
  date:props.date.toDateString(),
  time:time
 
}




// ----post-------
fetch('https://fast-caverns-10880.herokuapp.com/addappoitment',{
    method: "POST",
    headers:{
        'content-type':'application/json'
    },
body:JSON.stringify(newinfos)

})
.then(res =>res.json())
.then(data =>{
  if(data.acknowledged){
props?.setsuccess(true)
handleClose()
  }
  
})



  e.preventDefault()



  
}
// --------------------take value from input box and set a state---------------
const handleBlur = (e) =>{
const field =  e.target.name
const value = e.target.value
const newinfo ={...info}
 newinfo[field] = value
 console.log(newinfo);
 setinfo(newinfo)
}
    return (
        <Container>
        <Grid  item lg={4}>
        <Paper elevation={0} />

        <typography variant="h4">
  {name}
        </typography> <br/>
        <typography variant="h5">
               {time}
        </typography> <br /> 
        <typography variant="p">
          avilable space: {space}
        </typography> <br /> <br />
        <Button variant="contained" onClick={handleOpen}>appoitment-now</Button>
        
<Paper />
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
         {name}
            {props?.date.toDateString()}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form onSubmit={handlesubmit}>
         {
           time &&  <TextField 
           sx={{width:'90%'}}
           label="time"
           id="standard-size-small"
         
           defaultValue={time}
           disabled
           size="small"
           variant="standard"
         />
         }
   
         {
           user?.displayName &&   <TextField 
           sx={{width:'90%'}}
           label="name"
           name="name"
           onBlur={handleBlur}
           id="standard-size-small"
           defaultValue={user?.displayName}
       
           size="small"
           variant="standard"
         />
         }

         <TextField 
          sx={{width:'90%'}}
    
          name="email"
          id="standard-size-small"
          defaultValue={user?.email}
      
          size="small"  
          onBlur={handleBlur}
          variant="standard"
        />
        
         
          <TextField 
          sx={{width:'90%'}}
          label="date"
          onBlur={handleBlur}
        
          id="standard-size-small"
          defaultValue={props?.date.toDateString()}
          disabled
      
          size="small"
          variant="standard"
        />
        
     
     <Button  type='submit' value='submit'  className="app-btn" variant="contained">submit</Button>
     
        </form>
          </Typography>
        </Box>
      </Modal>
      </Container>
    );
};

export default Singleapp;