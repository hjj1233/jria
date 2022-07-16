import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ProjectList } from "./screens/project-list";
import LoginSerbver from "./screens/loginServer/login";

function App() {
  return (
    <div>
      {/* <ProjectList /> */}
      <LoginSerbver />
    </div>
  );
}

export default App;
