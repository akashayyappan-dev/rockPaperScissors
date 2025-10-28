
import { useState } from 'react'
import RockPaperScissors from './components/RockPaperScissors'

const App = () => {
  const [userScore, setUserScore] = useState<number>(0);  
  const [computerScore, setComputerScore] = useState<number>(0);
  return (
    <>
      <RockPaperScissors userScore={userScore} setScore={setUserScore} computerScore={computerScore} setCompScore={setComputerScore}/>
    </>
  )
}

export default App