import "./home.css";
import React, { useEffect, useState } from "react";
import { Checkbox, Col, DatePicker, Divider, Row, Space, Tag } from 'antd';
import axios from "axios";
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import PostDetails from "./postDetails";
import Posts from "./post";
import FilteredData from "./filteredData";

const Home = () => {
    const [details, setDetails] = useState()
    const [selectedCategories, setSelectedCategories] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [selectedData, setSelectedData] = useState(false);
    const postDetails = useState({ data: "" });
    const loggedIn = useState(localStorage.getItem('Fullname'));
    const [adminHandling, setAdminHandling] = useState('')
    const [showComponent, setShowComponent] = useState(false);
    let navigate = useNavigate();

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
        setDetails(postsWithEditPermission);
    }

    useEffect(() => {
        getCategoryData()
    }, [])

    const getCategoryData = async () => {
        let leftSideInfo = await fetch('http://localhost:8001/categoriesget-data')
        let response = await leftSideInfo.json()
        setCategoryData(response)
    }

    useEffect(() => {
        setAdminHandling(localStorage.getItem("AdminAccess"))
    }, [])

    const handleCategoryChange = async (checkedValues) => {
        const checkboxValues = checkedValues[0]
        setSelectedCategories(checkboxValues);
        if (checkedValues === checkboxValues) {
            await axios.get(`http://localhost:8001/categoriespostfilter-data/?paramData=${checkboxValues}`).then((res) => {
                setDetails(res.data)
                console.log('Form submitted successfully', res.data);
            })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                })
        } else {
            let leftSideInfo = await fetch('http://localhost:8001/submitGet-form')
            let response = await leftSideInfo.json()
            setDetails(response)
        }
    };

    const handleClick = (key) => {
        console.log('key', key);
    };

    const handleCheckboxChange = (e) => {
        setShowComponent(e.target.checked);
    };

    const handleMonthChange = async (date, dateString) => {
        const formattedDate = moment(dateString).format('MMMM YYYY');
        const dateStringsData = formattedDate
        if (formattedDate === dateStringsData) {
            await axios.get(`http://localhost:8001/dategetfilter-data/?paramData=${dateStringsData}`).then((res) => {
                setDetails(res.data)
                console.log('Form submitted successfully', res.data);
            })
                .catch((error) => {
                    console.error('Error submitting form:', error);
                })
        } else {
            let leftSideInfo = await fetch('http://localhost:8001/submitGet-form')
            let response = await leftSideInfo.json()
            setDetails(response)
        }
    };

    const flip = async (_id) => {
        const selected = await details?.find((data) => data._id === _id);
        navigate(`/postdetails/` + _id, { state: selected })
        setSelectedData(true)
    }

    const editPage = async (_id) => {
        const selected = await details?.find((data) => data._id === _id);
        navigate(`/posts/${_id}`, { state: selected })
        setSelectedData(true)
    }

    const deletePage = async (_id) => {
        try {
            const response = await axios.delete(`http://localhost:8001/delete-post/${_id}`);
            if (response.status === 204) {
                const updatedData = details.filter((item) => item._id !== _id);
                setDetails(updatedData);
            } else {
                alert("Delete request failed");
            }
        } catch (error) {
            console.error("Error occurred during delete request:", error);
        }
    }

    return (
        <div>
            {selectedData ? (<div>
                <PostDetails data={postDetails.data} />
            </div>) : (
                <div onClick={handleClick("click")} className="grad1" >
                    <div className='head3'>
                        <div className='head4'><div className='head5'>HEALTHY</div>
                            <div className='head6'>EDUCATION</div>
                        </div>
                    </div>
                    <Row>
                        {loggedIn && !adminHandling && <div className="checkbox">
                            <Checkbox onChange={handleCheckboxChange}>My Post</Checkbox>
                            {showComponent && <FilteredData />} {/* Show this component when the checkbox is checked */}
                        </div>}
                    </Row>
                    <Row>
                        <Col span={19}>
                            {showComponent === false && <div className="bolgData">
                                {details?.map((Content) => {
                                    const showEditButton =
                                        (Content.canEdit && loggedIn) || (adminHandling === "true" && !Content.canEdit);
                                    return (
                                        <div>
                                            <div key={Content._id}>
                                                <h2>{Content.title}</h2>
                                                <p>By {Content.fullname}</p>
                                                <div>{Content.content}</div>
                                                <div style={{ marginTop: '20px' }}>
                                                    <img src={Content.image} alt="Post" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                                                </div>
                                                <br />
                                                <span
                                                    style={{
                                                        marginRight: 8
                                                    }}
                                                >
                                                    Categories:
                                                </span>
                                                <Space size={[0, 8]} wrap>
                                                    {Content.category.map((val) => {
                                                        return <Tag
                                                            color="purple"
                                                        >
                                                            {val}
                                                        </Tag>
                                                    })}
                                                </Space>
                                                <p>Posted on : {Content.date}</p>
                                                <button onClick={() => flip(Content._id)}> View </button>
                                                {showEditButton && (
                                                    <button onClick={() => editPage(Content._id)}> Edit </button>
                                                )}

                                                {adminHandling && (
                                                    <button onClick={() => deletePage(Content._id)}> Delete </button>
                                                )}
                                                <Divider />
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>}
                        </Col>
                        <Col span={4} push={1}>
                            <Row style={{ width: '100%' }}>
                                <h2 style={{ color: "black" }}>Categories</h2>
                                {categoryData.map((term) => {
                                    return (
                                        <Checkbox.Group
                                            options={term.category}
                                            value={selectedCategories}
                                            onChange={handleCategoryChange}
                                        />
                                    )
                                })}
                            </Row>
                            <Row style={{ width: '100%', marginTop: '20px', marginBottom: '100%' }}>
                                <Space direction="vertical" size={4}>
                                    <DatePicker picker="month" format="MMM YYYY" onChange={handleMonthChange} />
                                </Space>
                            </Row>
                        </Col>
                    </Row>
                    {loggedIn && !adminHandling && <Posts post={details} />}
                </div>
            )}
        </div>
    );
}

export default Home