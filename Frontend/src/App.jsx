import React, { createContext, useEffect, useState } from "react";
import Landing from "./component/Landing";
import QuizTopic from "./component/QuizTopic";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Question from "./component/Question";
export const dataContext = createContext();
const App = () => {
  const [data, setData] = useState(null);
  const [landing, setLanding] = useState(false);
  // Function to fetch data from API
  const datafetch = async () => {
    try {
      const response = await fetch("http://localhost:5000/proxy");
      const result = await response.json();
      setData(result); // Store the parsed JSON data
      // console.log("Fetched data:", result);   for testing purpose

      // Extract title and log questions
      // const { title, questions ,topic} = result;
      // console.log("Title of quiz:", title);
      // console.log(topic);

      // questions.forEach((question) => {
      //   console.log("Question description:", question.description);
      // });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    setTimeout(() => {
      setLanding(true);
    }, 3000);
    datafetch();
  }, []);

  return (
    <dataContext.Provider value={data}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={landing ? <QuizTopic /> : <Landing />} />
          <Route path="/question" element={<Question />} />
        </Routes>
      </BrowserRouter>
    </dataContext.Provider>
  );
};

export default App;
