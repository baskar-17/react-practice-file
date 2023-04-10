import React from "react";
import style from "./login.module.css";

import "antd/dist/reset.css";
import { Button, Form, Input } from "antd";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjKv7wjpze7v0zsiNj0d5V-ISECXqs_-I",
  authDomain: "social-db-2bd57.firebaseapp.com",
  projectId: "social-db-2bd57",
  storageBucket: "social-db-2bd57.appspot.com",
  messagingSenderId: "778089332580",
  appId: "1:778089332580:web:3db4d2aebdd3425a9c8471",
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

function Register() {
  const [form] = Form.useForm();

  const generateUserId = () => {
    // Generate a random 6 digit number between 100000 and 999999
    const userId = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;

    // Convert the number to a string and return it
    return userId.toString();
  };

  const onFinish = (values: any) => {
    console.log("Success:", values);

    // Generate a unique user ID
    const userId = generateUserId();

    // Store the user's data and user ID in the Realtime Database
    database.ref("users/" + userId).set({
      ...values,
      userId: userId,
    });

    form.resetFields();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className={style.container}>
      <h1 className={style.heading}>Create New Account</h1>

      <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
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
          label="Email Address"
          name="emailaddress"
          rules={[{ required: true, message: "please enter a valid mail!" }]}
        >
          <Input type="email" />
        </Form.Item>

        <Form.Item
          label="Password"
          name="password"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Register;
