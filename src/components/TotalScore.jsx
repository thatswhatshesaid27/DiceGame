import React from 'react';
import styled from 'styled-components';

const TotalScore = ({score}) => {
  return (
    <ScoreContainter>
      <h1>{score}</h1>
      <p>Total Score</p>
    </ScoreContainter>
  );
}

export default TotalScore;

const ScoreContainter = styled.div`
  max-width: 200px;
  text-align: center;
  h1 {
    font-size: 100px;
  }
  
  p {
    font-size: 24px;
    font-weight: 500; /* Removed 'px', it's just a number */
  }
`;
