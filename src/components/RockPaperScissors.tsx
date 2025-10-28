import React, { useState } from 'react'
import './RockPaperScissors.css'
import Buttons from './Buttons'
interface Props {
  userScore?: number;
  setScore?: React.Dispatch<React.SetStateAction<number>>;
  computerScore?: number;
  setCompScore?: React.Dispatch<React.SetStateAction<number>>;
}
const RockPaperScissors : React.FC<Props> = ({userScore,setScore,computerScore,setCompScore}) => {
    const [userChoice, setUserChoice] = useState<string>('');
    const [computerChoice, setComputerChoice] = useState<string>('');
    function handleClick(choice:string){
        setUserChoice(choice);
        const choices = ['Rock','Paper','Scissors'];
        const compChoice = choices[Math.floor(Math.random()*3)];
        setComputerChoice(compChoice);
        if(choice === compChoice){
            return;
        }
        else if((choice === 'Rock' && compChoice === 'Scissors') || (choice === 'Paper' && compChoice === 'Rock') || (choice === 'Scissors' && compChoice === 'Paper')){
            if(setScore) setScore(prev => prev + 1);
        }
        else{
            if(setCompScore) setCompScore(prev => prev + 1);
        }
    }
    return (
    <div className='main'>
        <h1>Welcome to the Game</h1>
        <div className="btnBlock">
            {new Array('Rock','Paper','Scissors').map((item,i)=><Buttons key={i} name={item} handleClick={handleClick}/>)}
        </div>
        <div className="choosenBlock">
            <p>You chose : {userChoice}</p>
            <p>Computer chose :{computerChoice}</p>
        </div>
        <div className="scoreBlock">
            <p>Your Score {userScore} </p>
            <p>Computer Score {computerScore}</p>
        </div>
    </div>
  )
}

export default RockPaperScissors