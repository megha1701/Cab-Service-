import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Header from "./components/Header";
import SideBar from "./components/SideBar";
import Users from "./components/users/Users";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Cabs from "./components/Cab";
import Cab from "./components/Cab";
import Drivers from "./components/Drivers";
import Company from "./components/Company";
import Trips from "./components/Trips";
import NotFound from "./components/NotFound";
import React from "react";
import { BrowserRouter } from 'react-router-dom';
function App() {
  const [hasAccess, setHasAccess] = React.useState(
    JSON.parse(sessionStorage.getItem("isloggedIn"))
  );
  return (
    <div>
      {/* <Login /> */}
      <div className="App">
        {hasAccess && <Header setHasAccess={setHasAccess} />}
        <div className="app__page">
          {hasAccess && <SideBar />}
          <Routes>
            {!hasAccess && (
              <Route path="/" element={<Login setHasAccess={setHasAccess} />} />
            )}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/cabs" element={<Cab />} />
            <Route path="/drivers" element={<Drivers />} />
            <Route path="/company" element={<Company />} />
            <Route path="/trips" element={<Trips />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
