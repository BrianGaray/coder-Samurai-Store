import "./App.css";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div class="container">
      <Nav />
      <ItemListContainer saludo="Bienvenidos a Zubat" />
    </div>
  );
}

export default App;
