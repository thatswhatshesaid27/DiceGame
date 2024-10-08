import React, { useState } from 'react';
import styled from 'styled-components';

const ararNum = [1, 2, 3, 4, 5, 6];

const NumberSelector = ({err, selectedNumber, setSelectedNumber}) => {
 

  return (
    <NumberSelectorContainer>
       <p>{err}</p>
        <div className='flex'>
       
      {ararNum.map((value, idx) => (
        <Box
          isSelected={value === selectedNumber} // Comparison should use '==='
          key={idx}
          onClick={() => setSelectedNumber(value)}
        >
          {value}
        </Box>
      ))}
      </div>
      <p> Select Number </p>
    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const  NumberSelectorContainer= styled.div `
.flex {
display: flex;
gap: 24px;
}
p{
font-size: 24px;
font-weight: 74px;
}`

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelected ? 'black' : 'white')};
  color: ${(props) => (props.isSelected ? 'white' : 'black')};
  cursor: pointer;
  margin: 5px;
`;
