import React, { useContext } from 'react';
import { dataContext } from '../App';
import Button from './Button';
import '../ProgressBar.css';
const QuizTopic = () => {
  const quiz = useContext(dataContext);

  // Check if quiz data is still loading
  if (!quiz) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <h2>Loading Quiz info...</h2>
      </div>
    );
  }

  return (
    <div className='container'>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="row align-items-center w-100">
       
        <div className="col-md-6 mb-4 text-center text-md-start">
          <h1 className="display-4 fw-bold " style={{color:'blueviolet'}}>{quiz.title}</h1>
          <p className="lead text-secondary fs-3">{quiz.topic}</p>
          <p className="text-muted">
            Explore the world of {quiz.topic} with this engaging and interactive quiz!
          </p>
          <Button/>
        </div>
       
        <div className="col-md-6 text-center">
          <img
            src="/DNA.gif"
            alt="DNA Animation"
            className="img-fluid"
            style={{ maxWidth: '500px', height: 'auto' }}
          />
        </div>
      </div>
    </div>
    </div>
  );
};

export default QuizTopic;
