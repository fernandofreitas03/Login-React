import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import PeopleTwo from "../../assets/avatar2.svg";
import Arrow from "../../assets/arrow.svg";
import Trash from "../../assets/trash.svg";

import {
  H1,
  Container,
  Div,
  Button,
  Image,
  User,
} from "./styles";


function  Users() {
  const [users, setUsers] = useState([]);
  const history = useHistory()

  useEffect(() => {
    
    async function fetchUsers(){
     const { data: newUsers } = await axios.get("http://localhost:3001/users");
    
     setUsers(newUsers)
    }
    
     fetchUsers()
 },[]);
  
  function goBack(){
    history.push("/")
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
        <H1>Usuários</H1>
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

        <Button onClick={goBack} >
        <img alt="seta" src={Arrow} /> Voltar
        </Button>
      </Div>
    </Container>
  );
}

export default Users;