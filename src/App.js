import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import People from "./pages/people";
import Buildings from "./pages/buildings";
import Groups from "./pages/groups";
import Doors from "./pages/doors";
import Home from "./pages/home";
import Login from "./pages/login";
import HelpUser from './pages/helpUser';
import WalkTrought from './pages/walkTrought';
import PermissionsRequest from './pages/permissionRequest';
import image from './assets/icons/svg/Wendt-Floor.svg'
function App() {

  return (
     <Router>
          <Switch>
               <Route path='/Login'>
                    <Login />
               </Route>
               <Route path='/Home'>
                    <Home />
               </Route>
               <Route path='/People'>
                    <People />
               </Route>
               <Route path='/Buildings'>
                    <Buildings />
               </Route>
               <Route path='/Groups'>
                    <Groups />
               </Route>
               <Route path='/Doors'>
                    <Doors />
               </Route>
               <Route path='/HelpUser'>
                    <HelpUser />
               </Route>
               <Route path='/WalkTrought'>
                    <WalkTrought />
               </Route>
               <Route path='/PermissionsRequest'>
                    <PermissionsRequest />
               </Route>
          </Switch>
    </Router>
  );
}

export default App