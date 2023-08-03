import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  DashboardOutlined,
  UserOutlined,
  ContainerOutlined,
  TagsOutlined,
} from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import "./home.css";
import { Content } from 'antd/es/layout/layout';
import AddCategoryForm from './category';
import Home from './home';
import DashBoard from './dashBoard';
import UserDetails from './userDetails';

const { Sider } = Layout;


const AdminHomePage = () => {
  const [selectedMenuItem, setSelectedMenuItem] = useState('1');
  let navigate = useNavigate();

  const handleMenuClick = (event) => {
    const selectedKey = event.key;
    setSelectedMenuItem(event.key)

    if (selectedKey === '5') {
      console.log('Successfully Loged out !')
      navigate('/login');
    }
  };
  return (
    <div>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider width={150} theme="light" className="sidebar">
        <div className="logo" />
        <Menu mode="inline" 
        className="menu"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', borderRight: 0 }}
        onClick={handleMenuClick}>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />} style={{marginRight : "5px"}}>
            Users
          </Menu.Item>
          <Menu.Item key="3" icon={<ContainerOutlined />}>
            Posts
          </Menu.Item>
          <Menu.Item key="4" icon={<TagsOutlined />}>
            Categories
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ padding: '0 20px 20px' }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 20,
              margin: 0,
              minHeight: 280,
            }}
          >
            {selectedMenuItem === '1' && <div><DashBoard/></div>}
            {selectedMenuItem === '2' && <div><UserDetails/></div>}
            {selectedMenuItem === '3' && <div><Home/></div>}
            {selectedMenuItem === '4' && <div><AddCategoryForm/></div>}
          </Content>
        </Layout>
    </Layout>
    </div>
  
  );
};

export default AdminHomePage;