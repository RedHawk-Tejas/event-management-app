import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from 'react-redux';

import store from "./services/redux/store";
import Protected from "./services/jwt/Protected";
import HomePage from "./page/HomePage";
import OrganizeEvent from "./page/OrganizeEvent";
import YourEvents from "./page/YourEvents";
import Payment from "./page/Payment";
import OnlineEvents from "./page/OnlineEvents";
import OfflineEvents from "./page/OfflineEvents";

function App() {
  return (
    <Provider store={store}>
    <BrowserRouter> 
      <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/organize_event" element={<Protected><OrganizeEvent/></Protected>} />
        <Route path="/your_events" element={<Protected><YourEvents/></Protected>} />
        <Route path="/payment" element={<Protected><Payment/></Protected>} />
        <Route path="/online_events" element={<OnlineEvents/>} />
        <Route path="/offline_events" element={<OfflineEvents/>} />

      </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
