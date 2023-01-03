import "./App.css";
import React, { useState, useEffect } from "react";
// import TestComponent from "./components/TestComponent";
// const URL = "https://jsonplaceholder.typicode.com/posts";
import GiveAssist from "./components/GiveAssist";
import GetAssist from "./components/GetAssist";
// import Home from "./components/Home";
// import Login from "./components/Login";

function App() {
  return (
    <React.Fragment>
      <div>
        {/* <div><GetAssist /></div> */}
        <div>
          <GiveAssist />
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
