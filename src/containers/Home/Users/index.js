import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import PeopleTwo from "../../assets/avatar2.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  H1,
  Container,
  InputLabel,
  Input,
  Div,
  Button,
  Image,
  User,
} from "./styles";


function  App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  useEffect(() => {
    
    async function fetchUsers(){
     const { data: newUsers } = await axios.get("http://localhost:3001/users");
    
     setUsers(newUsers)
    }
    
     fetchUsers()
 },[]);
  
  
  async function addNewUser(){
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
       name: inputName.current.value,
       age: inputAge.current.value
      });
     
     setUsers([...users, newUser])
    }  
  
  async function deleteUsers(userId) {
    await axios.delete(`http://localhost:3001/users/${userId}`)
    
    const newUsers =  users.filter((user) => user.id !== userId);
    setUsers(newUsers);
  }

  return (
    <Container>
      <Image alt="avatar" src={PeopleTwo} />
      <Div>
        <H1>Olá</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" type="text" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" type="number" />

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <User key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} alt='lata-lixo'/>
              </button>
            </User>
          ))}
        </ul>
      </Div>
    </Container>
  );
}

export default App;