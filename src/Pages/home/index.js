import React, { useState, useRef } from 'react';
import Axios from 'axios';
import logo from "../../assets/burger 1.svg";
import { useHistory } from 'react-router-dom';
import H1 from '../../components/Title';
import Button from '../../components/Button';
import { Container, Image, ContainerItens, Label, Input} from './styled';

function App() {
  const history = useHistory();
  const [users, setUsers] = useState([]);
  const inputNome = useRef();
  const inputPedido = useRef();

  async function addNewPedido() {

    const {data: newUser} = await Axios.post("http://localhost:3001/users", 
    
    { nome: inputNome.current.value, pedido: inputPedido.current.value });

  setUsers([...users, newUser]); 

  history.push("/pedidos");
};


  return (
    <Container>

      <Image alt='logo' src={logo} />

      <H1> Faça seu pedido!</H1>

      <ContainerItens>

        <Label>Pedido </Label>

        <Input ref={inputPedido} placeholder='pedido' />

        <Label>Nome do Cliente</Label>

        <Input ref={inputNome} placeholder='nome' />

      </ContainerItens>

      <Button onClick={addNewPedido}>Novo Pedido</Button>

    </Container>
  );
}

export default App