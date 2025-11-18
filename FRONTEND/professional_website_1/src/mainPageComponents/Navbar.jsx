import "./Navbar.css"


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="logo">
          <i className="ri-question-answer-fill"></i>
        </div>
        <div className="brand">
          <h2>College Q&A</h2>
          <p>Student Learning Community</p>
        </div>
      </div>

      <div className="navbar-middle">
        <input
          type="text"
          className="search-bar"
          placeholder="Search questions, topics, or tags..."
        />
      </div>

      <div className="navbar-right">
        <button className="ask-btn">
          <i className="ri-image-add-line"></i> Ask Question
        </button>

        <i className="ri-notification-3-line notif-icon"></i>

        <div className="user-icon">CU</div>
      </div>
    </nav>
  )
}

export default Navbar