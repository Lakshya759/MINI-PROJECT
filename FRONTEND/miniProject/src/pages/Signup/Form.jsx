import axios from "axios";
import "./Form.css";
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

        setMessage(res.data.message);
      }

      setFormData({
        name: "",
        email: "",
        password: "",
        branch:"",
        year:""
      });
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

  return (
    <>
      <div className="flex justify-center items-center h-screen ">
        <div className=" w-3/4 bg-[url('https://i.pinimg.com/736x/be/55/aa/be55aa17fc66af8806d7b3f5a2a13a95.jpg')]  h-screen bg-center flex flex-col justify-center gap-15 items-center text-amber-50 text-3xl ">
          <h1>LEARN</h1>
          <h1>TOGETHER,</h1>
          <h1>GROW</h1>
          <h1>TOGETHER</h1>
        </div>
        <div className=" w-1/2 h-full  shadow-amber-50 flex justify-between items-center flex-col   bg-gray-400 ">
          <h1 className="text-center text-2xl font-bold  p-5">SignUp</h1>
          <form onSubmit={onSubmit} className="w-full h-150 flex flex-col justify-between bg-none ">
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              className="w-full p-3 mb-4 border "
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
              className="w-full p-3 mb-4 border "
              required
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-4 border "
              required
              value={formData.password}
              onChange={handleChange}
            />
            <input
              name="branch"
              type="text"
              placeholder="Branch"
              className="w-full p-3 mb-4 border "
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
              className="w-full p-3 mb-4 border "
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
