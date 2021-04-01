import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  
  return (
    <Router>
        <Switch>
        <Route path='/Register'>
            <Register />
        </Route>
        <Route path='/'>
          <SideBar></SideBar>
        </Route>
        </Switch>
    </Router>
  );
}

export default App