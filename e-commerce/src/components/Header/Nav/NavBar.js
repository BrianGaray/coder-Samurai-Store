import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "../../../css/Nav.css";

function Nav() {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* <li>
          <Link to="/detail">Detail</Link>
        </li> */}
        <li>
          <Link to="category/action">Action</Link>
        </li>
        <li>
          <Link to="category/shooter">Shooter</Link>
        </li>
        <li>
          <Link to="category/fight">Fight</Link>
        </li>
      </ul>
      <Link to="/Cart">
        <CartWidget />
      </Link>
    </div>
  );
}

export default Nav;
