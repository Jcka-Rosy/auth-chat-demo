// now consider this is my catergory component were I add the component which submitting the datas it get posted on
// the db but what I want is to fetch those data i want that data to get display on the UI as tag within a box

import { Form, Input, Button, Row, Col, Tag } from 'antd';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddCategoryForm = () => {
  const [categories, setCategories] = useState([]);

  let navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("values-=-=>", values)
    await axios.post('http://localhost:8001/categoriespost-data',
    values, {
  headers: {
    'Content-Type': 'application/json',
  }
}).then((res) => {
  console.log('Form submitted successfully', res.data);
  navigate('/')
})
  .catch((error) => {
    console.error('Error submitting form:', error);
  })

  };

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await axios.get('http://localhost:8001/categoriesget-data');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const [form] = Form.useForm();

  return (
    <div>

    <Form form={form} onFinish={onFinish}>
      <Form.Item
        name="category"
        label="Category Name"
        rules={[
          {
            required: true,
            message: 'Please enter the category name',
          },
        ]}
        >
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Category
        </Button>
      </Form.Item>
    </Form>
    <Row gutter={[16, 16]}>
      {categories.map((category) => (
        <Col key={category._id} span={6}>
          <Tag color="purple">{category.category}</Tag>
        </Col>
      ))}
    </Row>
        </div>


  );
}

export default AddCategoryForm;