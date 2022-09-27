import "./css/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";

/*import { collection, addDoc } from "firebase/firestore";
import { dataBase } from "./firebaseConfig"
import  Products  from "./components/Mock/products"

const ref = collection(dataBase, "Products") 
Products.map((Products)=> addDoc(ref, Products))*/

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
