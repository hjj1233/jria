import React, { FormEvent } from "react";

const LoginSerbver = () => {
  const login = (params: { userName: string; password: string }) => {
    fetch("http://localhost:3002/login", {
      method: "POST",
      headers: {
        "Content-Typea": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then(async (response) => {
        if (response.ok) {
          // return await response.json()
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const onList = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userName = (event.currentTarget.elements[0] as HTMLInputElement)
      .value;
    const password = (event.currentTarget.elements[1] as HTMLInputElement)
      .value;
    console.log(userName, password);
    login({ userName, password });
  };
  return (
    <>
      <form onSubmit={onList}>
        <div>
          <label>
            用户名：
            <input type="text" placeholder="用户名" />
          </label>
        </div>
        <div>
          <label>
            密码：
            <input type="password" placeholder="用户名" />
          </label>
        </div>
        <button type="submit">登录</button>
      </form>
    </>
  );
};
export default LoginSerbver;
