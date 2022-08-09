import React, { useState, useRef} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import People from "../../assets/avatar1.svg";
import Arrow from "../../assets/arrow.svg";


import {
  H1,
  Container,
  InputLabel,
  Input,
  Div,
  Button,
  Image,
} from "./styles";


function  App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();
  const history = useHistory()
 
  
  async function addNewUser(){
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
       name: inputName.current.value,
       age: inputAge.current.value
      });
     
     setUsers([...users, newUser])

     history.push("/usuarios")
    }  
  
  return (
    <Container>
      <Image alt="avatar" src={People} />
      <Div>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" type="text" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" type="number" />

        <Button to="/usuarios" onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      </Div>
    </Container>
  );
}

export default App;
