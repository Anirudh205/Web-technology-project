import './App.css';
import { Navbar } from './Components/Navbar'
import {Mainbody} from './Components/Mainbody'
import { Login } from './Components/Login'
import { WriteStory } from './Components/WriteStory';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <>
              <Navbar />
              <Mainbody />
            </>
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/write-story">
            <Navbar />
            <WriteStory />
          </Route>
        </Switch>

      </div>
    </Router>

  );
}

export default App;
