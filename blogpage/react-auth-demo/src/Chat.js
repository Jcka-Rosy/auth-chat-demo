import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import './Chat.css';

const socket = io('http://localhost:3010');

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const [selectedUser, setSelectedUser] = useState('');
  const [joinedRoom, setJoinedRoom] = useState('');

  useEffect(() => {
    const handleNewMessage = (message) => {
      console.log("message->",message)
      setMessages((prevMessages) => [...prevMessages, message]);
    };

    socket.on(`chat message:${joinedRoom}`, handleNewMessage);

    return () => {
      socket.off(`chat message:${joinedRoom}`, handleNewMessage);
    };
  }, [joinedRoom]);

  const joinRoom = () => { 
    if (selectedRoom && joinedRoom !== selectedRoom) {
      // Leave the current room before joining a new one
      if (joinedRoom) {
        socket.emit('leave group', joinedRoom);
      }

      // Join the selected room
      socket.emit('join group', selectedRoom);
      setJoinedRoom(selectedRoom);
      setMessages([]); // Clear existing messages when joining a new room

      // Join the selected user to the room
      if (selectedUser) {
        socket.emit('join user', { groupName: selectedRoom, userName: selectedUser });
      }
    }
  };

  const sendMessage = () => {
    socket.emit('chat message', { groupName: joinedRoom, userName: selectedUser, message: newMessage });
    setNewMessage('');
  };

  return (
    <div className="chat-container">
      <div className="room-selection">
        <label htmlFor="roomDropdown">Select Room:</label>
        <select
          id="roomDropdown"
          value={selectedRoom}
          onChange={(e) => setSelectedRoom(e.target.value)}
        >
          <option value="">Select Room</option>
          <option value="Room1">Room 1</option>
          <option value="Room2">Room 2</option>
        </select>

        <label htmlFor="userDropdown">Select User:</label>
        <select
          id="userDropdown"
          value={selectedUser}
          onChange={(e) => setSelectedUser(e.target.value)}
        >
          <option value="">Select User</option>
          <option value="user1">User 1</option>
          <option value="user2">User 2</option>
        </select>

        <button onClick={joinRoom}>Join Room</button>
      </div>
      <div className="message-list">
        <ul>
          {messages.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
      </div>
      <div className="input-container">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage} disabled={!joinedRoom || !selectedUser}>
          Send
        </button>
      </div>
    </div>
  );
};
 
export default Chat;
