import logo from './logo.svg';
import { React, useState } from 'react';
import './App.css';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';
import UserDetails from './components/UserDetails';


function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarela", newCar: true, km: 0 },
    { id: 2, brand: "KIA", color: "Branco", newCar: false, km: 20000 },
    { id: 3, brand: "Renault", color: "Azul", newCar: false, km: 30000 }
  ]
  
  const users = [
    { id: 1, nome: "Vitor", idade: "19", profissao: "estagiário front-end" },
    { id: 2, nome: "Lucas", idade: "15,", profissao: "full-stack dev" },
    { id: 3, nome: "Felipe", idade: "18", profissao: "back-end dev" }
  ]

  function showMessage() {
    console.log("1111111")
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <ConditionalRender />
      {/*if else */}

      <ShowUserName name="Vitor" />
      {/*props */}
      <CarDetails brand="VW" km={10000} color="Azul" newCar={true} />
      {/*destructuring*/}


      <CarDetails brand="Ford" color="Vermelho" km={0} newCar={true} />
      <CarDetails brand="Chevrolet" color="Branco" km={30000} newCar={false} />
      {/*reaproveitando componentes*/}


      <h1>Loop em array com map()</h1>
      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km} newCar={car.newCar} />
      ))}
      {/*loop em array de objetos*/}

      <Fragment />
      {/* fragment */}

      <Container>
        <p>Este é o conteúdo! </p>
      </Container>
      <Container>
        <p>Siiiii! </p>
      </Container>
      {/* children */}

      <ExecuteFunction myFunction={showMessage} />
      {/*executar função */}

      <Message msg={message} />
      <ChangeMessageState handleMessage={handleMessage} />
      {/*state lift */}

      {/*exercício 04*/}
      {users.map((user) => (
        <UserDetails key={user.id}nome = {user.nome} idade={user.idade} profissao={user.profissao}/>
      ))
      }
    </div>
  );
}

export default App;
