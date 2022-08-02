import { Button, Form, Input } from "antd";
import React from "react";
import { useAuth } from "../../../context/auth-context";

const RegisterSerbver = () => {
  const { login, user, register } = useAuth();
  // const login = (params:{userName:string,password:string})=>{
  //       fetch('http://localhost:3001/login',
  //       {
  //         method:'POST',
  //         headers:{
  //           'Content-Typea':'application/json'
  //         },
  //         body:JSON.stringify(params)
  //     }).then(async response=>{
  //         if(response.ok) {
  //           // return await response.json()
  //         }
  //       }).catch(e=>{
  //         console.log(e)
  //       })
  // }

  const onList = (value: { username: string; password: string }) => {
    register({ ...value });
  };
  return (
    <>
      <Form
        // labelCol={{ span: 24 }}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        wrapperCol={{ span: 24 }}
        layout="horizontal"
        onFinish={onList}
      >
        <div>{user ? `登录成功,用户名为:${user}` : null}</div>
        <Form.Item
          label="用户名"
          name="username"
          rules={[{ required: true, message: "请输入用户名" }]}
        >
          <Input type="text" placeholder="用户名" />
        </Form.Item>
        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入密码" }]}
        >
          <Input type="password" placeholder="密码" />
        </Form.Item>
        <Button htmlType="submit" type="primary">
          注册
        </Button>
      </Form>
    </>
  );
};
export default RegisterSerbver;
