import styled from "styled-components";
export const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 270px;
  height: 44px;
  border-radius: 5px;
  color: white;
  background-color: black; /* Example background */
  padding: 10px 10px;
  border: none;
  cursor: pointer;
  &:hover{
  background-color: white;
  border: 1px solid black;
  color: black;
  transition: 0.3s background ease-in;
  }
`;