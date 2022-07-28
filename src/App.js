import React, { useState, useRef } from "react";
import axios from "axios";
import People from "./assets/avatar1.svg";
import Arrow from "./assets/arrow.svg";
import Trash from "./assets/trash.svg";

import {
  H1,
  Container,
  InputLabel,
  Input,
  Div,
  Button,
  Image,
  Users,
} from "./styles";

function App() {
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewUser() {
    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });
    console.log(newUser);

    setUsers([...users, newUser]);
  }

  function deleteUsers(userId) {
    const newUsers = users.filter((user) => user.id !== userId);
    setUsers(newUsers);
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

        <Button onClick={addNewUser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>

        <ul>
          {users.map((user) => (
            <Users key={user.id}>
              <p>{user.name}</p> <p>{user.age}</p>
              <button onClick={() => deleteUsers(user.id)}>
                <img src={Trash} />
              </button>
            </Users>
          ))}
        </ul>
      </Div>
    </Container>
  );
}

export default App;
