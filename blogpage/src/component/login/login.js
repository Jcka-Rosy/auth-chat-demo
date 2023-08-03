import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Modal, Tabs } from "antd";
import './login.css'
import Title from "antd/es/typography/Title";
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import axios from "axios";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [loginError, setLoginError] = useState();

  let navigate = useNavigate();
  console.log("Neram",loginError);
  
    const onFinish = async(values) => {
      setLoading(true);
    console.log("Dewaanihogayae===>", values);
    var loginDetail = {
      Fullname : values.fullName,
      pwd : values.password, 
      id : values._id
    };
    const loginDataString = JSON.stringify(loginDetail);
    console.log("login--->", loginDataString);
    
    const term = localStorage.setItem("Fullname", loginDetail.Fullname);
    console.log("term===========>",term)

      await axios.post('http://localhost:8001/loginsubmit-form',
      values, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then((res) => {
      console.log('Form submitted successfully', res.data.isAdmin);
      if(res.data.isAdmin === true){
        const adminData = localStorage.setItem("AdminAccess", res.data.isAdmin)
        console.log("adminData", adminData)
        navigate('/adminhome')
      }else{
        navigate('/')
      }
    })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          setLoginError('Your account is blocked. Contact the administrator for assistance.');
        } else {
          setLoginError('Invalid email or password');
        }
      });
      setLoading(false);
      console.log('Received values of form: ', values);
    };

return (
  <div className="content">
     <div>
     <div className="modal1"> 
<div className="modal2">
    <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
<Title className="LoginHeader">Login Page</Title>
    </div>

</div>
<div>
<Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        name="fullName"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        {loginError && <div style={{ color: "red" }}>{loginError}</div>}
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
</div>
   </div>
     </div>
  </div>
    );
}
export default Login;