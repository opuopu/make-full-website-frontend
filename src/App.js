import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Apphome from './pages/appoitment/Apphome';
import Login from './pages/login/Login';
import Register from './pages/login/Registration';
import Authprovider from './context/Authprovider';
import Privateroute from './pages/login/Privateroute';
import ResponsiveDrawer from './pages/dashboard/Dashboard';




function App() {
  return (
 <Authprovider>
    <BrowserRouter>
<Switch>
  <Route exact path ='/'>
<Home></Home>

  </Route>
  
<Privateroute path="/appoitment">
<Apphome></Apphome>
</Privateroute>
<Route path='/login'>
<Login></Login>
</Route>
<Privateroute path="/dashboard">
  <ResponsiveDrawer></ResponsiveDrawer>
</Privateroute>

<Route path='/register'>
<Register></Register>
</Route>
</Switch>


  </BrowserRouter>
 </Authprovider>
  );
}

export default App;
