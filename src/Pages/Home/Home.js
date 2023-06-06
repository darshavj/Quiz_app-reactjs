import React, {useState } from 'react'
import './Home.css'
import{ Button, MenuItem, TextField} from '@mui/material'
import Categories from '../../Data/Category'
import {useNavigate}from 'react-router'
import ErrorMessage from '../../Components/ErrorMessage'

const Home = ({name,setName,fetchQuestions}) => {

  const[category,setcategory]=useState('')
  const[difficulty,setDifficulty]=useState('')
  const[error,seterror]=useState(false)

 const navigate=useNavigate();

  const handleSubmit=()=>{
    if(!category||!difficulty||!name){
      seterror(true)
      return;
    }
    else{
      seterror(false)
      fetchQuestions(category,difficulty)
      navigate('/quiz')
    }
  }

  


  return (
    <div className='content'>
        <div className='setting'>
            <span style={{fontSize:30}}>Quiz Settings</span>
                <div className='setting_select' >
                {error && <ErrorMessage>Please Fill All The Feilds. </ErrorMessage>}

                <TextField  style={{marginBottom:"25px",}} 
                 label='Enter Your Name '
                  variant='outlined'
                  onChange={(e)=>setName(e.target.value)}/>

                <TextField select label="select category" 
                variant='outlined'
                 style={{marginBottom:"30px"}}
                 onChange={(e)=>setcategory(e.target.value)}
                 value={category}>


                {Categories.map((cat)=>(
                <MenuItem key={cat.category} value={cat.value}>
                {cat.category}
                </MenuItem>
                ))}
                </TextField>
                <TextField
            select
            label="Select Difficulty"
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
            variant="outlined"
            style={{ marginBottom: 30 }}
          >
            <MenuItem key="Easy" value="easy">
              Easy
            </MenuItem>
            <MenuItem key="Medium" value="medium">
              Medium
            </MenuItem>
            <MenuItem key="Hard" value="hard">
              Hard
            </MenuItem>
          </TextField>
          <Button
          
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
          >
            Start Quiz
          </Button>

          </div>
        </div>

    </div>
  )
}

export default Home