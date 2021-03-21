import React, {createContext, useState} from 'react';
import './App.css';
import Home from './components/Home/Home';
import Destination from './components/Destination/Destination';
import DestinationTicketPrice from './components/DestinationTicketPrice/DestinationTicketPrice';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import CreateAccount from './components/CreateAccount/CreateAccount';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
        <Header/>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/createAccount">
            <CreateAccount />
          </Route>
          <PrivateRoute path="/destination/:id">
            <Destination />
          </PrivateRoute>
          <PrivateRoute path="/destinationTicketPrice">
            <DestinationTicketPrice />
          </PrivateRoute>
          <Route path="/">
            <Home />
          </Route>
        </Switch>   
    </Router>
    </UserContext.Provider>
  );
}

export default App;
