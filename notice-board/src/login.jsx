
import React from 'react'

export default function Login() {
  return (
    <div>
        <h2>Pick a username</h2>

        <input type="text" placeholder='username'/>
        <br />

        {/* <Link> */}
            <button style={{backgroundColor:"black",color:"white"}}>Login</button>
        {/* </Link> */}
    </div>
  )
}
