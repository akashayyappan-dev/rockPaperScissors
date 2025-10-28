import React from 'react'
import './Buttons.css'
interface Props {
    name: string;
    handleClick?: (choice:string) => void;
}
const Buttons : React.FC<Props> = ({name,handleClick}) => {
  return (
    <button className='actionBtn' onClick={() => {handleClick && handleClick(name)}}>
        {name}
    </button>
  )
}

export default Buttons