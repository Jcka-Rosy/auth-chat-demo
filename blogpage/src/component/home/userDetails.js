import React, { useEffect, useState } from "react";
import { Table, Input, Button } from "antd";
import { DeleteOutlined, StopOutlined, CheckCircleOutlined } from '@ant-design/icons';
import axios from "axios";

const { Search } = Input;

const UserDetails = () => {
  const [searchText, setSearchText] = useState("");
  const [data, setData] = useState([]);
  const [admin, setAdmin] = useState([]);
  const [blogsCountByPerson, setBlogsCountByPerson] = useState({});

  useEffect(() => {
    getPostDetails()
    getUserDetails()
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
    const blogsCountByPerson = calculateBlogsCountByPerson(postsWithEditPermission);
    setBlogsCountByPerson(blogsCountByPerson);
  }

  const getUserDetails = async () => {
    let leftSideInfo = await fetch('http://localhost:8001/submitUserGet-form')
    let response = await leftSideInfo.json()
    console.log("responese", response)
    setAdmin(response);
  }

  const calculateBlogsCountByPerson = (data) => {
    const blogsCountByPerson = data.reduce((result, blog) => {
      const { fullname } = blog;
      result[fullname] = (result[fullname] || 0) + 1;
      return result;
    }, {});
    return blogsCountByPerson;
  };

  const handleSearch = (value) => {
    const filteredData = data.filter(
      (item) => item.fullname.toLowerCase().includes(value.toLowerCase().trim())
    );
    const blogsCountByPerson = calculateBlogsCountByPerson(filteredData);
    setBlogsCountByPerson(blogsCountByPerson);
    setData(filteredData);
    setSearchText(value)
  };

  const handleDelete = async (record) => {
    console.log("record", record._id)
    if (admin && admin.some((user) => user.isAdmin)) {
      try {
      await axios.delete(`http://localhost:8001/delete-posts/${record.userId}`, {
          headers: {
            'Content-Type': 'application/json',
          }
      });
      
      const response = await axios.delete(`http://localhost:8001/delete-user/${record.userId}`, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

        if (response.status === 204) {
          const updatedData = data.filter((item) => item.userId !== record.userId);
          console.log("updatedData", updatedData)
          setData(updatedData);
        } else {
          alert("Delete request failed");
        }
      } catch (error) {
        console.error("Error occurred during delete request:", error);
        alert("Error deleting the user.");
      }
    } else {
      alert("As you are the user, you can't delete this account!");
    }
  };

  const handleBlock = async(record) => {

  console.log("User ID:", record.userId);
  console.log("Blocked Status:", !record.blocked);

    try {
      const response = await axios.put(
        `http://localhost:8001/block-user/${record.userId}`, 
        { blocked: !record.blocked });
    console.log("bubbly", response);
    
      if (response.status === 200) {
        const updatedData = data.map((item) =>
        item._id === record._id ? { ...item, blocked: !item.blocked } : item
      );

      // Update the data state with the new array
      setData(updatedData);
      //   record.blocked = !record.blocked;
      // setData([...data]); 
      } else {
        alert("Block request failed");
      }
    } catch (error) {
      console.error('Error blocking user:', error);
      alert("Error blocking the user.");
    }
  };

  const filteredData = data.reduce((unique, item) => {
    return unique.find((i) => i.fullname === item.fullname) ? unique : [...unique, item];
  }, []);

  const columns = [
    {
      title: "Full Name",
      dataIndex: "fullname",
      key: "fullname",
      render: (text) => text,
      sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    },
    {
      title: "Blogs Count",
      dataIndex: "fullname",
      key: "blogsCount",
      render: (text) => blogsCountByPerson[text],
      sorter: (a, b) => {
        const blogsCountA = blogsCountByPerson[a.fullname];
        const blogsCountB = blogsCountByPerson[b.fullname];
        return blogsCountA - blogsCountB;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <span>
          {admin && admin.some((user) => user.isAdmin) ? (
          <>
            <Button
              type="dashed"
              danger
              shape="round"
              style={{marginRight: '10px'}}
              icon={<DeleteOutlined />}
              onClick={() => handleDelete(record)}
            >
              Delete
            </Button>
            <Button
              type="primary"
              ghost
              shape="round"
              icon={record.blocked ? <CheckCircleOutlined /> : <StopOutlined />}
              onClick={() => handleBlock(record)}
            >
              {record.blocked ? "Unblock" : "Block"}
            </Button>
          </>
        ) : (
          <span>Not Allowed</span>
        )}
        </span>
      ),
    },
  ];

  return (
    <>
      <Search
        placeholder="Search by Full Name"
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: 16 }}
      />
      <Table columns={columns} dataSource={filteredData} rowKey="_id" />
    </>
  );
};

export default UserDetails;

// As you have all the codes of mine like header page, login, register, home, userdetails, backend details and also the API fetch details I want you to convert i in the way that 
// as an admin when they block the user by clicking the block button the user was disable and he/ she may not able to access their account.AP
// please send me the code for this
