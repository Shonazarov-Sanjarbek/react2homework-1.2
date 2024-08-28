import React, { useState } from "react";
import { Button, Form, Input, message } from "antd";
import axios from "@/api"
import { useNavigate } from "react-router-dom";
import { useStateValue } from "@/context";

const Login = () => {
  const [loading, setLoading] = useState(false)
  const [messageApi, contextHolder] = message.useMessage();
  const navigate = useNavigate()
  const [state, dispatch] = useStateValue()

  const handleLogin = (values) => {
    setLoading(true)

    axios
        .post("/auth/login", values)
        .then(res => {
          messageApi.success('Log in!');
          dispatch({type: "LOGIN", payload: res.data.token})
          navigate("/")
        })
        .catch(err => {
          messageApi.error('username or password is incorrect!');
        })
        .finally(() => setLoading(false))
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="flex h-screen items-center justify-center">
      {contextHolder}
      <div className=" w-[400px]">
        <h3 className="text-center text-3xl mb-3">Login</h3>
        <Form
          className=""
          name="basic"
          layout="vertical"
          initialValues={{
            remember: true,
          }}
          onFinish={handleLogin}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Ism kiriting!",
              },
            ]}
          >
            <Input placeholder="emilys"/>
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="emilyspass"/>
          </Form.Item>
          <Form.Item>
            <Button disabled={loading} className="w-full" type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};
export default Login;
