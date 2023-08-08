import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import store from "./services/store";
import OrganizeEvent from "./pages/OrganizeEvent";
import Protected from "./services/jwt/Protected";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/famfest/home" element={ <HomePage/> } />
        <Route path="/famfest/organize_event" element={<OrganizeEvent/>} />
        <Route path="/famfest/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
