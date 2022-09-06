import "./App.css";
import Nav from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from './components/ItemDetailContainer'
function App() {
  return (
    <div class="container">
      <Nav />
      <ItemListContainer />
      <ItemDetailContainer />
    </div>
  );
}

export default App;
