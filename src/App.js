import React, { useState } from 'react'
import Header from './Components/Header/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Quiz from './Pages/Quiz/Quiz'
import Result from './Pages/Result/Result'
import axios from 'axios'


const App = () => {
  const[name,setName]=useState("");
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);

  const fetchQuestions= async(category='',difficulty='')=>{
    const{data}=await axios.get(`https://opentdb.com/api.php?amount=10${
      category && `&category=${category}`
    }${difficulty && `&difficulty=${difficulty}`}&type=multiple`
);
    console.log(data)
    setQuestions(data.results)

  }

  return (
    <BrowserRouter>
    <div className='app' style={{backgroundImage:"url(./yellow.png)",backgroundRepeat:'no-repeat',backgroundSize:'cover'}}> 
      <Header />
      <Routes>
      <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions}/>}></Route>

      <Route path='/Quiz' element={<Quiz name={name}
       questions={questions}
        score={score} setScore={setScore} 
        setQuestions={setQuestions}
      />}></Route>
      <Route path='/Result' element={<Result score={score} name={name}/>}></Route>

      </Routes>
    </div>
    </BrowserRouter>
    
  )
}

export default App
