import Icon from "./CartWidget";
import { Link } from "react-router-dom";

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
      <Icon />
    </div>
  );
}

export default Nav;
