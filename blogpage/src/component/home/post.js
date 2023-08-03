import "./home.css";
import Title from "antd/es/typography/Title";
import axios from 'axios';
import TextArea from "antd/es/input/TextArea";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Input, Form, Button, Select, message, Upload } from "antd";
import { useEffect, useRef, useState } from "react";
import { UploadOutlined } from "@ant-design/icons";

function Posts(data) {
  const [inputVisible, setInputVisible] = useState(false);
  const inputValue = useState("");
  const [categoryData, setCategoryData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [idForValidation, setIdForValidation] = useState([]);
  const [imageUrl, setImageUrl] = useState(null);
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  const location = useLocation();
  const { id } = useParams();
  let navigate = useNavigate();

  const customRequest = async ({ file, onSuccess, onError }) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:8001/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      onSuccess(response.data);
      message.success(`${file.name} file uploaded successfully.`);
      setImageUrl(`http://localhost:8001/uploads/${response.data.filename}`);
    } catch (error) {
      onError(error);
      message.error('File upload failed.');
    }
  };

  const OnFinish = async (formData) => {
    const storedLoginDetailsString = localStorage.getItem('Fullname');
    console.log("ISIS THAMANAMAE", idForValidation.find((data) => data.fullName === storedLoginDetailsString))
    const date = new Date();
    const formattedDate = date.toLocaleString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    });

    const formattedMonth = date.toLocaleString('en-US', {
      month: 'long',
      year: 'numeric',
    });

    const formTotalData = {
      ...formData,
      fullname: storedLoginDetailsString,
      date: formattedDate,
      month: formattedMonth,
    }
    const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
    if (user) {
      const dataToBeSent = {
        ...formTotalData,
        userId: user._id,
        localStorage: localStorage.getItem("Fullname"),
        image: imageUrl
      };
      console.log("pachaivanapoovae===>", dataToBeSent);

      try {
        if (id) {
          const response = await axios.put(
            `http://localhost:8001/updatePost/${id}`,
            dataToBeSent,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          console.log('Form updated successfully', response.data);
          navigate('/');
        } else {
          const response = await axios.post(
            'http://localhost:8001/submitPost-form',
            dataToBeSent,
            {
              headers: {
                'Content-Type': 'application/json',
              },
            }
          );
          console.log('Form submitted successfully', response.data);
          navigate('/');
          inputRef.current.resetFields();
        }
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    } else {
      console.error('User not found with fullname:', storedLoginDetailsString);
    }
  };

  const categoryTerm = categoryData.map((data) => { return data })
  const constructedData = categoryTerm.map((data) => (data.category.map((item) => ({ label: item, value: item }))))
  const finalCatergoryData = constructedData.flat()
  // console.log("dummyData111---->", finalCatergoryData)

  // console.log("dummyData---->", categoryData.map((data) => { return data.category }))
  useEffect(() => {
    getCategoryData()
    getUserDetails()
  }, [])

  const getCategoryData = async () => {
    try {
      const response = await fetch('http://localhost:8001/categoriesget-data');
      const data = await response.json();
      setCategoryData(data);
    } catch (error) {
      console.error('Error fetching category data:', error);
    }
  }

  const getUserDetails = async () => {
    let leftSideInfo = await fetch('http://localhost:8001/submitUserGet-form')
    let response = await leftSideInfo.json()
    console.log("responese", response)
    setIdForValidation(response);
  }

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  useEffect(() => {
    editInputRef.current?.focus();
  }, [inputValue]);

  const handleCategoryChange = (checkedValues) => {
    // console.log(`checkedValues: ${checkedValues}`)
    setSelectedCategories(checkedValues);
  };

  return (
    <div className="post">
      <div className="post-modal1">
        <div className="modal2">
          <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
            <Title className="post-header">
              {id ? 'Edit Post' : 'Add Post'}
            </Title>
          </div>
        </div>
        {categoryData ? <div >
          <Form
            ref={inputRef}
            autoComplete="off"
            style={{ width: '100%' }}
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => { OnFinish(values) }}
            onFinishFailed={(error) => {
              console.log("error", { error });
            }}
            initialValues={id ? { ...location.state } : undefined}
          >
            <Form.Item
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please enter the Title",
                },
                { whitespace: true },
                { min: 3 },
              ]}
              hasFeedback
            >
              <Input placeholder="Title" />
            </Form.Item>

            <Form.Item
              name="content"
              rules={[
                {
                  required: true,
                  message: "Please enter the Content",
                },
                { whitespace: true },
                { min: 50 },
              ]}
              hasFeedback
            >
              <TextArea placeholder="Content" rows={5} />
            </Form.Item>

            <div style={{ padding: '20px', marginRight: "1217px" }} >
              <Upload customRequest={customRequest} showUploadList={false} >
                <Button icon={<UploadOutlined />} style={{ paddingRight: '100px', paddingLeft: '100px' }}>Click to Upload Image </Button>
              </Upload>
            </div>
            <Form.Item
              name="category"
            >
              <Select
                mode="multiple"
                size="middle"
                placeholder="Catergory"
                value={selectedCategories}
                onChange={handleCategoryChange}
                style={{ width: '100%' }}
                options={finalCatergoryData}
                name="category"
              />
            </Form.Item>

            <Form.Item wrapperCol={{ span: 4 }}>
              <Button block type="primary" htmlType="submit">
                {id ? 'Update' : 'Submit'}
              </Button>
            </Form.Item>
          </Form>
        </div> : null}

      </div>
    </div>

  );
}

export default Posts;