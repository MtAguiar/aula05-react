import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import {BlueButton, Card, RedButton, StyledButton} from './Button.style.jsx';

export default function Cliente() {
  const {id} = useParams(); 
  const [active, setActive] = useState(true);
    return (
    <div>
      <h1> Página do Cliente com id:{id} </h1>
      <StyledButton onClick={() => alerta ("Clique")}> Clique Aqui </StyledButton>
      <RedButton onClick={() => alerta ("Clique")}> Clique Aqui </RedButton>
      <BlueButton onClick={() => alerta ("Clique")}> Clique Aqui </BlueButton>
      <Card active ={active}>
        <h1> Título do Card</h1>
        <p> Descrição do Card </p> 

        </Card>
    </div>
  )
}
