import "./index.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kaan Blog</h1>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/create">
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
