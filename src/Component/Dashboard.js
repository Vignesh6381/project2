import React from 'react'
import { useState } from 'react'
const Dashboard = () => {

  const [color,setColor] = useState("")
  
  return (
    <div className='container text-center mt-4'>

      <div  >
        <button className='btn btn-danger' onClick={() => setColor("red")}>red</button>
        <button className='btn btn-success' onClick={() => setColor("green")}>green</button>
        <button className='btn btn-primary' onClick={() => setColor("blue")}>blue</button>
        <button className='btn btn-dark' onClick={() => setColor("black")}>black</button>
        <button className='btn btn-pink' style={{ backgroundColor: "pink", color: "white" }} onClick={() => setColor("pink")}>pink</button>
      </div>

      <div className='mt-4 mx-auto border rounded' style={{width: "200px",height: "200px",backgroundColor: color,}}>

      </div>
    </div>
  )
}

export default Dashboard