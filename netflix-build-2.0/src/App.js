import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
import { auth } from "./firebase"
import { login, logout, selectUser } from "./features/userSlice"
import { useDispatch, useSelector } from 'react-redux'
import ProfileScreen from './screens/ProfileScreen';
function App() {
  const user = useSelector(selectUser) //selector is used for accesing redux store values from desired slice
  const authDispatcher = useDispatch() // dispatch is used for pushing in values into desired redux store slice.
  
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        authDispatcher(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      //  setUser(userAuth)
      }
      else {
        authDispatcher(logout())
      //  setUser(null)
      }
    })
    return unsubscribe;
  }, [authDispatcher])
  return (
    <div className="App">
      {!user ? <LoginScreen /> : (
        <Router>
          <Switch>
            <Route exact path='/'> <HomeScreen /></Route>
            <Route exact path='/profile'> <ProfileScreen /></Route>
          </Switch>
        </Router>
      )}

    </div>
  );
}

export default App;
