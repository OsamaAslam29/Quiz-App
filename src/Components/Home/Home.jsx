import React from 'react'
import './Home.scss'
import {useNavigate} from 'react-router-dom'

export default function Home() {
  

  const navigate = useNavigate();

  const start = ()=>{
    navigate("/rules")
  }
  return (
    
    <div className="container">
        <div className="start_button">
          <button onClick={start}> Start Quiz</button>
        </div>
    </div>
    
  )
}
