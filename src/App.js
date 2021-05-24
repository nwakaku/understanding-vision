import './App.css';
import LandingPage from './components/pages/LandingPage';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={LandingPage} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
