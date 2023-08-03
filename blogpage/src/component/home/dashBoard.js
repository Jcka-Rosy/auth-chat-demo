import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';

const DashBoard = () => {
  const [data, setData] = useState([]);
  const [admin, setAdmin] = useState([]);

  useEffect(() => {
    getPostDetails()
  }, [])

  const getPostDetails = async () => {
    let leftSideInfo = await fetch('http://localhost:8001/submitGet-form')
    let response = await leftSideInfo.json()
    const loggedInUserId = localStorage.getItem('Fullname');
    const postsWithEditPermission = response.map(post => ({
      ...post,
      canEdit: post.fullname === loggedInUserId,
    }));
    setData(postsWithEditPermission);
  }

  useEffect(() => {
    getUserDetails()
  }, [])

  const getUserDetails = async () => {
    let leftSideInfo = await fetch('http://localhost:8001/submitUserGet-form')
    let response = await leftSideInfo.json()
    console.log("responese", response)
    setAdmin(response);
  }

  const calculateTotalBlogPostCount = (data) => {
    const totalBlogPostCount = data.length;
    return totalBlogPostCount;
  };
  const totalBlogPostCount = calculateTotalBlogPostCount(data);

  const calculateTotalUserCount = (data) => {
    const totalUserCount = admin.reduce((count, user) => (!user.isAdmin ? count + 1 : count), 0);
    return totalUserCount;
  };
  const totalUserCount = calculateTotalUserCount(data);

  const calculateTodaysPostCount = (data) => {
    const today = new Date().toISOString().split('T')[0]; 
    const todaysPostCount = data.reduce((count, post) => {
      const postDate = post.createdAt.split('T')[0]; 
      return postDate === today ? count + 1 : count;
    }, 0);
    return todaysPostCount;
  };
  const todaysPostCount = calculateTodaysPostCount(data);

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Total User Login" bordered={false}>
          Total Active Users : {totalUserCount}
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Total Post" bordered={false}>
         Total Number Of Posts : {totalBlogPostCount}
        </Card> 
      </Col>
      <Col span={8}>
        <Card title="Today's Post " bordered={false}>
          Today's Total Post : {todaysPostCount}
        </Card>
      </Col>
    </Row>
  );
};

export default DashBoard;
