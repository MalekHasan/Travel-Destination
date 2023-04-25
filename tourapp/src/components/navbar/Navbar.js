import { Link } from "react-router-dom";
import './Navbar.css'
function Navbar () {

return (
    <> 
    <div className="navbar">
        <div className="container">
            <Link to='/' className="logo">
                <i class="fas fa-plane fa-2x"></i>
                <h1 >Travelo</h1>
            </Link>
            <ul className="links">
                <li> 
                    <Link to='/' className="nav-link">Home</Link>
                </li>
            </ul>

        </div>
    </div>
    </>
)
}
    export default Navbar;