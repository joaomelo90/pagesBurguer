import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import logo from "../../assets/burger (1) 1.svg";
import Lixo from "../../assets/lixo.svg";
import { useHistory } from 'react-router-dom';
import H1 from '../../components/Title';
import Button from '../../components/Button';
import { Container, Image,User } from "../users/styled";

function Users() {
const history = useHistory()
  const [users, setUsers] = useState([]);
  
useEffect(() => {
  async function fetchUsers(){

  const {data: newUsers}  = await Axios.get("http://localhost:3001/users")
  
  setUsers(newUsers);
  }
  fetchUsers()
}, [])


   async function deleteUser(userId) {
    
    await Axios.delete(`http://localhost:3001/users/${userId} `)

    const newUsers = users.filter(user => user.id !== userId);

    setUsers(newUsers);
  };

  function goBackPage (){
    history.push("/")
  }

  return (
    <Container>

      <Image alt='logo' src={logo} />

      <H1> Pedidos </H1>


      <ul>
        {users.map((user) => (

          <User key={user.id}>

            <p>{user.pedido}</p>

            <p className='name'>{user.nome}</p>

            <button onClick={() => deleteUser(user.id)}><img alt='lata-de-lixo' src={Lixo} /></button>

          </User>
        ))}

      </ul>


      <Button isBack={true} onClick={goBackPage} >Voltar</Button>

    </Container>
  );
}

export default Users;