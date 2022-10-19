import React from 'react'
import { useNavigate } from 'react-router'
import './Rules.scss'

export default function Rules() {

  const navigate = useNavigate()

  const push = ()=>{
    navigate("/")
  }
  const quiz = ()=>{
    navigate("/quiz")
  }
  return (
<>
    <div className="container">
       < div className="quiz_rules">
            <div className="rules_title">
                   <span>Some Rules of this Online Quiz</span>
            </div>
            <div className="rules_info">
                <div className="info">1. You will have only <span>15 Seconds </span>per each question. </div>
                <div className="info">2. Once you select your answer, you can't reselect. </div>
                <div className="info">3. You can't select any option once time goes off.</div>
                <div className="info">4. You can't exit from the Quiz while you're playing. </div>
                <div className="info">5. You'll get points on the basis of your correct answer</div>
            </div>
            <div className="buttons">
                <button onClick={push} className="quit">Exit Quiz</button>
                <button onClick={quiz} className="Continue">Continue</button>
            </div>
       </div>
       </div>
  </>
   
  )
}
