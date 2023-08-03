import React, { useEffect, useState } from 'react';
import { Layout, Menu, Typography, Button } from 'antd';
import './header.css'
import { useNavigate } from 'react-router-dom';
import { HomeTwoTone } from '@ant-design/icons';


const { Header } = Layout;
const { Title } = Typography;

const BlogHeader = () => {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('Fullname'));
  let navigate = useNavigate();

  useEffect(() => {
    setLoggedIn(!!localStorage.getItem('Fullname')); 
  }, []);

  const handleHome = () => {
    navigate('/')
  };

  const handleLogin = () => {
    navigate('/login')
  };

  const handleLogout = () => {
    localStorage.removeItem("Fullname");
    localStorage.removeItem("AdminAccess");
    setLoggedIn(false);
    navigate('/')
  };

  useEffect(() => {
    const checkAuthentication = () => {
      const isUserLoggedIn = !!localStorage.getItem('Fullname');
      setLoggedIn(isUserLoggedIn);
    };

    checkAuthentication();
  }, [loggedIn]);

  return (
    <Header className="blog-header">
      <div className="logo">
        <Title level={3} className="logo-text"> BLOG </Title>
      </div>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={['1']} className="header-menu">
        <Menu.Item key="1" onClick={handleHome}> <HomeTwoTone /> Home </Menu.Item>
        {loggedIn ? (
          <Menu.Item key="4" className="logout-button">
            <Button onClick={handleLogout}>Logout</Button>
          </Menu.Item>
        ) : (
          <Menu.Item key="4" className="login-button">
            <Button onClick={handleLogin}>Login</Button>
          </Menu.Item>
        )}
      </Menu>
    </Header>
  );
};

export default BlogHeader;
