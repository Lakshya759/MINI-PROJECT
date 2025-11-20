import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";
import axios from "axios";

const User = () => {
  const navigate=useNavigate()
  const [users, setUsers] = useState({});
  const fetchUser = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/users/user`, {
        withCredentials: true,
      });
      console.log("lakshya");

      if (!res.data) {
        console.log("User Not Found");
      } else {
        setUsers(res.data.data);
        console.log(users.skills);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUser();
  }, []);


  const toCamelCase = (str) =>
    str
      ?.toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");


  const logout = async () => {
    try {
      const res = await axios.post(`http://localhost:8000/api/v1/users/logout`,{}, {
        withCredentials: true,
      });
      console.log("lakshya");

      if (!res.data.success) {
        console.log("User Not Found");
      }
      else{
        navigate("/")
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="uq-main-wrapper">
      <div className="uq-container">
        <div className="uq-profile-card">
          <div className="uq-avatar">
            <span>{(users?.name || "").substring(0, 2).toUpperCase()}</span>
          </div>

          <h2 className="uq-name">{toCamelCase(users?.name)}</h2>
          <p className="uq-subtitle">Student Profile</p>

          <div className="uq-info-grid">
            <div className="uq-info-box">
              <div className="uq-icon uq-blue">👤</div>
              <p className="uq-label">Full Name</p>
              <p className="uq-value">{toCamelCase(users?.name)}</p>
            </div>

            <div className="uq-info-box">
              <div className="uq-icon uq-purple">🎓</div>
              <p className="uq-label">Branch</p>
              <p className="uq-value">{users?.branch}</p>
            </div>

            <div className="uq-info-box">
              <div className="uq-icon uq-pink">📅</div>
              <p className="uq-label">Year</p>
              <p className="uq-value">{`${users?.year} Year`}</p>
            </div>

            <div className="uq-info-box">
              <div className="uq-icon uq-orange">✉️</div>
              <p className="uq-label">Email</p>
              <p className="uq-value">{users?.email}</p>
            </div>
          </div>
        </div>

        <div className="uq-skills-card">
          <h3>Technical Skills</h3>

          <div className="uq-tags">
            {users?.skills?.map((skill) => (
              <span className="uq-tag">{skill}</span>
            ))}
            {/* <span className="uq-tag">JavaScript</span>
            <span className="uq-tag">React</span>
            <span className="uq-tag">Python</span>
            <span className="uq-tag">Node.js</span>
            <span className="uq-tag">TypeScript</span>
            <span className="uq-tag">SQL</span>
            <span className="uq-tag">Git</span>
            <span className="uq-tag">HTML/CSS</span>
            <span className="uq-tag">MongoDB</span>
            <span className="uq-tag">Express</span>
            <span className="uq-tag">REST APIs</span>
            <span className="uq-tag">Tailwind CSS</span> */}
          </div>
        </div>
        <button className="logout-btn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default User;
