import React, { useState } from 'react'
import styled from 'styled-components'
const RoleDice = ({currentDice, rolling}) => {
  
  
 

  
  return (
    <DiceContainer>
    <div className='dice' onClick={rolling}>
        
        <img src={`/images/dice/dice_${currentDice}.png`}></img>
        
        </div>
        <p> Roll it</p>
        </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
margin-top: 48px;
display: flex;
flex-direction: column;
align-items: center;
p{
font-size: 24px;
}

dice{
cursor: pointer;
}
`