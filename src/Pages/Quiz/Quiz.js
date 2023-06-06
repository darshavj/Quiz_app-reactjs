import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@mui/material'
import './Quiz.css';
import Questions from '../../Components/Questions/Questions';

const Quiz = ({name, score, questions, setQuestions, setScore }) => {

  const[options,setOptions]=useState();
  const[currentques,setCurrentques]=useState(0);


  useEffect(()=>{
    console.log(questions)

    setOptions(questions && handleShuffle([
      questions[currentques]?.correct_answer,
      ...questions[currentques]?.incorrect_answers,
    ])
    )
     
  },[currentques,questions]);

  console.log(questions)

  const handleShuffle=(options)=>{
    return options.sort(()=>Math.random()-0.5)

  }
  return (
    <div className="quiz">
    <span className="subtitle">Welcome, {name}</span>

    {questions ? (
      <>
        <div className="quizInfo">
          <span>{questions[currentques].category}</span>
          <span>
            Score : {score}
          </span>
        </div>
        <Questions
          currentques={currentques}
          setCurrentques={setCurrentques}
          questions={questions}
          options={options}
          correct={questions[currentques]?.correct_answer}
          score={score}
          setScore={setScore}
          
        />
      </>
    ) : (
      <CircularProgress
        style={{ margin: 100 }}
        color="inherit"
        size={150}
        thickness={1}
      />
    )}
  </div>
);
};



export default Quiz
