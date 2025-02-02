import React, { useState } from 'react'
import Question from './Question';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
 const handleQuizQuestion =()=>{
    navigate("/question");
 }
  return (
    <div>
      <button
      className="btn btn-primary position-relative overflow-hidden px-5 py-3 fw-bold text-white rounded-pill border-0"
      style={{
        background: 'linear-gradient(90deg, #6a11cb 0%, #2575fc 100%)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={(e) => {
        e.target.style.transform = 'scale(1.1)';
        e.target.style.boxShadow = '0 10px 20px rgba(42, 55, 92, 0.3)';
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = 'none';
      }}
      onClick={handleQuizQuestion}
    >
      Start
    </button>
    
    </div>
  )
}

export default Button
