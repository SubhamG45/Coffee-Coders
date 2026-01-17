import {Link} from "react-router-dom";
import "./Navbar.css";


function Navbar(){
    return(
        <>
        <nav className="nav-brand">
        <div className="navbar">
          <ul className="nav-section">
            <li>
            <Link to="/Home" className="red">Home</Link>
            </li>
            <li>
              <Link to="/about" className="red">About</Link>
            </li>
            <li>
              <Link to = "/Contact" className="red">Contact</Link>
            </li>
            <li>

            <Link to="/login" className="red">Login</Link>
            </li>
            
        </ul>

        </div>
        
        
      </nav>
        </>
    )
}
export default Navbar;