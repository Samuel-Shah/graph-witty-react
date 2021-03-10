import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


import Portfolio from './pages/portfolio/portfolio'
import LandingPage2 from './pages/landing-page/landing-page'
import Campaign from "./pages/campaign/campaign";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Portfolio />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
           <Route path="/landing">
            <LandingPage2 />
          </Route>
          <Route exact path="/campaign">
            <Campaign />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
