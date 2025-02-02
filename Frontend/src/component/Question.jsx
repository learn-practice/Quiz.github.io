import React, { useContext, useState } from "react";
import { dataContext } from "../App";
import "../ProgressBar.css";

const Question = () => {
  const quiz = useContext(dataContext); // Access quiz data from context
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0); // Track the current question
  const [selectedOption, setSelectedOption] = useState(null); // Track selected option
  const [coins, setCoins] = useState(0); // Track coins earned
  const [showSolution, setShowSolution] = useState(false); // Show solution after selection
  const [showCorrectGif, setShowCorrectGif] = useState(false); // Show correct answer GIF
  const [showWrongGif, setShowWrongGif] = useState(false); // Show wrong answer popup

  if (!quiz || !quiz.questions) {
    return (
      <div className="loader-container">
        <div className="spinner"></div>
        <h2>Loading Questions...</h2>
      </div>
    );
  }

  const { questions } = quiz; // Destructure questions
  const currentQuestion = questions[currentQuestionIndex];

  // Handle option selection
  const handleOptionSelect = (option) => {
    setSelectedOption(option.id);
    setShowSolution(true);

    if (option.is_correct) {
      // Correct answer logic
      setCoins((prevCoins) => prevCoins + 1);
      setShowCorrectGif(true);
      setTimeout(() => setShowCorrectGif(false), 3000);
    } else {
      // Wrong answer logic
      setShowWrongGif(true);
      setTimeout(() => setShowWrongGif(false), 3000);
    }
  };

  // Move to the next question
  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setSelectedOption(null); // Reset selected option for the next question
      setShowSolution(false); // Hide solution for the next question
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Move to the previous question
  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setSelectedOption(null); // Reset selected option for the previous question
      setShowSolution(false); // Hide solution for the previous question
      setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
    }
  };

  const progress = ((currentQuestionIndex + 1) / questions.length) * 100; // Calculate progress

  return (
    <div className="question-container">
      {/* Correct Answer Popup */}
      {showCorrectGif && (
        <div className="popup-card correct">
          <img
            src="./coin.gif"
            alt="Correct Answer"
            className="popup-gif"
          />
          <p className="popup-message">Correct! You've earned a coin!</p>
        </div>
      )}

      {/* Wrong Answer Popup */}
      {showWrongGif && (
        <div className="popup-card wrong">
          <img
            src="./wrong.gif"
            alt="Wrong Answer"
            className="popup-gif"
          />
          <p className="popup-message">Wrong! Better luck next time!</p>
        </div>
      )}

      {/* Progress Bar */}
      <div className="progress-bar-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div
          className="coins-earned"
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "-10px",
          }}
        >
          <img
            src="./coin.png"
            alt="coin image"
            style={{ width: "30px", height: "auto" }}
          />
          Coins: {coins}
        </div>
      </div>

      {/* Question */}
      <h2 className="question-title">{`Q${currentQuestionIndex + 1}: ${
        currentQuestion.description
      }`}</h2>

      {/* Options */}
      <div className="options-container">
        {currentQuestion.options.map((option) => (
          <label key={option.id} className="option-label">
            <input
              type="radio"
              style={{ width: "20px", height: "20px" }}
              name={`question-${currentQuestionIndex}`}
              value={option.id}
              checked={selectedOption === option.id}
              onChange={() => handleOptionSelect(option)}
            />
            {option.description}
          </label>
        ))}
      </div>

      {/* Show Detailed Solution */}
      {showSolution && (
        <div className="solution">
          <h3>Solution:</h3>
          <p>{currentQuestion.detailed_solution}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="navigation-buttons">
        <button
          className="nav-button"
          onClick={handlePrevious}
          disabled={currentQuestionIndex === 0}
        >
          Previous
        </button>
        <button
          className="nav-button"
          onClick={handleNext}
          disabled={currentQuestionIndex === questions.length - 1}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
