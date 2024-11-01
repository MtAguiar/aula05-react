import { styled } from "styled-components";

export const StyledButton = styled.button`
  width: 100px;
  height: 60px;

  &:hover {
    background-color: green;
  }
`;

export const RedButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: red;
  &:hover {
    background-color: blue;
  }
`;

export const BlueButton = styled.button`
  width: 100px;
  height: 60px;
  background-color: blue;
  &:hover {
    background-color: red;
  }
`;

export const Card = styled.div `
//Recebo a propierado, passo a props como parâmetro da função anônima. Faço um ternário para pegar true ou falso e mudar.
    background-color: ${(props) => (props.active? "yellow" : "blue" )};
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 20px;

`
