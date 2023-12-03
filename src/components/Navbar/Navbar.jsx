import { Link } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  return (
    <header>
      <nav className="navbar">
      <Link to={"/"} className="navbar-brand" href="#">&lt;Obito /&gt;</Link>
      <div className="">
        <div className="nav-links close">
          <Link to={"/"} className="nav-link">Home</Link>
          <Link to={"/projects"} className="nav-link" >My Projects</Link>
        </div>
      </div>
    </nav>
    </header>
  )
}

export default Navbar