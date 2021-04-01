import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import SideBar from "../src/components/sideBar";
import People from "./pages/people";
import Buildings from "./pages/buildings";
// import Groups from "./pages/groups";
// import Doors from "./pages/doors";
function App() {
  
  return (
    // <>
    //   <CustomCard/>
    // </>
    <Router>
        <Switch>
        {/* <Route path='/Home'>
            <Home />
        </Route> */}
        <Route path='/People'>
             <People />
        </Route>
        <Route path='/Buildings'>
             <Buildings />
        </Route>
        {/* <Route path='/Groups'>
             <Groups />
        </Route>
        <Route path='/Doors'>
             <Doors />
        </Route> */}
        </Switch>
    </Router>
  );
}

export default App