import styled from 'styled-components';
import { Button } from '../styled/Button';
const StartGame = ({toggle}) => {
  return (
    <Container>
      <img src='/images/dices.png' alt="dices"/>
      <div>
        <h1>Dice game</h1>
        <Button onClick={toggle}>Play</Button>
      </div>
    </Container>
  );
}

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
`;


