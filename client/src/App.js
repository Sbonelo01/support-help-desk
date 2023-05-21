import "./App.css";
import "./index.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
// import TestComponent from "./components/TestComponent";
// const URL = "https://jsonplaceholder.typicode.com/posts";
import GiveAssist from "./components/GiveAssist";
import GetAssist from "./components/GetAssist";
// import Home from "./components/Home";
// import Login from "./components/Login";
// import QueryHistory from "./components/QueryHistory";
// import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<GetAssist />} />
        <Route path="give-assist" element={<GiveAssist />} />
        {/* <Route path="login" element={<Login />} /> */}
        {/* <Route path="query-history" element={<QueryHistory />} /> */}
      </Routes>
    </div>
  );
}

export default App;
