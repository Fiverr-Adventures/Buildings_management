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
          </Switch>
    </Router>
  );
}

export default App