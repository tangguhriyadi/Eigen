import React, { useState } from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Col, Layout, Row, Button, Checkbox, Form, Input } from "antd";

import "./App.css";

function App() {
  const onFinish = (values: any) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Row>
      <Col className="left" span={12}>
        <div className="form-container">
          <Row>
            <img
              className="telkom-img"
              src="https://th.bing.com/th/id/OIP.-BAt-yoP8DwolAFhhuud6gHaHa?pid=ImgDet&w=512&h=512&rs=1"
              alt="telkom"
              loading="lazy"
            />
          </Row>
          <h1 className="title">
            <strong>Welcome Back</strong>
          </h1>

          <h3>Please Login using Single Sign On</h3>

          <Form
            layout="vertical"
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[{ message: "Please input your username!" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[{ message: "Please input your password!" }]}
            >
              <Input.Password />
            </Form.Item>

            <div className="sign-in">
              <Form.Item>
                <Button
                  style={{ backgroundColor: "red", color: "white" }}
                  htmlType="submit"
                >
                  Sign in
                </Button>
              </Form.Item>
              <div style={{ marginRight: "170px" }}>
                <span>forgot password?</span>
                <p>
                  New Here?<a href="#">Create an Account</a>
                </p>
              </div>
            </div>
          </Form>
        </div>
      </Col>
      <Col className="right" span={12}>
        <img style={{ height: "100vh" }} src="Capture.PNG" alt="gambar" />
      </Col>
    </Row>
  );
}

export default App;
