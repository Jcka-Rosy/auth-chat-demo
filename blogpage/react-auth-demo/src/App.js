import React, { useEffect, useState } from 'react';
import Image from "./images/bird.jpg";
import PlaceholderImage from "./images/placeHolder.jpg";
import { LazyLoadImage } from "react-lazy-load-image-component";
import axios from 'axios';
import './App.css';
import Chat from './Chat';
import PollControlButton from './PollControlButton';

const BASE_URL = 'https://auth-chat-demo-frontend-4q2h.vercel.app';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [imageLoaded, setImageLoaded] = useState(false);
const [pollId, setPollId]= useState("12356")
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const register = async () => {
    console.log("username, password--->", username, password)
    try {
      await axios.post(`${BASE_URL}/register`, { username, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setErrorMessage('');
    } catch (error) {
      console.log("error--->", error.message)
      setErrorMessage('Error registering user');
    }
  };

  const login = async () => {
    try {
      const { data, status } = await axios.post(`${BASE_URL}/login`, { username, password }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log("Login response:", { data, status });

      if (status === 200) {

        setToken(data.token);
        localStorage.setItem('token', data.token);
        setErrorMessage('');
      }
    } catch (error) {
      console.error("Login error:", error);

      setErrorMessage('Invalid credentials');
    }
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  }; 

  return (
    <div className="App">
      <h1>Authentication Demo</h1>
      <div id="auth-form">
        {token ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={register}>Register</button>
            <button onClick={login}>Login</button>
            {errorMessage && <p className="error-message">{errorMessage}</p>}
          </>
        )}
      </div>
      {token && (
        <div id="home-content">
          <h2>Home Page Content</h2>
          <p>Welcome to the home page!</p>

          {/* LAZY LOADING */}
          {/* <div>
            <LazyLoadImage
              src={imageLoaded ? Image : PlaceholderImage}
              width={1000}
              height={700}
              PlaceholderSrc={PlaceholderImage}
              alt="Image Alt"
              onLoad={handleImageLoad}
              effect="blur"
            />
          </div> */}

{/* <h1>Real-time Chat Application</h1> */}
         {/* <Chat /> */}
         <PollControlButton pollId={pollId}/>
         <h1>Group Chat Application</h1>
         <Chat groupName="groupBox1" />
         {/* <Chat groupName="group2" /> */}
        </div>
      )}
    </div>
  );
}

export default App;
