import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import CondicionalRender from './components/CondicionalRender';
import CarDetails from './components/CarDetails';
import Fragment from './components/Fragment';
import ShowUserName from './components/ShowUserName';
import Children from './components/Children';
import Message from './components/Message';
import ChangeMessageState from './components/ChangeMessageState';


import './App.css';
import Paisagem from './assets/fotografias-de-paisagens-1661176157.jpeg';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';


function App() {
  const name = "Joaquim";
  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar:true, km:0},
    {id: 2, brand: "KIA", color: "Preto", newCar:true, km:10},
    {id: 3, brand: "Renault", color: "Cinza", newCar:true, km:20},
    {id: 4, brand: "Ford", color: "Azul", newCar:true, km:30},
    {id: 5, brand: "Volkswagen", color: "Branco", newCar:true, km:40}
  ]

  function showMessage() {
    console.log("Evento do componente pai")
  }

  const [message,setMessage] = useState("Opa");

  const handleMessage = (msg) => {
    setMessage(msg);
  };

  return (
    <div className="App">
      <h1> Avançado em React</h1>
      <img src="/logo192.png" alt="logo" />
      <img src={Paisagem} alt="paisagem" className="image" />
      <ManageData/>
      <ListRender/>
      <CondicionalRender/>
      <ShowUserName name={name}/>
      <CarDetails brand="VW" km={10000} color="Azul" newCar={false}/>
      <CarDetails brand="Ford" km={10000} color="Preto" newCar={true}/>
      <CarDetails brand="Fiat" km={10000} color="Amarelo" newCar={false}/>
      <CarDetails brand="Renaut" km={10000} color="Vermelho" newCar={false}/>
      {/*Loop com var cars*/}
      {cars.map((car) => (
        <CarDetails
        key={car.id}
         brand={car.brand} 
         color={car.color} 
         km={car.km}
          newCar={car.newCar}
          />
          ))}
      <Fragment PropFragment="teste"/>
      <Children myValue="testing">
        <p>Este é outro componente filho</p>
      </Children>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>
    </div>
  );
}

export default App;
