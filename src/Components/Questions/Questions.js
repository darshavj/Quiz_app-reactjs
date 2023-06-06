import React from 'react'
import { useState } from "react";
import ErrorMessage from '../ErrorMessage';
import './Questions.css'
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';



const Questions = ({currentques,setCurrentques,questions,options,correct,setScore,score}) => {
    const [selected, setSelected] = useState();
    const [error, setError] = useState(false);

    const navigate=useNavigate();

    const handleSelect = (i) => {
        if (selected === i && selected === correct) return "select";
        else if (selected === i && selected !== correct) return "wrong";
        else if (i === correct) return "select";
      };

      const handleCheck = (i) => {
        setSelected(i);
        if (i === correct) setScore(score + 1);
        setError(false);
      };

      const handleNext = () => {
        if (currentques > 8) {
          navigate('/result')
        } else if (selected) {
          setCurrentques(currentques + 1);
          setSelected();
        } else setError("Please select an option first");
      };
    



      const handleQuit = () => {
        setCurrentques(0);
        
      };
    

  return (
    <div className='question'>
    <h1>Question{currentques + 1 } :</h1>
    
        <div className='singleques'>
            <h2>{questions[currentques].question}</h2>
                <div className='options'>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                    {options && options.map((i) =>(
                        
                        <button onClick={()=>handleCheck(i)} 
                    className={`singleOption ${selected && handleSelect(i)}`}
                key={i}
                disabled={selected}
                >{i}</button>) )}

                </div>
                <div className='controls'>
                <Button
                 variant="contained"
                color="secondary"
                size="large"
                style={{ width: 185 }}
                href="/"
                onClick={() => handleQuit()}>
                Quit
                </Button>
                <Button
                variant="contained"
                color="primary"
                size="large"
                style={{ width: 185 }}
                onClick={handleNext}>
                {currentques > 20 ? "Submit" : "Next"}

                </Button>

                </div>
            </div>
       </div>
  )
}

export default Questions
