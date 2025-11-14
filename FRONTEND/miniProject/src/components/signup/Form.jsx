import axios from "axios";
import "./form.css";
import { useState } from "react";
const Form = () => {
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    branch: "",
    year: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    console.log(e.target.name);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

        setMessage(res.data.message);
      }else {
        setError(res.data.message);
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

  return (
    <>
      <div className="flex justify-center items-center border-2 h-screen">
        <div className="border-2">
          <h1 className="text-center">SignUp</h1>
          <form onSubmit={onSubmit}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border rounded-lg"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border rounded-lg"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border rounded-lg"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              name="branch"
              type="text"
              placeholder="Branch"
              className="w-full p-3 mb-4 border rounded-lg"
              required
              value={formData.branch}
              onChange={handleChange}
            />
            <input
              name="year"
              type="number"
              min="1"
              max="4"
              placeholder="Year"
              className="w-full p-3 mb-4 border rounded-lg"
              required
              value={formData.year}
              onChange={handleChange}
            />
            <button
              type="submit"
              disabled={loading}
              className={`w-full p-3 rounded-lg text-white 
                 ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500"}
                    `}
            >
                {loading ? <span className="animate-pulse">Loading...</span> : "Signup"}
              Login
            </button>
          </form>
          <h1 className="text-center">{message}</h1>
          <h1 className="text-center">{error}</h1>
        </div>
      </div>
    </>
  );
};
export default Form;
