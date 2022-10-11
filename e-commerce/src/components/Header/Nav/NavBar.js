import CartWidget from "./cart/CartWidget";
import { Link } from "react-router-dom";
import "../../../css/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <div className="logo-nav">
        <button>
          <Link to="/">Samurai store</Link>
        </button>
      </div>
      <ul>
        <li>
          <button>
            <Link to="category/action">Action</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to="category/shots">Shots</Link>
          </button>
        </li>
        <li>
          <button>
            {" "}
            <Link to="category/fight">Fight</Link>
          </button>
        </li>
        <li>
          <Link to="/Cart">
            <CartWidget />
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
