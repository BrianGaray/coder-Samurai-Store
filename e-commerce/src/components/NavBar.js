import Icon from "./CartWidget";

function Nav() {
  return (
    <div class="navbar">
      <ul>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Login</a>
        </li>
      </ul>
      <Icon />
    </div>
  );
}

export default Nav;
