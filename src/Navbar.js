import './index.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Kaan Blog</h1>
      <div className="links">
        <a className="link" href="/">Home</a>
        <a className="link" href="/create">New Blog</a>
      </div>
    </nav>
  );
};

export default Navbar;
