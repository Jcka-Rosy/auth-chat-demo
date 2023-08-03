import React from "react";
import { Form, Button, Checkbox, DatePicker, Input, Select } from "antd";
import { useNavigate } from 'react-router-dom';
import Title from "antd/es/typography/Title";
import axios from 'axios';
import "./register.css";

function Register() {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await axios.post("http://localhost:8001/submit-form", values, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Form submitted successfully");
      navigate('/login');
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="register">
      <div className="modal1">
        <div className="modal2">
          <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
            <Title className="LoginHeader">Register Page</Title>
          </div>
        </div>
        <div>
          <Form
            autoComplete="off"
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => { onFinish(values) }}
            onFinishFailed={(error) => {
              console.log("error", { error });
            }}
          >
            <Form.Item
              name="fullName"
              label="Full Name"
              rules={[
                {
                  required: true,
                  message: "Please enter your name",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your name" />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: "Please enter your email",
                },
                {
                  type: "email",
                  message: "Please enter a valid email",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="Type your email" />
            </Form.Item>

            <Form.Item
              name="password"
              label="Password"
              rules={[ 
                {
                  required: true,
                  message: "Please enter your password",
                },
                { min: 6 },
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Type your password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              label="Confirm Password"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: "Please confirm your password",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      "The two passwords that you entered do not match."
                    );
                  },
                }),
              ]}
              hasFeedback
            >
              <Input.Password placeholder="Confirm your password" />
            </Form.Item>

            <Form.Item name="gender" label="Gender" requiredMark="optional">
              <Select placeholder="Select your gender">
                <Select.Option value="male">Male</Select.Option>
                <Select.Option value="female">Female</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item
              name="dob"
              label="Date of Birth"
              rules={[
                {
                  required: true,
                  message: "Please provide your date of birth",
                },
              ]}
              hasFeedback
            >
              <DatePicker
                style={{ width: "100%" }}
                picker="date"
                placeholder="Choose date of birth"
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              wrapperCol={{ span: 24 }}
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          "To proceed, you need to agree with our terms and conditions"
                        ),
                },
              ]}
            >
              <Checkbox>
                {" "}
                Agree to our <a href="#">Terms and Conditions</a>
              </Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ span: 24 }}>
              <Button block type="primary" htmlType="submit">
                Register
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default Register;