import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/style.css';
import SideBar from "../src/components/sideBar";
import CustomCard from "../src/components/card";
import People from "./pages/people";
import Buildings from "./pages/buildings";
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
        </Switch>
    </Router>
  );
}

export default App