import { Button } from "antd";
import React, { useState } from "react";
import "./App.css";
// import { ProjectList } from "./screens/project-list";
import LoginSerbver from "./screens/loginServer/login";
import RegisterSerbver from "./screens/registerServer/register";

function App() {
  const [loginStatus, setLoginStatus] = useState<Boolean>(true);
  return (
    <div>
      {/* <ProjectList /> */}
      {loginStatus ? <LoginSerbver /> : <RegisterSerbver />}
      <Button
        onClick={() => {
          setLoginStatus(!loginStatus);
        }}
      >
        切换用户为{loginStatus ? "登录" : "注册"}
      </Button>
    </div>
  );
}

export default App;
