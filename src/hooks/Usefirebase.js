import { GoogleAuthProvider,getAuth, signInWithPopup, onAuthStateChanged,signOut,createUserWithEmailAndPassword,signInWithEmailAndPassword ,updateProfile,getIdToken } from "firebase/auth";

import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import Initialize from "../firebase/Init";

Initialize()
const Usefirebase = () =>{
    const [user,setuser] = useState({})
    // const[email,setemail] = useState('')
    // const[password,setpassword] = useState('')
const[isLoading,setLoading] = useState(true)
const [error,seterror] = useState('')
const [admin,setadmin] = useState('')
const [token,settoken] = useState('')

const auth = getAuth()
const googleprovider = new GoogleAuthProvider()
//----------------- google log in-----------------
const googlesign = (location,history) =>{
    setLoading(true)
 signInWithPopup(auth,googleprovider)
.then(result=>{
    const user = result.user 
    setuser(user) 
    saveUser(user?.email,user?.displayName,"PUT")
     const redirect_url = location?.state?.from || '/'
    history.push(redirect_url)
    seterror('')
   
})
.catch(err=>{
seterror(err.message)
})
.finally(()=>setLoading(false))

  }

// -----------------------  createuser------------------

const registerUser = (email, password,name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
        .then((result) => {
            const  user = result.user
            setuser(user)

            seterror('')
            updateProfile(auth.currentUser, {
                displayName:name
              }).then(() => {
   
              })
              saveUser(email,name,"POST")
        })
        .catch((err) => {
            seterror(err.message)
            console.log(error);
        })
        .finally(() => setLoading(false));
}
// login user with email passs
// onauthchange
useEffect(()=>{
    
      
    const unsubscribe=  onAuthStateChanged(auth,user=>{
          if(user){
              setuser(user)
            // ----  step 1 getidtoke------
            getIdToken(user)
            .then(idToken =>{
                settoken(idToken)
             localStorage.setItem('idToken',idToken)
            })
          }
          else{
              setuser({})
             
          }
          setLoading(false)
      })
      return ()=> unsubscribe
    
  },[])
//   -----------------------save user to database----------
  const saveUser = (email,displayName,method) =>{
const user = {email,displayName}
fetch(`https://fast-caverns-10880.herokuapp.com/adduser`,{
    method:method,
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(user)
})
}
const signinuser = (email,password,location,history) =>{
    setLoading(true)
  
    signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        const user = result.user 
        setuser(user)
        const redirect_url = location?.state?.from || '/'
        history.push(redirect_url)
        seterror('')
    })
    .catch((err)=>{
        seterror(err.message)
    })
    .finally(()=> setLoading(false))
}

// ----------------cheek admin

useEffect(()=>{
fetch(`https://fast-caverns-10880.herokuapp.com/getuser/${user?.email}`)
.then(res =>res.json())
.then(data => setadmin(data))
},[user?.email])

// logoout

const Signout = () =>{
    signOut(auth)
    .then(()=>{
        setuser({})
    })

    // saveuser to database
    
}

return {googlesign,isLoading,user,Signout,registerUser,signinuser,admin,token}

}


export default Usefirebase