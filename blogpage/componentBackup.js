// import "./home.css";
import React, { useEffect, useState } from "react";
import { Checkbox, Col, DatePicker, Divider, Row, Space, Tag, Button } from 'antd';
import axios from "axios";
import moment from 'moment';
import { Link, useNavigate } from 'react-router-dom';
import PostDetails from "./postDetails";
import Posts from "./post";
import FilteredData from "./filteredData";

const Home = () => {
    const [details, setDetails] = useState()
    const [selectedCategories, setSelectedCategories] = useState("");
    const [categoryData, setCategoryData] = useState([]);
    const [dates, setDates] = useState([]);
    const [selectedData, setSelectedData] = useState(false);
    const [postDetails, setPostDetails] = useState({ data: "" });
    const [loggedIn, setLoggedIn] = useState(localStorage.getItem('Fullname'));
    const [adminHandling, setAdminHandling] = useState('')
    const [role, setRole] = useState(localStorage.getItem("AdminAccess"));
    const [showComponent, setShowComponent] = useState(false);

    let navigate = useNavigate();

    useEffect(() => {
        getPostDetails()
    }, [])

    const getPostDetails = async () => {
        let leftSideInfo = await fetch('http://localhost:8001/submitGet-form')
        let response = await leftSideInfo.json()
        setDetails(response)
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
        if (checkedValues == checkboxValues) {
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
        setDates(dateStringsData);
        if (formattedDate == dateStringsData) {
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
        navigate(`/posts/` + _id, { state: selected })
        setSelectedData(true)
    }

    return (
        <div>
            {loggedIn ? <div>
                {selectedData ? <div>
                    <PostDetails data={postDetails.data} />
                </div> :
                    <div onClick={handleClick("click")} className="grad1" >
                        <div className='head3'>
                            <div className='head4'><div className='head5'>HEALTHY</div>
                                <div className='head6'>EDUCATION</div>
                            </div>
                        </div>
                        <Row>
                            <div className="checkbox">
                                <Checkbox onChange={handleCheckboxChange}>My Post</Checkbox>
                                {showComponent && <FilteredData />} {/* Show this component when the checkbox is checked */}
                            </div>
                        </Row>
                        <Row>
                            <Col span={19}>
                            {showComponent === false && <div className="bolgData">
                                    {details?.map((Content) => {
                                        return (
                                            <div>
                                                <div key={Content._id}>
                                                    <h2>{Content.title}</h2>
                                                    <p>By {Content.fullname}</p>
                                                    <div>{Content.content}</div>
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
                                                                // key={tag}
                                                                color="purple"
                                                            >
                                                                {val}
                                                            </Tag>
                                                        })}
                                                    </Space>
                                                    <p>Posted on : {Content.date}</p>
                                                    <button onClick={() => flip(Content._id)}> View Details </button>
                                                    <button onClick={() => editPage(Content._id)}> Edit </button>
                                                    <Divider />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div> }
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
                        <Posts post={details}/>
                    </div>}
            </div> :
                <div>
                    {selectedData ? <div>
                        <PostDetails data={postDetails.data} />
                    </div> :
                        <div onClick={handleClick("click")} className="grad1" >
                            <div className='head3'>
                                <div className='head4'><div className='head5'>HEALTHY</div>
                                    <div className='head6'>EDUCATION</div>
                                </div>
                            </div>
                            <Row>
                                <Col span={19}>
                                    <div className="bolgData">
                                        {details?.map((Content) => {
                                            return <div key={Content._id}>
                                                <h2>{Content.title}</h2>
                                                <p>By {Content.fullname}</p>
                                                <div>{Content.content}</div>
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
                                                            // key={tag}
                                                            color="purple"
                                                        >
                                                            {val}
                                                        </Tag>
                                                    })}
                                                </Space>
                                                <p>Posted on : {Content.date}</p>
                                                <button onClick={() => flip(Content._id)}>View Details</button>
                                                <Divider />
                                            </div>
                                        })}
                                    </div>
                                </Col>
                                <Col span={4} push={1}>
                                    <Row style={{ width: '100%' }}>
                                        <h2 style={{ color: "black" }}>Categories</h2>
                                        {categoryData.map((term) => {
                                            return (
                                                <Checkbox.Group
                                                    mode="multiple"
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
                        </div>}
                </div>

            }

        </div>

    );
}

export default Home;

//POSTDETAILS----->

// import React, { useState, useEffect } from "react";
// import { useNavigate, useParams, useLocation} from 'react-router-dom';
// import { Avatar, Form, Button, List, Input, Space, Divider, Tag, FloatButton } from 'antd';
// import moment from 'moment';
// import { Comment, Icon } from '@ant-design/compatible';
// import axios from "axios";

// const { TextArea } = Input;

// const CommentList = ({ comments }) => (
//     <List
//         dataSource={comments}
//         header={`${comments.length} ${comments.length > 1 ? 'replies' : 'reply'}`}
//         itemLayout="horizontal"
//         renderItem={(props) => <Comment {...props} />}
//     />
// );

// const Editor = ({ onChange, onSubmit, submitting, value }) => (
//     <div>
//         <Form.Item>
//             <TextArea rows={4} onChange={onChange} value={value} />
//         </Form.Item>
//         <Form.Item>
//             <Button htmlType="submit" loading={submitting} onClick={onSubmit} type="primary">
//                 Add Comment
//             </Button>
//         </Form.Item>
//     </div>
// );



// const PostDetails = (data) => {
//     const location = useLocation();
//   let navigate = useNavigate();

//     console.log("location", location.state)
//     const [person, setPerson] = useState();
//     const [comments, setComments] = useState([]);
//     const [submitting, setSubmitting] = useState(false);
//     const loggedIn = localStorage.getItem('Fullname');
//     const [value, setValue] = useState('');
 

//     console.log("selectedData", data)


//     if (!location.state) {
//         return <div>Loading...</div>;
//       }

//     const back = () => {
//         navigate(`/`)
//     }

//     const handleSubmit = async () => {
//         console.log("msg-->", value)
//       await axios.post('http://localhost:8001/loginsubmit-form',
//       value, {
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     }).then((res) => {
//       console.log('Form submitted successfully', res.data);
//       navigate('/adminhome')
//     })
//       .catch((error) => {
//         console.error('Error submitting form:', error);
//       })
//       console.log('Received values of form: ', value);
    
//         if (!value) {
//             return;
//         }else{
//         setSubmitting(true);
       
//         setTimeout(() => {
//             const newComment = {
//                 author: loggedIn,
//                 avatar: 'https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png',
//                 content: <p>{value}</p>,
//                 datetime: moment().fromNow()
//             };
//             setComments([newComment, ...comments]);
//             setSubmitting(false);
//             setValue('');
//         }, 1000);
//         }
//     };

//     const handleChange = (e) => {
//         setValue(e.target.value , ...loggedIn);
//         console.log("taki taki", value)
//     };

//     return (
//         <div>
//             <div className="text-center">
//                 <h2>POST DETAILS</h2>
//             </div>
//             <div className="bolgData">
                     
//                                     <h2>{location.state?.title}</h2>
//                                     <p>By {location.state?.fullname}</p>

//                                     <div>{location.state?.content}</div>
//                                     <br />
//                                     <span
//                                         style={{
//                                             marginRight: 8
//                                         }}
//                                     >
//                                         Categories:
//                                     </span>
//                                     <Space size={[0, 8]} wrap>
//                                         {location.state?.category.map((val) => {
//                                             return <Tag
//                                                 // key={tag}
//                                                 color="purple"
//                                             >
//                                                 {val}
//                                             </Tag>
//                                         })}
//                                     </Space>
//                                     <p>Posted on : {location.state?.date}</p>
//                                     <Divider />
//                         </div>
//             <div>
//                 {comments.length > 0 && <CommentList comments={comments} />}
//                 <Comment
//                     avatar={
//                         <Avatar
//                             src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
//                             alt={loggedIn}
//                         />
//                     }
//                     content={
//                         <Editor
//                             onChange={handleChange}
//                             onSubmit={handleSubmit}
//                             submitting={submitting}
//                             value={value}
//                         />
//                     }
//                 />
//             </div>
//             <div>
//             <Button type="link" style={{float:'end'}} onClick={back}><Icon type="arrow-left" />Back </Button>
//             </div>
//         </div>
//     )
// }

// export default PostDetails;








///Post.js=================>

// import "./home.css";
// import Title from "antd/es/typography/Title";
// import axios from 'axios';
// import TextArea from "antd/es/input/TextArea";
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { Input, Form, Button, Checkbox, Select, message, Space, Upload } from "antd";
// import { useEffect, useRef, useState } from "react";
// import { UploadOutlined } from "@ant-design/icons";

// function Posts(data) {
//   const [inputVisible, setInputVisible] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [categoryData, setCategoryData] = useState([])
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [idForValidation, setIdForValidation] = useState([]);
//   const [imageFile, setImageFile] = useState(null);
//   const inputRef = useRef(null);
//   const editInputRef = useRef(null);
//   const location = useLocation();
//   const { id } = useParams();
//   let navigate = useNavigate();


//   const handleImageUpload = (file) => {
//     console.log('file----base64', file)
//     setImageFile(file);
//     return false; // Prevent default upload behavior
//   };

//   const OnFinish = async (formData) => {

//     const formDataOfImage = new FormData();
//     formDataOfImage.append('file', formData.upload.file.originFileObj);
//     console.log("formDatae", formDataOfImage)

//     try {
//       const response = await axios.post('http://localhost:8001/upload', formDataOfImage, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       message.success(`${response.data.filename} file uploaded successfully.`);
//     } catch (error) {
//       message.error('File upload failed.');
//     }


//     const storedLoginDetailsString = localStorage.getItem('Fullname');
//     const date = new Date();
//     const formattedDate = date.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//     });

//     const formattedMonth = date.toLocaleString('en-US', {
//       month: 'long',
//       year: 'numeric',
//     });

//     const formTotalData = {
//       ...formData,
//       fullname: storedLoginDetailsString,
//       date: formattedDate,
//       month: formattedMonth,
//     }
//     const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
//     if (user && imageFile) {
//       const reader = new FileReader();
//       reader.readAsDataURL(imageFile);
//       reader.onloadend = async () => {
//         // Include the user ID in each post data
//         const dataToBeSent = {
//           ...formTotalData,
//           userId: user._id,
//           localStorage: localStorage.getItem("Fullname"),
//           image: reader.result,
//         };
//         console.log("pachaivanapoovae===>", dataToBeSent);

//         try {
//           if (id) {
//             const response = await axios.put(
//               `http://localhost:8001/updatePost/${id}`,
//               dataToBeSent,
//               {
//                 headers: {
//                   'Content-Type': 'multipart/form-data',
//                 },
//               }
//             );
//             console.log('Form updated successfully', response.data);
//             navigate('/');
//           } else {
//             const response = await axios.post(
//               'http://localhost:8001/submitPost-form',
//               dataToBeSent,
//               {
//                 headers: {
//                   'Content-Type': 'multipart/form-data',
//                 },
//               }
//             );
//             console.log('Form submitted successfully', response.data);
//             navigate('/');
//             inputRef.current.resetFields();
//           }
//         } catch (error) {
//           console.error('Error submitting form:', error);
//         }
//       };
//     } else {
//       console.error('User not found with fullname:', storedLoginDetailsString);
//     }
//   };

//   const categoryTerm = categoryData.map((data) => { return data })
//   const constructedData = categoryTerm.map((data) => (data.category.map((item) => ({ label: item, value: item }))))
//   const finalCatergoryData = constructedData.flat()
//   // console.log("dummyData111---->", finalCatergoryData)

//   // console.log("dummyData---->", categoryData.map((data) => { return data.category }))
//   useEffect(() => {
//     getCategoryData()
//     getUserDetails()
//   }, [])

//   const getCategoryData = async () => {
//     try {
//       const response = await fetch('http://localhost:8001/categoriesget-data');
//       const data = await response.json();
//       setCategoryData(data);
//     } catch (error) {
//       console.error('Error fetching category data:', error);
//     }
//   }

//   const getUserDetails = async () => {
//     let leftSideInfo = await fetch('http://localhost:8001/submitUserGet-form')
//     let response = await leftSideInfo.json()
//     console.log("responese", response)
//     setIdForValidation(response);
//   }

//   const options = [
//     { label: 'React', value: 'React' },
//     { label: 'Redux', value: 'Redux' },
//   ];

//   useEffect(() => {
//     if (inputVisible) {
//       inputRef.current?.focus();
//     }
//   }, [inputVisible]);
//   useEffect(() => {
//     editInputRef.current?.focus();
//   }, [inputValue]);

//   const handleCategoryChange = (checkedValues) => {
//     // console.log(`checkedValues: ${checkedValues}`)
//     setSelectedCategories(checkedValues);
//   };

//   return (
//     <div className="post">
//       <div className="post-modal1">
//         <div className="modal2">
//           <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//             <Title className="post-header">
//               {id ? 'Edit Post' : 'Add Post'}
//             </Title>
//           </div>
//         </div>
//         {categoryData ? <div >
//           <Form
//             ref={inputRef}
//             autoComplete="off"
//             style={{ width: '100%' }}
//             labelCol={{ span: 10 }}
//             wrapperCol={{ span: 14 }}
//             onFinish={(values) => { OnFinish(values) }}
//             onFinishFailed={(error) => {
//               console.log("error", { error });
//             }}
//             initialValues={id ? { ...location.state } : undefined}
//             encType="multipart/form-data"
//           >
//             <Form.Item
//               name="title"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please enter the Title",
//                 },
//                 { whitespace: true },
//                 { min: 3 },
//               ]}
//               hasFeedback
//             >
//               <Input placeholder="Title" />
//             </Form.Item>

//             <Form.Item
//               name="content"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please enter the Content",
//                 },
//                 { whitespace: true },
//                 { min: 50 },
//               ]}
//               hasFeedback
//             >
//               <TextArea placeholder="Content" rows={5} />
//             </Form.Item>
//             {/* 
//             <Form.Item>
//             <Upload
//           name="image"
//           customRequest={({ file }) => handleImageUpload(file)}
//           showUploadList={false}
//         >
//           <Button icon={<UploadOutlined />}>Select Image</Button>
//         </Upload>
//             </Form.Item> */}

//             <Form.Item name="upload">
//               <Upload customRequest={() => { }} showUploadList={false}>
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>

//             <Form.Item
//               name="category"
//             >
//               <Select
//                 mode="multiple"
//                 size="middle"
//                 placeholder="Catergory"
//                 value={selectedCategories}
//                 onChange={handleCategoryChange}
//                 style={{ width: '100%' }}
//                 options={finalCatergoryData}
//                 name="category"
//               />
//             </Form.Item>

//             <Form.Item wrapperCol={{ span: 4 }}>
//               <Button block type="primary" htmlType="submit">
//                 {id ? 'Update' : 'Submit'}
//               </Button>
//             </Form.Item>
//           </Form>
//         </div> : null}

//       </div>
//     </div>

//   );
// }

// export default Posts;














// routerBackup=================>

// const app = require("express");
// const Totalposts = require("./models/postSchema")
// const User = require("./models/usersSchema")
// const Category = require("./models/categorySchema")
// const Comment = require("./models/commentSchema")
// const multer = require('multer');
// const path = require('path');

// const fs = require('fs');
// const route = app.Router()

// var mongoose = require('mongoose');
// const { Router } = require("express");
// var session = require('express-session');
// const upload = multer({ dest: 'uploads/' });


// mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true });
// var conn = mongoose.connection;
// conn.on('connected', function () {
//   console.log('database is connected successfully');
// });
// conn.on('disconnected', function () {
//   console.log('database is disconnected successfully');
// })
// conn.on('error', console.error.bind(console, 'connection error:'));

// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "./public");
//   },
//   filename: function (req, file, cb) {
//     // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
//     console.log('ext',file,req)
//     const ext = file.mimetype.split('/')[1]
//     // cb(null, file.fieldname + '-' + uniqueSuffix);
//       cb(null, `files/admin-${file.fieldname}-${Date.now()}.${ext}`)
//   },
// });


// // const storage = multer.diskStorage({
// //   destination: function(req, file, callback) {
// //     console.log(req, file)
// //     callback(null, './public');
// //   },
// //   filename: function (req, file, callback) {
// //     callback(null, file.fieldname);
// //   }
// // });

// // const fileFilter = (req, file, cb) => {
// //   if (file.mimetype == 'image/jpeg' || file.mimetype == 'image/png') {
// //       cb(null, true);
// //   } else {
// //       cb(null, false);
// //   }
// // }


// // const upload = multer({ 
// //   storage: storage,
// //   fileFilter: fileFilter
// // });

// // console.log("upload---->", upload)

// // route.post('/submitPost-form', upload.single('image'),(req, res) => {

// // if (!req.file) {
// //     console.log("No file received");
// //     return res.send({
// //       success: false
// //     });

// //   } else {
// //     console.log('file received');
// //     return res.send({
// //       success: true
// //     })
// //   }
// // });

// route.post('/submitPost-form', async (req, res) => {
//   var formData = req.body;
//   console.log("treat uh better", req)
//   var myData = new Totalposts(formData);
// // console.log("feast",formData)
//   try {
//     await myData.save();
//     res.send("success"); 
//   } catch (error) {
//     console.error('Error saving data:', error);
//     res.status(500).send("error");
//     // res.send("error");
//   } 
// });

// route.post("/submit-form", (req, res) => {
//   var formData = req.body;
//   var myData = new User(formData);
//   myData.save()
//     .then(item => {
//       res.send("item saved to database");
//     })
//     .catch(err => {
//       res.status(400).send("unable to save to database");
//     });
// });

// route.get('/submitUserGet-form', async (req, res) => {
//   let result = await User.find()
//     .then((users) => {
//       return users
//     })
//     .catch((error) => {
//       return error
//     });
//   res.send(result)
// })

// route.post("/loginsubmit-form", async (req, res) => {
//   var formData = req.body;
//   const { fullName, password } = formData;
//   let result = await User.findOne({ fullName }) 
// try {  if (!result) {
//     return res.status(401).json({ error: 'Invalid credentials' });
//   }
//   if (result.blocked) {
//     return res.status(403).json({ error: 'Your account is blocked. Contact the administrator for assistance.' });
//   } 
//   else if (result.password !== password) {
//     console.log(" Ivalid user password ")
//   }
//   else {
//     console.log("Success")
//     res.send(result)
//   }}catch (error){
//     res.status(500).json({ error: 'Internal server error' });

//   }
// });

// route.post('/upload', upload.single('file'), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ error: 'No file received' });
//   }

//   // Rename the file to original name with proper extension (optional)
//   const originalFileName = path.parse(req.file.originalname).name;
//   const fileExtension = path.extname(req.file.originalname);
//   const newFileName = originalFileName + '-' + Date.now() + fileExtension;
//   const newPath = path.join(__dirname, 'uploads', newFileName);

//   try {
//     fs.renameSync(req.file.path, newPath);
//   } catch (error) {
//     return res.status(500).json({ error: 'Error in file operation' });
//   }

//   return res.json({ filename: newFileName });
// });

// route.get('/submitGet-form', async (req, res) => {
//   let result = await Totalposts.find()
//     .then((users) => {
//       return users
//     })
//     .catch((error) => {
//       return "error"
//     });
//   res.send(result)
// })

// route.put('/updatePost/:id', async (req, res) => {
//   const postId = req.params.id;
//   const updatedPostData = req.body;
//   console.log(req.body.localStorage);
//   const loggedInUser = req.body.localStorage 
//   // Check if the user is logged in
//   // const loggedInUser = JSON.parse(localStorage.getItem('Fullname'));

//   if (!loggedInUser || !updatedPostData.fullname) {
//     return res.status(401).json({ error: 'You need to be logged in to edit a post' });
//   }

//   try {
//     const post = await Totalposts.findById(postId);
//     console.log("post===>", post)

//     if (!post) {
//       return res.status(404).json({ error: 'Post not found' });
//     }

//     if (post.fullname.toString() !== updatedPostData.fullname) {
//       return res.status(403).json({ error: 'You are not authorized to edit this post' });
//     }

//     const updatedPost = await Totalposts.findByIdAndUpdate(
//       postId,
//       { $set: updatedPostData },
//       { new: true }
//     );

//     res.json(updatedPost);
//   } catch (error) {
//     console.error('Error updating post', error);
//     res.status(500).json({ error: 'Error updating post' });
//   }
// });

// route.post("/categoriespost-data", async (req, res) => {
//   var formData = req.body;
//   var myData = new Category(formData)
//   let result = await myData.save().then((res) => {
//     res.send("success")
//     return "success"
//   })
//     .catch((error) => {
//       return "error"
//     });
//   res.send(result) 
// });

// route.get('/categoriesget-data', async (req, res) => {
//   let result = await Category.find()
//     .then((users) => {
//       return users
//     })
//     .catch((error) => {
//       return "error"
//     });
//   res.send(result)
// })
 
// route.get("/categoriespostfilter-data", async (req, res) => {
//   var formData = req.query.paramData
//   let result = await Totalposts.find({ "category": formData })
//   console.log(result)
//   // res.send(result)
//   if (!result) {
//     console.log("Category Not Found ")
//   }
//   else {
//     console.log("Success")
//     res.send(result)
//   } 
// });

// route.get("/dategetfilter-data", async (req, res) => { 
//   var formData = req.query.paramData
//   console.log("sdsa",formData)
//   let result = await Totalposts.find({ "month": formData })
//   console.log("result-=-=>",result)
//   // res.send(result)
//   if (!result) { 
//     console.log("Category Not Found ")
//   }
//   else {
//     console.log("Success") 
//     res.send(result)
//   } 
// });

// route.post('/commentbox', async (req, res) => {
//   try {
//     const { postId, author, message } = req.body;
//     const comment = new Comment({ postId, author, message });
//     await comment.save();
//     res.status(201).json({ message: 'Comment created successfully' });
//   } catch (error) {
//     console.error(error); 
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });

// route.get('/getcommentsdata', async (req, res) => {
//   try {
//     const { postId } = req.query;
//     const comments = await Comment.find({ postId }); 
//     res.json(comments);
//   } catch (error) {
//     console.error('Error:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// });

// route.delete('/delete-posts/:userId', async (req, res) => {
//   try {
//     const userId = req.params.userId;
//     console.log("userId", userId)
//     await Totalposts.deleteMany({ userId: userId });
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting user posts' });
//   }
// });

// route.delete('/delete-user/:userId', async (req, res) => {
 
//   const userId = req.params.userId;
//   console.log("errewr", userId)
//   try {
//     // const user = await User.findById(userId);
//     // console.log("user", user)
//     // if (user) {
//       // Delete posts associated with the user
//       await Totalposts.deleteMany({ userId: userId });
//     // }
//     // await Totalposts.deleteMany({ fullname: userId });
//     await User.findByIdAndDelete({ _id : userId});
//     res.sendStatus(204); 
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting user' });
//   }
// });

// route.put('/block-user/:userId', async (req, res) => {
//   const userId = req.params.userId;
//   const blocked = req.body.blocked;
//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       userId,
//       { blocked },
//       { new: true }
//     );
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ error: 'Failed to block/unblock user' });
//   } 

//   // try {
//   //   // Find the user by ID and update the "blocked" field
//   //   const updatedUser = await User.findByIdAndUpdate(userId, { blocked }, { new: true });
//   //   res.status(200).json(updatedUser);  // Send a success response with status code 200 (OK)
//   // } catch (error) {
//   //   res.status(500).json({ error: 'Error blocking/unblocking user' });
//   // }
// });

// route.delete('/delete-post/:id', async (req, res) => {
//   const postId = req.params.id;
//   try {
//     await Totalposts.findByIdAndDelete(postId);
//     res.sendStatus(204); // Send 204 (No Content) status code if successful
//   } catch (error) {
//     res.status(500).json({ error: 'Error deleting post' });
//   }
// });

// // module.exports = router;

// module.exports = route
 













// import "./home.css";
// import Title from "antd/es/typography/Title";
// import axios from 'axios';
// import TextArea from "antd/es/input/TextArea";
// import { useLocation, useNavigate, useParams } from 'react-router-dom';
// import { Input, Form, Button, Checkbox, Select, message, Space, Upload } from "antd";
// import { useEffect, useRef, useState } from "react";
// import { UploadOutlined } from "@ant-design/icons";

// function Posts(data) {
//   const [inputVisible, setInputVisible] = useState(false);
//   const [inputValue, setInputValue] = useState("");
//   const [categoryData, setCategoryData] = useState([])
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [idForValidation, setIdForValidation] = useState([]);
//   const [imageFile, setImageFile] = useState(null);
//   const inputRef = useRef(null);
//   const editInputRef = useRef(null);
//   const location = useLocation();
//   const { id } = useParams();
//   let navigate = useNavigate();

//   const OnFinish = async (formData) => {

//     const formDataOfImage = new FormData();
//     formDataOfImage.append('file', formData.upload.file.originFileObj);
//     console.log("formDatae", formData.upload.file.originFileObj.name)

//     try {
//       const response = await axios.post('http://localhost:8001/upload', formDataOfImage, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       message.success(`${response.data.filename} file uploaded successfully.`);
//     } catch (error) {
//       message.error('File upload failed.');
//     }

//     const storedLoginDetailsString = localStorage.getItem('Fullname');
//     const date = new Date();
//     const formattedDate = date.toLocaleString('en-US', {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//     });

//     const formattedMonth = date.toLocaleString('en-US', {
//       month: 'long',
//       year: 'numeric',
//     });

//     const formTotalData = {
//       ...formData,
//       fullname: storedLoginDetailsString,
//       date: formattedDate,
//       month: formattedMonth,
//     }
//     const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
//     if (user && imageFile) {
//       const reader = new FileReader();
//       reader.readAsDataURL(imageFile);
//       reader.onloadend = async () => {
//         const dataToBeSent = {
//           ...formTotalData,
//           userId: user._id,
//           localStorage: localStorage.getItem("Fullname"),
//           image : formData.upload.file.originFileObj.name
//         };

//         try {
//           if (id) {
//             const response = await axios.put(
//               `http://localhost:8001/updatePost/${id}`,
//               dataToBeSent,
//               {
//                 headers: {
//                   'Content-Type': 'multipart/form-data',
//                 },
//               }
//             );
//             console.log('Form updated successfully', response.data);
//             navigate('/');
//           } else {
//             const response = await axios.post(
//               'http://localhost:8001/submitPost-form',
//               dataToBeSent,
//               {
//                 headers: {
//                   'Content-Type': 'multipart/form-data',
//                 },
//               }
//             );
//             console.log('Form submitted successfully', response.data);
//             navigate('/');
//             inputRef.current.resetFields();
//           }
//         } catch (error) {
//           console.error('Error submitting form:', error);
//         }
//       };
//     } else {
//       console.error('User not found with fullname:', storedLoginDetailsString);
//     }
//   };

//   const categoryTerm = categoryData.map((data) => { return data })
//   const constructedData = categoryTerm.map((data) => (data.category.map((item) => ({ label: item, value: item }))))
//   const finalCatergoryData = constructedData.flat()
//   // console.log("dummyData111---->", finalCatergoryData)

//   // console.log("dummyData---->", categoryData.map((data) => { return data.category }))
//   useEffect(() => {
//     getCategoryData()
//     getUserDetails()
//   }, [])

//   const getCategoryData = async () => {
//     try {
//       const response = await fetch('http://localhost:8001/categoriesget-data');
//       const data = await response.json();
//       setCategoryData(data);
//     } catch (error) {
//       console.error('Error fetching category data:', error);
//     }
//   }

//   const getUserDetails = async () => {
//     let leftSideInfo = await fetch('http://localhost:8001/submitUserGet-form')
//     let response = await leftSideInfo.json()
//     console.log("responese", response)
//     setIdForValidation(response);
//   }

//   const options = [
//     { label: 'React', value: 'React' },
//     { label: 'Redux', value: 'Redux' },
//   ];

//   useEffect(() => {
//     if (inputVisible) {
//       inputRef.current?.focus();
//     }
//   }, [inputVisible]);
//   useEffect(() => {
//     editInputRef.current?.focus();
//   }, [inputValue]);

//   const handleCategoryChange = (checkedValues) => {
//     // console.log(`checkedValues: ${checkedValues}`)
//     setSelectedCategories(checkedValues);
//   };

//   return (
//     <div className="post">
//       <div className="post-modal1">
//         <div className="modal2">
//           <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
//             <Title className="post-header">
//               {id ? 'Edit Post' : 'Add Post'}
//             </Title>
//           </div>
//         </div>
//         {categoryData ? <div >
//           <Form
//             ref={inputRef}
//             autoComplete="off"
//             style={{ width: '100%' }}
//             labelCol={{ span: 10 }}
//             wrapperCol={{ span: 14 }}
//             onFinish={(values) => { OnFinish(values) }}
//             onFinishFailed={(error) => {
//               console.log("error", { error });
//             }}
//             initialValues={id ? { ...location.state } : undefined}
//             encType="multipart/form-data"
//           >
//             <Form.Item
//               name="title"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please enter the Title",
//                 },
//                 { whitespace: true },
//                 { min: 3 },
//               ]}
//               hasFeedback
//             >
//               <Input placeholder="Title" />
//             </Form.Item>

//             <Form.Item
//               name="content"
//               rules={[
//                 {
//                   required: true,
//                   message: "Please enter the Content",
//                 },
//                 { whitespace: true },
//                 { min: 50 },
//               ]}
//               hasFeedback
//             >
//               <TextArea placeholder="Content" rows={5} />
//             </Form.Item>

//             <Form.Item name="upload">
//               <Upload customRequest={() => { }} showUploadList={false}>
//                 <Button icon={<UploadOutlined />}>Click to Upload</Button>
//               </Upload>
//             </Form.Item>

//             <Form.Item
//               name="category"
//             >
//               <Select
//                 mode="multiple"
//                 size="middle"
//                 placeholder="Catergory"
//                 value={selectedCategories}
//                 onChange={handleCategoryChange}
//                 style={{ width: '100%' }}
//                 options={finalCatergoryData}
//                 name="category"
//               />
//             </Form.Item>

//             <Form.Item wrapperCol={{ span: 4 }}>
//               <Button block type="primary" htmlType="submit">
//                 {id ? 'Update' : 'Submit'}
//               </Button>
//             </Form.Item>
//           </Form>
//         </div> : null}

//       </div>
//     </div>

//   );
// }

// export default Posts;
