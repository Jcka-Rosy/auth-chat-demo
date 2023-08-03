import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './component/home/home';
import Login from './component/login/login';
import Register from './component/register/register';
import AdminHomePage from './component/home/adminHomePage';
import BlogHeader from './component/header/header';
import PostDetails from './component/home/postDetails';
import { useState } from 'react';
import Posts from './component/home/post';
import AuthGuard from './services/auth.gaurd';

function App() {
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem('Fullname'));
  const [role, setRole] = useState(localStorage.getItem("AdminAccess"));


  return (
    <div className="App">
     
      <BrowserRouter>
      <BlogHeader />
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/register" element={<Register />} />
      {/* <Route path="/" element={<ProtectedRoutes/>}> */}
      <Route path='postdetails/:userID' element={<PostDetails/>}/>
      <Route path='posts/:id' element={<Posts/>}/>
      <Route element={<AuthGuard />}>
      <Route path="/adminhome" element={<AdminHomePage/>}/>
      </Route>

      {/* <Route path="/home" element={<Home/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
