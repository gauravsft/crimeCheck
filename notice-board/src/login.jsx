
import React from 'react'
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    localStorage.setItem("username", username);
    navigate('/notice');
  }

  return (
    <div>
      <h2>Pick a username</h2>

      <input type="text" placeholder='username' value={username} onChange={(e) => { setUsername(e.target.value) }} />
      <br />
      <button onClick={() => {
        handleLogin();
      }} disabled={(username) ? false : true} style={{ color: 'white', backgroundColor: "black", height: "30px", width: "80px", borderRadius: "10px", }}>Login</button>

    </div>
  )
}
