import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";

import "antd/dist/reset.css";
import { Button, Form, Input, message } from "antd";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

function Login() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Loggedin Successfully",
    });
  };

  const error = () => {
    messageApi.open({
      type: "error",
      content: "Incorrect Password",
    });
  };

  const warning = () => {
    messageApi.open({
      type: "warning",
      content: "User does not exist",
    });
  };

  const onLoginFinish = async (values) => {
    setLoading(true);

    try {
      // Check if the user exists in Firebase Realtime Database
      const userRef = firebase
        .database()
        .ref("users")
        .orderByChild("username")
        .equalTo(values.username);

      userRef.once("value", (snapshot) => {
        const users = snapshot.val();
        if (users) {
          // Get the first user that matches the provided username
          const user = Object.values(users)[0];
          // Check if the password matches
          if (user.password === values.password) {
            success();
            console.log("User authenticated");
            localStorage.setItem("userId", user.userId);
            navigate("/");
            window.location.reload();

            // TODO: Redirect user to authorized resources
          } else {
            error();
            console.log("Incorrect password");
            // TODO: Show error message
          }
        } else {
          warning();
          console.log("User does not exist");
          // TODO: Show error message or redirect user to registration page
        }
      });
    } catch (error) {
      console.error(error);
      console.log(error.response);
      // TODO: Handle error
    }

    setLoading(false);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.container}>
      {contextHolder}
      <h1 className={style.heading}>Login</h1>

      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onLoginFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit" loading={loading}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Login;
