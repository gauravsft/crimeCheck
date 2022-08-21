import React from 'react'
import { useState, useEffect } from "react";
import NoticeCard from "./noticeCard";

async function getNotice() {
  const response = await fetch("http://localhost:7000/getAllNotice").catch((err) => {
    console.log(err);
  });

  const data = await response.json();
  console.log(data)
  return data;
}

export default function Notice() {
  const [data, setdata] = useState([]);
  const [notice, setNotice] = useState('');
  useEffect(() => {
    getNotice().then((response) => {
      setdata(response);
    });
  }, []);




  const handleCreate = async () => {
    console.log(notice);
    if(notice.length>100){
       alert(" You Not add more than 100 Character");
    }
    else{
      try {
        await fetch(`http://localhost:7000/createNotice`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            notice,
          })
        });
        setNotice("");
        window.location.reload();
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <div>
      <h2 style={{ textDecoration: "underline" }}>Notice Board</h2>
      <textarea id="notice" name="notice" value={notice} onChange={(e) => { setNotice(e.target.value) }} rows="2" cols="50">Write a Notice</textarea>
      <br />
      <button onClick={() => {
        handleCreate();
        alert("Notice created SuccessFully")
      }} disabled={(notice) ? false : true} style={{ color: 'white', backgroundColor: "green", height: "30px", margin: "auto", borderRadius: "100px", fontWeight: "400" }}>Submit</button>


      {
        data.map(notice => {
          return <NoticeCard key={notice._id} notice={notice} />
        })
      }

    </div>
  )
}
