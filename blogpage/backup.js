// // // // // // const userData = [{_id : '64ace6c59939bddb2dcf7908',
// // // // // // fullName:"Jesica",
// // // // // // email:"jesi@gmail.com",
// // // // // // password:"jesiA@123",
// // // // // // confirmPassword:"jesiA@123",
// // // // // // isAdmin:true,
// // // // // // gender:"female",
// // // // // // dob:"2023-03-06T05:19:54.709Z",
// // // // // // agreement:true,
// // // // // // createdAt:'2023-07-11T05:21:09.264+00:00',
// // // // // // updatedAt:'2023-07-11T05:21:09.264+00:00'
// // // // // // }, 
// // // // // // {_id : '64b66d966306ff92d19525f5',
// // // // // //   fullName:"Punitha",
// // // // // //   email:"punitha@gmail.com",
// // // // // //   password:"PunithA@123",
// // // // // //   confirmPassword:"PunithA@123",
// // // // // //   isAdmin:false,
// // // // // //   gender:"female",
// // // // // //   dob:"2023-03-06T05:19:54.709Z",
// // // // // //   agreement:true,
// // // // // //   createdAt:'2023-07-11T05:21:09.264+00:00',
// // // // // //   updatedAt:'2023-07-11T05:21:09.264+00:00'
// // // // // //   }]

// // // // // // const data = [{"_id":{"$oid":"64afdfdff71d886d32418014"},
// // // // // // "title":"BLOG",
// // // // // // "fullname":"Robert",
// // // // // // "content":"\nHow to Write a Blog Post: A Step-by-Step Guide [+ Free Blog ...\nA blog post is any article, news piece, or guide that's published in the blog section of a website. A blog post typically covers a specific topic or query, is educational in nature, ranges from 600 to 2,000+ words, and contains other media types such as images, videos, infographics, and interactive charts.",
// // // // // // "category":["Angular","Redux","React"],
// // // // // // "date":"June 13, 2023 at 4:58 PM",
// // // // // // "month":"June 2023",
// // // // // // "createdAt":{"$date":"2023-06-13T11:28:31.387Z"},
// // // // // // "updatedAt":{"$date":"2023-07-20T05:35:36.382Z"},
// // // // // // "__v":0,
// // // // // // "localStorage":"Robert"},
// // // // // // {"_id":{"$oid":"64afe00af71d886d3241801c"},
// // // // // // "title":"Dummy Blog",
// // // // // // "fullname":"Robert",
// // // // // // "content":"What is the best structure for a blog post? A good structure for blog posts nests information inside H1, H2, and H3 headline tags, uses questions people ask to identify sections, and within each section links to another article (usually created at the same time) to expand on those sections.",
// // // // // // "category":["Redux","Express.js"],
// // // // // // "date":"July 13, 2023 at 4:59 PM",
// // // // // // "month":"July 2023",
// // // // // // "createdAt":{"$date":"2023-07-13T11:29:14.328Z"},
// // // // // // "updatedAt":{"$date":"2023-07-13T11:29:14.328Z"},
// // // // // // "__v":0,
// // // // // // "localStorage":"Robert"},
// // // // // // {"_id":{"$oid":"64afe049f71d886d3241802d"},
// // // // // // "title":"BLOG TITLE",
// // // // // // "fullname":"Janani",
// // // // // // "content":"\n6.7 million people in India post on blogging sites while 12 million are blogging via social media. In the recent period, blogging became a global phenomenon, and according to blogging statistics for 2021, India also has an impressive blogging scene.",
// // // // // // "category":["Mongo DB","React Native"],
// // // // // // "date":"July 20, 2023 at 8:18 PM",
// // // // // // "month":"July 2023",
// // // // // // "createdAt":{"$date":"2023-07-13T11:30:17.266Z"},
// // // // // // "updatedAt":{"$date":"2023-07-20T14:48:19.262Z"},
// // // // // // "__v":0,
// // // // // // "localStorage":"Janani"},
// // // // // // {"_id":{"$oid":"64b4f6e22d501ec847e5b798"},
// // // // // // "title":"Select",
// // // // // // "fullname":"Janani",
// // // // // // "content":"Select component to select value from options. When To Use. A dropdown menu for displaying choices - an elegant alternative to the native <select> element.",
// // // // // // "category":["React","Redux","Mobile","React Native"],
// // // // // // "date":"July 20, 2023 at 8:18 PM",
// // // // // // "month":"July 2023",
// // // // // // "createdAt":{"$date":"2023-07-17T08:08:02.430Z"},
// // // // // // "updatedAt":{"$date":"2023-07-20T14:48:02.941Z"},
// // // // // // "__v":0,
// // // // // // "localStorage":"Janani"},
// // // // // // {"_id":{"$oid":"64afe112f71d886d32418051"},
// // // // // // "title":"TITLE",
// // // // // // "fullname":"Punitha",
// // // // // // "content":"23 Must-Haves For Your Content Marketing Reporting Dashboards · Average session duration · Backlinks · Bounce rate · Call throughput · Call to action conversion rate ",
// // // // // // "category":["React","Redux","Node.js"],
// // // // // // "date":"July 13, 2023 at 5:03 PM",
// // // // // // "month":"July 2023",
// // // // // // "createdAt":{"$date":"2023-07-13T11:33:38.466Z"},
// // // // // // "updatedAt":{"$date":"2023-07-13T11:33:38.466Z"},
// // // // // // "__v":0,
// // // // // // "localStorage":"Janani"}
// // // // // // ]

// // // // // // Consider I am having this following code 

// // // // // // import "./home.css";
// // // // // // import Title from "antd/es/typography/Title";
// // // // // // import axios from 'axios';
// // // // // // import TextArea from "antd/es/input/TextArea";
// // // // // // import { useLocation, useNavigate, useParams } from 'react-router-dom';
// // // // // // import { Input, Form, Button, Checkbox, Select, message, Space, Upload } from "antd";
// // // // // // import { useEffect, useRef, useState } from "react";
// // // // // // import { UploadOutlined } from "@ant-design/icons";

// // // // // // function Posts(data) {
// // // // // //   const [inputVisible, setInputVisible] = useState(false);
// // // // // //   const [inputValue, setInputValue] = useState("");
// // // // // //   const [categoryData, setCategoryData] = useState([])
// // // // // //   const [selectedCategories, setSelectedCategories] = useState([]);
// // // // // //   const [idForValidation, setIdForValidation] = useState([]);
// // // // // //   const [imageFile, setImageFile] = useState(null);
// // // // // //   const inputRef = useRef(null);
// // // // // //   const editInputRef = useRef(null);
// // // // // //   const location = useLocation();
// // // // // //   const { id } = useParams();
// // // // // //   let navigate = useNavigate();


// // // // // //   const handleImageUpload = (file) => {
// // // // // //     setImageFile(file);
// // // // // //     return false; // Prevent default upload behavior
// // // // // //   };
  
// // // // // //   const OnFinish = async(formData) => {
// // // // // //     const storedLoginDetailsString = localStorage.getItem('Fullname');
// // // // // //     console.log("ISIS THAMANAMAE", idForValidation.find((data)=>data.fullName === storedLoginDetailsString))
// // // // // //     const date = new Date();
// // // // // //     const formattedDate = date.toLocaleString('en-US', {
// // // // // //       year: 'numeric',
// // // // // //       month: 'long',
// // // // // //       day: 'numeric',
// // // // // //       hour: 'numeric',
// // // // // //       minute: 'numeric',
// // // // // //     });

// // // // // //     const formattedMonth = date.toLocaleString('en-US', {
// // // // // //       month: 'long',
// // // // // //       year: 'numeric',
// // // // // //     });

// // // // // //     const formTotalData = { 
// // // // // //       ...formData,
// // // // // //       fullname: storedLoginDetailsString,
// // // // // //       date: formattedDate,
// // // // // //       month: formattedMonth,
// // // // // //       }
// // // // // //       const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
// // // // // //       if (user && imageFile) {
// // // // // //         const reader = new FileReader();
// // // // // //       reader.readAsDataURL(imageFile);
// // // // // //       reader.onloadend = async () => {
// // // // // //         // Include the user ID in each post data
// // // // // //         const dataToBeSent = {
// // // // // //           ...formTotalData,
// // // // // //           userId: user._id,
// // // // // //           localStorage: localStorage.getItem("Fullname"),
// // // // // //           image: reader.result,
// // // // // //         };
// // // // // //         console.log("pachaivanapoovae===>", dataToBeSent);

// // // // // //         try {
// // // // // //           if (id) {
// // // // // //             const response = await axios.put(
// // // // // //               `http://localhost:8001/updatePost/${id}`,
// // // // // //               dataToBeSent,
// // // // // //               {
// // // // // //                 headers: {
// // // // // //                   'Content-Type': 'application/json',
// // // // // //                 },
// // // // // //               }
// // // // // //             );
// // // // // //             console.log('Form updated successfully', response.data);
// // // // // //             navigate('/');
// // // // // //           } else {
// // // // // //             const response = await axios.post(
// // // // // //               'http://localhost:8001/submitPost-form',
// // // // // //               dataToBeSent,
// // // // // //               {
// // // // // //                 headers: {
// // // // // //                   'Content-Type': 'application/json',
// // // // // //                 },
// // // // // //               }
// // // // // //             );
// // // // // //             console.log('Form submitted successfully', response.data);
// // // // // //             navigate('/');
// // // // // //             inputRef.current.resetFields();
// // // // // //           }
// // // // // //         } catch (error) {
// // // // // //           console.error('Error submitting form:', error);
// // // // // //         }
// // // // // //       };
// // // // // //     } else {
// // // // // //       console.error('User not found with fullname:', storedLoginDetailsString);
// // // // // //     }
// // // // // //   };

// // // // // //   const categoryTerm = categoryData.map((data) => { return data })
// // // // // //   const constructedData = categoryTerm.map((data) => (data.category.map((item) => ({ label: item, value: item }))))
// // // // // //   const finalCatergoryData = constructedData.flat()
// // // // // //   useEffect(() => {
// // // // // //     getCategoryData()
// // // // // //     getUserDetails()
// // // // // //   }, [])

// // // // // //   const getCategoryData = async () => {
// // // // // //     try {
// // // // // //       const response = await fetch('http://localhost:8001/categoriesget-data');
// // // // // //       const data = await response.json();
// // // // // //       setCategoryData(data);
// // // // // //     } catch (error) {
// // // // // //       console.error('Error fetching category data:', error);
// // // // // //     }
// // // // // //   }

// // // // // //   const getUserDetails = async () => {
// // // // // //     let leftSideInfo = await fetch('http://localhost:8001/submitUserGet-form')
// // // // // //     let response = await leftSideInfo.json()
// // // // // //     console.log("responese", response)
// // // // // //     setIdForValidation(response);
// // // // // //   }

// // // // // //   const options = [
// // // // // //     { label: 'React', value: 'React' },
// // // // // //     { label: 'Redux', value: 'Redux' },
// // // // // //   ];

// // // // // //   useEffect(() => {
// // // // // //     if (inputVisible) {
// // // // // //       inputRef.current?.focus();
// // // // // //     }
// // // // // //   }, [inputVisible]);
// // // // // //   useEffect(() => {
// // // // // //     editInputRef.current?.focus();
// // // // // //   }, [inputValue]);

// // // // // //   const handleCategoryChange = (checkedValues) => {
// // // // // //     setSelectedCategories(checkedValues);
// // // // // //   };

// // // // // //   return (
// // // // // //     <div className="post">
// // // // // //       <div className="post-modal1">
// // // // // //         <div className="modal2">
// // // // // //           <div className="x9f619 xjbqb8w x78zum5 x168nmei x13lgxp2 x5pf9jr xo71vjh xseo6mj xod5an3 x1n2onr6 x1plvlek xryxfnj x1c4vz4f x2lah0s xdt5ytf xqjyukv x1qjc9v5 x1oa3qoh x1nhvcw1">
// // // // // //             <Title className="post-header">
// // // // // //               {id ? 'Edit Post' : 'Add Post'}
// // // // // //             </Title>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //         {categoryData ? <div >
// // // // // //           <Form
// // // // // //             ref={inputRef}
// // // // // //             autoComplete="off"
// // // // // //             style={{ width: '100%' }}
// // // // // //             labelCol={{ span: 10 }}
// // // // // //             wrapperCol={{ span: 14 }}
// // // // // //             onFinish={(values) => { OnFinish(values) }}
// // // // // //             onFinishFailed={(error) => {
// // // // // //               console.log("error", { error });
// // // // // //             }}
// // // // // //             initialValues={id ? { ...location.state } : undefined}
// // // // // //           >
// // // // // //             <Form.Item
// // // // // //               name="title"
// // // // // //               rules={[
// // // // // //                 {
// // // // // //                   required: true,
// // // // // //                   message: "Please enter the Title",
// // // // // //                 },
// // // // // //                 { whitespace: true },
// // // // // //                 { min: 3 },
// // // // // //               ]}
// // // // // //               hasFeedback
// // // // // //             >
// // // // // //               <Input placeholder="Title" />
// // // // // //             </Form.Item>

// // // // // //             <Form.Item
// // // // // //               name="content"
// // // // // //               rules={[
// // // // // //                 {
// // // // // //                   required: true,
// // // // // //                   message: "Please enter the Content",
// // // // // //                 },
// // // // // //                 { whitespace: true },
// // // // // //                 { min: 50 },
// // // // // //               ]}
// // // // // //               hasFeedback
// // // // // //             >
// // // // // //               <TextArea placeholder="Content" rows={5} />
// // // // // //             </Form.Item>

// // // // // //             <Form.Item>
// // // // // //             <Upload
// // // // // //           name="image"
// // // // // //           action={handleImageUpload}
// // // // // //           showUploadList={false}
// // // // // //         >
// // // // // //           <Button icon={<UploadOutlined />}>Select Image</Button>
// // // // // //         </Upload>
// // // // // //             </Form.Item>

// // // // // //             <Form.Item
// // // // // //               name="category"
// // // // // //             >
// // // // // //               <Select
// // // // // //                 mode="multiple"
// // // // // //                 size="middle"
// // // // // //                 placeholder="Catergory"
// // // // // //                 value={selectedCategories}
// // // // // //                 onChange={handleCategoryChange}
// // // // // //                 style={{ width: '100%' }}
// // // // // //                 options={finalCatergoryData}
// // // // // //                 name="category"
// // // // // //               />
// // // // // //             </Form.Item>

// // // // // //             <Form.Item wrapperCol={{ span: 4 }}>
// // // // // //               <Button block type="primary" htmlType="submit">
// // // // // //                 {id ? 'Update' : 'Submit'}
// // // // // //               </Button>
// // // // // //             </Form.Item>
// // // // // //           </Form>
// // // // // //         </div> : null}

// // // // // //       </div>
// // // // // //     </div>

// // // // // //   );
// // // // // // }

// // // // // // export default Posts;


// // // // // // here  I have inserted the form item called uploading as I have created the folder called upload in backend folder 
// // // // // // i mean it is in the form of 
// // // // // // | -->backend
// // // // // // |   | -> node_modules
// // // // // // |   | -> package.json
// // // // // // |   | -> package-lock.json
// // // // // // |   | -> uploads

// // // // // // below I am also providing my backend data
// // // // const app = require("express");
// // // // const Totalposts = require("./models/postSchema")
// // // // const User = require("./models/usersSchema")
// // // // const Category = require("./models/categorySchema")
// // // // const Comment = require("./models/commentSchema")
// // // // const multer = require('multer');

// // // // const fs = require('fs');
// // // // const route = app.Router()

// // // // var mongoose = require('mongoose');
// // // // const { Router } = require("express");
// // // // var session = require('express-session');

// // // // mongoose.connect('mongodb://localhost:27017/blogs', { useNewUrlParser: true });
// // // // var conn = mongoose.connection;
// // // // conn.on('connected', function () {
// // // //   console.log('database is connected successfully');
// // // // });
// // // // conn.on('disconnected', function () {
// // // //   console.log('database is disconnected successfully');
// // // // })
// // // // conn.on('error', console.error.bind(console, 'connection error:'));

// // // // const storage = multer.diskStorage({
// // // //   destination: function (req, file, cb) {
// // // //     cb(null, 'uploads');
// // // //   },
// // // //   filename: function (req, file, cb) {
// // // //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// // // //     cb(null, file.fieldname + '-' + uniqueSuffix);
// // // //   },
// // // // });

// // // // const upload = multer({ storage: storage });

// // // // route.post("/submit-form", (req, res) => {
// // // //   var formData = req.body;
// // // //   var myData = new User(formData);
// // // //   myData.save()
// // // //     .then(item => {
// // // //       res.send("item saved to database");
// // // //     })
// // // //     .catch(err => {
// // // //       res.status(400).send("unable to save to database");
// // // //     });
// // // // });

// // // // route.get('/submitUserGet-form', async (req, res) => {
// // // //   let result = await User.find()
// // // //     .then((users) => {
// // // //       return users
// // // //     })
// // // //     .catch((error) => {
// // // //       return error
// // // //     });
// // // //   res.send(result)
// // // // })

// // // // route.post("/loginsubmit-form", async (req, res) => {
// // // //   var formData = req.body;
// // // //   const { fullName, password } = formData;
// // // //   let result = await User.findOne({ fullName }) 
// // // // try {  if (!result) {
// // // //     return res.status(401).json({ error: 'Invalid credentials' });
// // // //   }
// // // //   if (result.blocked) {
// // // //     return res.status(403).json({ error: 'Your account is blocked. Contact the administrator for assistance.' });
// // // //   } 
// // // //   else if (result.password !== password) {
// // // //     console.log(" Ivalid user password ")
// // // //   }
// // // //   else {
// // // //     console.log("Success")
// // // //     res.send(result)
// // // //   }}catch (error){
// // // //     res.status(500).json({ error: 'Internal server error' });

// // // //   }
// // // // });

// // // // route.post('/submitPost-form', upload.single('image'), async (req, res) => {
// // // //   var formData = req.body;
// // // //   if (req.file) {
// // // //     formData.image = {
// // // //       data: fs.readFileSync(req.file.path),
// // // //       contentType: req.file.mimetype,
// // // //     };
// // // //   }
// // // //   var myData = new Totalposts(formData);
// // // // console.log("feast",formData)
// // // //   try {
// // // //     await myData.save();
// // // //     res.send("success"); 
// // // //   } catch (error) {
// // // //     res.send("error");
// // // //   }
// // // // });

// // // // route.get('/submitGet-form', async (req, res) => {
// // // //   let result = await Totalposts.find()
// // // //     .then((users) => {
// // // //       return users
// // // //     })
// // // //     .catch((error) => {
// // // //       return "error"
// // // //     });
// // // //   res.send(result)
// // // // })

// // // // route.put('/updatePost/:id', async (req, res) => {
// // // //   const postId = req.params.id;
// // // //   const updatedPostData = req.body;
// // // //   console.log(req.body.localStorage);
// // // //   const loggedInUser = req.body.localStorage 

// // // //   if (!loggedInUser || !updatedPostData.fullname) {
// // // //     return res.status(401).json({ error: 'You need to be logged in to edit a post' });
// // // //   }

// // // //   try {
// // // //     const post = await Totalposts.findById(postId);
// // // //     console.log("post===>", post)

// // // //     if (!post) {
// // // //       return res.status(404).json({ error: 'Post not found' });
// // // //     }

// // // //     if (post.fullname.toString() !== updatedPostData.fullname) {
// // // //       return res.status(403).json({ error: 'You are not authorized to edit this post' });
// // // //     }

// // // //     const updatedPost = await Totalposts.findByIdAndUpdate(
// // // //       postId,
// // // //       { $set: updatedPostData },
// // // //       { new: true }
// // // //     );

// // // //     res.json(updatedPost);
// // // //   } catch (error) {
// // // //     console.error('Error updating post', error);
// // // //     res.status(500).json({ error: 'Error updating post' });
// // // //   }
// // // // });

// // // // route.post("/categoriespost-data", async (req, res) => {
// // // //   var formData = req.body;
// // // //   var myData = new Category(formData)
// // // //   let result = await myData.save().then((res) => {
// // // //     res.send("success")
// // // //     return "success"
// // // //   })
// // // //     .catch((error) => {
// // // //       return "error"
// // // //     });
// // // //   res.send(result) 
// // // // });

// // // // route.get('/categoriesget-data', async (req, res) => {
// // // //   let result = await Category.find()
// // // //     .then((users) => {
// // // //       return users
// // // //     })
// // // //     .catch((error) => {
// // // //       return "error"
// // // //     });
// // // //   res.send(result)
// // // // })
 
// // // // route.get("/categoriespostfilter-data", async (req, res) => {
// // // //   var formData = req.query.paramData
// // // //   let result = await Totalposts.find({ "category": formData })
// // // //   console.log(result)
// // // //   // res.send(result)
// // // //   if (!result) {
// // // //     console.log("Category Not Found ")
// // // //   }
// // // //   else {
// // // //     console.log("Success")
// // // //     res.send(result)
// // // //   } 
// // // // });

// // // // route.get("/dategetfilter-data", async (req, res) => { 
// // // //   var formData = req.query.paramData
// // // //   console.log("sdsa",formData)
// // // //   let result = await Totalposts.find({ "month": formData })
// // // //   console.log("result-=-=>",result)
// // // //   // res.send(result)
// // // //   if (!result) { 
// // // //     console.log("Category Not Found ")
// // // //   }
// // // //   else {
// // // //     console.log("Success") 
// // // //     res.send(result)
// // // //   } 
// // // // });

// // // // route.post('/commentbox', async (req, res) => {
// // // //   try {
// // // //     const { postId, author, message } = req.body;
// // // //     const comment = new Comment({ postId, author, message });
// // // //     await comment.save();
// // // //     res.status(201).json({ message: 'Comment created successfully' });
// // // //   } catch (error) {
// // // //     console.error(error); 
// // // //     res.status(500).json({ message: 'Internal server error' });
// // // //   }
// // // // });

// // // // route.get('/getcommentsdata', async (req, res) => {
// // // //   try {
// // // //     const { postId } = req.query;
// // // //     const comments = await Comment.find({ postId }); 
// // // //     res.json(comments);
// // // //   } catch (error) {
// // // //     console.error('Error:', error);
// // // //     res.status(500).json({ error: 'Internal server error' });
// // // //   }
// // // // });

// // // // route.delete('/delete-posts/:userId', async (req, res) => {
// // // //   try {
// // // //     const userId = req.params.userId;
// // // //     console.log("userId", userId)
// // // //     await Totalposts.deleteMany({ userId: userId });
// // // //     res.sendStatus(204);
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: 'Error deleting user posts' });
// // // //   }
// // // // });

// // // // route.delete('/delete-user/:userId', async (req, res) => {
 
// // // //   const userId = req.params.userId;
// // // //   console.log("errewr", userId)
// // // //   try {
// // // //       await Totalposts.deleteMany({ userId: userId });

// // // //     await User.findByIdAndDelete({ _id : userId});
// // // //     res.sendStatus(204); 
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: 'Error deleting user' });
// // // //   }
// // // // });

// // // // route.put('/block-user/:userId', async (req, res) => {
// // // //   const userId = req.params.userId;
// // // //   const blocked = req.body.blocked;
// // // //   try {
// // // //     const updatedUser = await User.findByIdAndUpdate(
// // // //       userId,
// // // //       { blocked },
// // // //       { new: true }
// // // //     );
// // // //     res.json(updatedUser);
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: 'Failed to block/unblock user' });
// // // //   } 
// // // // });

// // // // route.delete('/delete-post/:id', async (req, res) => {
// // // //   const postId = req.params.id;
// // // //   try {
// // // //     await Totalposts.findByIdAndDelete(postId);
// // // //     res.sendStatus(204); // Send 204 (No Content) status code if successful
// // // //   } catch (error) {
// // // //     res.status(500).json({ error: 'Error deleting post' });
// // // //   }
// // // // });

// // // // // module.exports = router;

// // // // module.exports = route
 

// // // // // // As these are the details I getting all the form data in front end but I am not able to store it in backend i mean in db
// // // // // //  please let me know where i had make the mistake?

// // // // // //  also I am providing the schema below for your Reference

// // // // // //  const mongoose = require('mongoose');
// // // // // // const postSchema = new mongoose.Schema({
// // // // // //     title: {
// // // // // //       type: String,
// // // // // //       required: true,
// // // // // //       unique: true,
// // // // // //     },
// // // // // //     fullname : {
// // // // // //       type: String
// // // // // //     },
// // // // // //     content: {
// // // // // //       type: String,
// // // // // //       required: true,
// // // // // //     },
// // // // // //     category: {
// // // // // //       type: Array,
// // // // // //       required: false
// // // // // //     },
// // // // // //     date: {
// // // // // //       type: String,
// // // // // //       required: true,
// // // // // //     },
// // // // // //     month: {
// // // // // //       type: String,
// // // // // //       required: true,
// // // // // //     },
// // // // // //     localStorage: {
// // // // // //       type: String,
// // // // // //       required: true,
// // // // // //     },
// // // // // //     userId: {
// // // // // //       type: String,
// // // // // //       required: true,
// // // // // //     },
// // // // // //     image: {
// // // // // //       data: Buffer,
// // // // // //       contentType: String,
// // // // // //     },
// // // // // //   }, { timestamps: true });
  
// // // // // //   const Totalposts = mongoose.model('totalBlogs', postSchema);
// // // // // //   module.exports = Totalposts; 











// // // // // // Based on the provided code snippets and backend schema, it seems like the issue could be related to the way you are handling the image upload and saving it to the database. Let's go through the code and try to identify the potential issues.

// // // // // // 1. Frontend Code - Handle Image Upload:
// // // // // // In the frontend code, you are using Ant Design's `Upload` component to handle the image upload. The `handleImageUpload` function is triggered when the user selects an image. However, the action provided to the `Upload` component is incorrect. The `action` prop should be used to specify the URL where the file should be uploaded, not the function to handle the upload.

// // // // // // Instead, you should use the `customRequest` prop to handle the image upload manually. Modify the `Upload` component as follows:

// // // // // // ```jsx
// // // // // <Form.Item>
// // // // //   <Upload
// // // // //     customRequest={({ file }) => handleImageUpload(file)}
// // // // //     showUploadList={false}
// // // // //   >
// // // // //     <Button icon={<UploadOutlined />}>Select Image</Button>
// // // // //   </Upload>
// // // // // </Form.Item>
// // // // // // ```

// // // // // // // 2. Backend Code - Handle Image Upload:
// // // // // // // In the backend code, you are using `multer` to handle file uploads. However, in the `route.post('/submitPost-form' ...)` endpoint, the `upload.single('image')` middleware is used to process the image upload. This middleware should be placed before the route handler, so the file is processed before trying to access the `req.body` fields.

// // // // // // // Update the `route.post('/submitPost-form' ...)` endpoint as follows:

// // // // // // // ```javascript
// // // // // route.post('/submitPost-form', upload.single('image'), async (req, res) => {
// // // // //   // The image upload will already be processed by multer at this point
// // // // //   var formData = req.body;
// // // // //   if (req.file) {
// // // // //     formData.image = {
// // // // //       data: fs.readFileSync(req.file.path),
// // // // //       contentType: req.file.mimetype,
// // // // //     };
// // // // //   }
// // // // //   var myData = new Totalposts(formData);
// // // // //   console.log("feast", formData);
// // // // //   try {
// // // // //     await myData.save();
// // // // //     res.send("success");
// // // // //   } catch (error) {
// // // // //     console.error('Error saving data:', error);
// // // // //     res.status(500).send("error");
// // // // //   }
// // // // // });
// // // // // // ```

// // // // // // By placing the `upload.single('image')` middleware before the route handler, the image will be processed and available in `req.file`, which can then be stored in the database as you are currently doing.

// // // // // // 3. Database Connection:
// // // // // // Ensure that your MongoDB connection is working correctly, and you have the appropriate permissions to perform read and write operations on the specified database.

// // // // // // With these changes, the form data, including the uploaded image, should be saved correctly to the database. If you encounter any errors or have further issues, please check your server logs for more details on what might be going wrong during the image upload or data storage process.








// // // // // // If you are getting `undefined` in `req.file` on the backend, it means that the `multer` middleware is not properly processing the file upload, and the file is not being attached to the request object (`req`). There could be a few reasons why this might be happening:

// // // // // // 1. Incorrect `enctype` in the Frontend Form:
// // // // // // Make sure that the form in the frontend is using the correct `enctype` attribute to allow file uploads. Add the `enctype="multipart/form-data"` attribute to the `Form` component in your React code:

// // // // // // ```jsx
// // // // // <Form
// // // // //   ref={inputRef}
// // // // //   autoComplete="off"
// // // // //   style={{ width: '100%' }}
// // // // //   labelCol={{ span: 10 }}
// // // // //   wrapperCol={{ span: 14 }}
// // // // //   onFinish={(values) => { OnFinish(values) }}
// // // // //   onFinishFailed={(error) => {
// // // // //     console.log("error", { error });
// // // // //   }}
// // // // //   initialValues={id ? { ...location.state } : undefined}
// // // // //   encType="multipart/form-data" // Add this attribute
// // // // // >
// // // // //   {/* Rest of the form */}
// // // // // </Form>
// // // // // // ```

// // // // // // 2. Check Request Headers:
// // // // // // Ensure that the `Content-Type` header in the request being sent from the frontend to the backend includes `'multipart/form-data'`. The `multer` middleware requires this content type to correctly handle file uploads.

// // // // // // 3. Check if `multer` is Properly Configured:
// // // // // // Check that the `multer` middleware is properly set up and used in the backend. Double-check the initialization of `multer` and the storage configuration.

// // // // // // Here's how you initialize `multer` and use it as middleware in the backend:

// // // // // // ```javascript
// // // // // const multer = require('multer');
// // // // // const upload = multer({ storage: storage }); // Make sure `storage` is properly defined

// // // // // // ...

// // // // // route.post('/submitPost-form', upload.single('image'), async (req, res) => {
// // // // //   // Rest of the code
// // // // // });
// // // // // // ```

// // // // // // 4. Ensure the Correct Input Name:
// // // // // // In the frontend, the `name` attribute of the `Upload` component should match the input name specified in `upload.single('image')` on the backend.

// // // // // // In your case, the name attribute should be `'image'`:

// // // // // // ```jsx
// // // // // <Form.Item>
// // // // //   <Upload
// // // // //     name="image" // Make sure it matches the input name in upload.single('image')
// // // // //     customRequest={({ file }) => handleImageUpload(file)}
// // // // //     showUploadList={false}
// // // // //   >
// // // // //     <Button icon={<UploadOutlined />}>Select Image</Button>
// // // // //   </Upload>
// // // // // </Form.Item>
// // // // // // ```

// // // // // // 5. Verify Backend Routes:
// // // // // // Ensure that the request from the frontend is hitting the correct backend route. Verify that the `route.post('/submitPost-form'...)` is being executed when the form is submitted.

// // // // // // By checking these points, you should be able to identify the cause of the issue and get the file upload working correctly with `multer`. If you are still facing issues, you can try logging more details in the backend route to see if there are any specific errors or issues occurring during the file upload process.









// // // // // // If you are getting the output for `formData.image`, it means that the image upload and file processing are working correctly on the frontend and backend. The `req.file` being `undefined` indicates that there might be some issue with the way the file is being sent from the frontend to the backend or how `multer` is handling the file upload.

// // // // // // Since you are able to see `formData.image` in the console, the issue might be related to the headers or how the request is being made from the frontend. Here are some points to check:

// // // // // // 1. Verify Request Headers:
// // // // // // Ensure that the frontend request is being made with the correct headers, including `'Content-Type': 'multipart/form-data'`. This header is essential for `multer` to handle file uploads correctly. Check your frontend code to ensure that the headers are set correctly when making the request.

// // // // // // 2. Check if the File Size Exceeds Limits:
// // // // // // By default, `multer` has file size limits. If the file you are trying to upload exceeds these limits, `multer` won't process the file, and `req.file` will be `undefined`. You can configure `multer` to handle larger files or check if the file size is within the limits.

// // // // // // To set larger file size limits, modify the `multer` setup in the backend:

// // // // // // ```javascript
// // // // // const upload = multer({
// // // // //   storage: storage,
// // // // //   limits: {
// // // // //     fileSize: 10 * 1024 * 1024, // 10 MB (adjust as needed)
// // // // //   },
// // // // // });
// // // // // // ```

// // // // // // 3. Check if the File Field Name Matches:
// // // // // // Ensure that the `name` attribute in the frontend matches the field name specified in `upload.single()` on the backend.

// // // // // // In the frontend:

// // // // // // ```jsx
// // // // // <Upload
// // // // //   name="image" // Make sure it matches the field name in upload.single('image') on the backend
// // // // //   customRequest={({ file }) => handleImageUpload(file)}
// // // // //   showUploadList={false}
// // // // // >
// // // // //   <Button icon={<UploadOutlined />}>Select Image</Button>
// // // // // </Upload>
// // // // // // ```

// // // // // // In the backend:

// // // // // // ```javascript
// // // // // route.post('/submitPost-form', upload.single('image'), async (req, res) => {
// // // // //   // Rest of the code
// // // // // });
// // // // // // ```

// // // // // // 4. Verify the Image File is Being Sent:
// // // // // // Double-check that the image file is being properly sent from the frontend to the backend. Inspect the network requests in your browser's developer tools to see if the image file is included in the request payload.

// // // // // // If you have checked all of these points and are still facing the issue, you might consider trying a simplified version of the image upload to isolate the problem further. Create a simple HTML form with an image input and a basic endpoint in the backend to see if the image upload works with minimal setup. This can help you identify any specific issues in the main project's setup.






















// // // // // If you are getting `undefined` for `req.file`, it might be due to an issue with the destination path specified in `multer.diskStorage`. The destination path should be a directory on your server where the uploaded files will be stored. In your case, you are specifying the destination as `./uploads`, but it might not be the correct path on your server.

// // // // // Here are some steps to troubleshoot and fix the issue:

// // // // // 1. Verify the Upload Directory:
// // // // // Make sure the `uploads` directory exists at the specified path on your server. You can create the directory manually if it doesn't exist.

// // // // // 2. Use Absolute Path for Destination:
// // // // // To ensure there are no path-related issues, use an absolute path for the destination. You can use the `path` module in Node.js to construct an absolute path to the `uploads` directory. Here's how you can do it:

// // // // // ```javascript
// // // // const path = require('path');

// // // // const storage = multer.diskStorage({
// // // //   destination: (req, file, cb) => {
// // // //     const uploadDir = path.join(__dirname, 'uploads'); // Absolute path to uploads directory
// // // //     cb(null, uploadDir);
// // // //   },
// // // //   filename: (req, file, cb) => {
// // // //     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
// // // //     cb(null, file.fieldname + '-' + uniqueSuffix);
// // // //   },
// // // // });
// // // // // ```

// // // // // In this code snippet, `__dirname` represents the current directory of the script, and `path.join` is used to construct the absolute path to the `uploads` directory.

// // // // // 3. Ensure Sufficient Permissions:
// // // // // Check that the server has sufficient permissions to write to the `uploads` directory. Depending on your server configuration, you may need to grant write permissions to the directory for the user running the Node.js process.

// // // // // 4. Check for Errors:
// // // // // Wrap the `multer` middleware in a function and use it as middleware in your route to catch any errors related to file uploads:

// // // // // ```javascript

// // // // // what uh mean by Rest of the code to process form data. here?
// // // // // const uploadMiddleware = upload.single('image');

// // // // // route.post('/submitPost-form', (req, res, next) => {
// // // // //   uploadMiddleware(req, res, function (err) {
// // // // //     if (err instanceof multer.MulterError) {
// // // // //       // A Multer error occurred when uploading.
// // // // //       console.error('Multer Error:', err);
// // // // //       return res.status(500).send('Error uploading file');
// // // // //     } else if (err) {
// // // // //       // An unknown error occurred when uploading.
// // // // //       console.error('Unknown Error:', err);
// // // // //       return res.status(500).send('Unknown error occurred');
// // // // //     }
// // // // //     // No errors, proceed with form data processing.
// // // // //     next();
// // // // //   });
// // // // // }, async (req, res) => {
// // // // //   // Rest of the code to process form data.
// // // // // });
// // // // // // ```

// // // // // // By wrapping the `multer` middleware and handling the errors explicitly, you can get more insight into any issues that might be occurring during the file upload.

// // // // // // After making these changes, try testing the image upload again. If you encounter any errors, check your server logs and console outputs for more specific information about the issue.








// // // // // // In the code snippet provided, "Rest of the code to process form data" refers to the remaining code that handles the form data after the image upload is successful. In the example you provided, this would be the code that saves the form data, including the image, to the database.

// // // // // // The `route.post('/submitPost-form', ...)` endpoint is a middleware stack. When a POST request is made to the `/submitPost-form` route, it first goes through the `uploadMiddleware` (which is the `multer` middleware for handling the image upload). If the image upload is successful, the function inside `uploadMiddleware` calls `next()` to pass control to the next middleware or route handler.

// // // // // // The next middleware or route handler, defined using the `async (req, res) => {...}`, is where the form data is processed. This is where you would handle the form data received in `req.body` and, in this case, the image file received in `req.file` after the `uploadMiddleware` has processed the file upload.

// // // // // // So, "Rest of the code to process form data" would include code similar to what you have in the original `route.post('/submitPost-form', ...)` endpoint:

// // // // // // ```javascript
// // // // // route.post('/submitPost-form', (req, res, next) => {
// // // // //   uploadMiddleware(req, res, function (err) {
// // // // //     // Error handling for image upload, if needed
// // // // //     if (err instanceof multer.MulterError) {
// // // // //       console.error('Multer Error:', err);
// // // // //       return res.status(500).send('Error uploading file');
// // // // //     } else if (err) {
// // // // //       console.error('Unknown Error:', err);
// // // // //       return res.status(500).send('Unknown error occurred');
// // // // //     }
// // // // //     // No errors, proceed with form data processing.
// // // // //     next();
// // // // //   });
// // // // // }, async (req, res) => {
// // // // //   // Rest of the code to process form data.

// // // // //   // Example code: Save the form data to the database
// // // // //   const formData = req.body;
// // // // //   const image = req.file;
// // // // //   // Process the form data and save it to the database

// // // // //   // Example response
// // // // //   res.send('Form data and image uploaded successfully.');
// // // // // });
// // // // // // ```

// // // // // // You would replace the comment "Rest of the code to process form data" with your actual code to handle the form data, including any necessary validation, processing, and database interactions.





// // // // // // In the code snippet provided, "Rest of the code to process form data" refers to the remaining code that handles the form data after the image upload is successful. In the example you provided, this would be the code that saves the form data, including the image, to the database.

// // // // // // The `route.post('/submitPost-form', ...)` endpoint is a middleware stack. When a POST request is made to the `/submitPost-form` route, it first goes through the `uploadMiddleware` (which is the `multer` middleware for handling the image upload). If the image upload is successful, the function inside `uploadMiddleware` calls `next()` to pass control to the next middleware or route handler.

// // // // // // The next middleware or route handler, defined using the `async (req, res) => {...}`, is where the form data is processed. This is where you would handle the form data received in `req.body` and, in this case, the image file received in `req.file` after the `uploadMiddleware` has processed the file upload.

// // // // // // So, "Rest of the code to process form data" would include code similar to what you have in the original `route.post('/submitPost-form', ...)` endpoint:

// // // // // // ```javascript
// // // // // route.post('/submitPost-form', (req, res, next) => {
// // // // //   uploadMiddleware(req, res, function (err) {
// // // // //     // Error handling for image upload, if needed
// // // // //     if (err instanceof multer.MulterError) {
// // // // //       console.error('Multer Error:', err);
// // // // //       return res.status(500).send('Error uploading file');
// // // // //     } else if (err) {
// // // // //       console.error('Unknown Error:', err);
// // // // //       return res.status(500).send('Unknown error occurred');
// // // // //     }
// // // // //     // No errors, proceed with form data processing.
// // // // //     next();
// // // // //   });
// // // // // }, async (req, res) => {
// // // // //   // Rest of the code to process form data.

// // // // //   // Example code: Save the form data to the database
// // // // //   const formData = req.body;
// // // // //   const image = req.file;
// // // // //   // Process the form data and save it to the database

// // // // //   // Example response
// // // // //   res.send('Form data and image uploaded successfully.');
// // // // // });
// // // // // ```

// // // // // You would re


// // // // // place the comment "Rest of the code to process form data" with your actual code to handle the form data, including any necessary validation, processing, and database interactions.












// // // // // Based on your code, it seems like you are using the correct approach to handle file uploads using `multer`. The issue you are facing might be due to the `Content-Type` set for the request.

// // // // // When sending a file using `FormData` from the frontend, ensure that you set the `Content-Type` header to `'multipart/form-data'`. If you don't set this header correctly, the backend might not recognize the file data in `req.file`.

// // // // // Here's an example of how to send the file using `FormData` in the frontend:

// // // // // ```javascript
// // // // // Assuming 'file' is the file input element that holds the selected file.
// // // // const formData = new FormData();
// // // // formData.append('image', file);

// // // // // Make the POST request with axios or fetch
// // // // axios.post('/submitPost-form', formData, {
// // // //   headers: {
// // // //     'Content-Type': 'multipart/form-data', // Set the correct Content-Type header
// // // //   },
// // // // })
// // // //   .then(response => {
// // // //     // Handle the response
// // // //   })
// // // //   .catch(error => {
// // // //     // Handle the error
// // // //   });
// // // // // ```

// // // // // On the backend, make sure to have the following middleware to handle the file upload before your route handler:

// // // // // ```javascript
// // // // const uploadMiddleware = upload.single('image');

// // // // route.post('/submitPost-form', (req, res, next) => {
// // // //   uploadMiddleware(req, res, function (err) {
// // // //     if (err instanceof multer.MulterError) {
// // // //       // A Multer error occurred when uploading.
// // // //       console.error('Multer Error:', err);
// // // //       return res.status(500).send('Error uploading file');
// // // //     } else if (err) {
// // // //       // An unknown error occurred when uploading.
// // // //       console.error('Unknown Error:', err);
// // // //       return res.status(500).send('Unknown error occurred');
// // // //     }
// // // //     // No errors, proceed with form data processing.
// // // //     next();
// // // //   });
// // // // }, async (req, res) => {
// // // //   // Rest of the code to process form data.

// // // //   // Check if req.file contains the uploaded file data
// // // //   if (req.file) {
// // // //     // File was uploaded successfully, process it further if needed.
// // // //     formData.image = {
// // // //       data: fs.readFileSync(req.file.path),
// // // //       contentType: req.file.mimetype,
// // // //     };
// // // //   }

// // // //   // Save the form data to the database
// // // //   var myData = new Totalposts(formData);
// // // //   try {
// // // //     await myData.save();
// // // //     res.send("success");
// // // //   } catch (error) {
// // // //     console.error('Error saving data:', error);
// // // //     res.status(500).send("error");
// // // //   }
// // // // });
// // // // // ```

// // // // // With this setup, the uploaded file should be available in `req.file` after the `uploadMiddleware` processes the file upload. Make sure you are setting the correct `Content-Type` header in the frontend to ensure the backend recognizes the file data properly.







// // // // Sure! Let's update the `OnFinish` function in the `Posts` component to handle the form submission similarly to the previous code. We'll use the `formData` object to send the file and other form data to the backend. Here's the updated code:

// // // // ```javascript
// // // import React, { useEffect, useState, useRef } from 'react';
// // // import { Form, Upload, Button, message, Image } from 'antd';
// // // import { UploadOutlined } from '@ant-design/icons';
// // // import axios from 'axios';

// // // // ... (Other parts of the component)

// // // function Posts(data) {
// // //   // ... (Other state and variable declarations)

// // //   const onFinish = async (formData) => {
// // //     try {
// // //       const storedLoginDetailsString = localStorage.getItem('Fullname');
// // //       console.log("ISIS THAMANAMAE", idForValidation.find((data) => data.fullName === storedLoginDetailsString));
// // //       const date = new Date();
// // //       const formattedDate = date.toLocaleString('en-US', {
// // //         year: 'numeric',
// // //         month: 'long',
// // //         day: 'numeric',
// // //         hour: 'numeric',
// // //         minute: 'numeric',
// // //       });

// // //       const formattedMonth = date.toLocaleString('en-US', {
// // //         month: 'long',
// // //         year: 'numeric',
// // //       });

// // //       const formTotalData = {
// // //         ...formData,
// // //         fullname: storedLoginDetailsString,
// // //         date: formattedDate,
// // //         month: formattedMonth,
// // //       };
// // //       const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
// // //       if (user && imageFile) {
// // //         const reader = new FileReader();
// // //         reader.readAsDataURL(imageFile);
// // //         reader.onloadend = async () => {
// // //           // Include the user ID in each post data
// // //           const dataToBeSent = {
// // //             ...formTotalData,
// // //             userId: user._id,
// // //             localStorage: localStorage.getItem('Fullname'),
// // //             image: reader.result,
// // //           };
// // //           console.log('pachaivanapoovae===>', dataToBeSent);

// // //           try {
// // //             if (id) {
// // //               const response = await axios.put(
// // //                 `http://localhost:8001/updatePost/${id}`,
// // //                 dataToBeSent,
// // //                 {
// // //                   headers: {
// // //                     'Content-Type': 'multipart/form-data',
// // //                   },
// // //                 }
// // //               );
// // //               console.log('Form updated successfully', response.data);
// // //               navigate('/');
// // //             } else {
// // //               const response = await axios.post(
// // //                 'http://localhost:8001/submitPost-form',
// // //                 dataToBeSent,
// // //                 {
// // //                   headers: {
// // //                     'Content-Type': 'multipart/form-data',
// // //                   },
// // //                 }
// // //               );
// // //               console.log('Form submitted successfully', response.data);
// // //               navigate('/');
// // //               inputRef.current.resetFields();
// // //             }
// // //           } catch (error) {
// // //             console.error('Error submitting form:', error);
// // //           }
// // //         };
// // //       } else {
// // //         console.error('User not found with fullname:', storedLoginDetailsString);
// // //       }
// // //     } catch (error) {
// // //       console.error('Error handling form submission:', error);
// // //     }
// // //   };

// // //   // ... (Other parts of the component)
// // // }

// // // export default Posts;
// // // // ```

// // // // In this updated code, we integrated the `OnFinish` function with the form handling logic similar to the previous code. We use `formData` to access the form values, including the uploaded file. The file is processed using `FileReader` to get its base64 representation, which is then sent to the backend along with other form data.

// // // // The rest of the `Posts` component remains unchanged. Now, the form submission should work as expected, similar to the previous implementation. When a new image is uploaded, it will be sent to the backend and stored along with other form data.











// // // The error is likely caused by the `imageFile` state variable being `null` when the form is submitted. It seems that the `handleImageUpload` function is not being called correctly. Let's make some changes to the code to ensure the `handleImageUpload` function is properly triggered when an image is uploaded:

// // // 1. Modify the `OnFinish` function to ensure that `handleImageUpload` is called with the uploaded image file:

// // // ```javascript
// // const OnFinish = async (formData) => {
// //   // Rest of the code...

// //   // Include the user ID in each post data
// //   const dataToBeSent = {
// //     ...formTotalData,
// //     userId: user._id,
// //     localStorage: localStorage.getItem('Fullname'),
// //     // Pass the uploaded image file to the dataToBeSent object
// //     upload: {
// //       file: imageFile,
// //     },
// //   };
// //   console.log("pachaivanapoovae===>", dataToBeSent);

// //   try {
// //     // Rest of the code...
// //   } catch (error) {
// //     console.error('Error submitting form:', error);
// //   }
// // };
// // // ```

// // // 2. Update the `Posts` component to remove the `formDataTable` declaration and update the `onFinish` prop of the `Form` component to call the `OnFinish` function directly:

// // // ```javascript
// // function Posts(data) {
// //   // Rest of the code...

// //   return (
// //     <div className="post">
// //       {/* Rest of the code... */}

// //       <Form
// //         ref={inputRef}
// //         autoComplete="off"
// //         style={{ width: '100%' }}
// //         labelCol={{ span: 10 }}
// //         wrapperCol={{ span: 14 }}
// //         onFinish={OnFinish} // Call the OnFinish function directly
// //         onFinishFailed={(error) => {
// //           console.log("error", { error });
// //         }}
// //         initialValues={id ? { ...location.state } : undefined}
// //         encType="multipart/form-data"
// //       >
// //         {/* Rest of the code... */}
// //       </Form>

// //       {/* Rest of the code... */}
// //     </div>
// //   );
// // }

// // export default Posts;
// // // ```

// // // With these changes, the `OnFinish` function should now correctly receive the uploaded image file, and the error should be resolved. The uploaded image file will be sent to the backend along with other form data when the form is submitted.


// // // Consider I am getting this OnFinish data where I want to post the image along with it in onfinish function and display it in UI
// // // {category:  ['React', 'Next.js'],
// // // content:"vgggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggggg"
// // // date:"August 1, 2023 at 4:31 PM",
// // // fullname:"Joe",
// // // localStorage: "Joe",
// // // month: "August 2023",
// // // title: "vgvg",
// // // userId: "64c23d7b0e4ff7a225cb08cd"}



// // // To post the image along with the form data and display it in the UI, you'll need to make some modifications to the `OnFinish` function in the `Posts` component. Here's how you can do it:
// // How to Make sure the image file is uploaded and stored in the `imageFile` state variable before submitting the form.

// // // 2. Convert the image file to base64 and include it in the `dataToBeSent` object.

// // // 3. Display the uploaded image in the UI.

// // // Let's update the `OnFinish` function accordingly:

// // // ```javascript
// // const OnFinish = async (formData) => {
// //   // Rest of the code...

// //   // Include the user ID in each post data
// //   const dataToBeSent = {
// //     ...formTotalData,
// //     userId: user._id,
// //     localStorage: localStorage.getItem('Fullname'),
// //     // Pass the uploaded image file to the dataToBeSent object
// //     upload: {
// //       file: imageFile,
// //     },
// //   };

// //   // Convert the image file to base64 and include it in the dataToBeSent object
// //   if (imageFile) {
// //     const reader = new FileReader();
// //     reader.readAsDataURL(imageFile);
// //     reader.onloadend = () => {
// //       dataToBeSent.image = reader.result;

// //       try {
// //         // Rest of the code...
// //       } catch (error) {
// //         console.error('Error submitting form:', error);
// //       }
// //     };
// //   } else {
// //     console.error('Image file is missing.');
// //   }
// // };
// // // ```

// // // With these changes, the `OnFinish` function will now convert the image file to base64 and include it in the `dataToBeSent` object, along with other form data. The form data will be sent to the backend, including the uploaded image, and the image will be displayed in the UI.

// // // To display the uploaded image in the UI, you can add an `Image` component from Ant Design in your form or in any suitable location. Here's an example of how to display the image below the form:

// // // ```javascript
// // // Rest of the code...

// // <Form.Item name="image">
// //   <Upload customRequest={({ file }) => handleImageUpload(file)} showUploadList={false}>
// //     <Button icon={<UploadOutlined />}>Click to Upload</Button>
// //   </Upload>
// // </Form.Item>

// // {imageFile && (
// //   <div style={{ marginTop: '20px' }}>
// //     <Image src={URL.createObjectURL(imageFile)} width={200} />
// //   </div>
// // )}

// // <Form.Item
// //   name="category"
// // >
// //   {/* Rest of the code... */}
// // </Form.Item>

// // // Rest of the code...
// // // ```

// // // In this code, we conditionally render the `Image` component only if the `imageFile` state contains the uploaded image. The `URL.createObjectURL` method is used to generate a URL for the image file, which is then passed to the `src` prop of the `Image` component to display the uploaded image in the UI.








// // // To make sure the image file is uploaded and stored in the `imageFile` state variable before submitting the form, you can add a check in the `OnFinish` function to ensure that the `imageFile` is not `null` before proceeding with the form submission. Additionally, you can use the `await` keyword to wait for the image to be processed before submitting the form.

// // // Here's how you can do it:

// // // ```javascript
// // const OnFinish = async (formData) => {
// //   // Rest of the code...

// //   // Check if an image file is selected before proceeding with form submission
// //   if (!imageFile) {
// //     console.error('Please select an image before submitting the form.');
// //     return;
// //   }

// //   // Include the user ID in each post data
// //   const dataToBeSent = {
// //     ...formTotalData,
// //     userId: user._id,
// //     localStorage: localStorage.getItem('Fullname'),
// //     // Pass the uploaded image file to the dataToBeSent object
// //     upload: {
// //       file: imageFile,
// //     },
// //   };

// //   // Convert the image file to base64 and include it in the dataToBeSent object
// //   const reader = new FileReader();
// //   reader.readAsDataURL(imageFile);
// //   reader.onloadend = () => {
// //     dataToBeSent.image = reader.result;

// //     try {
// //       // Rest of the code...

// //       // Submit the form using axios or other methods
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //     }
// //   };
// // };
// // // ```

// // // In this updated code, before proceeding with the form submission, we check if the `imageFile` is not `null`. If it is `null`, we display an error message and return from the `OnFinish` function, preventing the form submission. If the `imageFile` is not `null`, we proceed with the conversion of the image to base64 and include it in the `dataToBeSent` object before submitting the form.

// // // Remember to handle form submission using `axios` or other methods after the image processing is complete. The form data, including the uploaded image, will be sent to the backend for further processing and storage.




// // consider I am having this two functionality in frontend
// // const OnFinish = async (formData) => {

// //   const formDataOfImage = new FormData();
// //   formDataOfImage.append('file', formData.upload.file.originFileObj);
// //   console.log("formDatae", formData.upload.file.originFileObj
// //   )

// //   try {
// //     const response = await axios.post('http://localhost:8001/upload', formDataOfImage, {
// //       headers: {
// //         'Content-Type': 'multipart/form-data',
// //       },
// //     });

// //     message.success(`${response.data.filename} file uploaded successfully.`);
// //   } catch (error) {
// //     message.error('File upload failed.');
// //   }

// //   const storedLoginDetailsString = localStorage.getItem('Fullname');
// //   const date = new Date();
// //   const formattedDate = date.toLocaleString('en-US', {
// //     year: 'numeric',
// //     month: 'long',
// //     day: 'numeric',
// //     hour: 'numeric',
// //     minute: 'numeric',
// //   });

// //   const formattedMonth = date.toLocaleString('en-US', {
// //     month: 'long',
// //     year: 'numeric',
// //   });

// //   const formTotalData = {
// //     ...formData,
// //     fullname: storedLoginDetailsString,
// //     date: formattedDate,
// //     month: formattedMonth,
// //   }
// //   const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
// //   if (user && imageFile) {
// //     const reader = new FileReader();
// //     reader.readAsDataURL(imageFile);
// //     reader.onloadend = async () => {
// //       const dataToBeSent = {
// //         ...formTotalData,
// //         userId: user._id,
// //         localStorage: localStorage.getItem("Fullname"),
// //         image : formData.upload
// //       };

// //       try {
// //         if (id) {
// //           const response = await axios.put(
// //             `http://localhost:8001/updatePost/${id}`,
// //             dataToBeSent,
// //             {
// //               headers: {
// //                 'Content-Type': 'multipart/form-data',
// //               },
// //             }
// //           );
// //           console.log('Form updated successfully', response.data);
// //           navigate('/');
// //         } else {
// //           const response = await axios.post(
// //             'http://localhost:8001/submitPost-form',
// //             dataToBeSent,
// //             {
// //               headers: {
// //                 'Content-Type': 'multipart/form-data',
// //               },
// //             }
// //           );
// //           console.log('Form submitted successfully', response.data);
// //           navigate('/');
// //           inputRef.current.resetFields();
// //         }
// //       } catch (error) {
// //         console.error('Error submitting form:', error);
// //       }
// //     };
// //   } else {
// //     console.error('User not found with fullname:', storedLoginDetailsString);
// //   }
// // };
// // I want to merge the OnFinish post functionality of upload endpoint with
// // submitpost endpoint and updatepost endpoint.
// //  how can I achive it 





// // To merge the two post endpoints into a single one, you can combine the functionality of both endpoints into a single route. You can handle both the form submission and the file upload in the same route. Here's how you can do it:

// // ```javascript
// // const multer = require('multer');
// // const path = require('path');
// // const fs = require('fs');
// // const { Router } = require('express');
// // const Totalposts = require('../models/Totalposts');

// // const route = Router();

// // // Set up multer storage for file upload
// // const storage = multer.diskStorage({
// //   destination: function (req, file, cb) {
// //     cb(null, path.join(__dirname, 'uploads'));
// //   },
// //   filename: function (req, file, cb) {
// //     const originalFileName = path.parse(file.originalname).name;
// //     const fileExtension = path.extname(file.originalname);
// //     const newFileName = originalFileName + '-' + Date.now() + fileExtension;
// //     cb(null, newFileName);
// //   },
// // });

// // const upload = multer({ storage });

// // route.post('/submitPost-form', upload.single('file'), async (req, res) => {
// //   const formData = req.body;
// //   console.log("treat uh better", req);

// //   // Check if the file was uploaded
// //   if (!req.file) {
// //     return res.status(400).json({ error: 'No file received' });
// //   }

// //   // Process the file and store it in the database
// //   const originalFileName = path.parse(req.file.originalname).name;
// //   const fileExtension = path.extname(req.file.originalname);
// //   const newFileName = originalFileName + '-' + Date.now() + fileExtension;
// //   const newPath = path.join(__dirname, 'uploads', newFileName);

// //   try {
// //     fs.renameSync(req.file.path, newPath);

// //     // Save the form data and the filename in the database
// //     const myData = new Totalposts({
// //       ...formData,
// //       filename: newFileName,
// //     });

// //     await myData.save();
// //     res.json({ filename: newFileName });
// //   } catch (error) {
// //     console.error('Error saving data:', error);
// //     return res.status(500).json({ error: 'Error in file operation' });
// //   }
// // });

// // module.exports = route;
// // ```

// // In this code, we have combined the two post endpoints into a single route. The `multer` middleware is used to handle file upload, and we use the `upload.single('file')` middleware to specify that the uploaded file is sent as part of the field named 'file'.

// // Inside the route, we first check if the file was uploaded and return an error response if it's missing. If the file is present, we process it and store it with a new filename. We then create a new instance of the `Totalposts` model, including the form data and the new filename, and save it to the database.

// // Now, when you make a POST request to `/submitPost-form`, it will handle both the form submission and the file upload in a single route. The form data will be saved in the database, and the file will be stored in the 'uploads' folder with a new filename. The response will contain the new filename, which you can use as needed.




// // To merge the functionality of the `OnFinish` function and handle both the form submission and file upload in the same function, you can follow these steps:

// // 1. Remove the existing code related to the image file upload using `axios.post` to the `/upload` endpoint.
// // 2. Replace it with the code to handle the image file upload directly in the `OnFinish` function using `FormData`.
// // 3. Update the form data object with the uploaded image data before making the POST request to the server.

// // Here's how you can achieve it:

// // ```javascript
// // const OnFinish = async (formData) => {
// //   // Check if an image file is selected before proceeding with form submission
// //   if (!imageFile) {
// //     console.error('Please select an image before submitting the form.');
// //     return;
// //   }

// //   const storedLoginDetailsString = localStorage.getItem('Fullname');
// //   const date = new Date();
// //   const formattedDate = date.toLocaleString('en-US', {
// //     year: 'numeric',
// //     month: 'long',
// //     day: 'numeric',
// //     hour: 'numeric',
// //     minute: 'numeric',
// //   });

// //   const formattedMonth = date.toLocaleString('en-US', {
// //     month: 'long',
// //     year: 'numeric',
// //   });

// //   // Prepare form data including the image file
// //   const formTotalData = new FormData();
// //   formTotalData.append('fullname', storedLoginDetailsString);
// //   formTotalData.append('date', formattedDate);
// //   formTotalData.append('month', formattedMonth);
// //   formTotalData.append('upload', formData.upload.file.originFileObj);
// //   formTotalData.append('category', formData.category.join(','));
// //   formTotalData.append('content', formData.content);
// //   formTotalData.append('title', formData.title);

// //   const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
// //   if (user) {
// //     try {
// //       if (id) {
// //         const response = await axios.put(`http://localhost:8001/updatePost/${id}`, formTotalData);
// //         console.log('Form updated successfully', response.data);
// //         navigate('/');
// //       } else {
// //         const response = await axios.post('http://localhost:8001/submitPost-form', formTotalData);
// //         console.log('Form submitted successfully', response.data);
// //         navigate('/');
// //         inputRef.current.resetFields();
// //       }
// //     } catch (error) {
// //       console.error('Error submitting form:', error);
// //     }
// //   } else {
// //     console.error('User not found with fullname:', storedLoginDetailsString);
// //   }
// // };
// // ```

// // In this updated code, we removed the separate `axios.post` request for image file upload and used the `FormData` object (`formTotalData`) to include both the form data and the image file in a single request. We then append the form data fields to the `formTotalData` using the `append` method.

// // Before making the POST request, we check if an image file is selected (`!imageFile`). If not, we display an error message and return from the `OnFinish` function, preventing the form submission. If an image file is selected, we proceed with the POST request to the appropriate endpoint (`http://localhost:8001/submitPost-form` for adding a new post and `http://localhost:8001/updatePost/${id}` for updating an existing post).

// // By following these steps, you can merge the functionality of the `OnFinish` function and handle both the form submission and file upload in a single function.


// // Apologies for the oversight in my previous responses. I noticed that I didn't provide an explanation for the `imageFile` variable.

// // In the previous code snippets, `imageFile` is a state variable that is intended to store the selected image file when the user uploads an image using the `Upload` component from Ant Design. However, I couldn't find the part of the code where `imageFile` is being set after the user selects an image.

// // To make the `imageFile` work correctly, you need to update the code in the component that handles the image upload and sets the `imageFile` state when the user selects an image. Based on the provided code, it seems like the `handleImageUpload` function is intended to handle the image upload, but it is not setting the `imageFile` state.

// // You can update the `handleImageUpload` function to set the `imageFile` state after the user selects an image. Here's how you can do it:

// // ```javascript
// const Posts = (data) => {
//   // ... other code ...

//   const handleImageUpload = (file) => {
//     console.log('file----base64', file);
//     setImageFile(file);
//     // Return false to prevent default upload behavior
//     return false;
//   };

//   // ... other code ...
// };
// // ```

// // By setting the `imageFile` state using the `setImageFile` function when the user selects an image, you can ensure that the selected image file is stored in the `imageFile` state variable. Then, you can use this `imageFile` state variable in the `OnFinish` function to include the image in the form data for the POST request.

// // Keep in mind that if you encounter any issues with the image file not being set correctly or not being available in the `OnFinish` function, you may need to review the code where the `handleImageUpload` function is used and ensure that it is properly setting the `imageFile` state.









// // If you want to handle image upload without using a state variable, you can directly include the image file in the FormData object that you send in the `OnFinish` function. You can modify the `OnFinish` function to include the image file in the FormData along with other form data fields. Here's how you can achieve this:

// // ```javascript
// import React from 'react';
// import { Form, Upload, Button, message } from 'antd';
// import { UploadOutlined } from '@ant-design/icons';
// import axios from 'axios';

// const App = () => {
//   const onFinish = async (formData) => {
//     // Check if an image file is selected before proceeding with form submission
//     if (!formData.upload || !formData.upload.file) {
//       message.error('Please select an image before submitting the form.');
//       return;
//     }

//     // Prepare form data including the image file
//     const formTotalData = new FormData();
//     formTotalData.append('fullname', 'Joe');
//     formTotalData.append('content', formData.content);
//     formTotalData.append('title', formData.title);
//     formTotalData.append('category', formData.category.join(','));
//     formTotalData.append('upload', formData.upload.file.originFileObj);

//     try {
//       const response = await axios.post('http://localhost:8001/submitPost-form', formTotalData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       message.success(`${response.data.filename} file uploaded successfully.`);
//     } catch (error) {
//       message.error('File upload failed.');
//     }
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <Form onFinish={onFinish}>
//         <Form.Item name="title" label="Title" rules={[{ required: true }]}>
//           <Input />
//         </Form.Item>

//         <Form.Item name="content" label="Content" rules={[{ required: true }]}>
//           <TextArea rows={4} />
//         </Form.Item>

//         <Form.Item name="category" label="Category">
//           <Select mode="multiple" placeholder="Select categories">
//             <Select.Option value="React">React</Select.Option>
//             <Select.Option value="Next.js">Next.js</Select.Option>
//           </Select>
//         </Form.Item>

//         <Form.Item name="upload" label="Upload">
//           <Upload customRequest={() => {}} showUploadList={false}>
//             <Button icon={<UploadOutlined />}>Click to Upload</Button>
//           </Upload>
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };

// export default App;
// // ```

// // In this code, the `formData.upload.file.originFileObj` is directly included in the `formTotalData` FormData object, and it will be sent as part of the form data when the form is submitted. This way, you can handle the image upload without using a separate state variable for `imageFile`.













// // The error message "Please select an image before submitting the form." occurs because the `imageFile` state variable is not being updated with the selected image file. To fix this, you need to add a function that handles the file selection and updates the `imageFile` state accordingly.

// // You can modify your frontend code as follows:

// // 1. Remove the `handleImageUpload` function since it's not being used anymore.

// // 2. Create a new function, let's say `handleFileChange`, to handle the file selection and update the `imageFile` state.

// // 3. Modify the `Upload` component to call the `handleFileChange` function when a file is selected.

// // Here's the updated code:

// // ```javascript
// // ... (previous code)

// function Posts(data) {
//   // ... (previous code)

//   const handleFileChange = (file) => {
//     setImageFile(file.originFileObj);
//   };

//   const OnFinish = async (formData) => {
//     // Check if an image file is selected before proceeding with form submission
//     if (!imageFile) {
//       console.error('Please select an image before submitting the form.');
//       return;
//     }

//     // ... (rest of the code)
//   };

//   return (
//     <div className="post">
//       <div className="post-modal1">
//         {/* ... (previous code) */}

//         <Form
//           ref={inputRef}
//           autoComplete="off"
//           style={{ width: '100%' }}
//           labelCol={{ span: 10 }}
//           wrapperCol={{ span: 14 }}
//           onFinish={(values) => { OnFinish(values) }}
//           onFinishFailed={(error) => {
//             console.log("error", { error });
//           }}
//           initialValues={id ? { ...location.state } : undefined}
//           encType="multipart/form-data"
//         >
//           {/* ... (previous code) */}

//           <Form.Item name="upload">
//             <Upload customRequest={({ file }) => handleFileChange(file)} showUploadList={false}>
//               <Button icon={<UploadOutlined />}>Click to Upload</Button>
//             </Upload>
//           </Form.Item>

//           {/* ... (previous code) */}
//         </Form>

//         {/* ... (previous code) */}
//       </div>
//     </div>
//   );
// }

// export default Posts;
// // ```

// // With these changes, the selected image file will be stored in the `imageFile` state, and the form submission will proceed only if an image is selected. If no image is selected, the error message "Please select an image before submitting the form." will be displayed.













// I can see that you have made some changes to the code. However, I notice that you have commented out the `OnFinish` function that handles the image upload and form submission. The `OnFinish` function is essential for uploading the image and submitting the form.

// Let's update the code to include the `OnFinish` function and remove the commented-out code:

// ```javascript
// ... (previous code)

function Posts(data) {
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [categoryData, setCategoryData] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [idForValidation, setIdForValidation] = useState([]);
  const [imageFile, setImageFile] = useState(null);
  const inputRef = useRef(null);
  const editInputRef = useRef(null);
  const location = useLocation();
  const { id } = useParams();
  let navigate = useNavigate();

  const handleFileChange = (file) => {
    setImageFile(file.originFileObj);
  };

  const OnFinish = async (formData) => {
    // Check if an image file is selected before proceeding with form submission
    if (!imageFile) {
      console.error('Please select an image before submitting the form.');
      return;
    }
  
    // ... (rest of the code for form submission including the image)
  };

  const categoryTerm = categoryData.map((data) => { return data })
  const constructedData = categoryTerm.map((data) => (data.category.map((item) => ({ label: item, value: item }))))
  const finalCatergoryData = constructedData.flat()

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
            encType="multipart/form-data"
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

            <Form.Item name="file">
              <Upload customRequest={({ file }) => handleFileChange(file)} showUploadList={false}>
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>

            <Form.Item
              name="category"
            >
              <Select
                mode="multiple"
                size="middle"
                placeholder="Category"
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
// ```

// Make sure you have saved the file and restarted the application to apply the changes. Now, when you submit the form, it should upload the image and proceed with the form submission as expected. If there are still issues, please check if the backend server is running and reachable at the specified URL.








// If you want to send only the image name to the schema instead of the whole image data (Buffer) and content type (contentType), you can modify the "image" property in the schema to store only the image name as a string. Here's how you can do that:

// ```javascript
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    title: {
      type: String,
      required: true,
      unique: true,
    },
    fullname : {
      type: String
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      type: Array,
      required: false
    },
    date: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    localStorage: {
      type: String,
      required: true,
    },
    userId: {
      type: String,
      required: true,
    },
    image: {
      type: String, // Change the type to String to store only the image name
      required: true,
    },
  }, { timestamps: true });
  
const Totalposts = mongoose.model('totalBlogs', postSchema);
module.exports = Totalposts;
// ```

// With this modification, you'll only store the name of the image as a string in the "image" field. When you want to display the image, you'll have to handle retrieving the image data and content type separately based on the image name. This may involve storing the actual image files elsewhere (e.g., on a server or cloud storage) and linking them to the image names in your database.

// Remember, this approach assumes you are handling the storage and retrieval of the image files separately and only storing the image names in the database.









// From the provided code snippets, it seems that you are using the `axios` library to send data to the backend and the backend code is using the `upload.single('image')` middleware to handle the image upload.

// To store only the image name in the backend database, you need to make the following changes:

// 1. Modify the backend route to extract the image name from the file object and store it in the `formData` before creating the `myData` instance. We can access the image name from the `req.file` object using `req.file.originalname`.

// Here's the updated backend route:

// ```javascript
// route.post('/submitPost-form', upload.single('image'), async (req, res) => {
//   var formData = req.body;
//   if (req.file) {
//     formData.image = req.file.originalname; // Store the image name
//   }
//   var myData = new Totalposts(formData);

//   try {
//     await myData.save();
//     res.send("success");
//   } catch (error) {
//     res.send("error");
//   }
// });
// ```

// 2. Ensure that your frontend `dataToBeSent` object includes the `image` field containing the image name.

// In your frontend code, you are already setting the `image` field in the `dataToBeSent` object to `imageFile.name`, which should work correctly.

// ```javascript
// const dataToBeSent = {
//   ...formTotalData,
//   userId: user._id,
//   localStorage: localStorage.getItem("Fullname"),
//   image: imageFile.name, // Image name is set correctly here
// };
// ```

// With these changes, your frontend will send the image name to the backend, and the backend will store it in the database as required. Remember that with this approach, you need to ensure that the image files are stored and handled separately on the server or cloud storage, and you are only storing the image names in the database.















// Based on the provided code, it seems that you are using Express.js for the backend and Multer for handling file uploads. To store the image name in the backend database, make sure you follow these steps:

// 1. Update the frontend to send the image file correctly in the request. In your frontend code, you are already setting the image name in the `dataToBeSent` object. So, there's no issue with that.

// 2. In your backend code, make sure that you have the "uploads" folder created to store the uploaded images.

// 3. Ensure that the Multer middleware is properly configured to handle the file upload. From the code you provided, it seems to be set up correctly.

// Here's the complete backend route with some improvements and error handling:

// ```javascript
const app = require("express");
const Totalposts = require("./models/postSchema")
const multer = require('multer');
const path = require('path');
const route = app.Router();

// ... (your other imports and configurations)

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'uploads')); // Make sure 'uploads' folder exists
  },
  filename: function (req, file, cb) {
    const originalFileName = path.parse(file.originalname).name;
    const fileExtension = path.extname(file.originalname);
    const newFileName = originalFileName + '-' + Date.now() + fileExtension;
    cb(null, newFileName);
  },
});

const upload = multer({ storage });

route.post('/submitPost-form', upload.single('image'), async (req, res) => {
  try {
    const formData = req.body;
    if (req.file) {
      formData.image = req.file.originalname; // Store the image name
    }
    const myData = new Totalposts(formData);
    await myData.save();
    res.send("success");
  } catch (error) {
    console.error('Error saving data:', error);
    res.status(500).send("error");
  }
});

// module.exports = route;
// ```

// With these changes, your backend should now correctly receive the image name and save it in the database. Make sure the frontend is sending the request with the correct image data and name, and the backend should handle the rest. Additionally, ensure that the 'uploads' folder exists and is accessible by the server for storing the image files.









// Based on the provided code, it appears that the error "User not found with fullname: Rosy" is occurring in the following part of the code:

// ```javascript
const user = idForValidation.find((data) => data.fullName === storedLoginDetailsString);
if (user && imageFile) {
  // ... code continues
} else {
  console.error('User not found with fullname:', storedLoginDetailsString);
}
// ```

// The error message suggests that the variable `idForValidation` does not contain any object where the `fullName` matches the value of `storedLoginDetailsString` (which seems to be "Rosy" in this case).

// Here are a few things you can check and debug to resolve the issue:

// 1. Ensure that `idForValidation` is populated with data correctly. You are fetching user details with `getUserDetails` in the `useEffect` hook, but make sure this function returns the expected data and updates the state (`setIdForValidation`) with the user details.

// 2. Check the `idForValidation` array to ensure that it contains objects with the correct structure, including the `fullName` property. You can add a `console.log(idForValidation)` before the `find` function to inspect its content in the browser console.

// 3. Verify the value of `storedLoginDetailsString` coming from `localStorage.getItem('Fullname')`. Ensure that it is the same as the `fullName` property of the objects in the `idForValidation` array.

// 4. Make sure that the MongoDB collection you are using for user details contains data and is accessible.

// If you are still encountering the issue after checking the above points, you may need to further investigate the data flow and ensure that the backend is correctly sending the user details to the frontend. You can also add more console.log statements in the backend to check if the user details are being retrieved correctly from MongoDB and sent to the frontend. Additionally, check the server logs for any potential errors during the request processing.

// Remember to check the data types and structures carefully to ensure proper comparisons and matching of user data. Debugging and inspecting the actual values at each step will help identify the root cause of the issue.