import "./Navbar.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        
        <div className="brand">
          CampusQuery
        </div>
      </div>

      <div className="navbar-middle">
        
      </div>

      <div className="navbar-right">
        <button className="ask-btn">
           <Link to="/askQuestion">Ask Question</Link>
        </button>

        <i className="ri-notification-3-line notif-icon"></i>

        <div className="user-icon">CU</div>
      </div>
    </nav>
  )
}

export default Navbar