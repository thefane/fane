import React from "react";
import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import AppBar from "./AppBar";
import Authenticate from "./Authenticate";
import Landing from "./Landing";
import Signin from "./Signin";
import Features from "./Pages/Features";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col w-full">
        <AppBar />
        
        <div className="w-[100%]">
            <Routes>
            <Route  path="/" Component={Landing} />
            <Route path="/verify" Component={Authenticate} />
            <Route path="/signin" Component={Signin} />
            <Route path="/features" Component={Features} />

            </Routes>
        </div>
      </div>
    </Router>
  );
}
