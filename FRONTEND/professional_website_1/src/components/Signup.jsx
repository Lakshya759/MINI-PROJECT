import "./Signup.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    year: "",
    skills: [],
  });

  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const skillOptions = [
  "C", "C++", "Java", "Python", "JavaScript", "HTML", "CSS",
  "React", "Node.js", "Express", "MongoDB", "SQL", "Git", "DSA"
];

  //used to handle the change in the input -----------------------------------------------------------------------------------------
  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  //-------------------------------------------------------------------------------------------------------------------------------

  //onSubmit handles the what happen when the submit button in pressed--------------------------------------------------------------
  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/users/signup",
        formData
      );
      if (res.data.success) {
        console.log(res.data.message);
        console.log(formData);
        
        setFormData({
        name: "",
        email: "",
        password: "",
        branch: "",
        year: "",
        skills:[]
      });
        setMessage(res.data.message);
      }

      
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message);
      } else {
        setError("Something went wrong!");
      }
    }
    setLoading(false);
  };
  //----------------------------------------------------------------------------------------------------------------------------
  const toggleTag = (tag) => {
  setFormData((prev) => {
    const exists = prev.skills.includes(tag);
    return {
      ...prev,
      skills: exists
        ? prev.skills.filter((t) => t !== tag)
        : [...prev.skills, tag]
    };
  });
};


  return (
    <div className="containers">
      {/* Blurred background blobs */}
      <div className="bg-blur purple"></div>
      <div className="bg-blur blue"></div>
      <div className="bg-blur pink"></div>

      <div className="register-card">
        <div className="login-icon">
          <img src="/scholar.png" alt="" />
        </div>

        <h2>Student Registration</h2>
        <p className="subtitle">Create your account to get started</p>

        <form onSubmit={onSubmit}>
          <label>Full Name</label>
          <div className="input-box">
            <i className="fas fa-user"></i>
            <input
              type="text"
              placeholder="John Doe"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <label>Email</label>
          <div className="input-box">
            <i className="fas fa-envelope"></i>
            <input
              type="email"
              placeholder="rollno.@ietlucknow.ac.in"
              required
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <label>Password</label>
          <div className="input-box">
            <i className="fas fa-lock"></i>
            <input
              type="password"
              id="password"
              placeholder="••••••••"
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <i className="fas fa-eye" id="togglePassword"></i>
          </div>

          <label>Branch</label>
          <div className="input-box select-box">
            <i className="fas fa-building"></i>
            <select
              name="branch"
              required
              value={formData.branch}
              onChange={handleChange}
            >
              <option>Select your branch</option>
              <option>CSE(R)</option>
              <option>CSE(AI)</option>
              <option>CSE(SF)</option>
              <option>ECE</option>
              <option>EE</option>
              <option>ME</option>
              <option>CE</option>
              <option>CHE</option>
            </select>
            <i className="fas fa-chevron-down arrow"></i>
          </div>

          <label>Year</label>
          <div className="input-box select-box">
            <i className="fas fa-calendar"></i>
            <select
              name="year"
              required
              value={formData.year}
              onChange={handleChange}
            >
              <option value="">Select your year</option>
              <option value={1}>1st Year</option>
              <option value={2}>2nd Year</option>
              <option value={3}>3rd Year</option>
              <option value={4}>4th Year</option>
            </select>
            <i className="fas fa-chevron-down arrow"></i>
          </div>
          <label>Skills</label>
          <div className="skills-container">
            {skillOptions.map((skill, index) => (
              <span
                key={index}
                className={`skill-tag ${
                  formData.skills.includes(skill) ? "selected" : ""
                }`}
                onClick={() => toggleTag(skill)}
              >
                {skill}
              </span>
            ))}
          </div>

          <button className="btn" type="submit" disabled={loading}>
            {loading ? (
              <span className="animate-pulse">Loading...</span>
            ) : (
              "Signup"
            )}
            <i className="fas fa-arrow-right"></i>
          </button>

          <p className="signup-text">
            Already have an account? <Link to="/login">Sign In</Link>
          </p>
        </form>

        <h1 className="text-center">{message}</h1>
        <h1 className="text-center">{error}</h1>
      </div>
    </div>
  );
};

export default Signup;
