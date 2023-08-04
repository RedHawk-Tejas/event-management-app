import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import AddEvent from "./pages/AddEvent";
import { Provider } from 'react-redux';
import store from "./services/store";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/famfest/home" element={<HomePage/>} />
        <Route path="/famfest/organize_event" element={<AddEvent/>} />
      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
