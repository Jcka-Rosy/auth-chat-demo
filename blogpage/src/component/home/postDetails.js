import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { Button, Space, Divider, Tag, Input, Form, List } from 'antd';
import { Icon } from '@ant-design/compatible';
import axios from "axios";

const PostDetails = () => {
    const location = useLocation();
    let navigate = useNavigate();
    const [message, setMessage] = useState('');
    const [author, setAuthor] = useState('');
    const [comments, setComments] = useState([]);

    console.log("comments", location)
    const handleInputChange = (e) => {
        console.log("e---->", e)
        const { name, value } = e.target;
        console.log("message", value)

        if (name === 'message') {
            setMessage(value);
        } else if (name === 'author') {
            setAuthor(value);
        }
    };

    const handleFormSubmit = (e) => {
        axios.post('http://localhost:8001/commentbox', { postId: location.state._id, author, message })
            .then(response => {
                console.log(response.data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const fetchComments = () => {
        axios.get(`http://localhost:8001/getcommentsdata?postId=${location.state._id}`)
            .then(response => {
                console.log("mastani==>", response.data)
                setComments(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    useEffect(() => {
        fetchComments();
    }, [location.state._id]);

    if (!location.state) {
        return <div>Loading...</div>;
    }

    const back = () => {
        navigate(`/`)
    }

    return (
        <div>
            <div className="text-center">
                <h2>POST DETAILS</h2>
            </div>
            <div className="bolgData">

                <h2>{location.state?.title}</h2>
                <p>By {location.state?.fullname}</p>

                <div>{location.state?.content}</div>
                <br />
                <span
                    style={{
                        marginRight: 8
                    }}
                >
                    Categories:
                </span>
                <Space size={[0, 8]} wrap>
                    {location.state?.category.map((val) => {
                        return <Tag
                            // key={tag}
                            color="purple"
                        >
                            {val}
                        </Tag>
                    })}
                </Space>
                <p>Posted on : {location.state?.date}</p>
                <Divider />
            </div>

            <div>
                <h3>Comments</h3>
                <List
                    style={{ marginLeft: '0px' }}
                    dataSource={comments}
                    renderItem={(comment) => (
                        <List.Item>
                            <List.Item.Meta
                                title={comment.author}
                                description={comment.message}
                            />
                        </List.Item>
                    )}
                />
            </div>
            <div>
                <h3>Add a Comment</h3>
                <Form onFinish={handleFormSubmit}>
                    <Form.Item>
                        <Input
                            type="text"
                            name="author"
                            placeholder="Your name"
                            value={author}
                            onChange={handleInputChange}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Input
                            type="text"
                            name="message"
                            placeholder="Your message"
                            value={message}
                            onChange={handleInputChange}
                        />
                    </Form.Item>

                    <Button type="primary" htmlType="submit">Submit</Button>
                </Form>
            </div>
            <div>
                <Button type="link" style={{ float: 'end' }} onClick={back}><Icon type="arrow-left" />Back </Button>
            </div>
        </div>
    )
}

export default PostDetails;

