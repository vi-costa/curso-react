import logo from './logo.svg';
import './App.css';
import CarDetails from './components/CarDetails';

function App() {

  const myCars=[
    {name:"Fusca",km:10000,color:"Branca"},
    {name:"Palio",km:32000,color:"Cinza"},
    {name:"Uno",km:0,color:"Preto"},
  ]

  return (
    <div className="App">
      <h1>Exercício CSS e React</h1>
      <div className = "car-container">
        {myCars.map((car)=> (
          <CarDetails car={car}/>
        ) 
        )}
      </div>
    </div>
  );
}

export default App;
