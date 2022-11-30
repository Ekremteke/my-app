import logo from "./logo.svg";
import "./App.css";

function Greeting() {
  return <h1>Welcome to the My-App</h1>;
}
function Image() {
  return (
    <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"></img>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Greeting />
        <Image />
      </header>
    </div>
  );
}

export default App;
