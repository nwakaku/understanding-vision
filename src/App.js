import {SimProvider} from './SimContext';
import './App.css';
import LandingPage from './components/pages/LandingPage';
import CartBasket from './components/pages/CartBasket';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import data from './components/context/data';
import { useState } from 'react';

function App() {

  
  return (
    <div className="App">
      {/* <LandingPage products={products} /> */}
      <Router>
        <SimProvider>
          <Switch>
          <Route exact path='/'>
            <LandingPage 
              />
          </Route>
          <Route exact path='/cartBasket'>
            <CartBasket
              />
          </Route>
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
        </Switch>
        </SimProvider>       
      </Router>
    </div>
  );
}

export default App;
