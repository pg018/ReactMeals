import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/style.scss';
import Login from './pages/Login/Login';
import Homepage from './pages/Homepage/Homepage';
import Signup from './pages/Login/Signup';
import AllMeals from './pages/AllMeals/AllMeals';
import { APIPATH } from './middleware/apiList';
import { useCallback, useEffect } from 'react';
import { useAppDispatch } from './mainStore';
import { reduxServices } from './reducers/reduxServices';


function App() {
  const dispatch = useAppDispatch();
  const loadState = useCallback(()=>{
    const tokenFromStorage = localStorage.getItem("token");
    const emailFromStorage = localStorage.getItem("email");
    const loginFromStorage = localStorage.getItem("isLoggedIn");
    return {
      authenticatedUser: {
        token:tokenFromStorage,
        email:emailFromStorage,
        isLoggedIn:loginFromStorage
      },
    }
  },[]);

  useEffect(()=>{
    const initialAuthenticationState = loadState();
    dispatch(reduxServices.auth.actions.setAuthentication(initialAuthenticationState))
  },[])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>} />
        <Route path={APIPATH.signIn} element={<Login/>}/>
        <Route path={APIPATH.signUp} element={<Signup/>}/>
        <Route path={APIPATH.meals} element={<AllMeals />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

