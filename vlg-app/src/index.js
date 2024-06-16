import React from 'react'
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Home from './views/home'
import LogIn from './views/log-in'
import Land from './views/land'
import Map from './views/map'
import NotFound from './views/not-found'
import AllRev from './views/all-rev';
import Reviews from './views/reviews';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Home} exact path="/home" />
        <Route component={LogIn} exact path="/login" />
        <Route component={Land} exact path="/" />
        <Route component={Map} exact path="/map" />
        <Route component={AllRev} exact path="/allrev" />
        <Route component={Reviews} exact path="/Reviews" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}
const root = createRoot(document.getElementById("app"));
root.render(
      <App />
)
