// import logo from "./logo.svg";
import "./App.css";

function Greeting() {
  return <h1>Welcome to the My-App</h1>;
}
function Image() {
  return (
    <img
      src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png"
      alt="pokemon"
    ></img>
  );
}
function Logo() {
  return (
    <header>
      <Greeting />
      <Image />
    </header>
  );
}
function BestPokemon() {
  return <p>My favorite Pokemon is Squirtle</p>;
}

function App() {
  return (
    <div className="App">
      <Logo />
      <BestPokemon />
    </div>
  );
}

export default App;
